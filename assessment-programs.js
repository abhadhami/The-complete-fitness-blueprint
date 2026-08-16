/* Special Populations: one dedicated category only.
   No beginner / intermediate / advanced classification.
   UI/UX, pricing and checkout are untouched.
*/
window.blueprintQuestionSets = {
  'Special Populations': [
    ['population','Special category / need',['Older adult','Chronic-condition-aware training','Post-rehabilitation','Mobility-limited adult','Disability / adaptive fitness','Other clinician-identified need']],
    ['mainGoal','Primary goal',['Strength','Mobility','Balance / independence','General fitness','Confidence with movement']],
    ['capacity','Current functional capacity',['Independent','Needs occasional support','Needs frequent support','Unsure']],
    ['balance','Balance / fall-risk consideration',['No known concern','Mild concern','Significant concern','Prefer clinician input']],
    ['restriction','Known exercise restrictions',['None known','Specific movements restricted','Load / intensity restricted','Clinician/physio restrictions']],
    ['environment','Training environment',['Gym','Home','Supervised setting','Mixed']]
  ]
};

if (typeof questionSets !== 'undefined' && window.blueprintQuestionSets) {
  Object.keys(window.blueprintQuestionSets).forEach(function(name){
    questionSets[name] = window.blueprintQuestionSets[name];
  });
}
