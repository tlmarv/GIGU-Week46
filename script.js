// Quiz Data
const quizData = [
  {
    "question": "A newborn with ambiguous genitalia is found to have both ovarian and testicular tissue upon exploratory surgery. Karyotype shows 46,XX. Which of the following best describes the underlying condition?",
    "choices": [
      "Androgen insensitivity syndrome",
      "Ovotesticular disorder of sex development (DSD)",
      "Congenital adrenal hyperplasia",
      "Klinefelter syndrome",
      "Turner syndrome"
    ],
    "correctAnswer": 1,
    "explanation": "Ovotesticular DSD is characterized by the presence of both ovarian and testicular tissue. It typically presents with ambiguous genitalia, often with some degree of masculinization, and most commonly occurs in individuals with a 46,XX karyotype. This distinguishes it from androgen insensitivity (which is 46,XY), CAH (which lacks testicular tissue), and chromosomal disorders like Klinefelter (47,XXY) or Turner (45,X)."
  },
  {
    "question": "In bluey, he was upset because someone mistook his dragon for an egg. His mom was worried that he lost his confidence and would not draw the dragon. In an attempt to make bluey feel better she has him shoot a memory spell at his dads butt. What did the dad love to draw until some dickhead said that the drawing was not good?",
    "choices": [
      "Horses",
      "Cars",
      "Dragons",
      "Eggs",
      "The ovarian cycle"
    ],
    "correctAnswer": 1,
    "explanation": "Some asshole 7 year old told Bluey’s dad that he could not draw a car. That brought down the dads confidence and he never tried to draw a car again. Be like Bluey’s mom, not the dick that did Bluey’s dad dirty."
  },
  {
    "question": "A 2-week-old male infant presents with a scrotal mass that transilluminates on physical exam. Ultrasound confirms a fluid-filled sac around the testis. Which of the following embryological processes most likely failed to occur?",
    "choices": [
      "Formation of the processus vaginalis",
      "Canalization of the vaginal plate",
      "Closure of the processus vaginalis",
      "Regression of the paramesonephric ducts",
      "Differentiation of the mesonephric duct into the epididymis"
    ],
    "correctAnswer": 2,
    "explanation": "A hydrocele is caused by the failure of the processus vaginalis to close, allowing peritoneal fluid to accumulate in the tunica vaginalis around the testis. Formation and regression of genital ducts and canalization of the vaginal plate are unrelated to this condition."
  },
  {
    "question": "A 3-year-old boy is evaluated for an undescended testis. Imaging confirms it is located within the inguinal canal. Which of the following embryological structures is most directly responsible for guiding testicular descent?",
    "choices": [
      "Processus vaginalis",
      "Mesonephric duct",
      "Paramesonephric duct",
      "Gubernaculum",
      "Tunica albuginea"
    ],
    "correctAnswer": 3,
    "explanation": "The gubernaculum is a fibrous cord that connects the testis to the scrotum and plays a key role in guiding testicular descent. Its failure can result in cryptorchidism. The processus vaginalis forms the inguinal canal, while the tunica albuginea forms a capsule around the testis but is not involved in descent."
  },
  {
    "question": "A 22-year-old man presents with infertility. Lab results show low testosterone, elevated luteinizing hormone (LH), and normal follicle-stimulating hormone (FSH). Testicular biopsy shows decreased Leydig cell activity but intact Sertoli cells. Which of the following best explains the hormonal abnormality observed?",
    "choices": [
      "Sertoli cell failure to produce androgen-binding protein",
      "Aromatase deficiency in peripheral tissues",
      "Leydig cell insensitivity to LH",
      "Pituitary adenoma producing excess FSH",
      "Testosterone overproduction by adrenal glands"
    ],
    "correctAnswer": 2,
    "explanation": "LH stimulates Leydig cells to produce testosterone. In this case, low testosterone with elevated LH indicates a failure of Leydig cells to respond to LH—suggesting Leydig cell insensitivity. Sertoli cell function (mediated by FSH) appears intact, as FSH is normal. Aromatase deficiency or adrenal testosterone overproduction would not cause low serum testosterone and elevated LH."
  },
  {
    "question": "A 34-year-old man presents with dysuria and increased urinary frequency. Digital rectal exam reveals a diffusely enlarged, non-tender prostate. PSA is mildly elevated. Which of the following histologic changes is most likely present in the prostate?",
    "choices": [
      "Loss of basal cell layer in acini",
      "Infiltration of neutrophils into glandular stroma",
      "Hyperplasia of periurethral (transition zone) glands",
      "Necrosis of the central zone",
      "Malignant proliferation of the peripheral zone"
    ],
    "correctAnswer": 2,
    "explanation": "Benign prostatic hyperplasia (BPH) involves hyperplasia of glandular and stromal tissue, especially in the transition zone surrounding the urethra. This can compress the urethra and lead to urinary symptoms. Loss of basal layer and peripheral zone involvement are typical of prostate cancer, not BPH. Neutrophilic infiltration and necrosis suggest acute prostatitis."
  },
  {
    "question": "A 19-year-old male presents with a painless testicular mass. Ultrasound confirms a solid intratesticular lesion. Biopsy reveals large cells with clear cytoplasm and central nuclei arranged in sheets. The tumor is highly responsive to chemotherapy. What is the most likely site of lymphatic spread for this lesion?",
    "choices": [
      "Inguinal lymph nodes",
      "External iliac lymph nodes",
      "Internal iliac lymph nodes",
      "Para-aortic lymph nodes",
      "Common iliac lymph nodes"
    ],
    "correctAnswer": 3,
    "explanation": "Testicular cancers such as seminomas commonly metastasize to the para-aortic (lumbar) lymph nodes due to the retroperitoneal embryologic origin of the testes. Inguinal and iliac lymph nodes are involved in scrotal pathology, not intratesticular masses. This distinction is critical for staging and management."
  },
  {
    "question": "A 27-year-old man presents with a painful genital ulcer and tender inguinal lymphadenopathy. He is sexually active with multiple partners and does not use protection consistently. Examination reveals a 1.5 cm deep ulcer with a purulent base and ragged margins. There is also unilateral, tender inguinal lymphadenopathy with fluctuance. Which of the following is the most appropriate empiric treatment?",
    "choices": [
      "Benzathine penicillin 2.4 million units IM x 1 dose",
      "Azithromycin 1g orally x 1 dose",
      "Doxycycline 100 mg orally BID x 3 weeks",
      "Acyclovir 400 mg orally TID x 7 days",
      "Azithromycin 1g orally weekly x 4–6 weeks"
    ],
    "correctAnswer": 1,
    "explanation": "This patient's presentation of painful genital ulcer and tender suppurative lymphadenopathy is most consistent with chancroid caused by Haemophilus ducreyi. The preferred empiric treatment is a single dose of azithromycin 1g orally. Benzathine penicillin is used for syphilis, which causes painless ulcers. Doxycycline 3 weeks is used for lymphogranuloma venereum (LGV), and acyclovir is used for herpes simplex virus, which often presents with grouped vesicles."
  },
  {
    "question": "A 32-year-old woman presents with a thin, malodorous, gray vaginal discharge. She reports no itching or pain. Speculum exam reveals a homogenous discharge coating the vaginal walls. A wet mount shows clue cells, and the vaginal pH is 5.5. The whiff test is positive. Which of the following is the most appropriate first-line treatment?",
    "choices": [
      "Metronidazole 500 mg orally BID for 7 days",
      "Fluconazole 150 mg orally x 1 dose",
      "Azithromycin 1g orally x 1 dose",
      "Clindamycin 900 mg IV every 8 hours",
      "Tinidazole 2g orally x 1 dose"
    ],
    "correctAnswer": 0,
    "explanation": "This patient meets 4/4 Amsel criteria (homogenous discharge, clue cells, pH > 4.5, positive whiff test), diagnostic for bacterial vaginosis. First-line treatment is metronidazole 500 mg orally BID for 7 days. Fluconazole is used for Candida, azithromycin for chlamydia, clindamycin IV for PID, and tinidazole is an alternative for BV but not first-line."
  },
  {
    "question": "A 25-year-old male presents to the clinic with a one-week history of dysuria and purulent urethral discharge. He denies fever or systemic symptoms. Gram stain of urethral exudate shows gram-negative diplococci within polymorphonuclear leukocytes. What is the most appropriate antibiotic regimen?",
    "choices": [
      "Ceftriaxone 500 mg IM x 1 dose",
      "Penicillin G benzathine 2.4 million units IM weekly x 3 weeks",
      "Metronidazole 500 mg orally BID x 7 days",
      "Azithromycin 1g orally weekly for 4 weeks",
      "Cefixime 800 mg orally BID for 3 days"
    ],
    "correctAnswer": 0,
    "explanation": "The presence of gram-negative intracellular diplococci in a symptomatic male is diagnostic for Neisseria gonorrhoeae. The CDC-recommended treatment is ceftriaxone 500 mg IM x 1 dose. Benzathine penicillin is used for syphilis. Metronidazole treats trichomoniasis or BV. Azithromycin weekly is not a correct regimen here, and cefixime is an oral option but less preferred due to lower efficacy."
  },
  {
    "question": "A 29-year-old man is diagnosed with secondary syphilis and receives a single intramuscular dose of benzathine penicillin G. Six hours later, he develops fever, chills, headache, and myalgias. On physical exam, he is febrile with a temperature of 38.8°C (101.8°F) and appears mildly ill but stable. Which of the following best explains this patient’s new symptoms?",
    "choices": [
      "Anaphylactic hypersensitivity to penicillin",
      "Toxin-mediated release of IL-1 by Streptococcus pyogenes",
      "Tumor lysis syndrome due to rapid bacterial turnover",
      "Immune complex deposition in tissues",
      "Cytokine release due to rapid spirochete lysis"
    ],
    "correctAnswer": 4,
    "explanation": "This patient is experiencing a Jarisch-Herxheimer reaction, a transient systemic inflammatory response that occurs within hours of antibiotic treatment of spirochetal infections (especially syphilis). It is caused by the rapid lysis of Treponema pallidum, which releases lipoproteins and other components that trigger cytokine release, including IL-6, IL-8, and TNF-α. It is self-limited and managed with supportive care. It is not a true allergy or immune complex-mediated reaction."
  },
  {
    "question": "A 28-year-old woman has a regular 28-day menstrual cycle. On day 14, ovulation occurs, and a structure remains in the ovary and begins producing progesterone. Which of the following best describes the primary histologic component responsible for progesterone secretion during this phase?",
    "choices": [
      "Primordial follicular cells",
      "Theca externa cells",
      "Granulosa lutein cells",
      "Theca lutein cells",
      "Cumulus oophorus cells"
    ],
    "correctAnswer": 2,
    "explanation": "After ovulation, granulosa cells of the ruptured follicle transform into granulosa lutein cells, which are the primary producers of progesterone during the luteal phase. Theca lutein cells also contribute, but granulosa lutein cells are more prominent and secretory. Theca externa is fibrous and non-secretory; primordial and cumulus cells are not involved in steroid production."
  },
  {
    "question": "A 35-year-old woman is undergoing evaluation for infertility. Her physician orders basal body temperature tracking. An increase in temperature is noted mid-cycle. What is the best explanation for the temperature rise?",
    "choices": [
      "Increased estradiol secretion by granulosa cells",
      "LH surge inducing ovulation",
      "Estrogen-induced ciliary motion in the oviduct",
      "Progesterone secretion by the corpus luteum",
      "Increased vascularization of the endometrium"
    ],
    "correctAnswer": 3,
    "explanation": "The rise in basal body temperature during the luteal phase is caused by progesterone, which is thermogenic. This hormone is secreted by granulosa lutein cells in the corpus luteum after ovulation. Estradiol rises before ovulation. The LH surge induces ovulation but doesn’t cause the temperature rise. Estrogen affects the oviduct, not thermoregulation."
  },
  {
    "question": "A Pap smear from a 40-year-old woman reveals high-grade cervical intraepithelial neoplasia (CIN 3). Which of the following locations most likely harbored the initial site of HPV-mediated transformation?",
    "choices": [
      "Simple columnar epithelium of the endocervix",
      "Stratified squamous epithelium of the ectocervix",
      "Transformation zone at the squamocolumnar junction",
      "Endometrial lining of the uterine fundus",
      "Basal layer of the vaginal mucosa"
    ],
    "correctAnswer": 2,
    "explanation": "The transformation zone of the cervix is where the simple columnar epithelium of the endocervix transitions to stratified squamous epithelium. This area is most susceptible to HPV infection and is the most common site of cervical dysplasia and carcinoma. The ectocervix and endocervix alone are not the main risk sites unless at the transformation zone."
  },
  {
    "question": "A 32-year-old postpartum woman presents for evaluation of breast fullness and mild tenderness. Histologic examination of her breast tissue shows alveolar structures lined by epithelial cells with apical blebbing, bulbous projections, and prominent vacuoles. Which of the following best describes the secretion mechanism responsible for her milk production?",
    "choices": [
      "Merocrine secretion of lipids and proteins",
      "Apocrine secretion of lipids, merocrine secretion of proteins",
      "Apocrine secretion of both lipids and proteins",
      "Holocrine secretion of immunoglobulins",
      "Endocytosis of hormones and passive diffusion of water"
    ],
    "correctAnswer": 1,
    "explanation": "Mammary glands utilize dual secretory mechanisms. Lipids are secreted via apocrine secretion (involving pinching off of the apical cytoplasm), while proteins are secreted via merocrine (exocytotic) pathways. Holocrine secretion is seen in sebaceous glands, not breast tissue. Endocytosis/passive diffusion are not relevant here."
  },
  {
    "question": "A 58-year-old postmenopausal woman is diagnosed with ER+ breast cancer. She is started on an aromatase inhibitor. Which of the following tissues is the primary source of estrogen in this patient?",
    "choices": [
      "Granulosa cells of the ovary",
      "Theca interna cells of the ovary",
      "Granulosa lutein cells of the corpus luteum",
      "Adipocytes in adipose tissue",
      "Zona reticularis of the adrenal cortex"
    ],
    "correctAnswer": 3,
    "explanation": "In postmenopausal women, peripheral conversion of androgens to estrogens occurs in adipose tissue via aromatase. Ovarian follicles (granulosa/theca cells) and corpus luteum no longer contribute significantly after menopause. The zona reticularis produces weak androgens, not estrogens."
  },
  {
    "question": "A 44-year-old woman presents with a firm, immobile breast mass. Biopsy reveals malignant ductal cells expressing high levels of estrogen receptor (ER). Which of the following treatment mechanisms best describes how tamoxifen acts in this patient?",
    "choices": [
      "Blocks androgen receptor signaling in breast cells",
      "Binds and degrades estrogen receptors via proteasomal pathway",
      "Inhibits aromatase conversion of androgens to estrogens",
      "Competitively binds estrogen receptors to prevent estrogen-induced transcription",
      "Induces apoptosis through direct DNA damage"
    ],
    "correctAnswer": 3,
    "explanation": "Tamoxifen is a selective estrogen receptor modulator (SERM) that competitively inhibits estrogen from binding to the ER in breast tissue, thus blocking estrogen-driven transcription and proliferation. SERDs (e.g., fulvestrant) degrade ER. Aromatase inhibitors block estrogen synthesis, not receptor binding."
  },
  {
    "question": "A 30-year-old man presents with a painless testicular mass. Serum tumor markers show markedly elevated beta-hCG, but normal AFP. Histology reveals large pleomorphic cells arranged in sheets with cytotrophoblasts and syncytiotrophoblasts. Which of the following is the most likely diagnosis?",
    "choices": [
      "Classic seminoma",
      "Embryonal carcinoma",
      "Choriocarcinoma",
      "Yolk sac tumor",
      "Teratoma"
    ],
    "correctAnswer": 2,
    "explanation": "Choriocarcinoma is a highly malignant germ cell tumor that presents with elevated beta-hCG due to the presence of syncytiotrophoblasts. It often metastasizes hematogenously and may cause gynecomastia or thyrotoxicosis. AFP is typically not elevated unless there's a yolk sac component. Seminomas rarely elevate beta-hCG and lack trophoblastic elements."
  },
  {
    "question": "A 65-year-old uncircumcised man presents with a painless ulcerated mass on the glans penis. Biopsy reveals invasive squamous cell carcinoma. Which of the following risk factors is most directly associated with the pathogenesis of this condition?",
    "choices": [
      "High dietary fat intake",
      "Chronic prostatitis",
      "Human papillomavirus type 16 infection",
      "Estrogen therapy",
      "Prostate-specific antigen elevation"
    ],
    "correctAnswer": 2,
    "explanation": "Penile squamous cell carcinoma is closely associated with high-risk HPV types, especially 16 and 18. HPV infection leads to E6 and E7 oncogene expression, inactivating p53 and Rb, which promotes carcinogenesis. Poor hygiene and lack of circumcision increase susceptibility. PSA and estrogen therapy are unrelated."
  },
  {
    "question": "A 3-year-old boy presents with a painless scrotal mass. Imaging confirms a solid testicular tumor. Serum alpha-fetoprotein is markedly elevated. Histology reveals Schiller-Duval bodies. What is the most likely diagnosis?",
    "choices": [
      "Classic seminoma",
      "Yolk sac tumor",
      "Teratoma",
      "Choriocarcinoma",
      "Embryonal carcinoma"
    ],
    "correctAnswer": 1,
    "explanation": "Yolk sac tumor (endodermal sinus tumor) is the most common testicular tumor in young children. It is characterized by elevated AFP and pathognomonic Schiller-Duval bodies. It generally has a good prognosis in children. Seminomas and embryonal carcinomas occur in older age groups, and teratomas in prepubertal boys are benign and AFP-negative."
  },
  {
    "question": "A 76-year-old woman presents with a pruritic, erythematous lesion of the vulva. Biopsy shows large epithelial cells with abundant pale cytoplasm and prominent nucleoli dispersed within the squamous epithelium. The lesion stains positive for PAS, mucin, and cytokeratin but is negative for S100. Which of the following is the most likely diagnosis?",
    "choices": [
      "Melanoma",
      "Extramammary Paget disease",
      "Differentiated VIN",
      "Lichen sclerosus",
      "High-grade squamous intraepithelial lesion (HSIL)"
    ],
    "correctAnswer": 1,
    "explanation": "Extramammary Paget disease presents in elderly women as a red, pruritic lesion of the vulva and is characterized by large Paget cells within the squamous epithelium. These cells are PAS+, mucin+, keratin+, and CEA+, but unlike melanoma, they are S100 negative. Melanoma would show S100 positivity and be negative for mucin and keratin."
  },
  {
    "question": "A 42-year-old woman has an abnormal Pap smear showing high-grade squamous intraepithelial lesion (HSIL). Colposcopic biopsy confirms the diagnosis. Which of the following features would most likely be seen on histologic examination?",
    "choices": [
      "Koilocytosis confined to superficial layers",
      "Basal cell atypia confined to lower third of epithelium",
      "Full-thickness proliferation of immature, hyperchromatic cells with loss of maturation",
      "Columnar metaplasia with goblet cells",
      "Nuclear pseudostratification with cigar-shaped nuclei and mitotic figures at the surface"
    ],
    "correctAnswer": 2,
    "explanation": "HSIL, including CIN3 (carcinoma in situ), is defined by full-thickness proliferation of atypical basal-like cells with high nuclear-to-cytoplasmic ratios, hyperchromasia, and mitoses at all levels. This contrasts with LSIL, where atypia is limited to the lower third and superficial koilocytosis predominates. Goblet cells and pseudostratified nuclei are features of adenocarcinoma."
  },
  {
    "question": "A 3-year-old girl is brought in by her parents after they noticed a grape-like mass protruding from her vagina. Biopsy of the lesion shows malignant cells with rhabdomyoblastic differentiation and a cambium layer beneath the epithelium. Which of the following is the most likely diagnosis?",
    "choices": [
      "Yolk sac tumor",
      "Embryonal rhabdomyosarcoma",
      "Clear cell adenocarcinoma",
      "Seminoma",
      "Endodermal sinus tumor"
    ],
    "correctAnswer": 1,
    "explanation": "Embryonal rhabdomyosarcoma, also known as sarcoma botryoides, is a malignant tumor of immature skeletal muscle affecting young girls. It presents as a grape-like polypoid mass and shows a characteristic cambium layer histologically. Yolk sac tumor (endodermal sinus tumor) also affects children but is testicular/ovarian and marked by elevated AFP and Schiller-Duval bodies."
  },
  {
    "question": "A 23-year-old woman has regular 28-day menstrual cycles. On cycle day 12, her serum estradiol rises significantly, triggering a sharp increase in LH levels. Which of the following best explains this physiological phenomenon?",
    "choices": [
      "Estrogen promotes LH release by inhibiting GnRH",
      "Estradiol exerts positive feedback on the hypothalamus and anterior pituitary",
      "Progesterone-induced LH surge causes ovulation",
      "FSH directly induces the LH surge by stimulating LH receptors",
      "Estradiol inhibits kisspeptin neurons in the hypothalamus"
    ],
    "correctAnswer": 1,
    "explanation": "Around mid-cycle, elevated estradiol from the dominant follicle exerts a positive feedback effect on the hypothalamus and anterior pituitary, resulting in an LH surge. This triggers ovulation. In contrast, low to moderate estradiol levels exert negative feedback. Progesterone levels rise after the LH surge. Kisspeptin is stimulated—not inhibited—by high estradiol in this context."
  },
  {
    "question": "A 29-year-old woman presents with infertility and hirsutism. Laboratory studies show elevated LH:FSH ratio, increased free testosterone, and low sex hormone-binding globulin (SHBG). Ultrasound shows multiple peripheral follicles in both ovaries. Which of the following mechanisms most directly contributes to her anovulation?",
    "choices": [
      "Increased estradiol production by granulosa cells",
      "Excessive progesterone secretion by corpus luteum",
      "Hyperandrogenemia leading to follicular atresia",
      "Decreased GnRH pulse frequency suppressing LH",
      "Elevated inhibin A suppressing FSH"
    ],
    "correctAnswer": 2,
    "explanation": "This patient has classic findings of polycystic ovary syndrome (PCOS), characterized by hyperandrogenemia, elevated LH:FSH ratio, and anovulation. Androgen excess leads to follicular atresia, preventing dominant follicle selection. SHBG is decreased, increasing free testosterone. Progesterone rises post-ovulation, which is absent in PCOS. Inhibin A is more active in the luteal phase."
  },
  {
    "question": "A 16-year-old girl presents with primary amenorrhea. She has normal breast development, absent axillary and pubic hair, and a blind vaginal pouch. Pelvic ultrasound shows no uterus or upper vagina. Karyotyping reveals 46,XY. Which of the following is the most likely cause of her phenotype?",
    "choices": [
      "Complete androgen insensitivity syndrome",
      "Müllerian agenesis (MRKH syndrome)",
      "Turner syndrome",
      "5-alpha reductase deficiency",
      "Kallmann syndrome"
    ],
    "correctAnswer": 0,
    "explanation": "Complete androgen insensitivity syndrome (CAIS) presents in 46,XY individuals as phenotypic females with normal breast development (due to aromatization of testosterone to estrogen), absent uterus, and scant pubic/axillary hair due to androgen resistance. Müllerian agenesis is 46,XX and has normal pubic hair. Turner syndrome is 45,X and lacks breast development. Kallmann and 5-alpha reductase deficiency do not explain this full constellation."
  },
  {
    "question": "A 26-year-old man presents for infertility evaluation. Semen analysis reveals azoospermia with a volume of 2.5 mL. Physical examination reveals small, firm testes. Labs show: Testosterone 600 ng/dL (normal: 300–1000), FSH 18 mIU/mL (normal: 1–9), LH 7 mIU/mL (normal: 2–9). Which of the following best explains the elevated FSH despite normal testosterone?",
    "choices": [
      "Androgen insensitivity syndrome",
      "Sertoli cell-only syndrome (germ cell aplasia)",
      "Leydig cell hyperplasia",
      "Primary hypothalamic dysfunction",
      "Androgen-producing adrenal tumor"
    ],
    "correctAnswer": 1,
    "explanation": "This patient has isolated spermatogenic failure, as indicated by azoospermia with elevated FSH and normal testosterone. Sertoli cells secrete inhibin B, which negatively regulates FSH. In Sertoli cell-only syndrome, germ cells are absent and inhibin B is reduced, leading to compensatory FSH elevation. LH remains normal due to intact Leydig cell function and normal testosterone levels."
  },
  {
    "question": "A 68-year-old man is diagnosed with benign prostatic hyperplasia (BPH). He is started on finasteride. Which of the following best describes the mechanism of action of this medication?",
    "choices": [
      "Blocks androgen receptor to reduce testosterone activity",
      "Inhibits aromatase and decreases estradiol conversion",
      "Inhibits 5α-reductase to decrease dihydrotestosterone",
      "Stimulates SHBG synthesis to reduce free testosterone",
      "Suppresses GnRH secretion via negative feedback"
    ],
    "correctAnswer": 2,
    "explanation": "Finasteride is a 5α-reductase inhibitor that reduces the conversion of testosterone to dihydrotestosterone (DHT). DHT is the primary androgen responsible for prostatic growth. This therapy reduces prostate volume over time. It does not block androgen receptors or affect aromatase. SHBG and GnRH are not directly altered by finasteride."
  },
  {
    "question": "A 17-year-old male presents with delayed puberty and anosmia. Physical exam shows Tanner stage I genitalia and small testes. Labs reveal low FSH, low LH, and low testosterone. MRI shows no pituitary lesion. Which of the following is the most likely diagnosis?",
    "choices": [
      "Klinefelter syndrome",
      "Constitutional growth delay",
      "Complete androgen insensitivity syndrome",
      "Kallmann syndrome",
      "Sertoli-cell-only syndrome"
    ],
    "correctAnswer": 3,
    "explanation": "Kallmann syndrome is a form of idiopathic hypogonadotropic hypogonadism associated with anosmia due to failed migration of GnRH-producing neurons and olfactory bulbs. Labs show low gonadotropins and testosterone. Klinefelter is 47,XXY and shows high FSH/LH. CAIS has high testosterone and female phenotype. Sertoli-cell-only syndrome shows elevated FSH and normal T. Constitutional delay lacks anosmia and resolves with time."
  },
  {
    "question": "A 17-year-old girl presents with primary amenorrhea and no breast development. Her serum FSH is 0.8 mIU/mL (normal 3–10), LH is 0.5 mIU/mL, and estradiol is low. MRI of the brain shows no pituitary mass. Which of the following is the most likely cause of her condition?",
    "choices": [
      "Turner syndrome (45,X)",
      "Idiopathic hypogonadotropic hypogonadism",
      "Complete androgen insensitivity syndrome",
      "Müllerian agenesis",
      "Premature ovarian insufficiency"
    ],
    "correctAnswer": 1,
    "explanation": "This patient has delayed puberty with low FSH, LH, and estradiol—indicating hypogonadotropic hypogonadism. The most likely diagnosis is idiopathic hypogonadotropic hypogonadism (IHH), especially since MRI shows no mass. Turner syndrome would show high FSH/LH. CAIS and MRKH present with breast development due to estrogen. POI shows elevated FSH/LH with low estrogen."
  },
  {
    "question": "A 2-year-old boy presents with early pubic hair, penile enlargement, and accelerated growth. His LH and FSH levels are undetectable, but his serum testosterone is markedly elevated. Which of the following is the most likely etiology of his condition?",
    "choices": [
      "Constitutional delay of puberty",
      "Central precocious puberty",
      "McCune-Albright syndrome",
      "Peripheral precocious puberty",
      "Kallmann syndrome"
    ],
    "correctAnswer": 3,
    "explanation": "This child has peripheral (gonadotropin-independent) precocious puberty, supported by high testosterone with suppressed LH and FSH. Causes may include adrenal tumors or testicular hCG-producing tumors. Central precocious puberty would show elevated or responsive LH. McCune-Albright involves café-au-lait spots and bone abnormalities. Kallmann syndrome presents with delayed, not early, puberty."
  },
  {
    "question": "A 13-year-old boy has not yet entered puberty. Physical exam reveals small testes (<4 mL) and no pubic hair. His labs show FSH 38 mIU/mL, LH 24 mIU/mL, and testosterone <50 ng/dL. Which of the following karyotypes is most likely responsible for his condition?",
    "choices": [
      "46,XX",
      "46,XY",
      "47,XXY",
      "45,X",
      "46,XY with SRY deletion"
    ],
    "correctAnswer": 2,
    "explanation": "This presentation—delayed puberty, small testes, low testosterone, and elevated FSH/LH—is classic for hypergonadotropic hypogonadism. The most common chromosomal cause in males is Klinefelter syndrome (47,XXY), which leads to seminiferous tubule degeneration and impaired Leydig function. 45,X and SRY deletions typically affect females or result in gonadal dysgenesis."
  },
  {
    "question": "A 16-year-old transgender boy (assigned female at birth) comes to your clinic with his mother to discuss options for gender-affirming care. The patient expresses a strong desire to begin hormone therapy. His mother is concerned and hesitant. The patient appears anxious but well-informed and articulate. What is the most appropriate next step in this clinical encounter?",
    "choices": [
      "Inform the patient that parental consent is required and defer the conversation",
      "Refer the patient for psychiatric evaluation to assess for underlying mental illness",
      "Acknowledge the patient’s gender identity and discuss the benefits of multidisciplinary support, including psychological and medical evaluation",
      "Tell the patient that hormone therapy should only be started after age 18",
      "Prescribe testosterone to the patient as requested"
    ],
    "correctAnswer": 2,
    "explanation": "The most appropriate next step is to affirm the patient’s identity and engage in a **multidisciplinary, patient-centered approach** that includes mental health professionals and pediatric endocrinologists experienced in gender-affirming care. This supports informed decision-making and addresses the needs of both the adolescent and their guardian. Immediate prescribing without evaluation or dismissing the patient’s concerns violates ethical and professional standards."
  },
  {
    "question": "A 29-year-old transgender woman (assigned male at birth) comes to the clinic for a new patient visit. She has not seen a doctor in over 5 years due to prior negative experiences. During the visit, she expresses concern about discrimination in healthcare and asks whether her identity will be respected. What is the most appropriate response by the physician?",
    "choices": [
      "Reassure her that you will refer her to an LGBTQ-specific clinic for her care",
      "Explain that clinical decisions are based on biological sex, not gender identity",
      "State your commitment to providing inclusive care, ask for her preferred name and pronouns, and ensure her identity is respected throughout the visit",
      "Avoid focusing on gender issues and proceed directly with the medical interview",
      "Ask her to sign a waiver acknowledging that her medical records will still reflect her legal sex"
    ],
    "correctAnswer": 2,
    "explanation": "Affirming the patient’s identity by asking for **preferred name and pronouns** and stating a commitment to inclusive care builds trust and aligns with trauma-informed and patient-centered care models. Avoiding or minimizing her concerns, misgendering, or unnecessarily referring out may reinforce distrust and is inappropriate. Respectful communication is essential in reducing healthcare disparities in transgender populations."
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
