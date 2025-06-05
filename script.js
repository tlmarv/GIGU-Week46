// Quiz Data
const quizData = [
  {
    "question": "A study is evaluating a new cholesterol-lowering drug. Researchers assume there is no difference between the new drug and placebo but want to detect a true difference if one exists. Which of the following correctly describes a Type I error in the context of this study?",
    "choices": [
      "Concluding there is no difference when in fact there is one",
      "Concluding there is a difference when in fact there is none",
      "Using an incorrect measure of central tendency",
      "Using a small sample size leading to underpowering",
      "Failing to detect an effect due to high variability in the data"
    ],
    "correctAnswer": 1,
    "explanation": "A Type I error occurs when the null hypothesis is rejected even though it is true—in this context, concluding there is a statistically significant effect of the drug when in reality, no true effect exists. Type II error (choice A) is the opposite—failing to detect an actual effect. Choices C, D, and E describe general design or analytic issues but not statistical errors defined by hypothesis testing."
  },
  {
    "question": "In a clinical trial comparing three different antihypertensive drugs, the average blood pressure was compared across all three treatment groups. Which of the following statistical tests is most appropriate for analyzing this data?",
    "choices": [
      "Paired t-test",
      "Chi-square test",
      "One-way ANOVA",
      "Pearson correlation",
      "Fisher's exact test"
    ],
    "correctAnswer": 2,
    "explanation": "One-way ANOVA is used to compare the means of three or more independent groups when the dependent variable is continuous (such as blood pressure). A paired t-test (A) is used for pre/post data on the same subjects. Chi-square (B) and Fisher’s exact (E) are used for categorical variables. Pearson correlation (D) is used for evaluating the linear relationship between two continuous variables."
  },
  {
    "question": "A sample of 40 adults has a mean systolic blood pressure of 130 mmHg with a standard deviation of 12 mmHg. What is the approximate 95% confidence interval for the population mean systolic blood pressure?",
    "choices": [
      "130 ± 1.96 mmHg",
      "130 ± 3.0 mmHg",
      "130 ± 3.7 mmHg",
      "130 ± 4.2 mmHg",
      "130 ± 5.9 mmHg"
    ],
    "correctAnswer": 2,
    "explanation": "The 95% confidence interval is calculated using the formula: mean ± (1.96 × standard error). Standard error (SE) = SD / √n = 12 / √40 ≈ 1.9. Then, CI ≈ 130 ± (1.96 × 1.9) ≈ 130 ± 3.7. Choice A fails to use the standard error. Choices D and E overestimate, and B underestimates the margin of error."
  },
  {
    "question": "A 9-year-old boy is brought to the physician due to rapid weight gain and muscle weakness. Physical examination reveals central obesity, moon facies, and purple abdominal striae. Laboratory tests show elevated ACTH and cortisol levels. A high-dose dexamethasone test suppresses cortisol levels. Histology of the resected pituitary tumor reveals ACTH-positive staining. What is the most likely origin of the tumor cells?",
    "choices": [
      "Acidophils",
      "Chromophobes",
      "Basophils",
      "Folliculostellate cells",
      "Pituicytes"
    ],
    "correctAnswer": 2,
    "explanation": "This patient has Cushing disease caused by a pituitary corticotroph adenoma. Corticotrophs, which secrete ACTH, are a subtype of basophils in the anterior pituitary. While some tumors may appear acidophilic due to altered H&E staining, immunohistochemistry confirms their basophilic identity. Acidophils secrete GH and prolactin, chromophobes are non-secretory, folliculostellate cells support function but are non-endocrine, and pituicytes are glial cells of the posterior pituitary."
  },
  {
    "question": "A 42-year-old woman presents with hypertension and hypokalemia. Labs reveal elevated aldosterone and suppressed plasma renin activity. Imaging reveals a unilateral adrenal mass. Histology shows small, dark-staining cells arranged in spherical clusters. Which layer of the adrenal gland is most likely involved?",
    "choices": [
      "Zona fasciculata",
      "Zona reticularis",
      "Zona glomerulosa",
      "Adrenal medulla",
      "Capsule"
    ],
    "correctAnswer": 2,
    "explanation": "The zona glomerulosa produces mineralocorticoids like aldosterone and consists of small cells in rounded clusters. Hyperaldosteronism (e.g., Conn syndrome) typically results from an aldosterone-producing adenoma in this layer. The zona fasciculata (large, pale cells in fascicles) produces cortisol. The zona reticularis produces androgens. The adrenal medulla produces catecholamines and contains chromaffin cells. The capsule is connective tissue and not hormonally active."
  },
  {
    "question": "A 17-year-old patient is diagnosed with type 1 diabetes mellitus after presenting with polyuria, polydipsia, and weight loss. Pancreatic histology shows lymphocytic infiltration of the islets of Langerhans. Which of the following is the most likely mechanism responsible for this patient’s condition?",
    "choices": [
      "Amyloid deposition within islets",
      "Insulin receptor mutation",
      "Autoimmune destruction of β cells",
      "α-cell neoplasia",
      "Increased pancreatic polypeptide secretion"
    ],
    "correctAnswer": 2,
    "explanation": "Type 1 diabetes mellitus is caused by autoimmune destruction of pancreatic β cells, leading to decreased insulin production. Histology shows lymphocytic infiltration of islets. Amyloid deposition occurs in type 2 diabetes. Insulin receptor mutations cause rare forms of insulin resistance. α-cell neoplasia would increase glucagon, not destroy β cells. Pancreatic polypeptide secretion has minimal role in glucose homeostasis."
  },
  {
    "question": "A 15-year-old girl is evaluated for delayed puberty. Physical examination reveals short stature and delayed growth spurts. Serum GH levels are elevated, but serum IGF-1 levels are low. Administration of exogenous GH does not increase serum IGF-1 levels. Which of the following is the most likely underlying cause of this patient's condition?",
    "choices": [
      "Pituitary macroadenoma",
      "GH receptor mutation",
      "Somatostatin overproduction",
      "IGF-1 receptor mutation",
      "Thyroid hormone deficiency"
    ],
    "correctAnswer": 1,
    "explanation": "This patient presents with features of **Laron syndrome**, a condition caused by a mutation in the **growth hormone receptor**, leading to GH resistance. GH levels are elevated due to lack of feedback inhibition, but IGF-1 remains low because GH signaling is impaired. Exogenous GH administration is ineffective. A pituitary macroadenoma would increase GH and possibly IGF-1. Somatostatin overproduction would suppress GH. IGF-1 receptor mutation would not affect IGF-1 levels but would affect its action. Thyroid hormone deficiency can impair growth but usually affects GH secretion indirectly."
  },
  {
    "question": "A 45-year-old man presents with weight loss, increased appetite, palpitations, and heat intolerance. Examination reveals a diffusely enlarged thyroid and bilateral exophthalmos. Laboratory findings show low TSH and elevated T3/T4. Which of the following is the primary mechanism responsible for the ocular findings in this patient?",
    "choices": [
      "Overproduction of thyroid hormone by follicular cells",
      "Increased sympathetic tone on orbital structures",
      "Autoantibody activation of TSH receptors in thyroid epithelium",
      "Fibroblast stimulation by TSH receptor antibodies in orbital tissue",
      "Increased conversion of T4 to T3 in the orbit"
    ],
    "correctAnswer": 3,
    "explanation": "**Graves disease** is characterized by autoantibodies that stimulate the TSH receptor. While this explains the hyperthyroid state (choice C), the **exophthalmos** is due to **TSH receptor activation on orbital fibroblasts**, causing glycosaminoglycan deposition, edema, and inflammation (choice D). Choice A explains the general hyperthyroid state, but not the eye findings. Increased sympathetic tone contributes to lid lag but not exophthalmos. T4-to-T3 conversion in the orbit is not pathophysiologically significant in exophthalmos."
  },
  {
    "question": "A researcher studying thyroid physiology administers high-dose iodide to rats. Histologic sections of the thyroid reveal decreased colloid uptake and reduced T3/T4 secretion. Which of the following best explains this effect?",
    "choices": [
      "Inhibition of iodide organification",
      "Inhibition of thyroglobulin synthesis",
      "Destruction of follicular cells",
      "Enhanced deiodinase activity",
      "Inhibition of thyroid-stimulating hormone (TSH) release"
    ],
    "correctAnswer": 0,
    "explanation": "High-dose iodide can lead to the **Wolff-Chaikoff effect**, a transient suppression of thyroid hormone synthesis due to inhibition of **iodide organification**. This reduces thyroid hormone production and colloid uptake. This is different from radioactive destruction (choice C). Thyroglobulin synthesis is not directly inhibited. Deiodinase activity primarily regulates peripheral conversion of T4 to T3 (not colloid uptake). TSH suppression occurs in hyperthyroidism, not in this scenario of high iodide exposure."
  },
  {
    "question": "A 9-year-old boy is brought to the ER with vomiting, abdominal pain, and rapid breathing. Physical exam reveals Kussmaul respirations and dry mucous membranes. Labs show hyperglycemia, elevated anion gap metabolic acidosis, and positive serum ketones. Which of the following mechanisms most directly contributes to the metabolic acidosis observed in this patient?",
    "choices": [
      "Accumulation of lactic acid due to anaerobic glycolysis",
      "Increased renal ammoniagenesis",
      "Beta-oxidation of fatty acids and ketone body production",
      "Decreased insulin-mediated GLUT4 translocation",
      "Enhanced glycogenolysis"
    ],
    "correctAnswer": 2,
    "explanation": "This patient has diabetic ketoacidosis (DKA), a complication of Type 1 diabetes caused by insulin deficiency. Without insulin, lipolysis and beta-oxidation of fatty acids is upregulated, producing large amounts of ketone bodies (acetoacetate, beta-hydroxybutyrate), leading to high anion gap metabolic acidosis. Lactic acidosis can cause acidosis but is not the main driver here. GLUT4 dysfunction contributes to hyperglycemia but not acidosis. Glycogenolysis raises glucose but does not cause acidosis."
  },
  {
    "question": "A 55-year-old man is newly diagnosed with type 2 diabetes mellitus. He is started on metformin. Which of the following best describes the primary mechanism by which this drug lowers blood glucose levels?",
    "choices": [
      "Stimulation of pancreatic insulin release",
      "Inhibition of intestinal glucose absorption",
      "Inhibition of hepatic gluconeogenesis",
      "Activation of insulin receptors on muscle and adipose",
      "Inhibition of SGLT2 in the proximal tubule"
    ],
    "correctAnswer": 2,
    "explanation": "Metformin, the first-line treatment for type 2 diabetes, primarily works by inhibiting hepatic gluconeogenesis, reducing liver glucose output. It also increases peripheral insulin sensitivity but this is secondary. It does not stimulate insulin secretion, which is a mechanism of sulfonylureas. SGLT2 inhibition is the mechanism of canagliflozin. Metformin has no significant effect on intestinal glucose absorption or direct activation of insulin receptors."
  },
  {
    "question": "A 60-year-old woman with poorly controlled type 2 diabetes is found to have elevated serum creatinine and persistent albuminuria. Which of the following renal structures is most likely the primary site of diabetic damage in this patient?",
    "choices": [
      "Proximal convoluted tubule",
      "Distal convoluted tubule",
      "Glomerular basement membrane",
      "Macula densa",
      "Loop of Henle"
    ],
    "correctAnswer": 2,
    "explanation": "Diabetic nephropathy primarily affects the glomerular basement membrane (GBM) and mesangial matrix, leading to thickening, sclerosis, and albuminuria. This is the first manifestation of renal involvement in long-standing diabetes. Tubular involvement can occur later, but GBM injury is central. The macula densa is involved in tubuloglomerular feedback, not directly damaged in early diabetic nephropathy."
  },
  {
    "question": "A 13-year-old boy is brought to the ER with vomiting, abdominal pain, rapid breathing, and confusion. His serum glucose is 430 mg/dL, pH is 7.15, bicarbonate is 10 mEq/L, and serum ketones are positive. Which of the following mechanisms best explains the development of his acid-base status?",
    "choices": [
      "Activation of insulin-dependent GLUT4 receptors",
      "Overproduction of lactic acid from anaerobic glycolysis",
      "Beta-oxidation of fatty acids due to insulin deficiency",
      "Increased hepatic glycogen synthesis",
      "Inhibition of glucagon secretion"
    ],
    "correctAnswer": 2,
    "explanation": "This patient is in diabetic ketoacidosis (DKA), characterized by anion gap metabolic acidosis and positive serum ketones. In the absence of insulin, hormone-sensitive lipase is activated, leading to lipolysis and release of free fatty acids. These are converted to ketone bodies (acetoacetate, beta-hydroxybutyrate) via beta-oxidation in the liver, causing acidosis. GLUT4 activation occurs in the presence of insulin. Lactic acidosis may occur but is not the main driver in DKA. Glycogen synthesis is insulin-dependent and suppressed here. Glucagon secretion is increased, not inhibited."
  },
  {
    "question": "A 50-year-old man with poorly controlled type 2 diabetes has elevated triglycerides and LDL-C despite statin use. He is obese, with high leptin levels and elevated fasting insulin. Which of the following best explains his persistent dyslipidemia?",
    "choices": [
      "Increased insulin-stimulated lipoprotein lipase activity",
      "Enhanced leptin signaling on hypothalamic neurons",
      "Leptin resistance and impaired lipid oxidation",
      "Excess secretion of ketone bodies due to glucagon",
      "Decreased VLDL production by the liver"
    ],
    "correctAnswer": 2,
    "explanation": "Leptin resistance, often seen in obesity and type 2 diabetes, leads to impaired feedback regulation of appetite and fat metabolism. This contributes to dyslipidemia by reducing fatty acid oxidation and promoting hepatic lipid accumulation. Insulin resistance also impairs suppression of VLDL production. Lipoprotein lipase activity is actually reduced in insulin resistance. Leptin signaling is blunted, not enhanced. Excess ketone production is more associated with type 1 diabetes and DKA, not T2DM. VLDL production is increased, not decreased."
  },
  {
    "question": "A 68-year-old woman presents with new-onset confusion and lethargy. Her blood glucose is 740 mg/dL. Labs reveal normal serum ketones, a pH of 7.38, and a serum osmolality of 330 mOsm/kg. Which of the following best explains the absence of ketone production in this patient?",
    "choices": [
      "Excess catecholamine activation of hormone-sensitive lipase",
      "Persistent hepatic gluconeogenesis from amino acids",
      "Sufficient insulin to suppress lipolysis and ketogenesis",
      "Severe inhibition of pyruvate dehydrogenase activity",
      "Elevated growth hormone stimulating lipolysis"
    ],
    "correctAnswer": 2,
    "explanation": "This patient has hyperosmolar hyperglycemic state (HHS), commonly seen in type 2 diabetes. Although insulin levels are insufficient to suppress hepatic glucose production, they are adequate to inhibit lipolysis and ketogenesis, explaining the absence of ketones. In contrast, DKA occurs when insulin is nearly absent. Catecholamines, GH, and gluconeogenesis may contribute to hyperglycemia but do not directly suppress ketone formation. PDH inhibition is more relevant in lactic acidosis."
  },
  {
    "question": "A 13-year-old boy is brought to the ER with vomiting, abdominal pain, rapid breathing, and confusion. His serum glucose is 430 mg/dL, pH is 7.15, bicarbonate is 10 mEq/L, and serum ketones are positive. Which of the following mechanisms best explains the development of his acid-base status?",
    "choices": [
      "Activation of insulin-dependent GLUT4 receptors",
      "Overproduction of lactic acid from anaerobic glycolysis",
      "Beta-oxidation of fatty acids due to insulin deficiency",
      "Increased hepatic glycogen synthesis",
      "Inhibition of glucagon secretion"
    ],
    "correctAnswer": 2,
    "explanation": "This patient is in diabetic ketoacidosis (DKA), characterized by anion gap metabolic acidosis and positive serum ketones. In the absence of insulin, hormone-sensitive lipase is activated, leading to lipolysis and release of free fatty acids. These are converted to ketone bodies (acetoacetate, beta-hydroxybutyrate) via beta-oxidation in the liver, causing acidosis. GLUT4 activation occurs in the presence of insulin. Lactic acidosis may occur but is not the main driver in DKA. Glycogen synthesis is insulin-dependent and suppressed here. Glucagon secretion is increased, not inhibited."
  },
  {
    "question": "A 50-year-old man with poorly controlled type 2 diabetes has elevated triglycerides and LDL-C despite statin use. He is obese, with high leptin levels and elevated fasting insulin. Which of the following best explains his persistent dyslipidemia?",
    "choices": [
      "Increased insulin-stimulated lipoprotein lipase activity",
      "Enhanced leptin signaling on hypothalamic neurons",
      "Leptin resistance and impaired lipid oxidation",
      "Excess secretion of ketone bodies due to glucagon",
      "Decreased VLDL production by the liver"
    ],
    "correctAnswer": 2,
    "explanation": "Leptin resistance, often seen in obesity and type 2 diabetes, leads to impaired feedback regulation of appetite and fat metabolism. This contributes to dyslipidemia by reducing fatty acid oxidation and promoting hepatic lipid accumulation. Insulin resistance also impairs suppression of VLDL production. Lipoprotein lipase activity is actually reduced in insulin resistance. Leptin signaling is blunted, not enhanced. Excess ketone production is more associated with type 1 diabetes and DKA, not T2DM. VLDL production is increased, not decreased."
  },
  {
    "question": "A 68-year-old woman presents with new-onset confusion and lethargy. Her blood glucose is 740 mg/dL. Labs reveal normal serum ketones, a pH of 7.38, and a serum osmolality of 330 mOsm/kg. Which of the following best explains the absence of ketone production in this patient?",
    "choices": [
      "Excess catecholamine activation of hormone-sensitive lipase",
      "Persistent hepatic gluconeogenesis from amino acids",
      "Sufficient insulin to suppress lipolysis and ketogenesis",
      "Severe inhibition of pyruvate dehydrogenase activity",
      "Elevated growth hormone stimulating lipolysis"
    ],
    "correctAnswer": 2,
    "explanation": "This patient has hyperosmolar hyperglycemic state (HHS), commonly seen in type 2 diabetes. Although insulin levels are insufficient to suppress hepatic glucose production, they are adequate to inhibit lipolysis and ketogenesis, explaining the absence of ketones. In contrast, DKA occurs when insulin is nearly absent. Catecholamines, GH, and gluconeogenesis may contribute to hyperglycemia but do not directly suppress ketone formation. PDH inhibition is more relevant in lactic acidosis."
  },
  {
    "question": "A 14-year-old girl is brought to the ER with confusion, vomiting, and rapid breathing. Blood glucose is 330 mg/dL. Arterial blood gas reveals pH 7.1, and serum ketones are positive. Which of the following features is most characteristic of her condition?",
    "choices": [
      "Amyloid deposition in pancreatic islets",
      "Obesity with insulin resistance",
      "Autoantibodies against pancreatic beta-cell components",
      "Hyperinsulinemia in the early disease course",
      "Absence of HLA linkage"
    ],
    "correctAnswer": 2,
    "explanation": "This is a classic presentation of Type 1 diabetes mellitus, characterized by autoimmune destruction of pancreatic beta cells. Autoantibodies such as those against glutamic acid decarboxylase (GAD) are commonly present. Amyloid deposition and hyperinsulinemia are features of Type 2 diabetes. Type 1 diabetes is associated with HLA-DR3 and/or DR4, not absent HLA linkage."
  },
  {
    "question": "A 65-year-old woman with longstanding type 2 diabetes presents with decreased vision. Fundoscopy shows neovascularization and macular edema. She later dies suddenly at home. Which of the following is the most likely cause of death in this patient?",
    "choices": [
      "Proliferative retinopathy",
      "Autonomic neuropathy",
      "Glomerulosclerosis",
      "Atherosclerotic cardiovascular disease",
      "Diabetic ketoacidosis"
    ],
    "correctAnswer": 3,
    "explanation": "Although she has diabetic retinopathy, the leading cause of death in diabetic patients is atherosclerotic cardiovascular disease, especially myocardial infarction. Autonomic neuropathy and glomerulosclerosis are complications but not the most common cause of death. Diabetic ketoacidosis is less common in long-standing type 2 diabetes."
  },
  {
    "question": "A 63-year-old obese man with longstanding type 2 diabetes presents with calf pain and exertional leg cramps. He has absent dorsalis pedis pulses. Fundoscopy reveals retinal neovascularization and hemorrhages. Which of the following mechanisms most likely played a central role in his disease?",
    "choices": [
      "Peripheral insulin resistance leading to hyperglycemia",
      "Antigen mimicry triggering beta-cell autoimmunity",
      "Glycosylation of hemoglobin causing vascular occlusion",
      "CD4+ T cell activation and autoimmune insulitis",
      "Amyloidosis of pancreatic islets"
    ],
    "correctAnswer": 0,
    "explanation": "The primary mechanism of type 2 diabetes is peripheral tissue resistance to insulin. Chronic hyperglycemia leads to microvascular and macrovascular complications such as retinopathy and peripheral vascular disease. Autoimmune mechanisms are characteristic of type 1 diabetes. Glycosylated hemoglobin (HbA1c) is a marker, not a cause, of vascular damage. Amyloidosis occurs in islets in T2DM but doesn't explain systemic vascular disease."
  },
  {
    "question": "A 58-year-old woman with type 2 diabetes mellitus is started on a new medication. She reports nausea and early satiety. She loses 12 pounds over the next 3 months and her HbA1c drops by 1.9%. This drug works by mimicking an incretin hormone and slowing gastric emptying. Which of the following additional benefits is most likely seen with this drug class?",
    "choices": [
      "Increased bone density",
      "Improved cardiovascular and renal outcomes",
      "Hypoglycemia independent of insulin use",
      "Improved insulin sensitivity in skeletal muscle",
      "Reduction in hepatic glucose output via AMPK"
    ],
    "correctAnswer": 1,
    "explanation": "This patient is taking a GLP-1 receptor agonist, such as semaglutide or liraglutide. These drugs mimic incretin hormones, slow gastric emptying, reduce appetite, and promote weight loss. They also provide cardiovascular and renal protective effects. They have low risk of hypoglycemia unless combined with insulin or sulfonylureas. They do not directly activate AMPK (that’s metformin) or improve muscle insulin sensitivity (seen with TZDs)."
  },
  {
    "question": "A 67-year-old man with type 2 diabetes and chronic kidney disease (eGFR 28 mL/min/1.73m²) is being evaluated for better glycemic control. Which of the following medications is contraindicated in this patient due to increased risk of life-threatening acidosis?",
    "choices": [
      "Canagliflozin",
      "Metformin",
      "Pioglitazone",
      "Sitagliptin",
      "Glipizide"
    ],
    "correctAnswer": 1,
    "explanation": "Metformin is contraindicated in patients with significant renal impairment due to the risk of lactic acidosis. It is excreted unchanged by the kidneys. SGLT2 inhibitors (like canagliflozin) are also avoided in eGFR <30, but their main risks are UTIs and volume depletion, not lactic acidosis. Pioglitazone is hepatically cleared. Sitagliptin can be used with dose adjustment. Glipizide requires caution but is not absolutely contraindicated."
  },
  {
    "question": "A 70-year-old woman with poorly controlled type 2 diabetes is started on a new oral agent. One week later, she experiences hypoglycemia after skipping lunch. The drug increases insulin secretion by closing beta-cell ATP-sensitive potassium channels. Which of the following drugs was most likely prescribed?",
    "choices": [
      "Metformin",
      "Acarbose",
      "Pioglitazone",
      "Repaglinide",
      "Liraglutide"
    ],
    "correctAnswer": 3,
    "explanation": "Repaglinide is a meglitinide that acts like sulfonylureas by closing beta-cell ATP-sensitive K+ channels to increase insulin secretion. It has rapid onset and short duration, making it useful for postprandial glucose control, but it still carries a risk of hypoglycemia—especially if a meal is skipped. Metformin does not cause hypoglycemia. Acarbose blocks carbohydrate absorption. Pioglitazone improves insulin sensitivity. Liraglutide is a GLP-1 agonist and rarely causes hypoglycemia on its own."
  },
  {
    "question": "A 55-year-old man with diabetes mellitus presents with right-sided facial pain, fever, and dark eschar on the hard palate. Labs reveal a glucose of 801 mg/dL and pH of 7.20. A biopsy of the lesion shows broad, ribbon-like hyphae without septations. What is the most likely pathogen?",
    "choices": [
      "Histoplasma capsulatum",
      "Candida albicans",
      "Cryptococcus neoformans",
      "Aspergillus fumigatus",
      "Rhizopus species"
    ],
    "correctAnswer": 4,
    "explanation": "Rhizopus (a Mucorales genus) causes rhino-orbital-cerebral mucormycosis, a life-threatening fungal infection in diabetic patients, especially those in ketoacidosis. Pathology shows broad, non-septate, ribbon-like hyphae with angioinvasion. Histoplasma, Candida, and Cryptococcus show yeast forms, not hyphae. Aspergillus has septate hyphae branching at acute angles (≈45°), not the wide, non-septate hyphae seen here."
  },
  {
    "question": "A 70-year-old man with poorly controlled type 2 diabetes presents with fever, dysuria, and pneumaturia. CT scan reveals gas within the bladder wall. Which of the following is the most likely diagnosis?",
    "choices": [
      "Cystitis due to Candida albicans",
      "Emphysematous pyelonephritis",
      "Neurogenic bladder with retained urine",
      "Emphysematous cystitis",
      "Bladder diverticulosis"
    ],
    "correctAnswer": 3,
    "explanation": "Emphysematous cystitis is a rare but serious complication seen almost exclusively in diabetics. It is characterized by gas production in the bladder wall due to glucose-fermenting organisms like E. coli and Klebsiella. Pneumaturia (air in urine) and gas on imaging are hallmark findings. Pyelonephritis involves the kidney. Candida usually doesn't produce gas. Neurogenic bladder and diverticulosis do not explain gas formation."
  },
  {
    "question": "A 51-year-old man with diabetes and peripheral neuropathy presents with a shallow ulcer beneath his first metatarsal. He reports no pain. The ulcer is moist, non-malodorous, and without signs of surrounding cellulitis. Pedal pulses are present. What is the most appropriate next step in management?",
    "choices": [
      "Initiate empiric vancomycin and ceftazidime",
      "Apply a total contact cast and re-evaluate in one week",
      "Obtain an MRI to rule out osteomyelitis",
      "Begin oral fluconazole empirically",
      "Refer to vascular surgery for possible revascularization"
    ],
    "correctAnswer": 1,
    "explanation": "The best next step is pressure off-loading with a total contact cast. In this patient, the ulcer is shallow and non-infected, with intact pulses, so antibiotics or urgent imaging are not warranted yet. MRI is indicated if there’s concern for osteomyelitis (deep ulcer, probing to bone, systemic signs). Vascular referral is unnecessary unless ankle/brachial index suggests ischemia. Fluconazole is inappropriate here."
  }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let answeredQuestions = JSON.parse(sessionStorage.getItem("answeredQuestions")) || new Array(quizData.length).fill(false);
let explanationsShown = JSON.parse(sessionStorage.getItem("explanationsShown")) || new Array(quizData.length).fill(false);
let selectedAnswers = JSON.parse(sessionStorage.getItem("selectedAnswers")) || new Array(quizData.length).fill(null);

// DOM Elements
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const explanationBox = document.getElementById("explanation");
const progressText = document.getElementById("progress");
const correctText = document.getElementById("correct");
const incorrectText = document.getElementById("incorrect");
const questionList = document.getElementById("question-list");
const quizContainer = document.querySelector(".quiz-content");
const resultsContainer = document.getElementById("results-container");

// Display Hotkey Info Popup
window.onload = function() {
    alert("Welcome to the quiz!\n\nHotkeys Available:\n- Space: Next Question\n- B: Previous Question\n- 1-5: Select Answer Choices\n Anki remotes should be compatible! \n\nGood luck!");
};

// Load Questions into Sidebar
quizData.forEach((_, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = index + 1;
    listItem.classList.add("question-bubble");
    listItem.onclick = () => loadQuestion(index);
    listItem.setAttribute("data-index", index);
    questionList.appendChild(listItem);
});

// Load Question
function loadQuestion(index) {
    if (index >= quizData.length) {
        showResults();
        return;
    }

    currentQuestionIndex = index;
    const q = quizData[index];
    
    questionText.textContent = q.question;
    choicesContainer.innerHTML = "";
    
    q.choices.forEach((choice, i) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => checkAnswer(i, button);
        button.classList.add("choice-btn");
        
        if (selectedAnswers[currentQuestionIndex] !== null) {
            if (i === selectedAnswers[currentQuestionIndex]) {
                button.style.backgroundColor = selectedAnswers[currentQuestionIndex] === q.correctAnswer ? "green" : "red";
            }
            if (i === q.correctAnswer) {
                button.style.backgroundColor = "green";
            }
        }
        
        choicesContainer.appendChild(button);
    });

    if (explanationsShown[currentQuestionIndex]) {
        explanationBox.textContent = q.explanation;
        explanationBox.classList.remove("hidden");
    } else {
        explanationBox.textContent = "";
        explanationBox.classList.add("hidden");
    }

    updateProgress();
}

