(() => {
  const injectAssessment = () => {
    if (document.getElementById('assessment-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'assessment-overlay';
    overlay.innerHTML = `
      <div class="assessment-shell" role="dialog" aria-modal="true" aria-labelledby="assessment-title">
        <button class="assessment-close" type="button" aria-label="Close assessment">×</button>
        <div class="assessment-header">
          <span class="eyebrow">Smart fitness assessment</span>
          <div class="assessment-step-line"><span id="assessment-step-fill"></span></div>
          <div class="assessment-step-label" id="assessment-step-label">Step 1 of 3</div>
        </div>
        <div id="assessment-body"></div>
      </div>`;
    document.body.appendChild(overlay);

    const state = { program: '', price: '', step: 1, basic: {}, safety: {} };
    const body = overlay.querySelector('#assessment-body');
    const fill = overlay.querySelector('#assessment-step-fill');
    const label = overlay.querySelector('#assessment-step-label');

    const render = () => {
      fill.style.width = `${(state.step / 3) * 100}%`;
      label.textContent = `Step ${state.step} of 3`;

      if (state.step === 1) {
        body.innerHTML = `
          <h2 id="assessment-title">Let’s understand your starting point.</h2>
          <p class="assessment-copy">A few essentials help us match the blueprint to your current level, routine and goal.</p>
          <div class="assessment-grid">
            <label>Age<input id="a-age" type="number" min="13" max="100" value="${state.basic.age || ''}" required></label>
            <label>Sex<select id="a-sex"><option value="">Select</option><option>Female</option><option>Male</option><option>Prefer not to say</option></select></label>
            <label>Height (cm)<input id="a-height" type="number" min="100" max="250" value="${state.basic.height || ''}"></label>
            <label>Weight (kg)<input id="a-weight" type="number" min="25" max="300" step="0.1" value="${state.basic.weight || ''}"></label>
            <label>Fitness level<select id="a-level"><option value="">Select</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label>
            <label>Days available / week<select id="a-days"><option value="">Select</option><option>1–2</option><option>3</option><option>4</option><option>5+</option></select></label>
            <label>Training environment<select id="a-env"><option value="">Select</option><option>Home</option><option>Gym</option><option>Outdoor / Field</option><option>Mixed</option></select></label>
            <label>Typical session time<select id="a-time"><option value="">Select</option><option>20–30 min</option><option>30–45 min</option><option>45–60 min</option><option>60+ min</option></select></label>
          </div>
          <div class="assessment-actions"><button class="button button-gold" id="assessment-next">Continue →</button></div>`;
        body.querySelector('#a-sex').value = state.basic.sex || '';
        body.querySelector('#a-level').value = state.basic.level || '';
        body.querySelector('#a-days').value = state.basic.days || '';
        body.querySelector('#a-env').value = state.basic.env || '';
        body.querySelector('#a-time').value = state.basic.time || '';

        body.querySelector('#assessment-next').onclick = () => {
          const age = body.querySelector('#a-age').value;
          const level = body.querySelector('#a-level').value;
          if (!age || !level) return;
          state.basic = {
            age,
            sex: body.querySelector('#a-sex').value,
            height: body.querySelector('#a-height').value,
            weight: body.querySelector('#a-weight').value,
            level,
            days: body.querySelector('#a-days').value,
            env: body.querySelector('#a-env').value,
            time: body.querySelector('#a-time').value
          };
          state.step = 2;
          render();
        };
      }

      if (state.step === 2) {
        body.innerHTML = `
          <h2>Quick safety check.</h2>
          <p class="assessment-copy">These questions help us identify when normal training guidance may need professional input.</p>
          <div class="assessment-stack">
            <label>Do you currently have pain or an injury?<select id="s-pain"><option value="no">No</option><option value="yes">Yes</option></select></label>
            <label>Do you have a diagnosed medical condition that affects exercise?<select id="s-condition"><option value="no">No</option><option value="yes">Yes</option></select></label>
            <label>Have you had surgery or a significant injury recently?<select id="s-surgery"><option value="no">No</option><option value="yes">Yes</option></select></label>
            <label>Has a doctor or physiotherapist restricted your exercise?<select id="s-restriction"><option value="no">No</option><option value="yes">Yes</option></select></label>
            <label>Have you experienced chest symptoms, fainting, unusual severe breathlessness or similar concerning symptoms during exercise?<select id="s-symptoms"><option value="no">No</option><option value="yes">Yes</option></select></label>
          </div>
          <div class="assessment-actions"><button class="button button-quiet" id="assessment-back">← Back</button><button class="button button-gold" id="assessment-next">Continue →</button></div>`;
        ['pain','condition','surgery','restriction','symptoms'].forEach(k => { body.querySelector(`#s-${k}`).value = state.safety[k] || 'no'; });

        body.querySelector('#assessment-back').onclick = () => { state.step = 1; render(); };
        body.querySelector('#assessment-next').onclick = () => {
          state.safety = {};
          ['pain','condition','surgery','restriction','symptoms'].forEach(k => { state.safety[k] = body.querySelector(`#s-${k}`).value; });
          const flagged = Object.values(state.safety).includes('yes');
          state.step = flagged ? 3 : 3;
          render();
        };
      }

      if (state.step === 3) {
        const flagged = Object.values(state.safety).includes('yes');
        body.innerHTML = `
          <h2>${flagged ? 'One important next step.' : 'Your starting profile is ready.'}</h2>
          <p class="assessment-copy">${flagged ? 'Based on your answers, this program should be reviewed with an appropriate healthcare professional before exercise is prescribed. We will keep your assessment details so the next stage can be personalized safely.' : 'We have enough information to move into the program-specific assessment for your selected blueprint.'}</p>
          <div class="assessment-profile">
            <div><span>Selected program</span><strong>${state.program}</strong></div>
            <div><span>Program price</span><strong>${state.price}</strong></div>
            <div><span>Fitness level</span><strong>${state.basic.level}</strong></div>
            <div><span>Training environment</span><strong>${state.basic.env || 'Not specified'}</strong></div>
          </div>
          ${flagged ? `<div class="assessment-warning">For safety, please seek appropriate professional guidance before beginning a new exercise program. This assessment does not diagnose or treat medical conditions.</div>` : ''}
          <div class="assessment-actions"><button class="button button-quiet" id="assessment-back">← Back</button><button class="button button-gold" id="assessment-finish">Continue to program questions →</button></div>`;

        body.querySelector('#assessment-back').onclick = () => { state.step = 2; render(); };
        body.querySelector('#assessment-finish').onclick = () => {
          overlay.remove();
          window.dispatchEvent(new CustomEvent('fitnessAssessmentComplete', { detail: state }));
        };
      }
    };

    overlay.querySelector('.assessment-close').onclick = () => overlay.remove();
    render();
  };

  const openFor = (name, price) => {
    injectAssessment();
    const overlay = document.getElementById('assessment-overlay');
    overlay.dataset.program = name;
    overlay.dataset.price = price;
    const originalRender = overlay.__unused;
    const shell = overlay.querySelector('.assessment-shell');
    shell.dataset.program = name;
    shell.dataset.price = price;
    const stateHook = () => {};
    window.dispatchEvent(new CustomEvent('assessmentOpen', { detail: { name, price } }));
    const header = overlay.querySelector('#assessment-body');
    const observer = new MutationObserver(() => {
      const badge = header.querySelector('#assessment-title');
      if (badge) badge.dataset.program = name;
    });
    observer.observe(header, { childList: true, subtree: true });
  };

  document.addEventListener('click', (event) => {
    const button = event.target.closest('#program-grid [data-program]');
    if (!button) return;
    event.stopImmediatePropagation();
    const oldDialog = document.querySelector('#checkout');
    if (oldDialog && oldDialog.open) oldDialog.close();
    openFor(button.dataset.program, button.dataset.price);
  }, true);
})();
