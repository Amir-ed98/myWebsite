import { useRef } from 'react';
import { useGSAPScrollAnimation, useGSAPTimelineAnimation } from '@/hooks/useGSAPScroll';
import SectionTitle from '@/components/SectionTitle';
import GlassBadge from '@/components/GlassBadge';

const jobs = [
  {
    position: 'SENIOR PYTHON BACK-END DEVELOPER, DEVOPS & AI/NLP AGENT ENGINEER',
    company: 'Alpharency',
    period: '2024 — REMOTE',
    badge: 'FULL-TIME',
    badgeVariant: 'skill' as const,
    description: 'Led the backend development of Web3-based AI-driven applications using Django REST Framework and FastAPI, integrating blockchain analytics and financial data APIs. Built and deployed intelligent chatbots and autonomous agents for crypto and finance domains using LangChain, LangGraph, and Transformer-based LLMs. Architected containerized microservices using Docker, Traefik, and Kubernetes, enabling scalable and secure deployments. Designed and managed CI/CD pipelines with GitHub Actions and Celery for task automation. Implemented real-time data ingestion pipelines with Apache Kafka and Redis for streaming crypto data and conversational analytics. Applied MLOps workflows using MLflow and Airflow, supporting continuous model training and monitoring.',
    tech: ['DJANGO', 'FASTAPI', 'LANGCHAIN', 'DOCKER', 'KUBERNETES', 'KAFKA', 'MLFLOW'],
    side: 'left' as const,
  },
  {
    position: 'SENIOR PYTHON BACK-END DEVELOPER, AI ENGINEER & TEAM LEAD',
    company: 'MZI Smart Logistics',
    period: '2023 – 2024',
    badge: 'FULL-TIME',
    badgeVariant: 'skill' as const,
    description: 'Supervised a team of Python developers and coordinated backend system architecture for logistics automation and predictive optimization. Designed ETL and data processing pipelines leveraging Pandas, Dask, and Apache Kafka to clean and aggregate logistics data from multiple sources. Implemented DevOps and MLOps practices using Docker, Kubernetes, Airflow, and MLflow for reproducibility and scalable deployment.',
    tech: ['PYTHON', 'PANDAS', 'KAFKA', 'DOCKER', 'AIRFLOW', 'MLFLOW'],
    side: 'right' as const,
  },
  {
    position: 'SENIOR PYTHON DEVELOPER, AI/ML ENGINEER & DATA ANALYST',
    company: 'IE Logistics and Trade',
    period: '2022 – 2024',
    badge: 'FULL-TIME',
    badgeVariant: 'skill' as const,
    description: 'Designed and implemented automation tools and AI-powered analytics systems to optimize trade workflows and logistics operations. Built data cleaning and transformation pipelines using Pandas, NumPy, PyJanitor, and Great Expectations, ensuring data integrity and model readiness. Conducted statistical and predictive analysis on trade data using Python, Scikit-learn, and TensorFlow, improving operational efficiency by identifying trends and forecasting delays. Deployed machine learning models for demand forecasting and inventory optimization, managed via MLflow and DVC. Designed RESTful APIs for integration with client dashboards and mobile applications using FastAPI and Django REST Framework. Provided software architecture consulting and managed DevOps pipelines using Docker, Nginx, and GitLab CI/CD.',
    tech: ['PYTHON', 'SCIKIT-LEARN', 'TENSORFLOW', 'FASTAPI', 'MLFLOW', 'DOCKER'],
    side: 'left' as const,
  },
  {
    position: 'BIOINFORMATICS ENGINEER',
    company: 'NEF Medical Genetics Clinic',
    period: '2023 — PROJECT',
    badge: 'PROJECT',
    badgeVariant: 'alert' as const,
    description: 'Led the development of bioinformatics pipelines tailored for clinical-grade genomic data analysis, focusing on NGS data processing, variant calling, and annotation. Collaborated with medical geneticists to interpret results for hereditary disease diagnostics. Designed and implemented custom tools for automating QC, alignment, and data integration workflows. Ensured compliance with clinical standards for data accuracy, reproducibility, and reporting.',
    tech: ['NGS', 'GATK', 'PYTHON', 'PIPELINE AUTOMATION'],
    side: 'right' as const,
  },
  {
    position: 'SENIOR PYTHON BACK-END DEVELOPER',
    company: 'Numano — Mashhad',
    period: '2022, 6 MONTHS',
    badge: 'CONTRACT',
    badgeVariant: 'skill' as const,
    description: 'Built ERP systems and managerial applications tailored to client needs. Involved in backend architecture and DevOps workflows for internal platforms.',
    tech: ['PYTHON', 'ERP', 'DEVOPS'],
    side: 'left' as const,
  },
  {
    position: 'PYTHON BACK-END DEVELOPER',
    company: 'Freelance/Independent',
    period: '2020 – PRESENT',
    badge: 'FREELANCE',
    badgeVariant: 'cyan' as const,
    description: 'Worked with various clients to design and develop scalable backend systems using Django, FastAPI, and Flask. Delivered customized solutions for business and automation needs.',
    tech: ['DJANGO', 'FASTAPI', 'FLASK'],
    side: 'right' as const,
  },
  {
    position: 'DATA SCIENTIST & AI ENGINEER',
    company: 'Freelance/Independent',
    period: '2021 – PRESENT',
    badge: 'FREELANCE',
    badgeVariant: 'cyan' as const,
    description: 'Executed machine learning and AI projects across diverse industries. Specialized in data preprocessing, model training, and deployment of AI-driven applications.',
    tech: ['ML', 'AI', 'PYTHON', 'DEPLOYMENT'],
    side: 'left' as const,
  },
  {
    position: 'BIOINFORMATICS ENGINEER',
    company: 'Freelance/Independent',
    period: '2019 – PRESENT',
    badge: 'FREELANCE',
    badgeVariant: 'cyan' as const,
    description: 'Collaborated with academic researchers, graduate students, and university labs to design and implement bioinformatics pipelines for theses and research projects. Developed custom tools for sequence alignment, variant analysis, gene expression profiling, and data visualization.',
    tech: ['BIOINFORMATICS', 'PYTHON', 'NGS', 'GENE EXPRESSION'],
    side: 'right' as const,
  },
];

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAPTimelineAnimation(timelineRef);

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
      id="experience"
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
        style={{ height: '500px', opacity: 0.06, zIndex: 0 }}
      >
        <source src="./assets/video-experience.mp4" type="video/mp4" />
      </video>

      <div
        className="relative z-10 mx-auto"
        style={{ maxWidth: '900px', padding: '0 var(--container-pad)' }}
      >
        <SectionTitle title="EXPERIENCE" sectionId="SECTION 03 — PROFESSIONAL JOURNEY" />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            ref={timelineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 hidden md:block"
            style={{
              background: 'linear-gradient(to bottom, var(--cyan), var(--alert))',
              transform: 'translateX(-50%)',
            }}
          />
          {/* Mobile line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-0.5 md:hidden"
            style={{
              background: 'linear-gradient(to bottom, var(--cyan), var(--alert))',
            }}
          />

          {/* Job entries */}
          <div className="space-y-8">
            {jobs.map((job, i) => (
              <JobEntry key={i} job={job} panelStyle={panelBaseStyle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JobEntry({
  job,
  panelStyle,
}: {
  job: (typeof jobs)[0];
  panelStyle: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAPScrollAnimation(ref, 'panel');

  return (
    <div
      ref={ref}
      className={`relative flex items-start ${
        job.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline node */}
      <div className="absolute left-4 md:left-1/2 z-10 hidden md:block" style={{ transform: 'translateX(-50%)' }}>
        <div
          className="w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125"
          style={{
            background: 'var(--cyan)',
            borderColor: 'var(--bg-void)',
            boxShadow: '0 0 8px rgba(0, 229, 255, 0.5)',
          }}
        />
      </div>
      <div className="absolute left-4 z-10 md:hidden">
        <div
          className="w-3 h-3 rounded-full border-2"
          style={{
            background: 'var(--cyan)',
            borderColor: 'var(--bg-void)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className={`ml-10 md:ml-0 md:w-[calc(50%-24px)] ${
          job.side === 'left' ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'
        }`}
      >
        <div
          className="p-5 lg:p-6 group"
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

          <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
            <div>
              <h4
                className="font-display text-sm leading-tight"
                style={{ color: 'var(--text-primary-color)' }}
              >
                {job.position}
              </h4>
              <p className="font-mono text-xs mt-1" style={{ color: 'var(--text-secondary-color)' }}>
                {job.company}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <GlassBadge variant={job.badgeVariant}>{job.badge}</GlassBadge>
            </div>
          </div>

          <p
            className="font-mono text-[10px] tracking-wide mb-3"
            style={{ color: 'var(--text-tertiary-color)' }}
          >
            {job.period}
          </p>

          <p
            className="font-body text-sm leading-relaxed mb-4"
            style={{ color: 'var(--text-secondary-color)' }}
          >
            {job.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {job.tech.map((t) => (
              <GlassBadge key={t} variant="skill">{t}</GlassBadge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
