// Quiz Data
const quizData = [
  {
    "question": "A 28-year-old woman at 34 weeks of gestation presents with mild dependent peripheral edema and reports shortness of breath when lying flat. She has no history of cardiovascular disease. Examination reveals a loud third heart sound and a systolic ejection murmur. What is the most likely physiologic explanation for these findings?",
    "choices": [
      "Pathological valvular heart disease",
      "Decreased cardiac output",
      "Increased systemic vascular resistance",
      "Normal cardiovascular adaptations in pregnancy",
      "Early stages of heart failure"
    ],
    "correctAnswer": 3,
    "explanation": "Cardiovascular changes during pregnancy include increased cardiac output, an increased resting pulse rate (~10 bpm), and displacement and rotation of the heart due to an elevated diaphragm. A loud third heart sound and a systolic ejection murmur occur commonly in pregnancy (up to 90% of cases) due to increased blood flow and stroke volume, not necessarily indicating pathology."
  },
  {
    "question": "A 24-year-old primigravid woman at 26 weeks gestation presents with increased frequency of urination and mild lower back discomfort. Ultrasonography reveals hydronephrosis and hydroureter, predominantly on the right side. Serum creatinine is 0.5 mg/dL. What is the next best step in management?",
    "choices": [
      "Initiate antibiotics for urinary tract infection",
      "Obtain nephrology consult immediately",
      "Reassure and educate on normal pregnancy findings",
      "Schedule elective cesarean section at 36 weeks",
      "Order renal biopsy for further evaluation"
    ],
    "correctAnswer": 2,
    "explanation": "Hydroureteronephrosis is a common and normal finding during pregnancy due to progesterone-induced smooth muscle relaxation and compression from the gravid uterus, particularly on the right side. A serum creatinine around 0.5 mg/dL is typical due to increased glomerular filtration rate in pregnancy. No immediate intervention is required; reassurance and patient education are sufficient."
  },
  {
    "question": "A pregnant woman at 38 weeks gestation is in active labor. Her cervix is completely dilated, and the fetal head is visible at the vaginal opening. Which cardinal movement of labor best describes the next event?",
    "choices": [
      "Engagement",
      "Internal rotation",
      "Descent",
      "Flexion",
      "Extension"
    ],
    "correctAnswer": 4,
    "explanation": "After the fetal head descends and internally rotates to align with the maternal pelvic anatomy, the next cardinal movement is extension. During extension, the fetal head extends as it passes through the vaginal opening, delivering the head. This step immediately precedes external rotation (restitution) and expulsion."
  },
  {
    "question": "A 32-year-old woman at 30 weeks gestation presents for routine prenatal care. Laboratory findings reveal hemoglobin of 11.8 g/dL (non-pregnant normal range: 13.5-17.5 g/dL). Which physiological adaptation best explains this laboratory finding?",
    "choices": [
      "Decreased erythropoiesis",
      "Increased erythrocyte destruction",
      "Iron deficiency anemia",
      "Pregnancy-induced hypervolemia",
      "Coagulation factor consumption"
    ],
    "correctAnswer": 3,
    "explanation": "During pregnancy, maternal blood volume increases significantly (about 40-45%) to support the growing fetus and uterus. Although erythropoiesis is augmented, plasma volume expansion outpaces red cell mass increase, causing dilutional anemia, reflected as a decreased hemoglobin concentration (physiologic anemia of pregnancy). This adaptation protects the mother from hemorrhage during delivery."
  },
  {
    "question": "A 31-year-old woman, gravida 2 para 1, at 9 weeks gestation presents with vaginal bleeding and mild uterine cramping. Pelvic ultrasound reveals an intrauterine pregnancy without cardiac activity, which previously had cardiac activity confirmed two weeks prior. Her blood type is O-negative. Which of the following is the most appropriate next step in management?",
    "choices": [
      "Reassurance and expectant management only",
      "Administration of RhD immune globulin (RhoGAM)",
      "Immediate surgical evacuation",
      "Administration of progesterone supplementation",
      "Follow-up beta-hCG measurements only"
    ],
    "correctAnswer": 1,
    "explanation": "Administration of RhD immune globulin (RhoGAM) is indicated for all Rh-negative women experiencing spontaneous abortion, regardless of gestational age, to prevent alloimmunization. Surgical evacuation is not immediately necessary unless medically indicated or chosen by the patient. Expectant management alone without RhoGAM would be incorrect, given her Rh-negative status. Progesterone supplementation is ineffective after confirmed fetal demise, and beta-hCG measurements alone would not adequately manage Rh alloimmunization risk."
  },
  {
    "question": "A 28-year-old woman at 25 weeks gestation presents for routine prenatal screening. Her 1-hour glucose challenge test shows elevated glucose levels. A follow-up diagnostic test confirms gestational diabetes mellitus. Which of the following is the most appropriate initial management strategy?",
    "choices": [
      "Immediate initiation of insulin therapy",
      "Administration of metformin",
      "Dietary modification and increased physical activity",
      "Initiation of glyburide therapy",
      "Cesarean section planning"
    ],
    "correctAnswer": 2,
    "explanation": "Dietary modification and increased physical activity are recommended as the initial intervention for gestational diabetes mellitus (GDM). Pharmacologic therapy with insulin (gold standard) or oral medications like metformin and glyburide is initiated only if lifestyle modifications fail to maintain glycemic control. Immediate pharmacologic therapy is not the initial step, and cesarean section planning is based on fetal macrosomia or other obstetric indications later in pregnancy."
  },
  {
    "question": "A 33-year-old woman at 32 weeks gestation presents to the emergency department after experiencing a sudden gush of clear vaginal fluid without contractions. Examination reveals pooling of fluid in the vaginal vault and positive nitrazine paper test. Which of the following treatments is most appropriate at this time?",
    "choices": [
      "Immediate induction of labor",
      "Administration of corticosteroids and antibiotic prophylaxis",
      "Bed rest without pharmacologic intervention",
      "Routine cervical cerclage",
      "Administration of oxytocin"
    ],
    "correctAnswer": 1,
    "explanation": "Premature prelabor rupture of membranes (PPROM) at less than 34 weeks gestation is managed expectantly with corticosteroids for fetal lung maturity and antibiotic prophylaxis to prolong latency and reduce infection risk. Immediate induction is reserved for signs of infection, placental abruption, or fetal distress. Bed rest alone is insufficient; cervical cerclage is contraindicated after membranes have ruptured, and oxytocin administration would prematurely induce labor without indication."
  },
  {
    "question": "A previously healthy 29-year-old woman at 36 weeks gestation presents with blood pressure readings consistently around 150/95 mmHg over two visits. Urine protein is negative, and there are no signs of end-organ damage. Which of the following best describes her condition?",
    "choices": [
      "Chronic hypertension",
      "Gestational hypertension",
      "Preeclampsia without severe features",
      "Preeclampsia with severe features",
      "HELLP syndrome"
    ],
    "correctAnswer": 1,
    "explanation": "Gestational hypertension is defined as new-onset hypertension (≥140/90 mmHg) at ≥20 weeks gestation without proteinuria or end-organ damage. This patient's blood pressure elevation without other severe symptoms or lab abnormalities aligns with gestational hypertension. Chronic hypertension occurs prior to 20 weeks gestation or persists postpartum. Preeclampsia requires proteinuria or end-organ dysfunction. HELLP syndrome would demonstrate hemolysis, elevated liver enzymes, and low platelets."
  },
  {
    "question": "A 45-year-old woman presents with heavy menstrual bleeding lasting 10 days per cycle over the past six months. Previously, her periods lasted 4-5 days. She denies sexual activity outside her monogamous relationship, and recent Pap smears have been normal. Physical examination shows an enlarged, non-tender uterus. Pregnancy test is negative. What is the most likely cause of her symptoms?",
    "choices": [
      "Endometrial carcinoma",
      "Adenomyosis",
      "Leiomyoma",
      "Coagulation disorder",
      "Hypothyroidism"
    ],
    "correctAnswer": 2,
    "explanation": "Leiomyomas (fibroids) are the most common pelvic tumors in premenopausal women and typically present with progressively heavier menstrual bleeding and an enlarged uterus on physical examination. Endometrial carcinoma is less common at this age without additional risk factors (e.g., obesity, diabetes, chronic anovulation). Adenomyosis often causes dysmenorrhea with diffusely enlarged, tender uterus. Coagulation disorders typically present at menarche. Hypothyroidism usually causes irregular periods rather than heavy, prolonged bleeding and is not associated with an enlarged uterus."
  },
  {
    "question": "A 62-year-old woman presents with episodes of vaginal bleeding occurring over the past few months. She underwent menopause at age 55 and has never taken hormone replacement therapy. Her Pap smears have been normal, the last performed 6 months ago. BMI is 32 kg/m². What is the most appropriate next step in her evaluation?",
    "choices": [
      "Repeat Pap smear",
      "Coagulation studies",
      "Endometrial biopsy",
      "Pelvic ultrasound only",
      "Follicle-stimulating hormone (FSH) test"
    ],
    "correctAnswer": 2,
    "explanation": "Postmenopausal bleeding mandates evaluation for endometrial pathology. Endometrial biopsy is the appropriate next step to exclude endometrial hyperplasia or cancer. Pap smear evaluates cervical pathology, which is unlikely given recent normal results. Coagulation studies are typically unnecessary in isolated postmenopausal bleeding unless bleeding is unusually severe or persistent. Pelvic ultrasound alone might be appropriate if endometrial stripe <4 mm, but biopsy is definitive and necessary in the presented scenario. FSH testing is not indicated as menopause is clinically established."
  },
  {
    "question": "A 15-year-old girl presents with prolonged heavy menstrual bleeding since menarche two months ago. Each menstrual period lasts approximately 10 days, and she reports significant fatigue and occasional dizziness. She has easy bruising from sports activities, and her paternal aunt experiences similarly heavy menstrual cycles. Pelvic examination is deferred due to age. What is the most appropriate initial diagnostic test?",
    "choices": [
      "Pelvic ultrasound",
      "Endometrial biopsy",
      "Thyroid-stimulating hormone (TSH) and prolactin levels",
      "Coagulation studies",
      "Gonorrhea and chlamydia testing"
    ],
    "correctAnswer": 3,
    "explanation": "In adolescents presenting with menorrhagia at menarche and signs suggestive of a bleeding disorder (family history, easy bruising), coagulation studies (including evaluation for von Willebrand disease) are essential. Pelvic ultrasound is typically normal in adolescents without anatomical anomalies or pregnancy. Endometrial biopsy is invasive and not indicated at this age. Thyroid and prolactin levels may be relevant if irregular cycles persist but are less likely in the initial presentation described. Gonorrhea/chlamydia testing is crucial if sexually active, but there is no indication of sexual activity here."
  },
  {
    "question": "A 28-year-old woman presents to the emergency department with severe, unilateral pelvic pain for the past 4 hours. She reports nausea and one episode of vomiting. She has a history of ovarian cysts. Pelvic ultrasound demonstrates an enlarged right ovary without clear blood flow. What is the most appropriate next step in management?",
    "choices": [
      "Observation and repeat ultrasound in 24 hours",
      "Administration of methotrexate",
      "Immediate laparoscopic surgery",
      "Oral antibiotics for presumed pelvic inflammatory disease",
      "Administration of NSAIDs and reassurance"
    ],
    "correctAnswer": 2,
    "explanation": "The patient's presentation with acute unilateral pelvic pain, nausea, and an enlarged ovary without clear blood flow strongly suggests ovarian torsion, which is a surgical emergency. Immediate laparoscopic surgery is required to untwist the ovary and preserve ovarian function if possible. Observation risks ovarian necrosis and loss of ovarian function. Methotrexate is for ectopic pregnancy, not ovarian torsion. Antibiotics are indicated for PID, which typically presents with bilateral tenderness and purulent cervical discharge. NSAIDs alone are inadequate treatment for ovarian torsion."
  },
  {
    "question": "A 32-year-old pregnant woman at 35 weeks gestation presents with sudden onset of severe abdominal pain, vaginal bleeding, and uterine tenderness. She has a history of chronic hypertension and cocaine use. Fetal heart monitoring shows significant decelerations. What is the most likely diagnosis?",
    "choices": [
      "Uterine rupture",
      "Placental abruption",
      "Pubic symphysis diastasis",
      "Braxton-Hicks contractions",
      "Round ligament pain"
    ],
    "correctAnswer": 1,
    "explanation": "Placental abruption presents as sudden, painful vaginal bleeding and uterine tenderness, often accompanied by fetal distress. Risk factors include hypertension, cocaine use, smoking, prior abruption, and uterine anomalies. Uterine rupture is associated with previous uterine surgery (e.g., cesarean sections), which this patient lacks. Pubic symphysis diastasis causes pelvic girdle pain but not vaginal bleeding or significant fetal distress. Braxton-Hicks contractions are irregular, painless contractions without fetal distress or bleeding. Round ligament pain presents as sharp, positional pain without bleeding or fetal distress."
  },
  {
    "question": "A 25-year-old woman presents with chronic pelvic pain that worsens during menstruation and sexual intercourse. She has regular menstrual cycles but frequently requires NSAIDs to control severe dysmenorrhea. Physical examination reveals nodularity in the posterior cul-de-sac. What is the most likely diagnosis?",
    "choices": [
      "Interstitial cystitis",
      "Pelvic inflammatory disease",
      "Endometriosis",
      "Mittelschmerz",
      "Adenomyosis"
    ],
    "correctAnswer": 2,
    "explanation": "Endometriosis is characterized by cyclic pelvic pain, severe dysmenorrhea, dyspareunia, and may present with nodularity in the posterior cul-de-sac on physical examination due to endometrial implants. Interstitial cystitis typically presents with bladder pain, urgency, frequency, without cyclic worsening or cul-de-sac nodularity. PID is associated with acute pain, fever, discharge, and cervical motion tenderness. Mittelschmerz refers to brief mid-cycle ovulatory pain, not chronic cyclic dysmenorrhea. Adenomyosis often presents similarly to endometriosis but usually involves a diffusely enlarged, tender uterus rather than nodularity in the cul-de-sac."
  },
  {
    "question": "A 32-year-old woman at 41 weeks of gestation is admitted for induction of labor due to post-term pregnancy. Oxytocin is administered intravenously to stimulate uterine contractions. Which of the following mechanisms best describes the action of oxytocin in inducing labor?",
    "choices": [
      "Activation of G protein-coupled receptors and increased intracellular calcium",
      "Inhibition of prostaglandin synthesis",
      "Competitive antagonism of progesterone receptors",
      "Stimulation of beta-2 adrenergic receptors",
      "Inhibition of calcium channels in myometrial smooth muscle"
    ],
    "correctAnswer": 0,
    "explanation": "Oxytocin induces uterine contractions by activating specific G protein-coupled receptors coupled to Gq and G11 proteins. This activation leads to the stimulation of the PLC-IP3 signaling pathway, increasing intracellular calcium and prostaglandins, enhancing uterine smooth muscle contractions. It does not inhibit prostaglandin synthesis or antagonize progesterone receptors, nor does it affect beta-2 adrenergic receptors or calcium channels directly."
  },
  {
    "question": "A 29-year-old woman experiences heavy postpartum hemorrhage shortly after delivery. Which uterotonic agent is most effective and commonly used orally for controlling postpartum hemorrhage by inducing forceful uterine contractions?",
    "choices": [
      "Dinoprostone (PGE2)",
      "Misoprostol (PGE1 analog)",
      "Methylergonovine (Methergine)",
      "Mifepristone (RU486)",
      "Terbutaline"
    ],
    "correctAnswer": 2,
    "explanation": "Methylergonovine (Methergine), an ergot alkaloid, is frequently utilized to induce strong, sustained uterine contractions, especially effective orally in managing postpartum hemorrhage. Dinoprostone and Misoprostol are prostaglandins typically used for cervical ripening and induction or abortion but are less commonly first-line for postpartum hemorrhage. Mifepristone is a progesterone antagonist used primarily for abortion. Terbutaline is a beta-2 agonist used to delay labor, not induce contractions."
  },
  {
    "question": "A 26-year-old pregnant woman at 32 weeks of gestation presents with preterm contractions. Physical exam shows cervical dilation of 2 cm with 30% effacement. A decision is made to administer a medication to inhibit uterine contractions. Which of the following drugs acts as a calcium channel blocker to inhibit uterine contractions?",
    "choices": [
      "Terbutaline",
      "Indomethacin",
      "Nifedipine",
      "Magnesium sulfate",
      "Atosiban"
    ],
    "correctAnswer": 2,
    "explanation": "Nifedipine is a calcium channel blocker frequently used to relax myometrial smooth muscle and effectively inhibit preterm labor contractions. Terbutaline is a beta-2 agonist, while Indomethacin is a prostaglandin synthetase inhibitor. Magnesium sulfate also inhibits contractions, but primarily by competing with calcium rather than blocking calcium channels directly. Atosiban is an oxytocin receptor antagonist, not FDA-approved in the US."
  },
  {
    "question": "A 35-year-old woman undergoing induction of labor develops excessive uterine contractions, leading to fetal distress. Which of the following medications could be administered acutely to reduce uterine contraction frequency and intensity?",
    "choices": [
      "Oxytocin",
      "Ergonovine",
      "Terbutaline",
      "Mifepristone",
      "Misoprostol"
    ],
    "correctAnswer": 2,
    "explanation": "Terbutaline, a beta-2 adrenergic receptor agonist, is used acutely to inhibit uterine contractions, reducing contraction frequency and intensity, thus alleviating fetal distress during excessive uterine activity. Oxytocin and Ergonovine increase uterine contractions and would worsen the situation. Mifepristone antagonizes progesterone receptors and Misoprostol stimulates uterine contractions; neither would be suitable in this scenario."
  },
  {
    "question": "A 29-year-old woman presents to her physician with unilateral breast redness and tenderness localized to a specific area without fever. She is two months postpartum and breastfeeding. The physician diagnoses a blocked milk duct. Which of the following is the most appropriate initial treatment?",
    "choices": [
      "Initiation of antibiotic therapy",
      "Immediate cessation of breastfeeding",
      "Warm compresses and increased breastfeeding frequency",
      "Referral for mammography",
      "Surgical drainage of the affected duct"
    ],
    "correctAnswer": 2,
    "explanation": "Blocked milk ducts typically present with localized tenderness and redness but without fever or systemic symptoms. The initial management involves conservative measures such as applying warm compresses and increasing the frequency of breastfeeding or pumping to alleviate the obstruction. Antibiotics are indicated only if infection develops (fever, systemic symptoms). Cessation of breastfeeding is unnecessary and may worsen the condition. Mammography and surgical drainage are not initial interventions for uncomplicated blocked ducts."
  },
  {
    "question": "A newborn develops symptoms of liver failure after breastfeeding. Laboratory investigations confirm galactosemia. Which enzyme deficiency is most likely responsible for this condition?",
    "choices": [
      "Lactase",
      "Phenylalanine hydroxylase",
      "Galactose-1-phosphate uridyltransferase",
      "Hexosaminidase A",
      "Glucose-6-phosphate dehydrogenase"
    ],
    "correctAnswer": 2,
    "explanation": "Galactosemia is an autosomal recessive metabolic disorder most commonly due to deficiency in the enzyme galactose-1-phosphate uridyltransferase. This enzyme deficiency impairs galactose metabolism, leading to toxic accumulation and liver failure after lactose ingestion from breast milk. Lactase deficiency causes lactose intolerance but not liver failure. Phenylalanine hydroxylase deficiency is seen in phenylketonuria (PKU). Hexosaminidase A deficiency is associated with Tay-Sachs disease, and glucose-6-phosphate dehydrogenase deficiency causes hemolytic anemia, not liver failure."
  },
  {
    "question": "A 35-year-old woman who recently started breastfeeding presents with flu-like symptoms, fever, and unilateral breast pain with nipple fissures. Physical examination reveals breast redness and purulent discharge. Which of the following organisms is most likely responsible for her symptoms?",
    "choices": [
      "Staphylococcus aureus",
      "Candida albicans",
      "Escherichia coli",
      "Streptococcus pneumoniae",
      "Herpes simplex virus"
    ],
    "correctAnswer": 0,
    "explanation": "Infective mastitis in breastfeeding women typically presents with unilateral breast pain, erythema, fever, and flu-like symptoms, often associated with nipple cracks or fissures. The most common pathogen responsible for mastitis is Staphylococcus aureus. Candida albicans typically causes fungal infections characterized by burning nipple pain and shiny, flaky skin but not fever. E. coli is uncommon in mastitis, Streptococcus pneumoniae typically does not cause mastitis, and Herpes simplex virus presents with painful vesicles rather than mastitis."
  },
  {
    "question": "A 28-year-old woman requests contraception postpartum. She has a history of deep vein thrombosis and is concerned about future thrombosis risk. Which of the following contraceptive methods is most appropriate?",
    "choices": [
      "Combined oral contraceptive pills",
      "Transdermal contraceptive patch",
      "Progestin-only oral contraceptive pills",
      "Vaginal contraceptive ring",
      "Copper intrauterine device (IUD)"
    ],
    "correctAnswer": 4,
    "explanation": "Women with a history of thromboembolic events are contraindicated from using estrogen-containing contraceptive methods due to increased risk of thrombosis. The safest choice for contraception in these patients is typically a copper IUD, which contains no hormones and therefore does not increase thrombosis risk. Progestin-only pills are also a safe alternative, but the copper IUD is preferable due to even lower systemic hormonal exposure. Combined oral contraceptives, the transdermal patch, and the vaginal ring contain estrogen and are contraindicated due to significantly elevated thrombosis risk."
  },
  {
    "question": "A 45-year-old woman presents to her physician with a firm, palpable breast mass that developed after minor breast trauma several months ago. Mammography shows a calcified lesion. Biopsy reveals foamy macrophages, giant cells, and fibrosis. Which of the following is the most likely diagnosis?",
    "choices": [
      "Fibroadenoma",
      "Fat necrosis",
      "Fibrocystic change",
      "Ductal carcinoma in situ",
      "Phyllodes tumor"
    ],
    "correctAnswer": 1,
    "explanation": "Fat necrosis often occurs after trauma or surgery, presenting as a firm palpable mass that can mimic malignancy clinically and radiologically due to calcification. Histologically, it features foamy macrophages, multinucleated giant cells, and fibrosis. Fibroadenoma usually occurs in younger women with a well-circumscribed, mobile mass. Fibrocystic change typically shows cysts, fibrosis, and epithelial proliferation without giant cells or macrophages. Ductal carcinoma in situ is characterized by neoplastic ductal cells confined within ducts, and Phyllodes tumors show a leaf-like architecture with cellular stroma."
  },
  {
    "question": "A 35-year-old lactating woman develops redness, tenderness, swelling, and warmth in her right breast, accompanied by fever and flu-like symptoms. She continues breastfeeding. Fine needle aspiration reveals neutrophils and abundant gram-positive cocci. What is the most likely causative organism?",
    "choices": [
      "Escherichia coli",
      "Staphylococcus aureus",
      "Candida albicans",
      "Herpes simplex virus",
      "Mycobacterium tuberculosis"
    ],
    "correctAnswer": 1,
    "explanation": "Acute mastitis in breastfeeding women is most commonly caused by Staphylococcus aureus, presenting with localized inflammation, fever, and systemic symptoms. E. coli typically causes urinary tract infections and rarely mastitis. Candida infections are fungal and usually involve nipple pain and flaky skin rather than purulent discharge. Herpes simplex virus typically causes vesicular lesions, and Mycobacterium tuberculosis would present more chronically without rapid onset of acute inflammation."
  },
  {
    "question": "A biopsy of a breast lesion from a 28-year-old woman shows a well-circumscribed, mobile mass with proliferation of both stromal and epithelial components. Histology reveals intralobular stromal cells with corresponding epithelial proliferation. What is the most likely diagnosis?",
    "choices": [
      "Intraductal papilloma",
      "Fibroadenoma",
      "Phyllodes tumor",
      "Ductal carcinoma in situ",
      "Gynecomastia"
    ],
    "correctAnswer": 1,
    "explanation": "Fibroadenoma is the most common benign breast tumor in young women, presenting as a well-circumscribed, mobile mass. Histologically, it demonstrates both stromal and epithelial proliferation. Intraductal papilloma presents typically with bloody nipple discharge and shows epithelial and myoepithelial cell proliferation within ducts. Phyllodes tumor also involves fibroepithelial proliferation but with highly cellular stroma and leaf-like architecture. Ductal carcinoma in situ is confined within ducts and shows neoplastic cells without stromal proliferation. Gynecomastia occurs in males with epithelial hyperplasia without significant stromal proliferation."
  },
  {
    "question": "A 55-year-old woman presents with redness, edema, and peau d’orange appearance involving most of her left breast. Biopsy reveals tumor emboli within dermal lymphatics. What is the most likely diagnosis?",
    "choices": [
      "Paget disease of the nipple",
      "Inflammatory breast carcinoma",
      "Invasive ductal carcinoma, no special type",
      "Fat necrosis",
      "Acute mastitis"
    ],
    "correctAnswer": 1,
    "explanation": "Inflammatory breast carcinoma is a clinical-pathological entity characterized by diffuse erythema, edema, and peau d’orange involving at least one-third of the breast skin due to dermal lymphatic tumor emboli causing lymphatic obstruction. Paget disease involves scaling and crusting of the nipple epidermis. Invasive ductal carcinoma typically presents as a discrete mass rather than diffuse inflammation. Fat necrosis often follows trauma without tumor emboli or peau d'orange. Acute mastitis shows infection and inflammatory infiltrate without tumor emboli."
  },
  {
    "question": "A 58-year-old postmenopausal woman presents with abnormal uterine bleeding. Endometrial biopsy demonstrates crowded, irregular glands with loss of intervening stroma and marked cytological atypia, including rounded nuclei with vesicular chromatin and prominent nucleoli. Loss of which tumor suppressor gene is most likely associated with this pathology?",
    "choices": [
      "P53",
      "BRCA1",
      "PTEN",
      "KRAS",
      "FOXL2"
    ],
    "correctAnswer": 2,
    "explanation": "This patient has endometrial atypical hyperplasia/endometrioid intraepithelial neoplasia (EIN), characterized by crowded glands, significant atypia, and loss of stroma. The primary molecular event associated with EIN and endometrioid carcinoma is loss of the PTEN tumor suppressor gene. P53 mutations are typically seen in serous carcinoma of the endometrium, BRCA1 in ovarian/breast carcinoma, KRAS mutations frequently occur in mucinous ovarian tumors, and FOXL2 mutations are specific for adult granulosa cell tumors of the ovary."
  },
  {
    "question": "A 35-year-old woman with obesity presents with oligomenorrhea, hirsutism, and infertility. Ultrasound reveals bilaterally enlarged ovaries with multiple subcapsular cysts. Laboratory evaluation reveals elevated LH and low FSH. This patient is at increased risk for developing which of the following conditions?",
    "choices": [
      "Endometrial carcinoma",
      "Ovarian serous carcinoma",
      "Ovarian mucinous carcinoma",
      "Cervical squamous carcinoma",
      "Endometrial stromal sarcoma"
    ],
    "correctAnswer": 0,
    "explanation": "This patient's clinical presentation and ultrasound findings are consistent with polycystic ovarian syndrome (PCOS). PCOS is associated with unopposed estrogen exposure, significantly increasing the risk of endometrial hyperplasia and subsequent endometrial carcinoma. Ovarian serous and mucinous carcinomas, cervical carcinoma, and endometrial stromal sarcoma are not typically associated with PCOS."
  },
  {
    "question": "A 60-year-old woman presents with postmenopausal bleeding. Pelvic examination reveals an enlarged uterus with a bulky, fleshy mass invading the myometrial wall. Histology demonstrates spindle cells with marked nuclear atypia, numerous mitotic figures, and areas of necrosis. What is the most likely diagnosis?",
    "choices": [
      "Leiomyoma",
      "Endometrial stromal sarcoma",
      "Leiomyosarcoma",
      "Adenomyosis",
      "Endometrial carcinoma"
    ],
    "correctAnswer": 2,
    "explanation": "Leiomyosarcoma is characterized by a bulky, fleshy mass invading the uterine wall, with histology showing spindle cells with significant nuclear atypia, high mitotic activity, and tumor necrosis. Leiomyomas are benign and histologically uniform without significant atypia or necrosis. Endometrial stromal sarcoma has different morphology (low-grade stromal cells). Adenomyosis involves endometrial tissue within myometrium without significant atypia or necrosis, and endometrial carcinoma typically presents as glandular proliferation rather than spindle cells."
  },
  {
    "question": "A 55-year-old woman undergoes surgery for a pelvic mass. Histologic examination of the ovarian mass shows cells arranged in microfollicular patterns (Call-Exner bodies) with scant pale cytoplasm and grooved nuclei. Immunohistochemical testing would most likely reveal elevated levels of which marker?",
    "choices": [
      "AFP",
      "CA-125",
      "Inhibin",
      "LDH",
      "hCG"
    ],
    "correctAnswer": 2,
    "explanation": "The described histological features—Call-Exner bodies, grooved nuclei, and pale cytoplasm—are characteristic of adult granulosa cell tumors, which secrete estrogen and have elevated serum inhibin levels. AFP elevation is associated with yolk sac tumors, CA-125 is typically elevated in epithelial ovarian carcinomas, LDH elevation is common in dysgerminomas, and elevated hCG is characteristic of choriocarcinoma."
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
