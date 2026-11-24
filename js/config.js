const PROFILE = {
  name: 'Noor Bisma Jaf',
  email: 'noorjaf01@gmail.com',
  phone: '(617) 239-9919',
  phoneTel: '+16172399919',
  location: 'Dallas, TX 75051, USA',
  website: 'https://noor-bisma-jaf.vercel.app',
  websiteDisplay: 'noor-bisma-jaf.vercel.app',
  github: 'https://github.com/noorjaf01-jpg',
  linkedin: 'https://linkedin.com/in/noor-bisma',
  linkedinDisplay: 'linkedin.com/in/noor-bisma',
  resume: 'assets/Noor_Bisma_Jaf_Resume.pdf',
  resumeFilename: 'Noor_Bisma_Jaf_Resume.pdf',
  get gmailCompose() {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(this.email)}`;
  }
};

function applyProfileLinks() {
  document.querySelectorAll('[data-link="email"]').forEach(el => {
    el.href = PROFILE.gmailCompose;
  });
  document.querySelectorAll('[data-link="github"]').forEach(el => {
    el.href = PROFILE.github;
  });
  document.querySelectorAll('[data-link="linkedin"]').forEach(el => {
    el.href = PROFILE.linkedin;
  });
  document.querySelectorAll('[data-link="website"]').forEach(el => {
    el.href = PROFILE.website;
  });
  document.querySelectorAll('[data-link="phone"]').forEach(el => {
    el.href = `tel:${PROFILE.phoneTel}`;
  });
  document.querySelectorAll('[data-show="linkedin"]').forEach(el => {
    el.textContent = PROFILE.linkedinDisplay;
  });
  document.querySelectorAll('[data-show="website"]').forEach(el => {
    el.textContent = PROFILE.websiteDisplay;
  });
  document.querySelectorAll('.contact-card').forEach(card => {
    const value = card.querySelector('.contact-value');
    if (value) card.title = value.textContent.trim();
  });
}
