document.addEventListener('DOMContentLoaded', function () {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'css/additions.css';
  document.head.appendChild(stylesheet);

  const programScript = document.createElement('script');
  programScript.src = 'assessment-programs.js';
  programScript.onload = function () {
    const assessmentScript = document.createElement('script');
    assessmentScript.src = 'js/assessment.js';
    assessmentScript.defer = true;
    document.body.appendChild(assessmentScript);
  };
  document.body.appendChild(programScript);
});
