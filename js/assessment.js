(() => {
  const escapeHtml = (value) => String(value ?? '').replace(/[&<>'\"]/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));

  /* Dedicated primary-goal map. Every program gets its own goal list. */
  const PROGRAM_GOALS = {
    'Muscle Building': ['Build overall lean muscle','Gain muscle + healthy body weight','Build muscle with minimal fat gain','Increase muscle + strength','Improve specific muscle groups'],
    'Weight Loss': ['Fat loss','Fat loss + strength','Fat loss + fitness','Body recomposition'],
    'Thyroid Fitness': ['Weight management','Strength / muscle','Energy & conditioning','Mobility & general fitness'],
    'PCOS / PCOD': ['Body composition / fat loss','Strength / muscle','Cardiometabolic fitness','Cycle- and lifestyle-supportive fitness'],
    'Female Fitness': ['Strength','Muscle gain','Fat loss / body composition','Mobility / conditioning','General fitness'],
    'Diabetes Fitness': ['Cardiometabolic fitness','Strength','Weight management','Mobility / general fitness'],
    'Posture & Movement Correction': ['Postural awareness','Movement quality','Mobility','Stability / motor control'],
    'Shoulder Health & Mobility': ['Shoulder mobility','Shoulder stability','Strength / capacity','Movement control / return to training'],
    'Knee Health & Rehabilitation': ['Knee function','Strength / capacity','Mobility','Stability / movement confidence'],
    'Special Populations': ['Functional independence','Strength','Mobility','Balance / confidence with movement'],
    'Functional Training': ['Functional strength','Movement quality','Core stability','Balance / coordination','Conditioning'],
    'Strength & Conditioning': ['Max strength','Power','Strength endurance','Conditioning','Speed / acceleration'],
    'Sport-Specific Performance': ['Speed / acceleration','Power','Strength','Agility / change of direction','Endurance / sport-specific conditioning']
  };

  const normalizeProgram = (name) => {
    const raw = String(name || '').trim();
    const aliases = {
      'PCOS / PCOD Program':'PCOS / PCOD','PCOS / PCOD Fitness':'PCOS / PCOD',
      'Sport Specific':'Sport-Specific Performance','Sport-Specific':'Sport-Specific Performance','Sport Specific Performance':'Sport-Specific Performance',
      'Shoulder Health & Mobility Program':'Shoulder Health & Mobility','Knee Health & Rehabilitation Program':'Knee Health & Rehabilitation',
      'Thyroid Fitness Program':'Thyroid Fitness','Female Fitness Program':'Female Fitness','Diabetes Fitness Program':'Diabetes Fitness',
      'Functional Training Program':'Functional Training','Strength & Conditioning Program':'Strength & Conditioning','Special Populations Program':'Special Populations',
      'Posture & Movement Correction Program':'Posture & Movement Correction','Muscle Building Program':'Muscle Building','Weight Loss Program':'Weight Loss'
    };
    if (aliases[raw]) return aliases[raw];
    return PROGRAM_GOALS[raw] ? raw : (Object.keys(PROGRAM_GOALS).find(k => raw.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(raw.toLowerCase())) || raw);
  };

  const createAssessment = (name, price) => {
    if (document.getElementById('assessment-overlay')) return;
    const programKey = normalizeProgram(name);
    const overlay = document.createElement('div');
    overlay.id = 'assessment-overlay';
    overlay.innerHTML = `<div class="assessment-shell" role="dialog" aria-modal="true" aria-labelledby="assessment-title"><button class="assessment-close" type="button" aria-label="Close assessment">×</button><div class="assessment-header"><span class="eyebrow">Smart fitness assessment</span><div class="assessment-progress"><span id="assessment-step-fill"></span></div><div class="assessment-step" id="assessment-step-label">Step 1 of 4</div></div><div id="assessment-body"></div></div>`;
    document.body.appendChild(overlay);

    const state = { program:name, programKey, price, step:1, basic:{}, safety:{}, specific:{} };
    const body = overlay.querySelector('#assessment-body');
    const fill = overlay.querySelector('#assessment-step-fill');
    const label = overlay.querySelector('#assessment-step-label');

    /* Always build the selected program's goal list locally. This prevents a generic fallback. */
    const goals = PROGRAM_GOALS[programKey] || [];
    const sourceSet = (window.blueprintQuestionSets && window.blueprintQuestionSets[programKey]) || [];
    const nonGoalQuestions = sourceSet.filter(q => q[0] !== 'mainGoal' && q[0] !== 'performanceGoal');
    const goalKey = programKey === 'Sport-Specific Performance' ? 'performanceGoal' : 'mainGoal';
    const questionSet = [[goalKey, 'Primary goal', goals], ...nonGoalQuestions];

    const render = () => {
      fill.style.width = `${(state.step/4)*100}%`;
      label.textContent = `Step ${state.step} of 4`;

      if(state.step===1){
        body.innerHTML=`<h2 id="assessment-title">Let’s understand your starting point.</h2><p class="assessment-copy">A few essentials help us match <strong>${escapeHtml(state.program)}</strong> to your current level, routine and goal.</p><div class="assessment-grid"><label class="assessment-field">Age<input id="a-age" type="number" min="13" max="100" value="${escapeHtml(state.basic.age||'')}"></label><label class="assessment-field">Sex<select id="a-sex"><option value="">Select</option><option>Female</option><option>Male</option><option>Prefer not to say</option></select></label><label class="assessment-field">Height (cm)<input id="a-height" type="number" min="100" max="250" value="${escapeHtml(state.basic.height||'')}"></label><label class="assessment-field">Weight (kg)<input id="a-weight" type="number" min="25" max="300" step="0.1" value="${escapeHtml(state.basic.weight||'')}"></label><label class="assessment-field">Fitness level<select id="a-level"><option value="">Select</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label><label class="assessment-field">Days available / week<select id="a-days"><option value="">Select</option><option>1–2</option><option>3</option><option>4</option><option>5+</option></select></label><label class="assessment-field">Training environment<select id="a-env"><option value="">Select</option><option>Home</option><option>Gym</option><option>Outdoor / Field</option><option>Mixed</option></select></label><label class="assessment-field">Typical session time<select id="a-time"><option value="">Select</option><option>20–30 min</option><option>30–45 min</option><option>45–60 min</option><option>60+ min</option></select></label></div><div class="assessment-actions"><button class="button button-gold" id="assessment-next">Continue →</button></div>`;
        ['sex','level','days','env','time'].forEach(k=>body.querySelector(`#a-${k}`).value=state.basic[k]||'');
        body.querySelector('#assessment-next').onclick=()=>{const age=body.querySelector('#a-age').value,level=body.querySelector('#a-level').value;if(!age||!level)return;state.basic={age,sex:body.querySelector('#a-sex').value,height:body.querySelector('#a-height').value,weight:body.querySelector('#a-weight').value,level,days:body.querySelector('#a-days').value,env:body.querySelector('#a-env').value,time:body.querySelector('#a-time').value};state.step=2;render();};
      }

      if(state.step===2){
        body.innerHTML=`<h2>Quick safety check.</h2><p class="assessment-copy">These questions help identify when normal training guidance may need professional input.</p><div class="assessment-grid"><label class="assessment-field">Current pain or injury?<select id="s-pain"><option value="no">No</option><option value="yes">Yes</option></select></label><label class="assessment-field">Diagnosed medical condition affecting exercise?<select id="s-condition"><option value="no">No</option><option value="yes">Yes</option></select></label><label class="assessment-field">Recent surgery or significant injury?<select id="s-surgery"><option value="no">No</option><option value="yes">Yes</option></select></label><label class="assessment-field">Doctor/physio exercise restriction?<select id="s-restriction"><option value="no">No</option><option value="yes">Yes</option></select></label><label class="assessment-field full">Chest symptoms, fainting, unusual severe breathlessness or another concerning exercise symptom?<select id="s-symptoms"><option value="no">No</option><option value="yes">Yes</option></select></label></div><div class="assessment-actions"><button class="button button-quiet" id="assessment-back">← Back</button><button class="button button-gold" id="assessment-next">Continue →</button></div>`;
        ['pain','condition','surgery','restriction','symptoms'].forEach(k=>body.querySelector(`#s-${k}`).value=state.safety[k]||'no');
        body.querySelector('#assessment-back').onclick=()=>{state.step=1;render();};
        body.querySelector('#assessment-next').onclick=()=>{state.safety={};['pain','condition','surgery','restriction','symptoms'].forEach(k=>state.safety[k]=body.querySelector(`#s-${k}`).value);state.step=3;render();};
      }

      if(state.step===3){
        const flagged=Object.values(state.safety).includes('yes');
        body.innerHTML=`<h2>${escapeHtml(state.program)} — ${escapeHtml(goalKey==='performanceGoal'?'Performance goals':'Primary goals')}</h2><p class="assessment-copy">These choices are <strong>only for ${escapeHtml(programKey)}</strong>. They are not shared with the other programs.</p>${flagged?'<div class="assessment-alert">One or more safety answers were flagged. Exercise prescription should be reviewed with an appropriate healthcare professional.</div>':''}<div class="assessment-grid" id="specific-question-grid"></div><p class="required-note">Choose the options that best match your current objective.</p><div class="assessment-actions"><button class="button button-quiet" id="assessment-back">← Back</button><div class="right"><button class="button button-gold" id="assessment-next">Review my profile →</button></div></div>`;
        const grid=body.querySelector('#specific-question-grid');
        grid.innerHTML=questionSet.map(([key,title,options])=>`<div class="assessment-field full"><span>${escapeHtml(title)}</span><div class="option-grid">${options.map((option,index)=>{const id=`q-${key}-${index}`;const checked=state.specific[key]===option?'checked':'';return `<div class="option"><input id="${id}" type="radio" name="q-${escapeHtml(key)}" value="${escapeHtml(option)}" ${checked}><label for="${id}">${escapeHtml(option)}</label></div>`;}).join('')}</div></div>`).join('');
        body.querySelector('#assessment-back').onclick=()=>{state.step=2;render();};
        body.querySelector('#assessment-next').onclick=()=>{state.specific={};questionSet.forEach(([key])=>{const selected=body.querySelector(`input[name="q-${key}"]:checked`);if(selected)state.specific[key]=selected.value;});state.step=4;render();};
      }

      if(state.step===4){
        const goal=state.specific[goalKey]||'';const flagged=Object.values(state.safety).includes('yes');
        body.innerHTML=`<h2 id="assessment-title">Your ${escapeHtml(state.program)} profile</h2><p class="assessment-copy">Review your answers before moving to the next stage.</p>${flagged?'<div class="assessment-alert">Safety review recommended before exercise prescription.</div>':''}<div class="assessment-profile"><div class="profile-card"><span>Selected program</span><strong>${escapeHtml(state.program)}</strong></div><div class="profile-card"><span>Program price</span><strong>${escapeHtml(state.price)}</strong></div><div class="profile-card"><span>Primary goal</span><strong>${escapeHtml(goal||'Not selected')}</strong></div><div class="profile-card"><span>Fitness level</span><strong>${escapeHtml(state.basic.level)}</strong></div><div class="profile-card"><span>Training environment</span><strong>${escapeHtml(state.basic.env||'Not specified')}</strong></div><div class="profile-card"><span>Training availability</span><strong>${escapeHtml(state.basic.days||'Not specified')} days/week</strong></div></div><div class="program-focus"><strong>Program-specific answers captured:</strong> ${Object.keys(state.specific).length} / ${questionSet.length}</div><div class="assessment-actions"><button class="button button-quiet" id="assessment-back">← Edit answers</button><div class="right"><button class="button button-gold" id="assessment-finish">Save assessment →</button></div></div>`;
        body.querySelector('#assessment-back').onclick=()=>{state.step=3;render();};
        body.querySelector('#assessment-finish').onclick=()=>{overlay.remove();window.dispatchEvent(new CustomEvent('fitnessAssessmentComplete',{detail:state}));};
      }
    };
    overlay.querySelector('.assessment-close').onclick=()=>overlay.remove();
    render();
  };

  document.addEventListener('click',(event)=>{const button=event.target.closest('#program-grid [data-program]');if(!button)return;event.stopImmediatePropagation();const oldDialog=document.querySelector('#checkout');if(oldDialog?.open)oldDialog.close();createAssessment(button.dataset.program,button.dataset.price);},true);
})();
