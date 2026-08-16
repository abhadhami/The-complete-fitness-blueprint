(() => {
  const OPTIONS = [
    ['New to structured fitness', 'Exercise ka experience bahut kam hai, ya structured training pehli baar start kar rahe hain.'],
    ['Regular exerciser — needs guidance', 'Exercise karte hain, lekin technique, progression ya programme structure mein guidance chahiye.'],
    ['Experienced / confident trainee', 'Regular structured training karte hain aur technique/programming ki achhi understanding hai.'],
    ['Advanced / performance-focused', '1+ year consistent structured training, good technical understanding aur progressive programming experience.']
  ];

  const apply = () => {
    const select = document.querySelector('#a-level');
    if (!select || select.dataset.experienceUpdated === '1') return;
    select.dataset.experienceUpdated = '1';
    select.innerHTML = '<option value="">Select</option>' + OPTIONS.map(([value]) => `<option value="${value}">${value}</option>`).join('');
  };

  const observer = new MutationObserver(apply);
  observer.observe(document.body, { childList: true, subtree: true });
  apply();
})();