// Check Answer
function checkAnswer(selectedIndex, button) {
    if (answeredQuestions[currentQuestionIndex]) return; // Prevent multiple answers

    const q = quizData[currentQuestionIndex];
    explanationBox.textContent = q.explanation;
    explanationBox.classList.remove("hidden");

    const questionBubble = document.querySelector(`.question-bubble[data-index="${currentQuestionIndex}"]`);

    if (selectedIndex === q.correctAnswer) {
        button.style.backgroundColor = "green";
        questionBubble.style.backgroundColor = "green";
        correctAnswers++;
    } else {
        button.style.backgroundColor = "red";
        questionBubble.style.backgroundColor = "red";
        incorrectAnswers++;
        
        // Highlight correct answer in green
        const buttons = choicesContainer.getElementsByTagName("button");
        buttons[q.correctAnswer].style.backgroundColor = "green";
    }

    answeredQuestions[currentQuestionIndex] = true; // Mark as answered
    explanationsShown[currentQuestionIndex] = true; // Keep explanation visible
    selectedAnswers[currentQuestionIndex] = selectedIndex;
    
    sessionStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions));
    sessionStorage.setItem("explanationsShown", JSON.stringify(explanationsShown));
    sessionStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
    
    updateProgress();
}

// Update Progress
function updateProgress() {
    progressText.textContent = `${currentQuestionIndex + 1}/${quizData.length}`;
    correctText.textContent = correctAnswers;
    incorrectText.textContent = incorrectAnswers;
}

