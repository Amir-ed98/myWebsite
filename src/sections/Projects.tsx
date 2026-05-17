import { useRef } from 'react';
import { useGSAPScrollAnimation } from '@/hooks/useGSAPScroll';
import SectionTitle from '@/components/SectionTitle';
import GlassBadge from '@/components/GlassBadge';

const projects = [
  {
    title: 'AI-BASED DOCKING OPTIMIZATION FOR DRUG DISCOVERY',
    status: 'ACTIVE — 2024',
    description: 'This project focuses on leveraging artificial intelligence to optimize molecular docking processes in drug discovery. By integrating advanced machine learning algorithms, we aim to enhance the accuracy and efficiency of docking simulations, ultimately accelerating the drug development pipeline.',
    architecture: 'GNNs',
    tech: ['PyTorch', 'TensorFlow'],
    pattern: 'molecular',
  },
  {
    title: 'VARIANT CALLING PIPELINE AUTOMATION',
    subtitle: 'AI-Driven Bioinformatics Workflow Optimization',
    status: 'ACTIVE — 2024',
    description: 'This project automates the variant calling process in genomics by integrating Next-Generation Sequencing (NGS) data analysis with machine learning–driven optimization. The system automates data preprocessing (QC, alignment, and variant detection) while using AI models to predict and refine variant quality scores and reduce false positives. A modular FastAPI-based backend orchestrates pipeline execution, resource allocation, and result aggregation, supporting integration with tools like GATK, SAMtools, and bcftools. By leveraging AI-enhanced automation, the pipeline significantly improves accuracy, reproducibility, and scalability in genomic variant analysis.',
    tech: ['Python', 'FastAPI', 'PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'Nextflow'],
    pattern: 'dna',
  },
  {
    title: 'BIOLOGY AND GENETICS CHATBOT',
    subtitle: 'Intelligent Conversational AI for Bioinformatics Research',
    status: 'ACTIVE — 2024',
    description: 'An advanced AI/NLP-driven chatbot designed to assist researchers and students in biology, genetics, and molecular sciences. The system uses LLMs, LangChain, and domain-specific embeddings to provide context-aware answers, protocol explanations, and literature-based insights from genomic databases. Integrated with knowledge graphs and biological ontologies, the chatbot supports complex queries related to genes, pathways, and molecular interactions. Deployed using FastAPI and VectorDBs (Milvus) for semantic search and real-time inference.',
    tech: ['Python', 'FastAPI', 'PyTorch', 'TensorFlow', 'LangChain'],
    pattern: 'neural',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const panelBaseStyle: React.CSSProperties = {
    background: 'var(--bg-panel)',
    backgroundImage: 'var(--holo-gradient)',
    border: '1px solid var(--cyan-mid)',
    boxShadow: 'var(--shadow-panel), var(--holo-shadow)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.4s ease',
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative"
      style={{ padding: 'var(--space-section) 0' }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full object-cover"
        style={{ height: '600px', opacity: 0.06, zIndex: 0 }}
      >
        <source src="./assets/video-projects.mp4" type="video/mp4" />
      </video>

      <div
        className="relative z-10 mx-auto"
        style={{ maxWidth: 'var(--container-max)', padding: '0 var(--container-pad)' }}
      >
        <SectionTitle title="PROJECTS" sectionId="SECTION 04 — FEATURED WORK" />

        <div className="space-y-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} panelStyle={panelBaseStyle} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  panelStyle,
}: {
  project: (typeof projects)[0];
  panelStyle: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAPScrollAnimation(ref, 'panel');

  return (
    <div ref={ref}>
      <div
        className="p-6 lg:p-8 group"
        style={panelStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--cyan)';
          e.currentTarget.style.boxShadow = 'var(--shadow-panel), var(--holo-shadow), var(--glow-cyan)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--cyan-mid)';
          e.currentTarget.style.boxShadow = 'var(--shadow-panel), var(--holo-shadow)';
        }}
      >
        <div className="absolute top-0 left-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
        <div className="absolute top-0 right-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
        <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
        <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />

        {/* Status badge */}
        <div className="flex justify-end mb-4">
          <GlassBadge variant="alert">{project.status}</GlassBadge>
        </div>

        {/* Title */}
        <h3
          className="font-display text-lg lg:text-xl mb-1"
          style={{ color: 'var(--cyan)' }}
        >
          {project.title}
        </h3>

        {project.subtitle && (
          <p
            className="font-mono text-[10px] tracking-wide mb-4"
            style={{ color: 'var(--text-secondary-color)' }}
          >
            {project.subtitle}
          </p>
        )}

        {/* Architecture highlight */}
        {project.architecture && (
          <div className="mb-4">
            <GlassBadge
              variant="cyan"
              className="text-base !px-5 !py-2"
            >
              {project.architecture}
            </GlassBadge>
          </div>
        )}

        {/* Description */}
        <p
          className="font-body text-sm leading-relaxed mb-6"
          style={{ color: 'var(--text-secondary-color)' }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <GlassBadge key={t} variant="skill">{t}</GlassBadge>
          ))}
        </div>

        {/* Decorative SVG pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500"
          style={{
            backgroundImage: getPatternUrl(project.pattern),
            backgroundSize: '120px 120px',
          }}
        />
      </div>
    </div>
  );
}

function getPatternUrl(pattern: string): string {
  const patterns: Record<string, string> = {
    molecular: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='4' fill='none' stroke='%2300E5FF' stroke-width='0.5'/%3E%3Ccircle cx='90' cy='90' r='4' fill='none' stroke='%2300E5FF' stroke-width='0.5'/%3E%3Cline x1='30' y1='30' x2='90' y2='90' stroke='%2300E5FF' stroke-width='0.3'/%3E%3Ccircle cx='90' cy='30' r='3' fill='none' stroke='%2300E5FF' stroke-width='0.5'/%3E%3Cline x1='30' y1='30' x2='90' y2='30' stroke='%2300E5FF' stroke-width='0.3'/%3E%3C/svg%3E")`,
    dna: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,20 Q60,60 100,20' fill='none' stroke='%2300E5FF' stroke-width='0.5'/%3E%3Cpath d='M20,100 Q60,60 100,100' fill='none' stroke='%2300E5FF' stroke-width='0.5'/%3E%3Cline x1='40' y1='40' x2='40' y2='80' stroke='%2300E5FF' stroke-width='0.3'/%3E%3Cline x1='80' y1='40' x2='80' y2='80' stroke='%2300E5FF' stroke-width='0.3'/%3E%3C/svg%3E")`,
    neural: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='3' fill='none' stroke='%2300E5FF' stroke-width='0.5'/%3E%3Ccircle cx='100' cy='20' r='3' fill='none' stroke='%2300E5FF' stroke-width='0.5'/%3E%3Ccircle cx='60' cy='60' r='4' fill='none' stroke='%2300E5FF' stroke-width='0.5'/%3E%3Ccircle cx='20' cy='100' r='3' fill='none' stroke='%2300E5FF' stroke-width='0.5'/%3E%3Ccircle cx='100' cy='100' r='3' fill='none' stroke='%2300E5FF' stroke-width='0.5'/%3E%3Cline x1='20' y1='20' x2='60' y2='60' stroke='%2300E5FF' stroke-width='0.3'/%3E%3Cline x1='100' y1='20' x2='60' y2='60' stroke='%2300E5FF' stroke-width='0.3'/%3E%3Cline x1='20' y1='100' x2='60' y2='60' stroke='%2300E5FF' stroke-width='0.3'/%3E%3Cline x1='100' y1='100' x2='60' y2='60' stroke='%2300E5FF' stroke-width='0.3'/%3E%3C/svg%3E")`,
  };
  return patterns[pattern] || '';
}
