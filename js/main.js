const SKILL_HIGHLIGHTS = [
  'Databricks', 'Delta Lake', 'Azure', 'AWS', 'Snowflake', 'Apache Spark',
  'Python', 'SQL', 'Kafka', 'Palantir Foundry', 'Airflow', 'Terraform'
];

const SKILL_ICONS = {
  'Programming & Scripting': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  'Data Engineering & Orchestration': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>',
  'Big Data & Streaming': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  'Data Architecture & Modeling': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  'Data Warehousing & Storage': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
  'Cloud Platforms': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  'Databases & NoSQL': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/></svg>',
  'DevOps, MLOps & CI/CD': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  'Data Governance & Security': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  'Healthcare Data Engineering': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  'BI & Analytics': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  'Project Management & Collaboration': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  'Data Modernization & Innovation': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  'AI & ML Enablement': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.4V11h2a7 7 0 0 1 7 7h-2.1a2.9 2.9 0 0 0-5.8 0H9.1a2.9 2.9 0 0 0-5.8 0H2a7 7 0 0 1 7-7h2V9.4A4 4 0 0 1 12 2z"/></svg>'
};

const skills = [
  {
    title: 'Programming & Scripting',
    tags: [
      'Python (ETL automation, PySpark, APIs, data validation)',
      'SQL (advanced queries, CTEs, window functions)',
      'Scala', 'Java', 'Bash/Shell', 'JSON', 'YAML', 'Node.js', 'GraphQL'
    ]
  },
  {
    title: 'Data Engineering & Orchestration',
    tags: [
      'ETL/ELT pipelines (dbt, Talend, Informatica, Apache NiFi, SSIS, Matillion, Azure Synapse, AWS Glue, DataStage, Great Expectations)',
      'Apache Airflow', 'Luigi', 'Azure Data Factory', 'Google Dataflow', 'Palantir Foundry'
    ]
  },
  {
    title: 'Big Data & Streaming',
    tags: [
      'Apache Spark', 'PySpark', 'Structured Streaming', 'MLlib', 'Apache Flink', 'Apache Beam', 'Apache Storm',
      'Apache Kafka (Streams, Connect, Schema Registry)', 'AWS Kinesis', 'Google Pub/Sub', 'Debezium CDC'
    ]
  },
  {
    title: 'Data Architecture & Modeling',
    tags: [
      'Lakehouse Architecture', 'Data Vault', 'Kimball & Inmon', 'Star & Snowflake Schemas',
      'Bronze/Silver/Gold Architecture', 'Dimensional Modeling', 'Semantic Layer',
      'Domain-Driven Design', 'Data Mesh Architecture', 'Data Products', 'Data Platform Modernization'
    ]
  },
  {
    title: 'Data Warehousing & Storage',
    tags: [
      'Snowflake', 'Databricks Delta Lake & Unity Catalog', 'Apache Iceberg', 'Apache Hudi',
      'Redshift', 'BigQuery', 'Azure Synapse Analytics', 'Hive', 'Presto', 'Trino',
      'Parquet', 'ORC', 'Avro', 'Palantir Ontology & Data Products',
      'Databricks Workflows', 'Delta Live Tables', 'Databricks SQL'
    ]
  },
  {
    title: 'Cloud Platforms',
    tags: [
      'AWS (S3, Glue, EMR, Lambda, Redshift, Athena, Kinesis, CloudFormation)',
      'Azure (Data Factory, Synapse, Databricks, Event Hubs, Blob Storage, Logic Apps, Key Vault)',
      'GCP (BigQuery, Dataflow, Pub/Sub, Composer, Cloud Functions)',
      'Microsoft Fabric', 'OneLake', 'Azure Purview'
    ]
  },
  {
    title: 'Databases & NoSQL',
    tags: [
      'PostgreSQL', 'MySQL', 'SQL Server', 'Oracle', 'MongoDB', 'Cassandra',
      'DynamoDB', 'Neo4j', 'HBase', 'Elasticsearch', 'InfluxDB'
    ]
  },
  {
    title: 'DevOps, MLOps & CI/CD',
    tags: [
      'Terraform', 'Pulumi', 'Ansible', 'Docker', 'Kubernetes (AKS, EKS, GKE)',
      'GitOps', 'Jenkins', 'ArgoCD', 'GitHub Actions', 'GitLab CI/CD',
      'MLflow', 'Feature Stores', 'IaC', 'Monitoring (Prometheus, Grafana)'
    ]
  },
  {
    title: 'Data Governance & Security',
    tags: [
      'HIPAA', 'GDPR', 'SOC 2', 'PHI/PII Masking', 'RBAC/ABAC', 'Data Lineage',
      'Cataloging', 'Palantir Governance Workflows', 'Audit Logging', 'Encryption',
      'Data Quality Frameworks', 'Data Observability', 'Data Reliability Engineering', 'Data Governance Automation'
    ]
  },
  {
    title: 'Healthcare Data Engineering',
    tags: [
      'FHIR', 'HL7', 'EMR/EHR Integration', 'Clinical & Claims Data', 'IoT Device Data',
      'Predictive Healthcare Modeling', 'Risk Stratification', 'HIPAA-Compliant Pipelines',
      'Real-Time Analytics', 'Patient Outcomes'
    ]
  },
  {
    title: 'BI & Analytics',
    tags: [
      'Power BI', 'Tableau', 'Looker', 'Qlik', 'Mode Analytics', 'Dashboards',
      'KPI Tracking', 'Drill-Down Analytics', 'Executive Reporting', 'Data Storytelling'
    ]
  },
  {
    title: 'Data Modernization & Innovation',
    tags: [
      'Cloud Migration Strategy', 'Legacy System Modernization', 'Data Mesh Implementation', 'Self-Service Analytics Enablement'
    ]
  },
  {
    title: 'AI & ML Enablement',
    tags: [
      'ML Pipeline Development', 'Feature Store Design', 'Model Deployment',
      'Integration with LLM/AI workflows', 'RAG Pipelines', 'Vector Database Integration',
      'LLM Data Preparation', 'AI-Ready Data Platforms'
    ]
  },
  {
    title: 'Project Management & Collaboration',
    tags: [
      'Agile & Scrum', 'Jira', 'Confluence', 'Trello', 'Asana', 'Microsoft Project',
      'Stakeholder Management', 'Solution Architecture', 'Technical Mentorship', 'DataOps', 'Documentation'
    ]
  }
];

