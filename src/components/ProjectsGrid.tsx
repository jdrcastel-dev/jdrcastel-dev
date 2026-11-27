import { useState } from "react";
import { AnimatePresence, LazyMotion, MotionConfig } from "motion/react";
import * as m from "motion/react-m";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Content } from "@/i18n";
import type { ProjectMeta } from "@/i18n/shared";
import ArchitectureDiagram, { type DiagramId } from "./ArchitectureDiagram";

type ProjectsContent = Content["projects"];
export type Labels = Pick<
  ProjectsContent,
  "title" | "filters" | "stackLabel" | "whatTitle" | "howTitle" | "links" | "diagrams"
>;
type Filter = keyof Labels["filters"];
export type Project = ProjectsContent["items"][number] & ProjectMeta;

// Motion's layout features download after the first render
const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);
const ease = [0.2, 0.7, 0.2, 1] as const;

const SubTitle = ({ children }: { children: string }) => (
  <h4 className="mb-2 text-xs font-medium tracking-wide text-brand uppercase">{children}</h4>
);

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
      {items.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  );
}

function ProjectCard({ p, labels }: { p: Project; labels: Labels }) {
  const diagramId = p.id in labels.diagrams ? (p.id as DiagramId) : undefined;
  const diagram = diagramId && <ArchitectureDiagram id={diagramId} labels={labels.diagrams[diagramId]} />;

  return (
    <Card className={cn("lift spotlight relative h-full", p.featured && "border-brand/40")}>
      {p.featured && <span className="beam" aria-hidden="true" />}
      <CardHeader>
        <h3 className="text-lg leading-snug font-semibold">{p.title}</h3>
        <p className="text-sm text-pretty text-muted-foreground">{p.summary}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        {p.featured ? (
          // The featured project shows what it does and how it works side by side on wide screens
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <SubTitle>{labels.whatTitle}</SubTitle>
              <Bullets items={p.bullets} />
            </div>
            {diagram && (
              <div>
                <SubTitle>{labels.howTitle}</SubTitle>
                {diagram}
              </div>
            )}
          </div>
        ) : (
          <>
            {diagram}
            <Bullets items={p.bullets} />
          </>
        )}
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-1" aria-label={labels.stackLabel}>
          {p.stack.map((s) => (
            <li key={s.name}>
              <Badge variant="outline" className="font-mono font-normal">
                {s.name}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
      {p.links.length > 0 && (
        <CardFooter className="flex flex-wrap gap-4">
          {p.links.map((l) => (
            <Button key={l.key} variant="link" size="sm" className="h-auto px-0" asChild>
              <a href={l.href} target="_blank" rel="noopener">
                {labels.links[l.key]}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}

export default function ProjectsGrid({ projects, labels }: { projects: Project[]; labels: Labels }) {
  const [filter, setFilter] = useState<Filter>("all");
  // "All" shows everything; web extensions also have their own filter
  const visible = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "extensions") return p.group === "extension";
    return !p.group && p.tags.some((tag) => tag === filter);
  });

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadFeatures} strict>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label={labels.title}>
            {(Object.keys(labels.filters) as Filter[]).map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "relative isolate rounded-full",
                    active &&
                      "border-transparent bg-transparent text-primary-foreground shadow-none hover:bg-transparent hover:text-primary-foreground dark:border-transparent dark:bg-transparent dark:hover:bg-transparent",
                  )}
                >
                  {/* One pill shared by all filters: it slides to the active one */}
                  {active && (
                    <m.span
                      layoutId="active-filter"
                      className="absolute inset-0 -z-10 rounded-full bg-primary"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  {labels.filters[f]}
                </button>
              );
            })}
          </div>
          <ul className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((p) => (
                <m.li
                  key={p.id}
                  layout="position"
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease }}
                  className={cn(p.featured && "md:col-span-2 lg:col-span-3")}
                >
                  <ProjectCard p={p} labels={labels} />
                </m.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </LazyMotion>
    </MotionConfig>
  );
}
