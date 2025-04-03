// Quiz Data
const quizData = [
  {
    "question": "A 45-year-old woman undergoing chemotherapy for breast cancer is receiving a combination of ondansetron, dexamethasone, and aprepitant for nausea prevention. She develops elevated liver enzymes and dizziness after her second cycle. Her physician considers modifying her antiemetic regimen. Which of the following pharmacologic mechanisms is most likely responsible for her adverse effects?",
    "choices": [
      "5-HT3 receptor blockade in the chemoreceptor trigger zone",
      "NK1 receptor inhibition in the vomiting center",
      "D2 receptor blockade in the area postrema",
      "CB1 receptor activation at presynaptic terminals",
      "Glucocorticoid receptor activation in the nucleus"
    ],
    "correctAnswer": 1,
    "explanation": "Aprepitant, a neurokinin-1 (NK1) receptor antagonist, is known to cause dizziness, liver enzyme elevation, and rarely, severe skin reactions like Stevens-Johnson syndrome. It works by inhibiting substance P action at NK1 receptors in the CTZ and vomiting center. 5-HT3 blockade is the mechanism of ondansetron, which is generally well tolerated; adverse effects include headache and constipation, not hepatic enzyme elevation. D2 blockade  Promethazine and metoclopramide act here and are associated with extrapyramidal symptoms, not liver enzyme abnormalities.CB1 activation Cannabinoids like dronabinol cause euphoria and dizziness, but are not part of this patient’s regimen.Glucocorticoid activation Dexamethasone’s side effects include hyperglycemia and mood changes, not hepatotoxicity or dizziness."
  },
  {
    "question": "A 32-year-old pregnant woman at 8 weeks gestation presents with persistent vomiting. She is diagnosed with hyperemesis gravidarum. Her physician is cautious about teratogenicity and avoids prescribing a certain antiemetic. Which of the following drugs is most likely to be avoided in this case due to first trimester risk?",
    "choices": [
      "Meclizine",
      "Diphenhydramine",
      "Ondansetron",
      "Promethazine",
      "Scopolamine"
    ],
    "correctAnswer": 2,
    "explanation": "Ondansetron has been associated with a potential risk of orofacial malformations when used during the first trimester, making it less preferred in early pregnancy despite its effectiveness for nausea.Meclizine is an H1 blocker considered safe in pregnancy and often used for morning sickness.Diphenhydramine is another antihistamine generally regarded as safe in early pregnancy. Promethazine: though it has a black box warning for IV tissue injury, it's considered reasonably safe orally in pregnancy.Scopolamine is used mainly for motion sickness and usually avoided in pregnancy due to limited safety data, but not directly linked to teratogenicity like ondansetron."
  },
  {
    "question": "A 60-year-old man undergoing abdominal surgery is given a single dose of promethazine preoperatively for nausea prevention. Two hours later, he develops tissue necrosis at the IV site. This adverse effect is most likely due to the drug’s mechanism of action at which of the following receptor types?",
    "choices": [
      "Histamine H1 receptor",
      "Dopamine D2 receptor",
      "Muscarinic M1 receptor",
      "Neurokinin-1 receptor",
      "Serotonin 5-HT3 receptor"
    ],
    "correctAnswer": 1,
    "explanation": "Promethazine is a D2 receptor antagonist and a known cause of severe local tissue injury if extravasated during IV administration. This effect is related to its vesicant properties, not its receptor action, but D2 antagonism defines its antiemetic class. H1: Promethazine does have antihistaminic properties, but the H1 blockade is not linked to tissue necrosis. M1: This is the target of scopolamine, used for motion sickness; not relevant to this adverse event. NK1: Aprepitant is the NK1 blocker, unrelated to the tissue necrosis seen with promethazine. 5-HT3: Drugs like ondansetron act here and are not associated with IV site damage."
  },
  {
    "question": "A 54-year-old male undergoes emergency abdominal surgery. During closure of the abdominal wall, the surgeon inadvertently incises a structure that lies between the internal oblique and transversus abdominis muscles. The patient later reports numbness in the area surrounding the inguinal region and upper medial thigh. Which of the following nerves was most likely injured?",
    "choices": [
      "Subcostal nerve (T12)",
      "Iliohypogastric nerve (L1)",
      "Ilioinguinal nerve (L1)",
      "Genitofemoral nerve",
      "Obturator nerve"
    ],
    "correctAnswer": 2,
    "explanation": "The ilioinguinal nerve runs between the internal oblique and transversus abdominis muscles, eventually entering the inguinal canal. It provides sensation to the upper medial thigh, mons pubis, and anterior scrotum/labia majora. Damage during abdominal closure can result in sensory loss in these areas. Other choices: Subcostal nerve (T12): Innervates the abdominal wall but does not provide sensation to the inguinal or upper medial thigh region.Iliohypogastric nerve (L1): Runs in a similar plane but innervates the skin over the iliac crest and hypogastric region, not the medial thigh. Genitofemoral nerve: Lies deeper on the psoas major and does not traverse between these two muscle layers. Obturator nerve: Supplies the medial thigh muscles but runs in the pelvis, not within the layers of the abdominal wall."
  },
  {
    "question": "A 26-year-old male is undergoing evaluation after sustaining an abdominal stab wound just below the umbilicus. Imaging shows the knife penetrated the anterior abdominal wall just inferior to the arcuate line. Which of the following correctly describes the composition of the posterior rectus sheath at this level?",
    "choices": [
      "External oblique and internal oblique aponeuroses",
      "Internal oblique and transversus abdominis aponeuroses",
      "Transversus abdominis aponeurosis and transversalis fascia",
      "Transversalis fascia only",
      "External oblique aponeurosis only"
    ],
    "correctAnswer": 3,
    "explanation": "Below the arcuate line, all three aponeuroses (external oblique, internal oblique, and transversus abdominis) pass anterior to the rectus abdominis. The posterior sheath at this level is composed only of the transversalis fascia.  Other choices: External oblique and internal oblique aponeuroses: These are part of the anterior sheath, not posterior, below the arcuate line. Internal oblique and transversus abdominis aponeuroses: This composition is correct for the posterior sheath above, not below, the arcuate line. Transversus abdominis aponeurosis and transversalis fascia: The TA aponeurosis moves anteriorly below the arcuate line. External oblique aponeurosis only: EO aponeurosis never contributes to the posterior sheath at any level."
  },
  {
    "question": "A 68-year-old male presents with a bulge in his right groin that becomes more prominent when he coughs. On physical examination, the hernia protrudes medial to the inferior epigastric vessels and through the Hesselbach triangle. Which of the following is the most likely diagnosis?",
    "choices": [
      "Indirect inguinal hernia",
      "Femoral hernia",
      "Direct inguinal hernia",
      "Umbilical hernia",
      "Epigastric hernia"
    ],
    "correctAnswer": 2,
    "explanation": "A direct inguinal hernia protrudes medial to the inferior epigastric vessels within the Hesselbach triangle due to a weakness in the transversalis fascia. It is acquired and more common in older adults.  Other choices: Indirect inguinal hernia: Protrudes lateral to the inferior epigastric vessels through the deep inguinal ring, usually due to a patent processus vaginalis. Femoral hernia: Occurs below the inguinal ligament, medial to the femoral vein, and is more common in females. Umbilical hernia: Protrudes through the umbilical ring, typically in infants or adults with increased intra-abdominal pressure. Epigastric hernia: Protrudes through the linea alba above the umbilicus and is not related to the inguinal region."
  },
  {
    "question": "A 45-year-old man presents with dry mouth and reduced salivary flow. Further evaluation reveals that the parasympathetic fibers supplying his submandibular and sublingual glands have been disrupted. Which of the following nerves carries the preganglionic parasympathetic fibers to the ganglion responsible for this patient's symptoms?",
    "choices": [
      "Auriculotemporal nerve",
      "Chorda tympani nerve",
      "Glossopharyngeal nerve (CN IX)",
      "Lingual nerve (CN V3)",
      "Vagus nerve (CN X)"
    ],
    "correctAnswer": 1,
    "explanation": "The chorda tympani nerve (branch of CN VII) carries preganglionic parasympathetic fibers to the submandibular ganglion, where they synapse before reaching the submandibular and sublingual glands. Other choices: Auriculotemporal nerve: Carries postganglionic parasympathetics to the parotid gland. Glossopharyngeal nerve: Supplies preganglionic parasympathetics to the parotid, not submandibular/sublingual glands. Lingual nerve: Conveys general sensation from the anterior tongue and carries postganglionic parasympathetics after joining with the chorda tympani. Vagus nerve: Not involved in salivary gland innervation."
  },
  {
    "question": "A 32-year-old man presents with difficulty speaking and manipulating food in his mouth. On physical examination, his tongue deviates to the right when protruded, and atrophy is noted on the right side. Which muscle is not innervated by the nerve affected by this condition?",
    "choices": [
      "Genioglossus",
      "Styloglossus",
      "Hyoglossus",
      "Palatoglossus",
      "Mylohyoid"
    ],
    "correctAnswer": 3,
    "explanation": "This is most likely a hypoglossal nerve lesion.The palatoglossus is the only extrinsic tongue muscle not innervated by hypoglossal nerve (CN XII). Damage to the hypoglossal nerve (CN XII) on one side causes unopposed action of the contralateral genioglossus, resulting in tongue deviation toward the affected side. Styloglossus: Retracts and curls the tongue. Hyoglossus: Depresses the tongue. Palatoglossus: Elevates the posterior tongue and is innervated by CN X. Mylohyoid: Supports the floor of the mouth; not involved in tongue movement."
  },
  {
    "question": "A 6-year-old child undergoes a tonsillectomy and subsequently complains of difficulty swallowing and altered taste in the posterior third of the tongue. Which of the following nerves was most likely injured during the procedure?",
    "choices": [
      "Facial nerve (CN VII)",
      "Glossopharyngeal nerve (CN IX)",
      "Hypoglossal nerve (CN XII)",
      "Vagus nerve (CN X)",
      "Lingual nerve (CN V3)"
    ],
    "correctAnswer": 1,
    "explanation": "The glossopharyngeal nerve (CN IX) provides both sensory and taste innervation to the posterior third of the tongue and is located near the palatine tonsils, making it vulnerable during tonsillectomy. Other choices: Facial nerve (CN VII): Provides taste to anterior two-thirds of the tongue via chorda tympani. Hypoglossal nerve (CN XII): Provides motor innervation to tongue muscles, not sensation or taste. Vagus nerve (CN X): Involved in motor function of the pharynx and taste sensation near the epiglottis. Lingual nerve (CN V3): Conveys general sensation to the anterior two-thirds of the tongue."
  },
  {
    "question": "A 58-year-old man with a history of chronic gastroesophageal reflux presents with worsening dysphagia and weight loss. Endoscopy reveals a salmon-colored mucosa extending proximally from the gastroesophageal junction, and biopsy shows intestinal-type epithelium with goblet cells. What is the most likely complication of this condition if left untreated?",
    "choices": [
      "Peptic ulcer disease",
      "Squamous cell carcinoma",
      "Adenocarcinoma of the esophagus",
      "Esophageal varices",
      "Boerhaave syndrome"
    ],
    "correctAnswer": 2,
    "explanation": "The presence of salmon-colored mucosa and goblet cells on biopsy is diagnostic of Barrett esophagus, a complication of chronic GERD. Barrett esophagus represents intestinal metaplasia and increases the risk for progression to dysplasia and eventually esophageal adenocarcinoma.    Other choices: Peptic ulcer disease: Typically occurs in the stomach or duodenum, not a direct progression of Barrett. Squamous cell carcinoma: More associated with alcohol, tobacco, and occurs in the mid-esophagus. Esophageal varices: Complication of portal hypertension, unrelated to GERD or Barrett. Boerhaave syndrome: Full-thickness esophageal rupture, typically after forceful vomiting, not a progressive neoplastic complication."
  },
  {
    "question": "A 62-year-old woman presents with fatigue and glossitis. Lab tests reveal macrocytic anemia and low serum B12. Gastric biopsy shows chronic inflammation, gland atrophy, and intestinal metaplasia localized to the body and fundus. Which of the following additional findings is most likely in this patient?",
    "choices": [
      "Increased acid secretion and duodenal ulcers",
      "Positive anti-intrinsic factor antibodies",
      "Enlarged antral G cells with hypergastrinemia",
      "Cushing ulcer",
      "Helicobacter pylori in gastric biopsy"
    ],
    "correctAnswer": 1,
    "explanation": "Autoimmune gastritis affects the body and fundus, with destruction of parietal cells leading to hypochlorhydria and loss of intrinsic factor. This causes B12 deficiency and megaloblastic (pernicious) anemia. Anti-intrinsic factor antibodies are a hallmark finding.    Other choices: Increased acid secretion and duodenal ulcers: Seen in H. pylori-related antral gastritis, not autoimmune. Enlarged antral G cells and hypergastrinemia: Present but due to loss of negative feedback from acid, not the primary diagnostic feature. Cushing ulcer: Associated with CNS trauma and vagal stimulation. Helicobacter pylori: Usually infects the antrum, not the body and fundus in autoimmune cases."
  },
  {
    "question": "A 45-year-old man presents with chronic cough and chest discomfort. He also reports a sour taste in his mouth and worsening of symptoms when lying flat. Endoscopy shows basal cell hyperplasia and intraepithelial eosinophils in the distal esophagus. Which of the following is the most appropriate next step in management?",
    "choices": [
      "Begin systemic corticosteroids for eosinophilic esophagitis",
      "Test for anti-Ro/La antibodies",
      "Initiate proton pump inhibitor therapy",
      "Obtain urea breath test for H. pylori",
      "Refer for esophageal dilation"
    ],
    "correctAnswer": 2,
    "explanation": "The clinical picture and histologic findings are classic for gastroesophageal reflux disease (GERD), which often presents with heartburn, regurgitation, and chest discomfort. GERD is confirmed histologically by basal cell hyperplasia and scattered eosinophils in the distal esophagus. Proton pump inhibitors (PPIs) are the mainstay of treatment.    Other choices: Systemic corticosteroids: Reserved for eosinophilic esophagitis with >15 eosinophils/HPF and food impaction; not first-line here. Anti-Ro/La testing: Relevant for Sjogren syndrome, not GERD. Urea breath test: Used to diagnose H. pylori but not indicated with typical GERD symptoms. Esophageal dilation: Used for strictures, not first-line therapy for GERD."
  },
  {
    "question": "A 65-year-old man with chronic heartburn undergoes endoscopy, which reveals a region of columnar epithelium in the distal esophagus. Biopsy demonstrates mucosal glands and goblet cells. What histological change has most likely occurred?",
    "choices": [
      "Hyperplasia of stratified squamous epithelium",
      "Metaplasia from squamous to columnar epithelium",
      "Dysplasia of stratified squamous cells",
      "Invasion of gastric adenocarcinoma",
      "Ulceration of the esophageal mucosa"
    ],
    "correctAnswer": 1,
    "explanation": "This patient has Barrett esophagus, a condition in which the normal nonkeratinized stratified squamous epithelium of the esophagus undergoes metaplasia to columnar epithelium with goblet cells, typically due to chronic gastroesophageal reflux (GERD).    Other choices: Hyperplasia: Suggests increased cell number but does not involve a change in cell type. Dysplasia: Refers to disordered growth, which can follow metaplasia, but goblet cells point to metaplasia. Invasion of gastric adenocarcinoma: Would involve deeper layers and malignant cells, not normal-looking columnar mucosa. Ulceration: Would show necrosis and inflammation, not intact goblet cells."
  },
  {
  "question": "A 45-year-old woman undergoes upper endoscopy for evaluation of dyspepsia. Biopsies are taken from the gastric body and antrum. Histological analysis reveals parietal cells, chief cells, and mucous neck cells in one sample, and G cells and mucus-secreting surface epithelial cells in the other. Which of the following best distinguishes the two regions of the stomach from which these biopsies were taken?",
  "choices": [
    "Presence of Brunner glands in the submucosa",
    "Location of gastrin-secreting enteroendocrine cells",
    "Abundance of stem cells within the base of gastric glands",
    "Predominance of lymphoid aggregates within the lamina propria",
    "Arrangement of muscularis externa into oblique, circular, and longitudinal layers"
  ],
  "correctAnswer": 1,
  "explanation": "G cells, which secrete gastrin, are found predominantly in the gastric antrum, not in the body or fundus. The gastric body, on the other hand, contains parietal cells (acid and intrinsic factor secretion) and chief cells (pepsinogen secretion). This histological difference is key to understanding functional zones in the stomach. (A) Brunner glands are found in the duodenum, not the stomach. (C) Stem cells are located in the isthmus of gastric glands in both body and antrum. (D) Lymphoid aggregates may be seen in H. pylori-associated gastritis but are not a normal distinguishing feature. (E) The three-layered muscularis externa is found throughout the stomach and is not region-specific."
},
  {
    "question": "A 35-year-old man presents with decreased salivary output and dry mouth. A biopsy of a salivary gland shows acini with pyramidal cells containing spherical secretory granules, abundant rough endoplasmic reticulum, and round central nuclei. What is the primary product secreted by these cells?",
    "choices": [
      "Mucins",
      "Lysozyme",
      "Serotonin",
      "Amylase",
      "Bicarbonate"
    ],
    "correctAnswer": 3,
    "explanation": "The described cells are serous acinar cells, found in glands like the parotid. They have abundant rER and secretory granules, and they secrete proteins such as amylase, which begins starch digestion. Other choices: Mucins: Secreted by mucous cells, not serous cells. Lysozyme: Produced by submandibular gland but mainly by mucous and seromucous cells. Serotonin: Secreted by enteroendocrine cells in the GI tract. Bicarbonate: Secreted by intercalated duct cells, not acinar cells."
  },
  {
    "question": "A 45-year-old man with Zollinger-Ellison syndrome is found to have a gastrin-secreting tumor in the pancreas. Which of the following mechanisms best explains the gastric mucosal hypertrophy seen in this patient?",
    "choices": [
      "Gastrin stimulates parietal cells to secrete intrinsic factor",
      "Gastrin inhibits somatostatin release from D cells",
      "Gastrin directly stimulates ECL cells to release acetylcholine",
      "Gastrin promotes trophic growth of oxyntic mucosa",
      "Gastrin stimulates the myenteric plexus to increase gut tone"
    ],
    "correctAnswer": 3,
    "explanation": "Gastrin has a trophic effect, promoting the growth of the oxyntic mucosa of the stomach as well as duodenal and colonic mucosa. Patients with gastrin-secreting tumors such as in Zollinger-Ellison syndrome often develop mucosal hyperplasia and hypertrophy. Other choices: Gastrin does not stimulate intrinsic factor secretion directly; parietal cells produce it. Gastrin indirectly inhibits somatostatin via ACh but this does not explain hypertrophy. ECL cells release histamine, not ACh. The myenteric plexus is involved in motility, but not mucosal growth."
  },
  {
    "question": "A 30-year-old man undergoes a prolonged fast and experiences cyclical abdominal rumbling every 90 minutes. Which hormone is most responsible for this pattern of motility?",
    "choices": [
      "Gastrin",
      "Secretin",
      "Cholecystokinin (CCK)",
      "Motilin",
      "Vasoactive intestinal peptide (VIP)"
    ],
    "correctAnswer": 3,
    "explanation": "Motilin is secreted by M cells in the small intestine during fasting at ~90-100 minute intervals. It initiates migrating motor complexes (MMCs), which are responsible for clearing residual food and secretions. Other choices: Gastrin and CCK are secreted during meals. Secretin responds to acid in the duodenum. VIP increases intestinal secretion and smooth muscle relaxation but does not drive MMCs."
  },
  {
    "question": "A patient presents with frequent acid reflux. Histologic analysis reveals reduced bicarbonate secretion from pancreatic ducts. Which hormone is most directly responsible for stimulating this bicarbonate secretion?",
    "choices": [
      "Gastrin",
      "Somatostatin",
      "Secretin",
      "Cholecystokinin",
      "GLIP (GIP)"
    ],
    "correctAnswer": 2,
    "explanation": "Secretin, released from S cells in the duodenum in response to low pH, stimulates ductal cells of the pancreas and bile ducts to secrete bicarbonate. This neutralizes acidic chyme entering from the stomach. Other choices: Gastrin increases acid production. Somatostatin is inhibitory. CCK stimulates enzyme secretion, not bicarbonate. GLIP primarily stimulates insulin and inhibits acid, but does not directly enhance bicarbonate secretion."
  },
  {
    "question": "A 33-year-old man presents to the emergency department with fever, progressive bilateral submandibular swelling, elevated tongue, and difficulty breathing. Physical examination reveals brawny induration of the floor of the mouth and gas in soft tissues on imaging. Which of the following is the most likely diagnosis?",
    "choices": [
      "Vincent’s angina",
      "Periapical abscess",
      "Masticator space infection",
      "Ludwig’s angina",
      "Lemierre’s syndrome"
    ],
    "correctAnswer": 3,
    "explanation": "Ludwig’s angina is a rapidly progressive cellulitis of the submandibular space, often originating from mandibular molars. It presents with bilateral submandibular swelling, tongue elevation, and can lead to airway obstruction. Gas in the soft tissues is characteristic.Other choices: Vincent’s angina is acute necrotizing ulcerative gingivitis with gum ulceration and halitosis. Periapical abscess is localized to a tooth root and presents with pain on percussion. Masticator space infection causes trismus and swelling near the mandible but doesn’t involve floor-of-mouth swelling or airway compromise. Lemierre’s syndrome involves thrombophlebitis of the jugular vein and septic emboli, often from lateral pharyngeal infection."
  },
  {
    "question": "A 19-year-old man presents with a sore throat and fever. Over the next 48 hours, he develops neck pain, rigors, and shortness of breath. Blood cultures grow Fusobacterium necrophorum. A CT scan reveals internal jugular vein thrombosis and multiple bilateral lung nodules. Which of the following is the most likely diagnosis?",
    "choices": [
      "Vincent’s angina",
      "Actinomycosis",
      "Mediastinitis",
      "Lemierre’s syndrome",
      "Retropharyngeal abscess"
    ],
    "correctAnswer": 3,
    "explanation": "Lemierre’s syndrome is characterized by Fusobacterium necrophorum infection of the lateral pharyngeal space leading to internal jugular vein thrombophlebitis and septic pulmonary emboli. It often follows a pharyngeal or dental infection.Other choices: Vincent’s angina is a gum infection. Actinomycosis presents with chronic sinus tracts and sulfur granules. Mediastinitis can be a complication but isn’t the primary diagnosis here. Retropharyngeal abscess involves posterior neck and doesn’t typically cause jugular thrombosis or septic emboli."
  },
  {
    "question": "A 51-year-old man presents with chronic mandibular swelling and several draining sinus tracts. He reports that the area has been draining purulent material for weeks. Examination reveals sulfur granules in the exudate. Which of the following is the most likely pathogen?",
    "choices": [
      "Fusobacterium necrophorum",
      "Actinomyces israelii",
      "Eikenella corrodens",
      "Nocardia asteroides",
      "Streptococcus mutans"
    ],
    "correctAnswer": 1,
    "explanation": "Actinomyces israelii is a Gram-positive anaerobic bacterium that causes chronic infections with sinus tract formation and sulfur granules. It commonly affects the cervicofacial region and is associated with poor dental hygiene.Other choices: Fusobacterium: Lemierre’s syndrome, not sinus tracts. Eikenella: associated with mixed oral flora but not chronic sinus formation. Nocardia: partially acid-fast, causes pulmonary/CNS disease more commonly. Streptococcus mutans: causes dental caries, not draining sinuses."
  },
{
  "question": "A 14-year-old boy is brought to the dentist for a routine checkup. The dentist identifies several new caries. The pathogenesis of these lesions involves the production of acetic and lactic acid production by which of the following?",
  "choices": [
    "Aggregatibacter actinomycetemcomitans",
    "Mutans streptococci",
    "Peptostreptococcus magnus",
    "Prevotella melaninogenica",
    "Streptococcus oralis"
  ],
  "correctAnswer": 1,
  "explanation": "Mutans streptococci are the primary bacterial agents associated with dental caries. These bacteria metabolize dietary sucrose to produce acetic and lactic acid, leading to acidification of the local environment, which demineralizes tooth enamel and dentin. This acidogenic and aciduric activity is central to their role in caries development.Other choices: Aggregatibacter actinomycetemcomitans: Associated with aggressive periodontitis, not dental caries. Peptostreptococcus magnus: Anaerobic gram-positive cocci found in various infections but not classically linked to caries. Prevotella melaninogenica: Anaerobic bacteria linked with periodontal disease, not the demineralization seen in caries. Streptococcus oralis: A member of the viridans group streptococci; part of normal flora but not a major contributor to caries like S. mutans."
},
{
  "question": "A 33-year-old man comes to the emergency room because of fever, rapidly evolving pain, swelling, and redness beneath his mandible on both sides. On exam, he is febrile (102.6°F), toxic, and in mild respiratory distress. His teeth are in poor repair and he has obvious periodontal disease. His tongue is elevated and partially obscures his posterior pharynx. Neck x-rays reveal gas in the soft tissue. This infection is best treated with surgical drainage and which of the following?",
  "choices": [
    "Ampicillin/sulbactam",
    "Aztreonam",
    "Ceftriaxone",
    "Ceftazidime + gentamicin",
    "Ciprofloxacin"
  ],
  "correctAnswer": 0,
  "explanation": "This is a classic presentation of Ludwig’s angina, a rapidly spreading cellulitis involving the submandibular, sublingual, and submental spaces. It is typically polymicrobial, with both aerobic and anaerobic oral flora. Ampicillin/sulbactam is the best empiric antibiotic as it covers a broad range of organisms including anaerobes, Streptococcus species, and oral flora.Other choices: Aztreonam: Covers aerobic gram-negative rods only; lacks anaerobic and gram-positive coverage. Ceftriaxone: Excellent for many gram-negative and some gram-positive bacteria but lacks anaerobic coverage. Ceftazidime + gentamicin: Good gram-negative coverage, but both are poor against anaerobes. Ciprofloxacin: Mainly covers aerobic gram-negative organisms and is weak against oral anaerobes."
},
{
  "question": "Which of the following clinical scenarios best fits Lemierre’s syndrome?",
  "choices": [
    "55 yo diabetic with trismus and a submandibular abscess",
    "19 yo man with severe odynophagia, sepsis, and Fusobacter bacteremia",
    "47 yo alcoholic with a swollen neck and multiple draining sinuses",
    "21 yo college sophomore with fever and swollen, erythematous gums",
    "10 yo boy with difficulty breathing, swollen, tender neck and superiorly displaced tongue"
  ],
  "correctAnswer": 1,
  "explanation": "Lemierre’s syndrome is a rare but severe complication of oropharyngeal infections, typically caused by Fusobacterium necrophorum. It leads to septic thrombophlebitis of the internal jugular vein and septic pulmonary emboli, presenting with odynophagia, neck pain, sepsis, and often Fusobacter bacteremia.Other choices: A: Likely represents Ludwig’s angina, not Lemierre’s. C: Suggestive of chronic Actinomyces infection with draining sinus tracts. D: More consistent with Vincent’s angina (necrotizing gingivitis). E: Characteristic of Ludwig’s angina with floor-of-mouth swelling and airway compromise."
},
{
  "question": "Excruciating pain in the maxillary molar region upon drinking hot beverages plus pain on percussion of one of the molars suggests which of the following?",
  "choices": [
    "Buccal space infection",
    "Dental caries",
    "Focal gingivitis",
    "Maxillary sinusitis",
    "Periapical abscess"
  ],
  "correctAnswer": 4,
  "explanation": "A periapical abscess results from bacterial infection of the dental pulp, often following untreated dental caries. It leads to the accumulation of pus at the root tip of the tooth. Classic signs include severe localized pain that worsens with hot liquids and percussion tenderness on the affected tooth.Other choices: Buccal space infection: Causes swelling and may follow a deeper infection but is less localized to the tooth and doesn't cause percussion sensitivity. Dental caries: Can be painful but usually doesn't cause the intense, localized pain on hot drinks or percussion seen in abscesses. Focal gingivitis: Involves inflammation of the gums without pulp involvement; usually painless unless severely inflamed. Maxillary sinusitis: May cause referred pain to upper molars, but typically includes sinus congestion and is not provoked by hot beverages or percussion."
},
{
  "question": "A 51-year-old man comes to a dentist complaining of pain and swelling in the left mandibular region for three weeks. On exam, his teeth are in poor repair and the left submandibular area is red and mildly tender with several sinus tracts in the skin which are draining purulent material. This clinical picture is most compatible with infection by which of the following?",
  "choices": [
    "Actinomyces israelii",
    "Eikenella corrodens",
    "Fusobacterium necrophorum",
    "Nocardia asteroides",
    "Streptococcus mutans"
  ],
  "correctAnswer": 0,
  "explanation": "Actinomyces israelii is a Gram-positive, anaerobic, filamentous bacterium that is part of the normal oral flora. It is well known for causing chronic cervicofacial infections with draining sinus tracts and sulfur granules. This indolent, subacute presentation in the mandibular region is classic.Other choices: Eikenella corrodens: Oral flora that may play a role in polymicrobial infections but doesn’t typically cause chronic sinus tracts. Fusobacterium necrophorum: Associated with Lemierre’s syndrome, which includes jugular vein thrombosis and septic emboli. Nocardia asteroides: Also filamentous and partially acid-fast, but typically causes pulmonary and CNS infections in immunocompromised patients. Streptococcus mutans: Primarily associated with dental caries, not deep soft tissue infections with sinus tracts."
},
{
  "question": "A 38-year-old man is brought to the ER in severe respiratory distress for three hours. 24 hours ago, he began to complain of hoarseness and mild to moderate substernal chest pain. He has had a toothache for two weeks involving a right mandibular molar. On exam, he is febrile (104.5°F) and acutely ill. The right mandibular region is swollen and red with an obvious abscessed molar. His lungs are clear, but his heart exam reveals a tachycardia and a crunching sound with each systole. Chest x-ray shows gas in the mediastinum. The most likely diagnosis is which of the following?",
  "choices": [
    "Alar space infection",
    "Lateral pharyngeal infection",
    "Lemierre’s syndrome",
    "Ludwig’s angina",
    "Masticator space infection"
  ],
  "correctAnswer": 0,
  "explanation": "The clinical signs of mediastinal gas, severe systemic illness, and a recent mandibular infection point to spread of infection into the alar (\"danger\") space, which runs from the skull base to the diaphragm and provides a pathway to the mediastinum. Gas in the mediastinum, chest pain, and Hamman's sign (systolic crunch) are classic findings.Other choices: Lateral pharyngeal infection: May involve the carotid sheath and cause thrombophlebitis or sepsis, but not usually mediastinitis. Lemierre’s syndrome: Involves Fusobacterium necrophorum and septic emboli, not direct gas formation or mediastinal extension. Ludwig’s angina: Involves the submandibular space and causes airway obstruction, not gas in the mediastinum. Masticator space infection: Localized to muscles of mastication and would not present with chest symptoms or mediastinal gas."
},
{
  "question": "An 18-year-old man comes to a physician because of a toothache involving a right maxillary molar for 2 weeks. Two days ago he began to experience trismus. On exam, the right side of his face is slightly red, but most of the swelling is intra-oral. This presentation suggests that an abscess has formed in which of the following?",
  "choices": [
    "Inside the insertion of the right buccinator",
    "In the alar space",
    "In the lateral pharyngeal space",
    "In the temporalis space",
    "Outside the insertion of the right buccinator"
  ],
  "correctAnswer": 0,
  "explanation": "An intra-oral swelling resulting from a molar infection that lies inside the insertion of the buccinator is indicative of a buccal space abscess. The buccinator muscle serves as a boundary for the spread of odontogenic infections if the infection remains inside its insertion, it presents intra-orally.Other choices: Alar space: A deep fascial space associated with descending infections; not consistent with localized intra-oral swelling. Lateral pharyngeal space: Infections here are more severe and can affect airway structures and vasculature. Temporalis space: Usually affected in masticator space infections, presents with swelling of the temporal region. Outside the insertion of the buccinator: Would present with facial (extra-oral) swelling, not predominantly intra-oral."
},
{
  "question": "A 20-year-old college sophomore goes to the dentist complaining of sore swollen gums for three days. The gums bleed easily when he brushes his teeth. On exam, the teeth are in good repair, but the gingivae are diffusely swollen and red with blunted papillae and a gray membrane. The student’s breath is malodorous. The most likely diagnosis is which of the following?",
  "choices": [
    "Allergy to toothpaste",
    "Lemierre’s syndrome",
    "Ludwig’s angina",
    "Scurvy",
    "Vincent’s angina"
  ],
  "correctAnswer": 4,
  "explanation": "Vincent’s angina, also known as acute necrotizing ulcerative gingivitis (ANUG), presents with painful, swollen, bleeding gums, blunted papillae, a gray pseudomembrane, and halitosis. It is caused by a synergistic infection, often involving fusiform bacilli and spirochetes.Other choices: Allergy to toothpaste: Unlikely to cause necrosis or pseudomembrane; more associated with contact mucositis. Lemierre’s syndrome: Involves jugular vein thrombosis and septicemia, not gingival disease. Ludwig’s angina: Presents with floor-of-mouth swelling and airway compromise. Scurvy: Causes gingival bleeding and poor wound healing due to vitamin C deficiency, but not acute necrosis or pseudomembrane formation."
},
  {
    "question": "A 65-year-old man eats a balanced meal. Approximately 40 minutes later, his ileocecal sphincter relaxes and chyme passes into the cecum. This response is triggered by gastric distention. Which reflex most likely explains this phenomenon?",
    "choices": [
      "Enterogastric reflex",
      "Gastrocolic reflex",
      "Gastroileal reflex",
      "Duodenocolic reflex",
      "Rectosphincteric reflex"
    ],
    "correctAnswer": 2,
    "explanation": "The gastroileal reflex is initiated by gastric distention, which increases peristalsis in the ileum and relaxes the ileocecal sphincter, promoting passage of chyme into the large intestine.Other choices: Enterogastric reflex: Slows gastric emptying in response to duodenal stimuli. Gastrocolic reflex: Triggers mass movements in the colon. Duodenocolic reflex: Increases colonic motility after duodenal filling. Rectosphincteric reflex: Coordinates defecation in response to rectal stretch."
  },
  {
    "question": "A 43-year-old man is in a fasting state. His gut shows a pattern of slow, migrating contractions occurring every 90 minutes. Which of the following best describes the function of these contractions?",
    "choices": [
      "Segment chyme to facilitate digestion",
      "Delay gastric emptying",
      "Promote colonic mass movement",
      "Clear residual material and prevent bacterial overgrowth",
      "Stimulate secretion of enterogastrones"
    ],
    "correctAnswer": 3,
    "explanation": "Migrating myoelectric complexes (MMCs) occur during fasting and sweep residual undigested material toward the colon, preventing bacterial overgrowth.Other choices: Segmentation: Occurs in the fed state to mix chyme. Delayed gastric emptying: Mediated by CCK and GLIP, not MMCs. Colonic mass movement: Related to gastrocolic and duodenocolic reflexes. Enterogastrone secretion is stimulated by nutrients, not MMCs."
  },
  {
    "question": "A 10-year-old boy drinks milk and cookies. Before the food reaches the stomach, his lower esophageal sphincter and fundus relax to accommodate the meal. Which neurotransmitter most likely mediates this relaxation?",
    "choices": [
      "Acetylcholine",
      "Gastrin",
      "Motilin",
      "Nitric oxide",
      "Epinephrine"
    ],
    "correctAnswer": 3,
    "explanation": "Receptive relaxation of the fundus and lower esophageal sphincter is mediated by nitric oxide released from enteric inhibitory neurons. This allows accommodation of incoming food without increased pressure.Other choices: Acetylcholine: Promotes contraction, not relaxation. Gastrin: Stimulates acid secretion and motility. Motilin: Stimulates MMCs during fasting, not involved in receptive relaxation. Epinephrine: Causes smooth muscle relaxation systemically but not specifically involved in this reflex."
  },
  {
    "question": "A 29-year-old man with a history of seasonal allergies and intermittent solid food dysphagia undergoes upper endoscopy. The esophageal mucosa shows linear furrows and concentric rings. Biopsies reveal >30 eosinophils per high-power field. Molecular profiling demonstrates upregulation of the CCL26 (eotaxin-3) gene in esophageal epithelial cells. Which of the following best explains the pathogenic mechanism linked to this gene in eosinophilic esophagitis?",
    "choices": [
      "Induction of epithelial apoptosis via Fas ligand expression",
      "Recruitment of eosinophils through CCR3-mediated chemotaxis",
      "Suppression of Th2 lymphocyte activation",
      "Activation of neutrophil extracellular trap formation",
      "Differentiation of fibroblasts into myofibroblasts via TGF-β"
    ],
    "correctAnswer": 1,
    "explanation": "Eotaxin-3 (CCL26) is a chemokine overexpressed in eosinophilic esophagitis that attracts eosinophils via CCR3 on their surface, facilitating their infiltration and driving chronic esophageal inflammation.Other choices: Fas ligand is not central to EoE pathogenesis. Th2 cells are activated, not suppressed. Neutrophils are not the predominant effector cells in EoE. TGF-β and fibroblast transformation are more related to fibrosis in other chronic conditions like scleroderma."
  },
{
  "question": "A 57-year-old woman presents with a 6-month history of intermittent, severe retrosternal chest pain and dysphagia to both solids and liquids. She reports that the pain often mimics a heart attack, occurring without exertion and sometimes waking her from sleep. Her ECG and troponin levels are unremarkable. Esophageal manometry reveals intermittent high-amplitude, non-peristaltic contractions in the distal esophagus with normal lower esophageal sphincter pressure. A barium swallow shows a 'corkscrew' esophagus. She is started on a calcium channel blocker, with symptomatic improvement. Which of the following best explains the mechanism of action of her prescribed therapy in the context of her underlying condition?",
  "choices": [
    "Inhibits excessive excitatory cholinergic signaling in esophageal smooth muscle",
    "Stimulates nitric oxide release from the myenteric plexus to promote coordinated peristalsis",
    "Reduces esophageal mucosal inflammation and improves epithelial barrier integrity",
    "Blocks serotonin-mediated hypercontraction in the upper esophageal sphincter",
    "Enhances inhibitory vagal outflow to restore normal swallowing coordination"
  ],
  "correctAnswer": 0,
  "explanation": "This patient has Diffuse Esophageal Spasm (DES), characterized by intermittent, high-amplitude, non-peristaltic contractions of the esophagus with normal LES pressure. The underlying defect involves impaired inhibitory innervation (especially nitric oxide pathways) of the esophageal smooth muscle, leading to uncoordinated excitatory cholinergic activity.Calcium channel blockers, such as diltiazem or nifedipine, relieve symptoms by inhibiting calcium-dependent smooth muscle contraction, thereby blunting excessive cholinergic stimulation and reducing contraction amplitude. (A) Calcium channel blockers directly reduce smooth muscle contractility, counteracting unopposed excitatory signals. (B) Nitric oxide levels are deficient in DES, but CCBs do not restore NO; that’s a potential role for nitrates. (C) Mucosal inflammation is more relevant in GERD and eosinophilic esophagitis, not DES. (D) Serotonin and upper esophageal sphincter are not the primary pathophysiologic elements in DES. (E) Vagal modulation plays a role in swallowing, but CCBs do not directly affect vagal tone."
},


     {
    "question": "A 65-year-old man presents with a 1-year history of regurgitating undigested food, halitosis, and 60-lb weight loss. He has had recurrent pneumonia and denies heartburn. Imaging shows a dilated esophagus with narrowing at the gastroesophageal junction. Which of the following best explains the underlying pathophysiology of this condition?",
    "choices": [
      "Hypercontractile distal esophageal smooth muscle from excess ACh",
      "Fibrosis of the submucosa and muscularis propria from autoimmune disease",
      "Increased nitric oxide and VIP expression at the LES",
      "Degeneration of myenteric plexus neurons causing LES non-relaxation",
      "Reflux-induced metaplasia leading to lower esophageal dysmotility"
    ],
    "correctAnswer": 3,
    "explanation": "This patient has classic achalasia, which is characterized by failure of the lower esophageal sphincter to relax and absence of peristalsis. According to the lecture, this is due to loss of ganglion cells in the myenteric plexus and deficiency of VIP and nitric oxide, both of which mediate LES relaxation.Other choices: Hypercontractility is seen in nutcracker esophagus. Autoimmune fibrosis is more consistent with scleroderma. NO and VIP levels are decreased, not increased, in achalasia. Barrett’s metaplasia involves mucosal transformation, not motility disorders."
  },
  {
    "question": "A 45-year-old woman with GERD presents with worsening heartburn, nocturnal choking, and chronic cough. She has gained 50 lbs and continues to smoke. Despite over-the-counter PPI use, her symptoms persist. Which of the following mechanisms best explains her persistent reflux despite acid suppression?",
    "choices": [
      "Increased LES tone due to gastrin hypersensitivity",
      "Loss of vagal control over upper esophageal sphincter pressure",
      "Tonic contraction of the cricopharyngeus muscle causing esophageal pooling",
      "Inappropriate transient relaxation of the LES unrelated to pH",
      "Rebound acid hypersecretion from PPI-induced gastrin suppression"
    ],
    "correctAnswer": 3,
    "explanation": "The lecture identifies inappropriate transient LES relaxation as a key mechanism of GERD. These relaxations occur independently of esophageal pH or meal state and are a major contributor to reflux, particularly in the setting of obesity and lifestyle triggers.Other choices: Gastrin increases LES tone, not decreases it. UES control is not the primary issue in GERD. Cricopharyngeus dysfunction affects swallowing, not reflux. PPI rebound typically presents after cessation, not during use."
  },
  {
    "question": "A 3-month-old infant presents with persistent diarrhea, flatulence, and abdominal distention following a recent norovirus infection. Lab evaluation reveals acidic stools and elevated breath hydrogen. Which of the following best explains the MOST LIKELY pathophysiology of this condition?",
    "choices": [
      "Congenital lactase deficiency due to mutation in LCT gene",
      "Loss of sucrase-isomaltase activity due to enterocyte apoptosis",
      "Secondary lactose intolerance from brush border enzyme damage",
      "Autoimmune enteropathy causing crypt hyperplasia and villous atrophy",
      "Delayed colonic transit time increasing bacterial fermentation"
    ],
    "correctAnswer": 2,
    "explanation": "This infant has secondary lactose intolerance due to damage to intestinal brush border enzymes (particularly lactase, the last to recover) after viral gastroenteritis (e.g., norovirus). Unabsorbed lactose leads to osmotic diarrhea and fermentation by colonic bacteria, resulting in acidic stools and elevated breath hydrogen. Other choices: Congenital lactase is possible but the deficiency is very rare and presents from birth. Sucrase-isomaltase deficiency causes sucrose intolerance, not lactose. Autoimmune enteropathy is more severe and includes systemic features. Delayed colonic transit usually leads to constipation, not diarrhea."
  },
  {
    "question": "A 4-year-old child with steatorrhea, failure to thrive, and vitamin E deficiency is diagnosed with abetalipoproteinemia. Which of the following molecular abnormalities most directly accounts for the pathophysiology in this disorder?",
    "choices": [
      "Inactivation of FATP4 transporter for fatty acids",
      "Deficiency of NPC1L1 cholesterol transporter",
      "Mutation in microsomal triglyceride transfer protein (MTP)",
      "Defective CFTR chloride channel",
      "Inactivation of ABCG5/8 transporter system"
    ],
    "correctAnswer": 2,
    "explanation": "Abetalipoproteinemia is caused by mutation in the MTP gene, leading to defective assembly and secretion of chylomicrons and VLDL. This impairs lipid absorption and transport, causing steatorrhea and deficiency of fat-soluble vitamins, particularly vitamin E. Other choices: FATP4 defects impair FA uptake but are not associated with this syndrome. NPC1L1 defects relate to sitosterolemia. CFTR defects cause cystic fibrosis. ABCG5/8 defects cause sitosterolemia with plant sterol accumulation."
  },
  {
    "question": "A 50-year-old man presents with chronic, non-bloody watery diarrhea. Fasting does not reduce stool volume. Stool sodium is 60 mmol/L, potassium is 30 mmol/L, and pH is 7.5. Which of the following is the most likely cause of this patient’s diarrhea?",
    "choices": [
      "Unabsorbed carbohydrate due to lactase deficiency",
      "Inhibition of Na+-H+ and Cl--HCO3 exchangers by cAMP",
      "Incomplete fat digestion due to lipase deficiency",
      "Damage to enterocytes leading to exudative fluid loss",
      "Metformin-induced osmotic diarrhea"
    ],
    "correctAnswer": 1,
    "explanation": "The key findings high stool volume, alkaline pH, no change with fasting, and low fecal osmotic gap are characteristic of secretory diarrhea. This results from activation of CFTR channels by cAMP, as seen in VIPoma or enterotoxin exposure. Other choices: Lactase deficiency causes osmotic, not secretory, diarrhea.Lipase deficiency causes steatorrhea, not watery diarrhea.Exudative diarrhea shows blood/mucus and systemic illness. Metformin causes osmotic diarrhea, and fasting typically reduces volume."
  },
  {
    "question": "A 60-year-old man presents with a year-long history of progressive dysphagia, foul-smelling regurgitation of undigested food, and weight loss. He has been treated for pneumonia twice in the last month. Barium swallow shows a massively dilated esophagus with tapering at the gastroesophageal junction. Which of the following best explains the underlying defect in this condition?",
    "choices": [
      "Autoimmune fibrosis of esophageal smooth muscle",
      "Degeneration of inhibitory neurons in the myenteric plexus",
      "Increased cholinergic activity at the upper esophageal sphincter",
      "Overexpression of nitric oxide synthase",
      "Loss of upper esophageal sphincter coordination"
    ],
    "correctAnswer": 1,
    "explanation": "This is classic achalasia, marked by impaired LES relaxation and absent peristalsis. It results from  loss of inhibitory ganglion cells (VIP and nitric oxide producing) in the myenteric plexus .  (A) Autoimmune fibrosis is seen in scleroderma, which causes hypotonic LES and reflux. (C) UES dysfunction is unrelated to achalasia. (D) NO is decreased, not increased. (E) UES coordination affects oropharyngeal, not esophageal, phase."
  },
  {
    "question": "A 34-year-old man with asthma presents with solid food dysphagia and recurrent food impaction. He reports poor response to PPIs. Endoscopy shows linear furrows and concentric rings in the esophagus. Biopsy reveals >20 eosinophils/hpf. Which genetic or cellular finding most supports the diagnosis?",
    "choices": [
      "Increased expression of CDX2 in columnar epithelium",
      "Overexpression of E-cadherin in squamous mucosa",
      "Th2 cytokine-mediated upregulation of Eotaxin-3",
      "Deficiency of IL-10 and impaired neutrophil clearance",
      "Somatic mutation in TP53 within the basal epithelium"
    ],
    "correctAnswer": 2,
    "explanation": "This is  eosinophilic esophagitis (EoE) . The PDF highlights the role of  Eotaxin-3 , GATA3, and Th2 responses in eosinophil recruitment.  (A) CDX2 is associated with intestinal metaplasia in Barrett’s. (B) E-cadherin dysregulation is more relevant in carcinomas. (D) IL-10 relates to chronic infections, not EoE. (E) TP53 is mutated in dysplasia, not in allergic inflammation."
  },
  {
    "question": "A 50-year-old obese woman with a history of long-standing GERD presents with new-onset dysphagia. Endoscopy reveals a 4 cm segment of salmon-colored mucosa above the gastroesophageal junction. Biopsy shows intestinal metaplasia with goblet cells. Which of the following risk factors most strongly predisposes her to transformation to esophageal adenocarcinoma?",
    "choices": [
      "Tylosis-associated keratin mutations",
      "Vitamin A deficiency with esophageal epithelial atrophy",
      "Persistent reflux causing Barrett's metaplasia",
      "Chronic alcohol use damaging squamous epithelium",
      "Radiation exposure to the mediastinum"
    ],
    "correctAnswer": 2,
    "explanation": " Barrett’s esophagus, caused by  chronic GERD, is a known precursor to  esophageal adenocarcinoma , especially in the presence of obesity. (A) Tylosis is linked to squamous cell carcinoma. (B) Vitamin A deficiency leads to squamous metaplasia but not adenocarcinoma. (D) Alcohol predisposes to squamous carcinoma. (E) Radiation is a non-specific risk, not dominant for adenocarcinoma."
  },
{
  "question": "A 9-month-old infant presents with chronic diarrhea, abdominal distention, and failure to thrive. Symptoms began after the introduction of fruit juices and solid foods. The diarrhea is watery, non-bloody, and improves during periods of fasting. A stool sample shows an acidic pH and positive reducing substances. Upper endoscopy with small bowel biopsy shows preserved villus architecture. Which of the following is the most likely diagnosis?",
  "choices": [
    "Cystic fibrosis with pancreatic insufficiency",
    "Congenital lactase deficiency",
    "Abetalipoproteinemia",
    "Sucrase-isomaltase deficiency",
    "Post-viral secondary disaccharidase deficiency"
  ],
  "correctAnswer": 3,
  "explanation": " Sucrase-isomaltase deficiency is a genetic disorder present in infants after introduction of sucrose-containing foods. The lecture notes that sucrase-isomaltase is critical for digestion of sucrose and maltose. Deficiency leads to osmotic diarrhea and positive reducing substances due to undigested disaccharides reaching the colon. Villus architecture remains intact.  (A) Cystic fibrosis causes steatorrhea and fat-soluble vitamin deficiency from pancreatic insufficiency, not sugar-specific symptoms. (B) Congenital lactase deficiency is extremely rare and would present with symptoms from birth. (C) Abetalipoproteinemia causes fat malabsorption with acanthocytosis and neurologic symptoms. (E) Post-viral enzyme loss would typically follow an infectious illness and involve multiple disaccharidases transiently, whereas this case is persistent and specific to sucrose introduction."
},
{
  "question": "A 6-year-old boy is referred for evaluation of xanthomas and elevated LDL cholesterol despite normal dietary habits. His parents are not hyperlipidemic. Genetic testing reveals a mutation in the ABCG5 gene. Which of the following best explains the pathophysiology of this patient’s condition?",
  "choices": [
    "Defective hepatic uptake of chylomicron remnants",
    "Increased intestinal absorption of plant sterols",
    "Impaired synthesis of apolipoprotein B-100",
    "Defective conversion of HMG-CoA to mevalonate",
    "Loss of function in microsomal triglyceride transfer protein"
  ],
  "correctAnswer": 1,
  "explanation": "Sitosterolemia is caused by mutations in  ABCG5 or ABCG8 , which are responsible for pumping  plant sterols (phytosterols)  out of enterocytes and hepatocytes. Loss of function leads to  increased intestinal absorption and reduced biliary excretion  of phytosterols like sitosterol, leading to xanthomas and premature atherosclerosis.  (A) Impaired chylomicron remnant uptake is seen in type III hyperlipoproteinemia. (C) ApoB-100 defects affect LDL synthesis (abetalipoproteinemia). (D) HMG-CoA reductase deficiency affects endogenous cholesterol synthesis (e.g., in statin use). (E) MTP defects result in abetalipoproteinemia with fat-soluble vitamin deficiencies."
},
{
  "question": "A 42-year-old woman begins a cholesterol-lowering diet that includes daily consumption of plant sterol–enriched margarine. After 6 weeks, her LDL cholesterol decreases by 12%. Which of the following best describes how dietary phytosterols lower plasma cholesterol levels?",
  "choices": [
    "Inhibit pancreatic cholesterol esterase activity",
    "Increase bile acid synthesis via FXR activation",
    "Displace cholesterol from micelles in the intestinal lumen",
    "Activate LXR to suppress intestinal HMG-CoA reductase",
    "Bind enterocyte ABCG8 transporter to promote cholesterol uptake"
  ],
  "correctAnswer": 2,
  "explanation": "Phytosterols reduce cholesterol absorption by  competing with cholesterol for incorporation into micelles  in the intestinal lumen, thereby  reducing the amount of cholesterol that reaches NPC1L1 transporters  on enterocytes. (A) Pancreatic cholesterol esterase is not the main absorption pathway. (B) FXR activation suppresses bile acid synthesis, not promote cholesterol clearance. (D) LXR regulates ABCG5/8 expression but does not directly suppress HMG-CoA reductase. (E) ABCG8 mediates cholesterol efflux, not uptake. Phytosterols are usually expelled by ABCG5/8, not absorbed."
},
{
  "question": "A 4-year-old child presents with chronic steatorrhea, failure to thrive, and neurologic symptoms including ataxia and decreased deep tendon reflexes. Laboratory testing shows markedly low serum triglycerides and total cholesterol. Intestinal biopsy reveals lipid-laden enterocytes. Genetic sequencing identifies a loss-of-function mutation in the MTTP gene. Which of the following best describes the biochemical process that is disrupted in this disorder?",
  "choices": [
    "Transfer of triglycerides to nascent ApoB within the rough endoplasmic reticulum",
    "Esterification of dietary cholesterol by acyl-CoA:cholesterol acyltransferase (ACAT)",
    "Hydrolysis of dietary triglycerides by pancreatic lipase in the intestinal lumen",
    "Assembly of bile acid micelles for luminal cholesterol solubilization",
    "Translocation of cholesterol into enterocytes via the NPC1L1 transporter"
  ],
  "correctAnswer": 0,
  "explanation": " Abetalipoproteinemia  is caused by  mutations in the microsomal triglyceride transfer protein (MTTP)  gene. MTP is essential for the co-translational lipidation of nascent apolipoprotein B  (ApoB-48 in enterocytes, ApoB-100 in hepatocytes) within the  rough endoplasmic reticulum , enabling the formation of nascent chylomicrons. Without MTP, lipids accumulate in enterocytes and are not secreted into lymphatics.  (B) ACAT esterifies cholesterol but is not involved in chylomicron assembly. (C) Pancreatic lipase acts upstream to hydrolyze dietary triglycerides into monoglycerides and free fatty acids. (D) Bile acids aid in micelle formation, but this occurs in the intestinal lumen, not intracellularly. (E) NPC1L1 mediates cholesterol uptake into enterocytes, which is intact in this disorder."
},
{
  "question": "A 58-year-old man is admitted to the ICU following trauma. He is intubated and mechanically ventilated for >48 hours. The team initiates stress ulcer prophylaxis. Compared to histamine-2 receptor antagonists, which of the following is a key disadvantage of proton pump inhibitors in this setting?",
  "choices": [
    "Less effective in reducing gastric acid secretion",
    "Higher risk of Clostridium difficile infection",
    "Longer time to onset of action",
    "Dependence on renal clearance for elimination",
    "Inhibition of gastric H2 receptors leading to rebound acid secretion"
  ],
  "correctAnswer": 1,
  "explanation": " Proton pump inhibitors (PPIs) are associated with an  increased risk of C. difficile infection , particularly in critically ill patients. This risk is greater than with H2 receptor antagonists (H2RAs), making it a relevant clinical consideration in stress ulcer prophylaxis.  (A) Incorrect   PPIs are  more effective  than H2RAs in reducing acid secretion. (C) Incorrect: While PPIs may take longer to reach full effect, this is not their major disadvantage in the ICU. (D) Incorrect: PPIs are primarily hepatically metabolized  (e.g., CYP2C19), not renally cleared. (E) Incorrect: PPIs act on the H+/K+ ATPase pump, not H2 receptors; rebound acid secretion is more a concern with H2RAs."
},
{
  "question": "A 55-year-old woman is receiving chemotherapy for breast cancer. She is prescribed a combination anti-emetic regimen that includes aprepitant, ondansetron, and dexamethasone. What is the primary site of action of aprepitant, and what pathway does it inhibit?",
  "choices": [
    "Vomiting center; histamine H1 receptor",
    "Area postrema; dopamine D2 receptor",
    "Chemoreceptor trigger zone; neurokinin-1 (NK1) receptor",
    "Nucleus tractus solitarius; serotonin 5-HT3 receptor",
    "Vestibular apparatus; M1 muscarinic receptor"
  ],
  "correctAnswer": 2,
  "explanation": " Aprepitant is a neurokinin-1 (NK1) receptor antagonist that acts primarily in the  chemoreceptor trigger zone (CTZ) to block the effects of  substance P, a key mediator of  delayed chemotherapy-induced nausea and vomiting (CINV). (A) Incorrect: H1 blockers like diphenhydramine work in the vestibular system and vomiting center, but not for CINV. (B) Incorrect: D2 antagonists like metoclopramide target CTZ but not NK1. (D) Incorrect:   Ondansetron acts at the 5-HT3 receptor, not aprepitant. (E) Incorrect: M1 receptor antagonism (e.g., scopolamine) is for motion sickness, not CINV."
},
{
  "question": "A 63-year-old man with cirrhosis presents with hematemesis and hypotension. Endoscopy confirms bleeding esophageal varices. He is started on octreotide as part of the initial management. Which of the following best describes the mechanism of action of octreotide in this setting?",
  "choices": [
    "Direct vasodilation of splanchnic arterioles via β2 receptor activation",
    "Inhibition of gastric acid secretion by blocking H2 receptors",
    "Decreased portal venous pressure via inhibition of vasodilatory hormones",
    "Antagonism of 5-HT3 receptors in the area postrema",
    "Direct vasoconstriction of esophageal mucosal vessels via α1 receptor agonism"
  ],
  "correctAnswer": 2,
  "explanation": "Octreotide  is a somatostatin analog  that reduces bleeding from esophageal varices by inhibiting splanchnic vasodilatory hormones, leading to  decreased portal venous pressure. This helps control acute variceal hemorrhage.  (A) Incorrect: Octreotide reduces  splanchnic blood flow, not dilates it. (B) Incorrect: It may inhibit gastrin, but it does not block H2 receptors. (D) Incorrect: 5-HT3 antagonists like ondansetron are used for nausea, not bleeding control. (E) Incorrect: It does not act via α1 receptor agonism."
},
{
  "question": "A public health team designs a program to reduce obesity in a metropolitan area. They pilot a city-wide nutrition education campaign, which leads to minimal change in BMI after 2 years. Meanwhile, another district implements zoning changes to reduce food deserts, showing greater improvements. According to systems thinking principles, the second intervention is more effective primarily because it represents:",
  "choices": [
    "A low-cost intervention with higher population coverage",
    "A feedback-suppressed approach with minimal bias",
    "A tweak designed to minimize unintended consequences",
    "A high-leverage intervention altering system structure",
    "An equilibrium-maintaining strategy to prevent error propagation"
  ],
  "correctAnswer": 3,
  "explanation": "The zoning change that addresses  food access represents a high-leverage intervention, as defined in the video—one that changes the system's underlying structure and  reduces unintended consequences  while producing meaningful change. Nutrition education alone is often low-leverage due to limited systemic impact. (A) Cost and coverage aren't the defining features of leverage. (B) Feedback suppression is not relevant here. (C) 'Tweak' implies small change, not systemic reform. (E) Equilibrium strategies refer to homeostatic mechanisms, not reform."
},
{
  "question": "According to the systems thinking model presented in the CDC video, which of the following best defines a high-leverage intervention?",
  "choices": [
    "An intervention that produces rapid, visible change in short time frames",
    "An action that maximizes change while minimizing unintended consequences",
    "A strategy that uses financial incentives to motivate behavior change",
    "A policy that is implemented with minimal stakeholder involvement",
    "An approach that solves a single isolated problem efficiently"
  ],
  "correctAnswer": 1,
  "explanation": " High leverage is defined in the video as the ability to produce meaningful, systemic improvement  while simultaneously  reducing unintended consequences. These interventions target root causes rather than symptoms. (A) Speed of change does not guarantee leverage. (C) Financial incentives can work but aren't necessarily high leverage. (D) Stakeholder engagement is important in systems thinking. (E) Isolated problem-solving can create new issues elsewhere in the system."
},
{
  "question": "The video emphasizes that a key goal of systems thinking is not to find 'the truth,' but instead to:",
  "choices": [
    "Develop new technologies for prediction",
    "Become less and less wrong over time",
    "Simplify problems by reducing variables",
    "Eliminate complexity from decision-making",
    "Prioritize personal intuition over data"
  ],
  "correctAnswer": 1,
  "explanation": "The video repeatedly emphasizes that systems thinking is about  improving our assumptions and mental models  so we can become  'less and less wrong' —a scientific, iterative approach to understanding complex systems.  (A) Tools are useful but secondary to mindset. (C) Reductionism may miss key systemic interactions. (D) Complexity should be understood, not ignored. (E) Intuition should be tested against data, not replace it."
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