const experience = [
  {
    title: 'Lead Data Engineer',
    company: 'Aequor',
    date: 'November 2022 – Present',
    bullets: [
      'Architected and led enterprise healthcare data pipelines integrating 25+ EHR, claims, laboratory, pharmacy, and operational data sources into a unified analytics ecosystem, enabling scalable clinical and operational insights across business teams.',
      'Engineered and standardized HIPAA-compliant ETL/ELT workflows using Azure Data Factory, Databricks, and Palantir Foundry, automating PHI/PII processing for millions of healthcare records and reducing manual data preparation efforts by 40%.',
      'Designed and implemented a scalable Databricks and Delta Lake lakehouse architecture processing multi-terabyte healthcare datasets, improving analytics scalability by 35% and increasing availability of trusted enterprise data.',
      'Established batch and near real-time ingestion frameworks supporting 50+ production data pipelines, reducing data latency from hours to minutes for clinical reporting and analytics use cases.',
      'Delivered curated clinical and operational data marts supporting 100+ analytical datasets, strengthening reporting consistency and accelerating data-driven decision-making for clinical and business stakeholders.',
      'Governed and enhanced enterprise data lineage, validation, and quality frameworks across multiple healthcare domains, improving compliance and reducing production data issues by 30%.',
      'Optimized Spark transformations, Delta Lake storage strategies, and query execution processes, achieving 25–30% improvement in pipeline performance while reducing unnecessary cloud compute consumption.',
      'Drove cross-functional technical delivery with clinical, analytics, and business teams across multiple departments, translating complex requirements into scalable data solutions and accelerating enterprise analytics capabilities.'
    ],
    keywords: [
      'Healthcare Data Engineering', 'HIPAA', 'PHI/PII', 'Azure', 'Databricks', 'Delta Lake',
      'Lakehouse Architecture', 'Palantir Foundry', 'ETL/ELT', 'Data Governance', 'Data Marts',
      'Cloud Platforms', 'Data Lineage', 'CI/CD'
    ]
  },
  {
    title: 'Senior Data Engineer',
    company: 'Nesco Resource',
    date: 'March 2019 – October 2022',
    bullets: [
      'Led enterprise data engineering initiatives supporting analytics, reporting, and ML workloads, designing scalable platforms processing millions of records across multiple business domains.',
      'Designed and orchestrated ETL/ELT pipelines using Airflow, dbt, and Python, managing 100+ automated workflows and improving data processing efficiency through pipeline optimization.',
      'Engineered Kafka-based streaming pipelines processing high-volume event data, reducing analytics latency by 50% and enabling near real-time operational dashboards.',
      'Developed reusable enterprise data models supporting 50+ reporting and analytics use cases, improving maintainability and reducing development effort across teams.',
      'Implemented automated data quality frameworks and anomaly detection processes, improving dataset reliability by 35% and reducing downstream reporting issues.',
      'Mentored junior engineers and conducted architecture and code reviews, improving engineering standards and increasing overall team productivity.',
      'Collaborated with product, analytics, and business teams supporting multiple enterprise initiatives, translating requirements into production-ready data solutions.',
      'Enhanced monitoring, alerting, and recovery mechanisms across production workflows, improving system availability and reducing operational incidents.'
    ],
    keywords: [
      'Apache Airflow', 'dbt', 'Kafka', 'Python', 'Spark', 'ETL/ELT', 'Streaming Data',
      'Event-Driven Architecture', 'Cloud Data Platforms', 'Data Quality', 'Data Governance',
      'Data Modeling', 'CI/CD'
    ]
  },
  {
    title: 'Big Data Engineer',
    company: 'Matlen Silver',
    date: 'July 2016 – February 2019',
    bullets: [
      'Engineered distributed Spark and PySpark pipelines processing terabytes of transactional and event-driven data, supporting enterprise analytics workloads at scale.',
      'Developed batch and near real-time ingestion frameworks integrating 20+ structured and semi-structured data sources into scalable cloud data platforms.',
      'Built AWS and Azure data lake solutions using Parquet and Delta formats, improving storage efficiency by 30% and enhancing analytical query performance across workloads.',
      'Optimized Spark workloads through partitioning, caching, and execution tuning, reducing processing time by 35% for large-scale data transformation jobs.',
      'Integrated enterprise data sources into centralized analytics platforms supporting multiple downstream reporting and machine learning applications.',
      'Automated CI/CD deployment workflows for production data applications, reducing manual deployment effort and improving release consistency across environments.',
      'Monitored and tuned production pipelines handling high-volume workloads, improving reliability and minimizing workflow failures in critical data systems.'
    ],
    keywords: [
      'Big Data', 'Apache Spark', 'PySpark', 'AWS', 'Azure', 'Databricks', 'Delta Lake',
      'Data Lake', 'Batch Processing', 'Streaming Data', 'CI/CD', 'Cloud Data Platforms'
    ]
  },
  {
    title: 'Data Engineer',
    company: 'Visionaire Partners',
    date: 'June 2014 – June 2016',
    bullets: [
      'Designed and developed ETL/ELT pipelines integrating 15+ data sources into analytics platforms, improving availability and reliability of trusted business data.',
      'Integrated APIs, relational databases, and flat-file sources, standardizing transformation workflows and reducing manual data preparation overhead by 30%.',
      'Developed reusable transformation frameworks supporting multiple reporting solutions, improving consistency and significantly accelerating analytics delivery timelines.',
      'Translated business requirements into scalable data models and production pipelines, enabling faster delivery of enterprise reporting capabilities across teams.',
      'Optimized SQL queries and data workflows, improving processing performance by 25% and increasing reliability of analytics operations for business stakeholders.',
      'Implemented automated monitoring, logging, and validation processes, reducing data quality issues and improving stability across production environments.',
      'Established CI/CD practices with DevOps teams, improving deployment consistency and reducing release cycle turnaround time across data engineering projects.'
    ],
    keywords: [
      'Data Engineering', 'ETL/ELT', 'Python', 'SQL', 'Cloud Platforms', 'Data Pipelines',
      'Data Modeling', 'Data Integration', 'BI Reporting', 'CI/CD'
    ]
  }
];

