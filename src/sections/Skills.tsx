import { useRef } from 'react';
import { useGSAPScrollAnimation } from '@/hooks/useGSAPScroll';
import SectionTitle from '@/components/SectionTitle';
import SkillBar from '@/components/SkillBar';
import GlassBadge from '@/components/GlassBadge';
import { Brain, Network, Cpu, MessageSquare } from 'lucide-react';

const frameworks = [
  { category: 'Back-End', items: ['FastAPI', 'Django', 'DRF', 'SQLAlchemy', 'Alembic'] },
  { category: 'AI, ML & DL', items: ['TensorFlow', 'PyTorch', 'Scikit-Learn'] },
  { category: 'Computer Vision', items: ['OpenCV', 'CNNs', 'Image Processing'] },
  { category: 'NLP', items: ['NLTK', 'SpaCy', 'LangChain', 'LangGraph'] },
  { category: 'Data Viz', items: ['Matplotlib', 'Seaborn', 'Plotly', 'Dash', 'Bokeh', 'ggplot2'] },
  { category: 'Data Engineering', items: ['NumPy', 'Pandas', 'PyJanitor', 'Polars', 'Prefect', 'Dask'] },
  { category: 'Desktop/GUI', items: ['PyQT', 'Flet', 'Tkinter', 'Typer'] },
  { category: 'Dashboard', items: ['Streamlit', 'Taipy', 'Dash', 'Bokeh'] },
  { category: 'Front-End', items: ['React.js', 'HTML5', 'CSS'] },
  { category: 'Web3/Blockchain', items: ['web3.py', 'DBnomics', 'FRED', 'Binance APIs'] },
];

const aiSpecializations = [
  {
    icon: Brain,
    title: 'Machine Learning',
    text: 'Supervised & Unsupervised Learning, Feature Engineering, Model Selection, Hyperparameter Tuning, Evaluation Metrics',
  },
  {
    icon: Network,
    title: 'Deep Learning',
    text: 'Neural Architectures, CNNs, RNNs (LSTMs, GRUs), Transformers, Backpropagation, Optimization (SGD, Adam), Regularization',
  },
  {
    icon: Cpu,
    title: 'Neural Networks',
    items: ['ANNs', 'GNNs', 'GANs', 'CNNs'],
  },
  {
    icon: MessageSquare,
    title: 'NLP',
    text: 'Text Preprocessing, Word2Vec, GloVe, Transformers, Language Modeling, Sentiment Analysis, Chatbots, Question Answering, Summarization, Text Classification',
  },
];

const databases = {
  sql: ['PostgreSQL', 'MySQL', 'SQLite'],
  nosql: ['MongoDB', 'Neo4j', 'MariaDB'],
  vectordb: ['Pinecone', 'Weaviate', 'Milvus', 'PGVector', 'FAISS'],
};

const devops = [
  { category: 'Version Control', items: ['Git', 'GitHub', 'GitLab'] },
  { category: 'CI/CD', items: ['GitHub Actions', 'GitLab CI', 'Jenkins'] },
  { category: 'MLOps', items: ['MLflow', 'Airflow', 'Kubeflow', 'DVC'] },
  { category: 'Containerization', items: ['Docker', 'Kubernetes'] },
  { category: 'Web Servers', items: ['Nginx', 'Traefik'] },
  { category: 'API Technologies', items: ['REST', 'WebSockets', 'GraphQL', 'Microservices', 'WebHooks', 'WebRTC', 'gRPC'] },
  { category: 'Task Queues', items: ['Celery', 'Redis', 'RabbitMQ', 'Kafka'] },
  { category: 'Monitoring', items: ['Prometheus', 'Grafana', 'Netdata', 'ELK Stack'] },
  { category: 'Cloud', items: ['GCP', 'AWS'] },
  { category: 'Infrastructure', items: ['Ansible', 'Terraform'] },
];

