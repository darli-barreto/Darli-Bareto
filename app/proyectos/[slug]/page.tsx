import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/projects/project-detail";
import { getProject, projects } from "@/lib/projects";
import { ProjectLoading } from "@/components/projects/project-loading";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return { title: "Proyecto no encontrado — Darli Barreto" };
  return { title: `${project.title} — Darli Barreto`, description: project.summary };
}

async function ProjectContent({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <ProjectDetail project={project} next={next} />;
}

export default function ProjectPage({ params }: Props) {
  return <Suspense fallback={<ProjectLoading />}><ProjectContent params={params} /></Suspense>;
}