const projects = [
  {
    title: 'Patient 360 & Clinical Data Intelligence Platform',
    stack: 'Azure Databricks, Delta Lake, Palantir Foundry, HIPAA, Python, SQL',
    bullets: [
      'Architected a unified Patient 360 platform integrating EHR, claims, laboratory, and pharmacy data from 25+ sources into trusted clinical datasets.',
      'Engineered scalable ingestion and transformation workflows using Azure Databricks, Delta Lake, and Palantir Foundry to standardize millions of healthcare records.',
      'Implemented HIPAA-aligned PHI/PII controls, automated validation, and data lineage to strengthen compliance and clinical data integrity.',
      'Enabled curated datasets for population health analytics, risk stratification, patient-outcome analysis, and downstream AI/ML workflows.',
      'Key Achievements: Integrated 25+ healthcare data sources, reduced manual data preparation by 40%, and contributed to 30% fewer production data-quality issues.'
    ]
  },
  {
    title: 'Transactional Event Intelligence & Real-Time Decision Engineering',
    stack: 'Apache Kafka, Apache Spark, Python, Streaming Analytics',
    bullets: [
      'Spearheaded Kafka-based streaming pipelines to transform high-volume transactional events into reliable, analytics-ready datasets.',
      'Optimized Apache Spark and Python processing workflows to accelerate event ingestion and deliver timely data for operational reporting.',
      'Standardized event validation and reusable processing components to strengthen data consistency and simplify downstream analytics integration.',
      'Key Achievements: Reduced analytics latency by 50% and enabled near-real-time operational dashboards for faster decision-making.'
    ]
  },
  {
    title: 'Governed AI/ML Data Products & Feature Foundation',
    stack: 'Databricks, Delta Lake, Feature Engineering, Data Governance',
    bullets: [
      'Architected governed data products using Databricks and Delta Lake, establishing reusable foundations for predictive analytics and machine learning.',
      'Engineered feature-ready transformation layers and standardized data models to streamline preparation for predictive modeling and risk analysis.',
      'Implemented automated validation, lineage tracking, and governed access controls to strengthen data traceability and support reliable AI/ML consumption.',
      'Key Achievements: Established reusable, governed data products and streamlined feature-ready dataset preparation for predictive analytics and machine learning workflows.'
    ]
  }
];

