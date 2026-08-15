document.addEventListener('DOMContentLoaded', function () {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'css/additions.css';
  document.head.appendChild(stylesheet);

  const assessmentScript = document.createElement('script');
  assessmentScript.src = 'js/assessment.js';
  assessmentScript.defer = true;
  document.body.appendChild(assessmentScript);
});