export default function Skills() {
  const langPanelRef = useRef<HTMLDivElement>(null);
  const fwPanelRef = useRef<HTMLDivElement>(null);
  const aiPanelRef = useRef<HTMLDivElement>(null);
  const dbPanelRef = useRef<HTMLDivElement>(null);
  const devopsPanelRef = useRef<HTMLDivElement>(null);
  const osPanelRef = useRef<HTMLDivElement>(null);

  useGSAPScrollAnimation(langPanelRef, 'panel');
  useGSAPScrollAnimation(fwPanelRef, 'panel');
  useGSAPScrollAnimation(aiPanelRef, 'panel');
  useGSAPScrollAnimation(dbPanelRef, 'panel');
  useGSAPScrollAnimation(devopsPanelRef, 'panel');
  useGSAPScrollAnimation(osPanelRef, 'panel');

  const panelBaseStyle: React.CSSProperties = {
    background: 'var(--bg-panel)',
    backgroundImage: 'var(--holo-gradient)',
    border: '1px solid var(--cyan-mid)',
    boxShadow: 'var(--shadow-panel), var(--holo-shadow)',
    position: 'relative',
    overflow: 'hidden',
  };

  return (
    <section
      id="skills"
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
        style={{ height: '400px', opacity: 0.08, zIndex: 0 }}
      >
        <source src="./assets/video-skills.mp4" type="video/mp4" />
      </video>

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0, 229, 255, 0.03) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      <div
        className="relative z-10 mx-auto"
        style={{ maxWidth: 'var(--container-max)', padding: '0 var(--container-pad)' }}
      >
        <SectionTitle title="SKILLS" sectionId="SECTION 02 — TECHNICAL ARSENAL" />

        <div className="space-y-8">
          {/* Programming Languages */}
          <div ref={langPanelRef} className="p-6 lg:p-8" style={panelBaseStyle}>
            <div className="absolute top-0 left-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
            <div className="absolute top-0 right-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
            <h3 className="font-display text-lg mb-6" style={{ color: 'var(--cyan)' }}>PROGRAMMING LANGUAGES</h3>
            <SkillBar name="Python" percentage={95} isPrimary />
            <SkillBar name="Rust" percentage={70} />
            <SkillBar name="R" percentage={75} />
            <SkillBar name="Bash" percentage={80} />
            <SkillBar name="JavaScript" percentage={65} note="MID-LEVEL" />
          </div>

          {/* Frameworks & Libraries */}
          <div ref={fwPanelRef} className="p-6 lg:p-8" style={panelBaseStyle}>
            <div className="absolute top-0 left-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
            <div className="absolute top-0 right-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
            <h3 className="font-display text-lg mb-6" style={{ color: 'var(--cyan)' }}>FRAMEWORKS & LIBRARIES</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {frameworks.map((fw) => (
                <div key={fw.category}>
                  <h4 className="font-label mb-2" style={{ color: 'var(--text-tertiary-color)' }}>{fw.category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {fw.items.map((item) => (
                      <GlassBadge key={item} variant="skill">{item}</GlassBadge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Specializations */}
          <div ref={aiPanelRef} className="p-6 lg:p-8" style={panelBaseStyle}>
            <div className="absolute top-0 left-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
            <div className="absolute top-0 right-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
            <h3 className="font-display text-lg mb-6" style={{ color: 'var(--cyan)' }}>ARTIFICIAL INTELLIGENCE</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aiSpecializations.map((spec) => (
                <div key={spec.title}>
                  <div className="flex items-center gap-2 mb-2">
                    <spec.icon size={18} style={{ color: 'var(--cyan)' }} />
                    <h4 className="font-display text-sm" style={{ color: 'var(--cyan)' }}>{spec.title}</h4>
                  </div>
                  {spec.text && (
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary-color)' }}>
                      {spec.text}
                    </p>
                  )}
                  {spec.items && (
                    <div className="flex flex-wrap gap-1.5">
                      {spec.items.map((item) => (
                        <GlassBadge key={item} variant="skill">{item}</GlassBadge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div ref={dbPanelRef} className="p-6 lg:p-8" style={panelBaseStyle}>
            <div className="absolute top-0 left-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
            <div className="absolute top-0 right-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
            <h3 className="font-display text-lg mb-6" style={{ color: 'var(--cyan)' }}>DATABASES</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-label mb-2" style={{ color: 'var(--text-tertiary-color)' }}>SQL</h4>
                <div className="flex flex-wrap gap-1.5">
                  {databases.sql.map((db) => (
                    <GlassBadge key={db} variant="skill">{db}</GlassBadge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-label mb-2" style={{ color: 'var(--text-tertiary-color)' }}>NoSQL</h4>
                <div className="flex flex-wrap gap-1.5">
                  {databases.nosql.map((db) => (
                    <GlassBadge key={db} variant="skill">{db}</GlassBadge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-label mb-2" style={{ color: 'var(--text-tertiary-color)' }}>VectorDB</h4>
                <div className="flex flex-wrap gap-1.5">
                  {databases.vectordb.map((db) => (
                    <GlassBadge key={db} variant="skill">{db}</GlassBadge>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <GlassBadge variant="cyan">GraphQL</GlassBadge>
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div ref={devopsPanelRef} className="p-6 lg:p-8" style={panelBaseStyle}>
            <div className="absolute top-0 left-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
            <div className="absolute top-0 right-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
            <h3 className="font-display text-lg mb-6" style={{ color: 'var(--cyan)' }}>DEVOPS, MLOPS & CLOUD</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {devops.map((cat) => (
                <div key={cat.category}>
                  <h4 className="font-label mb-2" style={{ color: 'var(--text-tertiary-color)' }}>{cat.category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <GlassBadge key={item} variant="skill">{item}</GlassBadge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* OS & Soft Skills */}
          <div ref={osPanelRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6" style={panelBaseStyle}>
              <div className="absolute top-0 left-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
              <div className="absolute top-0 right-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
              <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
              <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
              <h3 className="font-display text-base mb-4" style={{ color: 'var(--cyan)' }}>OPERATING SYSTEMS</h3>
              <div className="flex flex-wrap gap-1.5">
                {['Ubuntu (Desktop & Server)', 'Windows 10/11'].map((os) => (
                  <GlassBadge key={os} variant="skill">{os}</GlassBadge>
                ))}
              </div>
            </div>
            <div className="p-6" style={panelBaseStyle}>
              <div className="absolute top-0 left-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
              <div className="absolute top-0 right-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
              <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
              <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
              <h3 className="font-display text-base mb-4" style={{ color: 'var(--cyan)' }}>SOFT SKILLS</h3>
              <div className="flex flex-wrap gap-1.5">
                {['Problem-Solving', 'Critical Thinking', 'Communication', 'Collaboration', 'Adaptability', 'Public Speaking & Technical Lecturing'].map((skill) => (
                  <GlassBadge key={skill} variant="skill">{skill}</GlassBadge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
