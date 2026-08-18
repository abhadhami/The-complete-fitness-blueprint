/* Program-specific assessment question sets.
   Each program keeps its own primary goals and supporting questions.
   Special Populations remains a dedicated category; no beginner/intermediate/advanced split.
   UI/UX, pricing and checkout are untouched.
*/
window.blueprintQuestionSets = {
  'Muscle Building': [
    ['mainGoal','Primary goal',['Lean Muscle Mass — Hypertrophy','Very Lean / Under-Muscled — Build Muscle from the Start','Aesthetic / Physique Development','Bulking / Mass Gain','Cutting — Preserve Muscle','Body Recomposition','Muscle + Strength','Specific Muscle Group Development','Not Sure What I Need']],
    ['equipment','Training environment / equipment',['Full gym','Home + dumbbells/basic equipment','Bodyweight only — no equipment','Resistance bands','Mixed equipment']],
    ['experience','Current resistance-training experience',['New to structured muscle building','Regular exerciser — needs guidance','Experienced / confident trainee','Advanced / performance-focused']],
    ['focus','Training preference',['Full-body development','Upper / lower split','Push / pull / legs','Flexible / mixed']],
    ['priority','Muscle-building priority',['Overall balanced development','Chest / shoulders / arms','Back / lats','Glutes / legs','Core']],
    ['recovery','Recovery capacity',['Good','Average','Needs improvement']]
  ],
  'Weight Loss': [
    ['mainGoal','Primary goal',['Fat loss','Fat loss + strength','Fat loss + fitness','Body recomposition']],
    ['equipment','Training environment',['Gym','Home','Bodyweight only','Mixed']],
    ['activity','Current activity',['Low','Moderate','High']],
    ['preference','Training preference',['Strength-focused','Cardio-focused','Mixed']],
    ['constraint','Main challenge',['Consistency','Time','Food habits','Motivation','Exercise confidence']]
  ],
  'Thyroid Fitness': [
    ['mainGoal','Primary goal',['Weight management','Strength / muscle','Energy & conditioning','Mobility & general fitness']],
    ['thyroidType','Thyroid type / diagnosis',['Hypothyroidism','Hyperthyroidism','Post-thyroid treatment / surgery','Unsure / not diagnosed']],
    ['medicalGuidance','Current medical guidance',['No exercise restriction','Some restrictions','Clinician-guided exercise']],
    ['energy','Typical energy level',['Good','Variable','Often low']],
    ['environment','Training environment',['Gym','Home','Bodyweight','Mixed']]
  ],
  'PCOS / PCOD': [
    ['mainGoal','Primary goal',['Body composition / fat loss','Strength / muscle','Cardiometabolic fitness','Cycle- and lifestyle-supportive fitness']],
    ['condition','Primary condition',['PCOS','PCOD / irregular cycles','Both / overlapping diagnosis','Unsure']],
    ['equipment','Training environment',['Gym','Home','Bodyweight','Mixed']],
    ['training','Training preference',['Strength','Cardio / conditioning','Mixed']],
    ['cycle','Cycle consideration',['Regular','Irregular','Currently unpredictable','Prefer not to say']]
  ],
  'Female Fitness': [
    ['mainGoal','Primary goal',['Strength','Muscle gain','Fat loss / body composition','Mobility / conditioning','General fitness']],
    ['lifeStage','Current stage / consideration',['General adult fitness','Postpartum / return to training','Perimenopause / menopause','Other / prefer not to specify']],
    ['equipment','Training environment',['Gym','Home','Bodyweight','Mixed']],
    ['preference','Training preference',['Strength','Conditioning','Mixed']],
    ['priority','Priority area',['Full-body','Lower body / glutes','Upper body','Core / trunk']]
  ],
  'Diabetes Fitness': [
    ['mainGoal','Primary goal',['Cardiometabolic fitness','Strength','Weight management','Mobility / general fitness']],
    ['diabetesType','Diabetes type',['Type 1','Type 2','Prediabetes / insulin resistance','Other / unsure']],
    ['guidance','Exercise guidance',['No restriction known','Clinician-guided','Need medical clearance / guidance']],
    ['equipment','Training environment',['Gym','Home','Bodyweight','Mixed']],
    ['preference','Training preference',['Strength','Conditioning','Mixed']]
  ],
  'Posture & Movement Correction': [
    ['mainGoal','Primary goal',['Postural awareness','Movement quality','Mobility','Stability / motor control']],
    ['area','Main area of concern',['Neck / upper back','Shoulders','Low back / pelvis','Hips','Whole-body movement']],
    ['pain','Current pain consideration',['No pain','Occasional discomfort','Persistent pain / needs professional input']],
    ['environment','Training environment',['Home','Gym','Bodyweight','Mixed']]
  ],
  'Shoulder Health & Mobility': [
    ['mainGoal','Primary goal',['Shoulder mobility','Shoulder stability','Strength / capacity','Movement control / return to training']],
    ['side','Affected side',['Left','Right','Both','No specific side']],
    ['status','Current status',['No pain','Mild / occasional symptoms','Recent injury / rehab','Clinician-guided return']],
    ['environment','Training environment',['Home','Gym','Bodyweight','Mixed']]
  ],
  'Knee Health & Rehabilitation': [
    ['mainGoal','Primary goal',['Knee function','Strength / capacity','Mobility','Stability / movement confidence']],
    ['side','Affected side',['Left','Right','Both','No specific side']],
    ['status','Current status',['No pain','Mild / occasional symptoms','Post-injury / rehab','Clinician-guided return']],
    ['environment','Training environment',['Home','Gym','Bodyweight','Mixed']]
  ],
  'Special Populations': [
    ['population','Special category / need',['Older adult','Chronic-condition-aware training','Post-rehabilitation','Mobility-limited adult','Disability / adaptive fitness','Other clinician-identified need']],
    ['mainGoal','Primary goal',['Strength','Mobility','Balance / independence','General fitness','Confidence with movement']],
    ['capacity','Current functional capacity',['Independent','Needs occasional support','Needs frequent support','Unsure']],
    ['balance','Balance / fall-risk consideration',['No known concern','Mild concern','Significant concern','Prefer clinician input']],
    ['restriction','Known exercise restrictions',['None known','Specific movements restricted','Load / intensity restricted','Clinician/physio restrictions']],
    ['environment','Training environment',['Gym','Home','Supervised setting','Mixed']]
  ],
  'Functional Training': [
    ['mainGoal','Primary goal',['Functional strength','Movement quality','Core stability','Balance / coordination','Conditioning']],
    ['equipment','Training environment',['Gym','Home','Bodyweight','Mixed']],
    ['priority','Priority area',['Whole-body movement','Core','Lower body','Upper body','Balance / coordination']],
    ['preference','Training preference',['Strength','Mobility','Conditioning','Mixed']]
  ],
  'Strength & Conditioning': [
    ['mainGoal','Primary goal',['Max strength','Power','Strength endurance','Conditioning','Speed / acceleration']],
    ['environment','Training environment',['Gym','Home / limited equipment','Field / outdoor','Mixed']],
    ['equipment','Equipment access',['Full gym','Free weights','Bodyweight / bands','Mixed']],
    ['priority','Primary performance quality',['Strength','Power','Speed','Endurance','Mixed']]
  ],
  'Sport-Specific Performance': [
    ['performanceGoal','Performance goal',['Speed / acceleration','Power','Strength','Agility / change of direction','Endurance / sport-specific conditioning']],
    ['sport','Sport / activity',['Field sport','Court sport','Combat sport','Endurance sport','Other']],
    ['environment','Training environment',['Gym','Field / court','Home','Mixed']],
    ['season','Current phase',['Off-season / development','Pre-season','In-season','Return from break / injury']]
  ]
};

if (typeof questionSets !== 'undefined' && window.blueprintQuestionSets) {
  Object.keys(window.blueprintQuestionSets).forEach(function(name){
    questionSets[name] = window.blueprintQuestionSets[name];
  });
}