// Show Final Results Popup
function showResultsPopup() {
    const scorePercentage = ((correctAnswers / quizData.length) * 100).toFixed(2);
    alert(`Quiz Completed!\n\nYour Score: ${correctAnswers}/${quizData.length} (${scorePercentage}%)\n\nCongratulations on finishing the quiz!`);
}

// Navigation Controls
document.getElementById("next-btn").onclick = () => {
    if (currentQuestionIndex + 1 >= quizData.length) {
        showResultsPopup();
    } else {
        loadQuestion(currentQuestionIndex + 1);
    }
};
document.getElementById("prev-btn").onclick = () => loadQuestion(Math.max(currentQuestionIndex - 1, 0));

// Hotkey Navigation & Answer Selection
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        loadQuestion(currentQuestionIndex + 1);
    } else if (event.code === "KeyB") {
        loadQuestion(Math.max(currentQuestionIndex - 1, 0));
    } else if (event.key >= "1" && event.key <= "5") {
        const answerIndex = parseInt(event.key) - 1;
        if (answerIndex < quizData[currentQuestionIndex].choices.length) {
            const buttons = choicesContainer.getElementsByTagName("button");
            if (buttons[answerIndex]) {
                buttons[answerIndex].click();
            }
        }
    }
});

// Load First Question on Start
loadQuestion(0);
