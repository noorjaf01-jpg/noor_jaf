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
  'Data Governance, Quality & Security': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
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
      'Bronze/Silver/Gold architecture', 'Dimensional Modeling', 'Semantic Layer',
      'Domain-Driven Design', 'Data Marts', 'Warehouses'
    ]
  },
  {
    title: 'Data Warehousing & Storage',
    tags: [
      'Snowflake', 'Databricks Delta Lake & Unity Catalog', 'Apache Iceberg', 'Apache Hudi',
      'Redshift', 'BigQuery', 'Azure Synapse Analytics', 'Hive', 'Presto', 'Trino',
      'Parquet', 'ORC', 'Avro', 'Palantir Ontology & Data Products'
    ]
  },
  {
    title: 'Cloud Platforms',
    tags: [
      'AWS (S3, Glue, EMR, Lambda, Redshift, Athena, Kinesis, CloudFormation)',
      'Azure (Data Factory, Synapse, Databricks, Event Hubs, Blob Storage, Logic Apps, Key Vault)',
      'GCP (BigQuery, Dataflow, Pub/Sub, Composer, Cloud Functions)'
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
    title: 'Data Governance, Quality & Security',
    tags: [
      'HIPAA', 'GDPR', 'SOC 2', 'PHI/PII Masking', 'RBAC/ABAC', 'Data Lineage',
      'Cataloging', 'Palantir Governance Workflows', 'Audit Logging', 'Encryption', 'Data Quality Frameworks'
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
    title: 'Project Management & Collaboration',
    tags: [
      'Agile & Scrum', 'Jira', 'Confluence', 'Trello', 'Asana', 'Microsoft Project',
      'Stakeholder Management', 'Solution Architecture', 'Technical Mentorship', 'DataOps', 'Documentation'
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
      'Data for Predictive Analytics', 'Integration with LLM/AI workflows'
    ]
  }
];

const experience = [
  {
    title: 'Enterprise Data Engineer',
    company: 'Aequor',
    date: '11/2022 – Present',
    bullets: [
      'Architected and deployed enterprise-scale healthcare data pipelines integrating EHR, claims, lab, pharmacy, and operational datasets into a unified analytics ecosystem supporting clinical and operational insights.',
      'Designed and implemented HIPAA-compliant ETL/ELT workflows using Azure Data Factory, Databricks, and Palantir Foundry, automating sensitive PHI/PII processing and reducing manual data handling.',
      'Built lakehouse architecture on Databricks and Delta Lake to support structured and semi-structured healthcare data, enabling faster and more reliable analytics and reporting.',
      'Engineered batch and near real-time ingestion frameworks for multiple healthcare source systems, ensuring timely availability of data for analytics dashboards.',
      'Developed curated clinical and operational data marts, enabling data-driven decision-making for executive, clinical, and operational teams.',
      'Implemented robust data governance and lineage frameworks, including metadata management, automated validation, and auditing for compliance with regulatory standards.',
      'Optimized data transformations, storage, and query performance, reducing cloud compute costs and improving pipeline efficiency.',
      'Partnered with cross-functional teams (clinical, analytics, and business stakeholders) to translate requirements into scalable, maintainable, and reliable data solutions.',
      'Established CI/CD pipelines for automated deployment, monitoring, version control, and operational excellence across production workflows.'
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
    date: '03/2019 – 10/2022',
    bullets: [
      'Led end-to-end enterprise data engineering projects for analytics, reporting, and machine learning initiatives, providing highly reliable, scalable, and performant data pipelines.',
      'Designed and orchestrated ETL/ELT pipelines using Apache Airflow, dbt, and Python to ingest, transform, and load large-scale datasets into cloud-based warehouses.',
      'Built real-time streaming pipelines leveraging Kafka and event-driven architecture to support low-latency operational dashboards and analytics.',
      'Developed reusable and scalable data models for BI, reporting, and ML consumption, improving maintainability and engineering productivity.',
      'Implemented data quality frameworks, automated anomaly detection, and monitoring dashboards to ensure reliable production workflows.',
      'Mentored junior engineers, conducted design and code reviews, and enforced best practices for scalable and maintainable data architecture.',
      'Collaborated with product, analytics, and business teams to translate strategic objectives into actionable data solutions.',
      'Ensured high availability and reliability of production data systems with automated alerting, monitoring, and failure recovery mechanisms.'
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
    date: '07/2016 – 02/2019',
    bullets: [
      'Engineered distributed big data pipelines using Apache Spark and PySpark to process high-volume transactional and event-driven datasets across multiple business domains.',
      'Developed batch and near real-time ingestion frameworks integrating structured and semi-structured datasets into cloud storage layers.',
      'Built scalable data lake solutions on AWS and Azure using Parquet and Delta formats to optimize storage, retrieval, and query performance.',
      'Tuned Spark workloads by optimizing partitioning, caching, and query execution strategies, improving pipeline performance and reliability.',
      'Integrated multiple enterprise data sources into centralized cloud platforms to enable downstream analytics, reporting, and machine learning applications.',
      'Developed automated CI/CD pipelines and collaborated with DevOps teams for seamless deployment of production workflows.',
      'Monitored pipelines for data anomalies, performance issues, and bottlenecks, ensuring high availability and minimal downtime.'
    ],
    keywords: [
      'Big Data', 'Apache Spark', 'PySpark', 'AWS', 'Azure', 'Databricks', 'Delta Lake',
      'Data Lake', 'Batch Processing', 'Streaming Data', 'CI/CD', 'Cloud Data Platforms'
    ]
  },
  {
    title: 'Data Engineer',
    company: 'Visionaire Partners',
    date: '06/2014 – 06/2016',
    bullets: [
      'Designed and developed ETL/ELT pipelines to ingest, transform, and load structured and semi-structured datasets into cloud-based analytics platforms.',
      'Integrated data from APIs, relational databases, and flat files, creating standardized transformations across multiple business domains.',
      'Developed reusable data transformation logic for consistent, high-quality datasets supporting BI and analytics initiatives.',
      'Translated business requirements into scalable, production-ready data models and pipelines for enterprise reporting.',
      'Optimized data workflows to reduce processing time and improve data reliability for business intelligence teams.',
      'Implemented automated monitoring, logging, and validation to ensure pipeline accuracy and production stability.',
      'Collaborated with DevOps and analytics teams to establish CI/CD pipelines, enabling smooth deployment and version control.'
    ],
    keywords: [
      'Data Engineering', 'ETL/ELT', 'Python', 'SQL', 'Cloud Platforms', 'Data Pipelines',
      'Data Modeling', 'Data Integration', 'BI Reporting', 'CI/CD'
    ]
  }
];

const projects = [
  {
    title: 'Healthcare Data Lakehouse Platform',
    stack: 'Databricks, Delta Lake, Azure, Palantir Foundry, Python, SQL',
    bullets: [
      'Architected HIPAA-compliant lakehouse integrating EHR, claims, and lab datasets for unified analytics.',
      'Built ETL/ELT pipelines and real-time ingestion workflows, improving reporting speed and reliability.',
      'Implemented data marts, governance, lineage, and automated quality checks for audit-ready compliance.'
    ]
  },
  {
    title: 'Real-Time Financial Risk & Fraud Analytics Platform',
    stack: 'Apache Kafka, Spark Structured Streaming, Azure Event Hubs, Snowflake, Databricks, Python',
    bullets: [
      'Developed real-time streaming pipelines using Kafka and Spark Structured Streaming for anomaly detection.',
      'Designed ETL/ELT workflows integrating financial datasets into Snowflake and Databricks.',
      'Built data quality monitoring and ML-ready datasets for predictive fraud analytics.'
    ]
  },
  {
    title: 'Big Data Processing & Analytics Platform',
    stack: 'Apache Spark, PySpark, Delta Lake, AWS, Azure, Parquet, Python',
    bullets: [
      'Engineered distributed Spark/PySpark pipelines to process terabytes of transactional and event-driven data.',
      'Implemented batch and near real-time ingestion frameworks across AWS and Azure.',
      'Built centralized data lakes and warehouses, optimized storage formats, and enabled ML-ready analytics.'
    ]
  },
  {
    title: 'Enterprise Analytics & Reporting Platform',
    stack: 'Python, SQL, ETL/ELT, Airflow, Databricks, Snowflake, CI/CD',
    bullets: [
      'Developed scalable ETL/ELT pipelines for structured and semi-structured enterprise data.',
      'Built reusable transformation logic for cross-business standardization and improved reliability.',
      'Designed data models and CI/CD pipelines for BI dashboards and automated production workflows.'
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
});
