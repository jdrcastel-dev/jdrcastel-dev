import { useEffect, useRef, useState, type CSSProperties, type ComponentType } from "react";
import { Archive, Database, FileSpreadsheet, KeyRound, Monitor, Server, Sparkles, Ticket } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Content } from "@/i18n";

type Diagrams = Content["projects"]["diagrams"];
export type DiagramId = keyof Diagrams;
type NodeSpec = { id: string; icon: ComponentType };
type Spec = { columns: NodeSpec[][]; edges: [from: string, to: string, delay: number][] };

// Columns run left to right; a column with several nodes stacks them as rows (icon + label)
const specs: Record<DiagramId, Spec> = {
  kasshy: {
    columns: [
      [{ id: "bank", icon: FileSpreadsheet }],
      [{ id: "web", icon: Monitor }],
      [{ id: "api", icon: Server }],
      [{ id: "db", icon: Database }],
    ],
    edges: [
      ["bank", "web", 0],
      ["web", "api", 0.6],
      ["api", "db", 1.2],
    ],
  },
  fragments: {
    columns: [
      [{ id: "ui", icon: Monitor }],
      [{ id: "api", icon: Server }],
      [
        { id: "auth", icon: KeyRound },
        { id: "data", icon: Archive },
        { id: "meta", icon: Database },
      ],
    ],
    edges: [
      ["ui", "api", 0],
      ["api", "auth", 0.9],
      ["api", "data", 1],
      ["api", "meta", 1.1],
    ],
  },
  incidenthub: {
    columns: [
      [{ id: "ticket", icon: Ticket }],
      [{ id: "api", icon: Server }],
      [
        { id: "db", icon: Database },
        { id: "llm", icon: Sparkles },
      ],
    ],
    edges: [
      ["ticket", "api", 0],
      ["api", "db", 0.9],
      ["api", "llm", 1.1],
    ],
  },
};

/**
 * A project's architecture with light pulses traveling along each connection.
 * The path math is adapted from Magic UI's AnimatedBeam (MIT); the pulse is a CSS animation (.beam-pulse).
 */
export default function ArchitectureDiagram({ id, labels }: { id: DiagramId; labels: Diagrams[DiagramId] }) {
  const spec = specs[id];
  const captions: Record<string, string | undefined> = labels.captions;
  const names: Record<string, string> = labels.nodes;
  const box = useRef<HTMLElement>(null);
  const nodes = useRef(new Map<string, HTMLSpanElement>());
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [paths, setPaths] = useState<{ d: string; delay: number }[]>([]);
  // Pulses repaint every frame, so they only run while the diagram is on screen
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    const update = () => {
      const c = box.current?.getBoundingClientRect();
      if (!c) return;
      setSize({ w: c.width, h: c.height });
      setPaths(
        spec.edges.flatMap(([from, to, delay]) => {
          const a = nodes.current.get(from)?.getBoundingClientRect();
          const b = nodes.current.get(to)?.getBoundingClientRect();
          if (!a || !b) return [];
          // From the right side of one node to the left side of the next, as a smooth S-curve
          const [x1, y1] = [a.right - c.left, a.top + a.height / 2 - c.top];
          const [x2, y2] = [b.left - c.left, b.top + b.height / 2 - c.top];
          const mx = (x1 + x2) / 2;
          return [{ d: `M ${x1},${y1} C ${mx},${y1} ${mx},${y2} ${x2},${y2}`, delay }];
        }),
      );
    };
    const resize = new ResizeObserver(update);
    const visibility = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    if (box.current) {
      resize.observe(box.current);
      visibility.observe(box.current);
    }
    update();
    return () => {
      resize.disconnect();
      visibility.disconnect();
    };
  }, [spec]);

  return (
    <figure
      ref={box}
      role="img"
      aria-label={labels.alt}
      data-active={onScreen || undefined}
      className="relative flex items-center justify-between gap-3 rounded-lg border bg-muted/40 px-4 py-4"
    >
      <svg className="pointer-events-none absolute inset-0" width={size.w} height={size.h} aria-hidden="true">
        {paths.map(({ d, delay }) => (
          <g key={d}>
            <path className="beam-path" d={d} pathLength={100} />
            <path className="beam-pulse" d={d} pathLength={100} style={{ "--delay": `${delay}s` } as CSSProperties} />
          </g>
        ))}
      </svg>
      {spec.columns.map((column) => {
        const row = column.length > 1;
        return (
          <div key={column[0].id} className={row ? "flex flex-col gap-2.5" : undefined}>
            {column.map(({ id: nodeId, icon: Icon }) => (
              <div key={nodeId} className={row ? "flex items-center gap-2" : "flex max-w-20 flex-col items-center gap-1.5"}>
                <span
                  ref={(el) => {
                    if (el) nodes.current.set(nodeId, el);
                  }}
                  className="relative grid size-9 shrink-0 place-items-center rounded-lg border bg-card text-foreground shadow-xs [&_svg]:size-4"
                >
                  <Icon />
                </span>
                <span className={cn("text-[11px] leading-tight font-medium", !row && "text-center")}>
                  {names[nodeId]}
                  {captions[nodeId] && (
                    <span className="block font-mono text-[10px] font-normal text-muted-foreground">{captions[nodeId]}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        );
      })}
    </figure>
  );
}
