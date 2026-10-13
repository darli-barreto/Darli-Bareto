import { projectImages } from "./project-images";
import type { Project } from "./project-types";
export type { Project, ProjectImage } from "./project-types";

export const projects: Project[] = [
  {
    slug: "arm-structural", title: "ARM Structural", category: "INGENIERÍA / MODELADO ESTRUCTURAL",
    appUrl: "https://arm-structural.vercel.app/",
    period: "PROYECTO PERSONAL",
    summary: "Modelos estructurales, vistas de planta y herramientas de ingeniería en una misma interfaz.",
    challenge: "Organizar la información de un modelo estructural y facilitar su consulta entre las vistas de planta y la representación tridimensional.",
    approach: "El proyecto reúne un espacio de modelado con vistas 2D y 3D, herramientas para elementos estructurales y paneles de configuración. Las capturas muestran distintos estados de la interfaz.",
    contributions: ["Espacio de trabajo con vistas de planta y modelo 3D.", "Interfaz de herramientas y secciones estructurales.", "Paneles para configurar elementos y cimentaciones."],
    cover: projectImages.armStructural[0], gallery: projectImages.armStructural,
  },
  {
    slug: "estudio-libre", title: "Estudio Libre", category: "EDUCACIÓN / PLATAFORMA WEB",
    appUrl: "https://estudio-libre.vercel.app/",
    period: "ENE 2025 — MAR 2025",
    summary: "Un punto de encuentro para aprender, explorar y compartir conocimiento.",
    challenge: "Organizar cursos, recursos y artículos gratuitos para facilitar el acceso al contenido educativo desde una plataforma unificada.",
    approach: "Desarrollé la arquitectura full stack para gestionar y publicar contenido, junto con un sistema de búsqueda y categorización para encontrar recursos.",
    contributions: ["Arquitectura full stack para contenido educativo.", "Gestión y publicación de cursos, recursos y artículos.", "Búsqueda y categorización de contenido."],
    cover: projectImages.estudioLibre[10], gallery: projectImages.estudioLibre,
  },
  {
    slug: "wexel", title: "Wexel", category: "PRODUCTIVIDAD / EDITOR HÍBRIDO",
    appUrl: "https://wexel-dev.vercel.app/",
    period: "DIC 2025 — PRESENTE",
    summary: "Documentos y hojas de cálculo. Un solo espacio de trabajo.",
    challenge: "Cambiar entre un procesador de textos y una hoja de cálculo fragmenta el trabajo. Wexel explora una experiencia que reúne ambas herramientas en una misma vista.",
    approach: "Desarrollé un editor híbrido que integra la edición de texto y datos, con herramientas de formato, fórmulas básicas y exportación de documentos.",
    contributions: ["Integración de hojas de cálculo y procesamiento de texto.", "Herramientas de formato y fórmulas básicas.", "Exportación de documentos desde el editor."],
    cover: projectImages.wexel[0], gallery: projectImages.wexel,
  },
  {
    slug: "claude-clone", title: "Claude Clone", category: "IA / INTERFAZ CONVERSACIONAL",
    appUrl: "https://claude-chat-clone.vercel.app/",
    period: "PROYECTO PERSONAL",
    summary: "Una interfaz conversacional pensada para mantener el hilo.",
    challenge: "Diseñar una experiencia de chat que permita conversar y resolver tareas manteniendo el contexto entre mensajes.",
    approach: "Diseñé la interfaz de conversación y la gestión del contexto para mantener interacciones coherentes a lo largo del chat.",
    contributions: ["Diseño de la interfaz de chat.", "Gestión del contexto de la conversación.", "Organización de mensajes para una lectura clara."],
    cover: projectImages.claudeClone[1], gallery: projectImages.claudeClone,
  },
  {
    slug: "wiki-autochess", title: "Wiki de TFT", category: "DATOS / GAMING",
    appUrl: "https://fyzen.vercel.app/",
    period: "PROYECTO PERSONAL",
    summary: "Información del juego convertida en una experiencia de consulta.",
    challenge: "Reunir información y estadísticas de campeones y composiciones de TFT en una base de consulta dinámica.",
    approach: "Diseñé una base de datos dinámica para mostrar estadísticas de campeones y composiciones, organizando la información para su consulta en la wiki.",
    contributions: ["Diseño de una base de datos dinámica.", "Visualización de estadísticas de campeones.", "Organización de información sobre composiciones."],
    cover: projectImages.wikiTft[0], gallery: projectImages.wikiTft,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
