import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Content } from "@/i18n";
import type { ProjectMeta } from "@/i18n/shared";
import ArchitectureDiagram from "./ArchitectureDiagram";

type ProjectsContent = Content["projects"];
export type Labels = Pick<ProjectsContent, "stackLabel" | "links" | "diagram">;
export type Project = ProjectsContent["items"][number] & ProjectMeta;

function ProjectCard({ p, labels }: { p: Project; labels: Labels }) {
  return (
    <Card className={cn("lift spotlight relative h-full", p.featured && "border-brand/40")}>
      {p.featured && <span className="beam" aria-hidden="true" />}
      <CardHeader>
        <h3 className="text-lg leading-snug font-semibold">{p.title}</h3>
        <p className="text-sm text-pretty text-muted-foreground">{p.summary}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        {p.id === "fragments" && <ArchitectureDiagram labels={labels.diagram} />}
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
          {p.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <ul className="mt-auto flex flex-wrap gap-1.5" aria-label={labels.stackLabel}>
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

/** Kasshy (featured) spans the full width; the other projects sit side by side below it. */
export default function ProjectsGrid({ projects, labels }: { projects: Project[]; labels: Labels }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {projects.map((p) => (
        <li key={p.id} className={cn(p.featured && "md:col-span-2")}>
          <ProjectCard p={p} labels={labels} />
        </li>
      ))}
    </ul>
  );
}
