/* Program-specific assessment configuration for The Complete Fitness Blueprint.
   UI/UX remains unchanged. Each blueprint gets its own focused primary-goal and intake questions.
   This file is intentionally limited to assessment inputs; it does not change prices or checkout.
*/
window.blueprintQuestionSets = {
  'Muscle Building': [
    ['mainGoal','Primary goal',['Muscle gain / hypertrophy','Strength + muscle','Targeted muscle development','Lean mass / body recomposition']],
    ['targetArea','Primary target area',['Full body','Upper body','Lower body','Specific muscle group']],
    ['trainingAge','Resistance-training experience',['Beginner / returning','6–12 months','1–3 years','3+ years']],
    ['frequency','Realistic training frequency',['2 days/week','3 days/week','4 days/week','5+ days/week']],
    ['equipment','Equipment access',['Full gym','Home + dumbbells','Home + bands','Bodyweight / limited equipment']],
    ['nutritionPriority','Current nutrition priority',['Muscle-gain support','Adequate protein','Body recomposition','Not sure / need guidance']]
  ],

  'Weight Loss': [
    ['mainGoal','Primary goal',['Fat loss','Fat loss + strength','Fat loss + fitness','Body recomposition']],
    ['pace','Preferred approach',['Gradual / sustainable','Structured but flexible','Performance-focused fat loss','Not sure']],
    ['activity','Current activity level',['Mostly sedentary','Lightly active','Moderately active','Very active']],
    ['steps','Typical daily movement',['<3,000 steps','3,000–6,000','6,000–10,000','10,000+ / variable']],
    ['thyroid','Thyroid / hypothyroidism consideration',['No known thyroid condition','Diagnosed hypothyroidism','Other thyroid condition','Under evaluation / unsure']],
    ['barrier','Biggest barrier',['Consistency','Time','Nutrition habits','Low energy / recovery','Exercise confidence']]
  ],

  'Thyroid Fitness': [
    ['thyroidStatus','Thyroid status',['Diagnosed hypothyroidism','Other diagnosed thyroid condition','Under evaluation','No confirmed thyroid condition']],
    ['followup','Current medical follow-up',['Regular follow-up','Occasional follow-up','Recently diagnosed / adjusting care','Not currently']],
    ['treatment','Current treatment status',['Treatment stable','Treatment recently changed','Unsure / need to discuss with clinician','Not applicable']],
    ['energy','Typical energy / fatigue',['Good and stable','Variable','Frequently low','Exercise tolerance is limited']],
    ['mainGoal','Primary fitness goal',['Weight management','Strength / muscle','Mobility / conditioning','General fitness']],
    ['recovery','Recovery priority',['Sleep','Fatigue management','Stress management','Overall recovery']]
  ],

  'PCOS / PCOD': [
    ['conditionFocus','Condition pathway',['PCOS','PCOD / related diagnosis','Both / diagnosis wording is unclear','Under evaluation / not diagnosed']],
    ['mainGoal','Primary goal',['Body composition / fat loss','Strength / muscle','Fitness / endurance','Cycle- and lifestyle-supportive fitness']],
    ['activity','Current activity level',['Mostly sedentary','Lightly active','Moderately active','Very active']],
    ['cycle','Cycle-related consideration',['Regular / no major concern','Irregular cycles','Currently managing cycle-related symptoms','Prefer not to say']],
    ['metabolic','Metabolic consideration',['No known issue','Insulin resistance / prediabetes discussed','Blood-sugar concerns','Unsure / need clinician guidance']],
    ['sleepStress','Sleep / stress pattern',['Good recovery','Sleep inconsistent','High stress','Both sleep and stress need work']]
  ],

  'Female Fitness': [
    ['mainGoal','Primary goal',['Strength','Muscle gain','Fat loss / body composition','Mobility / conditioning','General fitness']],
    ['lifeStage','Life stage relevant to training',['Not applicable','Pregnancy','Postpartum','Perimenopause / menopause','Prefer not to say']],
    ['experience','Training experience',['Beginner','Intermediate','Advanced','Returning after a break']],
    ['cycle','Menstrual-cycle considerations',['No specific consideration','Cycle-related symptoms affect training','Irregular cycles','Prefer not to say']],
    ['corePelvic','Core / pelvic-floor consideration',['No concern','Would like preventive/core support','Symptoms or concern present','Postpartum-related concern']],
    ['priority','Current training priority',['Lower body','Upper body','Full body','Core + mobility','Conditioning']]
  ],

  'Diabetes Fitness': [
    ['diabetesType','Diabetes status',['Type 1','Type 2','Prediabetes / insulin resistance','Other / clinician-diagnosed glucose condition','Not confirmed']],
    ['management','Current management / follow-up',['Regular clinician follow-up','Medication / insulin management','Lifestyle-managed','Recently changed / needs review','Not sure']],
    ['exerciseExperience','Exercise experience',['Beginner','Returning after a break','Intermediate','Advanced']],
    ['mainGoal','Primary fitness goal',['Strength','Fat loss / body composition','Cardiorespiratory fitness','Mobility / general fitness']],
    ['lowGlucose','Exercise-related low-blood-sugar history',['No known episodes','Has happened before','Unsure','Prefer to discuss with clinician']],
    ['monitoring','Current glucose-monitoring approach',['Regular monitoring','Occasional monitoring','Continuous monitoring','Not currently monitoring / clinician-directed']]
  ],

  'Posture & Movement Correction': [
    ['mainGoal','Primary goal',['Posture awareness','Movement quality','Mobility','Reduce movement-related discomfort','Better exercise technique']],
    ['region','Main area of concern',['Neck / upper back','Shoulders','Mid / lower back','Hips / pelvis','Whole-body movement']],
    ['sitting','Daily sitting exposure',['<2 hours','2–5 hours','5–8 hours','8+ hours']],
    ['movementLimit','Main movement limitation',['Mobility','Stability / control','Balance','Coordination','Movement confidence']],
    ['painArea','Pain / discomfort pattern',['None','Occasional','Frequent','Movement-specific']],
    ['trainingGoal','Training context',['Desk-job movement','General fitness','Gym technique','Return to activity']]
  ],

  'Shoulder Health & Mobility': [
    ['side','Affected side',['Left','Right','Both','No specific side']],
    ['mainGoal','Primary goal',['Mobility','Strength / stability','Overhead movement','Return to training','General shoulder function']],
    ['symptom','Main limitation',['Stiffness','Pain with movement','Weakness / control','Reduced range of motion','No current symptoms']],
    ['movement','Most limited movement',['Overhead reach','Behind-the-back reach','Cross-body movement','Rotation','Not sure']],
    ['training','Training context',['Gym / strength training','Sport / recreation','Daily activities','Return after a break']],
    ['assessment','Previous assessment / injury history',['None known','Previous injury','Previous physiotherapy','Previous medical assessment','Unsure']]
  ],

  'Knee Health & Rehabilitation': [
    ['side','Affected knee',['Left','Right','Both','No specific side']],
    ['mainGoal','Primary goal',['Strength / capacity','Mobility','Return to exercise','Return to sport','General knee function']],
    ['trigger','Main activity limitation',['Stairs','Squatting','Walking','Running / jumping','Getting up / down']],
    ['symptom','Current symptom pattern',['No current symptoms','Pain with activity','Stiffness','Swelling','Instability / giving way']],
    ['history','Previous history',['None known','Previous injury','Surgery','Physiotherapy / rehabilitation','Medical assessment pending']],
    ['training','Current activity level',['Mostly inactive','Light activity','Regular exercise','Returning after rehabilitation']]
  ],

  'Special Populations': [
    ['population','Primary population / need',['Older adult','Beginner / deconditioned','Chronic-condition-aware training','Post-rehabilitation','Mobility-limited adult','Other clinician-identified need']],
    ['mainGoal','Primary goal',['Strength','Mobility','Balance / independence','General fitness','Confidence with movement']],
    ['capacity','Current functional capacity',['Independent','Needs occasional support','Needs frequent support','Unsure']],
    ['balance','Balance / fall-risk consideration',['No known concern','Mild concern','Significant concern','Prefer clinician input']],
    ['restriction','Known exercise restrictions',['None known','Specific movements restricted','Load / intensity restricted','Clinician/physio restrictions']],
    ['environment','Training environment',['Gym','Home','Supervised setting','Mixed']]
  ],

  'Functional Training': [
    ['mainGoal','Primary goal',['Daily-life function','Movement quality','Strength + mobility','Balance / coordination','General conditioning']],
    ['limitation','Main daily-life limitation',['Lifting / carrying','Stairs / getting up','Reaching','Walking / endurance','Balance / coordination','None specific']],
    ['movementPattern','Movement pattern to improve',['Squat','Hinge','Push','Pull','Carry','Rotate / brace']],
    ['mobility','Mobility priority',['Ankles','Hips','Thoracic spine','Shoulders','Whole body']],
    ['balance','Balance / coordination priority',['Not a priority','Basic balance','Single-leg control','Coordination / agility']],
    ['environment','Training environment',['Full gym','Home','Minimal equipment','Mixed']]
  ],

  'Strength & Conditioning': [
    ['mainGoal','Primary performance quality',['Max strength','Power','Strength endurance','Conditioning','Speed / acceleration','General performance']],
    ['trainingAge','Training experience',['Beginner','Intermediate','Advanced','Returning after a break']],
    ['frequency','Realistic training frequency',['2 days/week','3 days/week','4 days/week','5+ days/week']],
    ['currentRoutine','Current routine',['Strength-focused','Conditioning-focused','Mixed','Minimal training']],
    ['recovery','Recovery capacity',['Good','Variable','Often limited','Needs structured recovery']],
    ['equipment','Equipment access',['Full gym','Basic gym','Home + equipment','Limited equipment']]
  ],

  'Sport-Specific Performance': [
    ['sport','Sport / discipline',['Football / soccer','Cricket','Basketball','Volleyball','Combat sport','Running / athletics','Other']],
    ['role','Position / event / discipline detail',['Not applicable','Team position','Track / field event','Weight class / combat discipline','Other']],
    ['level','Competition level',['Recreational','School / college','Club / district','State / national','Elite / professional']],
    ['phase','Season / competition phase',['Off-season','Pre-season','In-season','Peak / competition period','Return to sport']],
    ['performanceGoal','Primary performance goal',['Speed / acceleration','Power','Strength','Agility / change of direction','Endurance','Sport-specific conditioning']],
    ['schedule','Sport-training schedule',['1–2 sessions/week','3–4 sessions/week','5+ sessions/week','Variable by competition']],
    ['limitation','Current performance limitation',['None identified','Strength','Speed / power','Conditioning','Mobility / movement','Injury-return limitation']]
  ]
};

// Safely replace the inline question sets when this file is loaded after index.html.
if (typeof questionSets !== 'undefined' && window.blueprintQuestionSets) {
  Object.keys(window.blueprintQuestionSets).forEach(function(name){
    questionSets[name] = window.blueprintQuestionSets[name];
  });
}