function renderSkills() {
  const highlights = document.getElementById('skillsHighlights');
  const accordion = document.getElementById('skillsAccordion');

  highlights.innerHTML = SKILL_HIGHLIGHTS.map(tag =>
    `<span class="skill-highlight">${tag}</span>`
  ).join('');

  accordion.innerHTML = skills.map((cat, i) => {
    const icon = SKILL_ICONS[cat.title] || '';
    const tagsHtml = cat.tags.map(tag =>
      `<span class="skill-tag">${tag}</span>`
    ).join('');

    return `
      <div class="skill-accordion-item${i === 0 ? ' is-open' : ''}">
        <button
          type="button"
          class="skill-accordion-trigger"
          aria-expanded="${i === 0}"
        >
          <span class="skill-accordion-icon">${icon}</span>
          <span class="skill-accordion-title">${cat.title}</span>
          <span class="skill-accordion-count">${cat.tags.length}</span>
          <svg class="skill-accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="skill-accordion-body">
          <div class="skill-accordion-inner">
            <div class="skill-tags">${tagsHtml}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function initSkillsAccordion() {
  const accordion = document.getElementById('skillsAccordion');
  if (!accordion) return;

  accordion.querySelectorAll('.skill-accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.skill-accordion-item');
      const isOpen = item.classList.contains('is-open');

      accordion.querySelectorAll('.skill-accordion-item').forEach(el => {
        el.classList.remove('is-open');
        el.querySelector('.skill-accordion-trigger').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function renderExperience() {
  const timeline = document.getElementById('experienceTimeline');
  timeline.innerHTML = experience.map((job, i) => `
    <div class="timeline-item reveal-left" style="--delay: ${i}">
      <div class="timeline-header">
        <h3>${job.title}</h3>
        <span class="timeline-company">${job.company}</span>
      </div>
      <p class="timeline-date">${job.date}</p>
      <ul>${job.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      <div class="timeline-keywords">
        ${job.keywords.map(k => `<span>${k}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = projects.map((p, i) => `
    <div class="project-card reveal-right" style="--delay: ${i}">
      <h3>${p.title}</h3>
      <p class="project-stack">${p.stack}</p>
      <ul>${p.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    </div>
  `).join('');
}

function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  function getTheme() {
    return root.getAttribute('data-theme') || 'dark';
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  if (!localStorage.getItem('theme')) {
    setTheme('dark');
  }

  toggle.addEventListener('click', () => {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  });
}

function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);

    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });

    links.querySelectorAll('a[href^="#"]').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  });

  function setMenuOpen(open) {
    links.classList.toggle('open', open);
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', open);
    document.body.classList.toggle('menu-open', open);
  }

  toggle.addEventListener('click', () => {
    setMenuOpen(!links.classList.contains('open'));
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setMenuOpen(false);
  });
}

function initReveal() {
  const revealSelectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stat-card, .cert-card, .contact-card';
  const timeline = document.querySelector('.timeline');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.classList.contains('about-stats')) {
            initCounters(entry.target);
          }
          if (entry.target === timeline) {
            timeline.classList.add('visible');
          }
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll(revealSelectors).forEach(el => observer.observe(el));
  document.querySelectorAll('.about-stats').forEach(el => observer.observe(el));
  if (timeline) observer.observe(timeline);

  document.querySelectorAll('.cert-card').forEach((el, i) => {
    el.classList.add('reveal-scale');
    el.style.setProperty('--delay', i);
    observer.observe(el);
  });

  document.querySelectorAll('.contact-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.setProperty('--delay', i + 2);
    observer.observe(el);
  });

  document.querySelectorAll('.stat-card').forEach((el, i) => {
    el.classList.add('reveal-scale');
    el.style.setProperty('--delay', i);
    observer.observe(el);
  });
}

function initCounters(container) {
  if (container.dataset.counted) return;
  container.dataset.counted = 'true';

  container.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1500;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(target * eased) + suffix;
      if (progress < 1) {
        el.classList.add('counting');
        requestAnimationFrame(update);
      } else {
        el.classList.remove('counting');
      }
    }

    requestAnimationFrame(update);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyProfileLinks();
  initTheme();
  renderSkills();
  initSkillsAccordion();
  renderExperience();
  renderProjects();
  initNav();
  initReveal();
  if (window.NBVisuals) {
    window.NBVisuals.initHeroScene();
    window.NBVisuals.initCardTilt();
  }
});
