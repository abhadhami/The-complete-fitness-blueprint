document.addEventListener('DOMContentLoaded', function () {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'css/additions.css?v=9857f267';
  document.head.appendChild(stylesheet);

  const programScript = document.createElement('script');
  programScript.src = 'assessment-programs.js?v=9857f267';
  programScript.onload = function () {
    const assessmentScript = document.createElement('script');
    assessmentScript.src = 'js/assessment.js?v=9857f267';
    assessmentScript.onload = function () {
      const experienceScript = document.createElement('script');
      experienceScript.src = 'js/assessment-experience.js?v=9857f267';
      document.body.appendChild(experienceScript);
    };
    assessmentScript.defer = true;
    document.body.appendChild(assessmentScript);
  };
  document.body.appendChild(programScript);
});
