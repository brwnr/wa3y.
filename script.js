'use strict';
 
// ══════════════════════════════════════
// TRANSLATIONS (i18n)
// ══════════════════════════════════════
const translations = {
  ar: {
    nav_home: 'الرئيسية', nav_tests: 'الاختبارات', nav_reports: 'التقارير',
    nav_about: 'من نحن', nav_contact: 'تواصل معنا',
    cat_personal: 'شخصي', cat_professional: 'مهني', cat_preparatory: 'تحضيري',
    notifications: 'الإشعارات', login: 'تسجيل الدخول', register: 'إنشاء حساب',
    hero_badge: 'منصة آمنة وأخلاقية بالكامل',
    hero_line1: 'اكتشف', hero_line2: 'وعيك الداخلي', hero_line3: 'بطريقة علمية',
    hero_desc: 'تقييمات سلوكية وعاطفية منظمة تساعدك على فهم نمط استجاباتك — بدون تشخيص، بدون أحكام، فقط رؤى قابلة للقياس.',
    start_assessment: 'ابدأ التقييم الآن', learn_more: 'اعرف أكثر',
    stat_users: 'مستخدم نشط', stat_tests: 'اختبار متخصص', stat_satisfaction: 'رضا المستخدمين',
    float1: 'تنظيم عاطفي', float2: 'تقارير بيانية', float3: 'خصوصية تامة',
    scroll_hint: 'مرر للأسفل',
    features_tag: 'لماذا وعي؟', features_title: 'منصة مبنية على العلم والأخلاق',
    features_desc: 'نقدم أدوات تقييم موثوقة تعزز وعيك الذاتي دون الحكم عليك',
    f1_title: 'منهجية علمية', f1_desc: 'مبنية على أبعاد نفسية راسخة مع تحليل منطقي للأنماط السلوكية',
    f2_title: 'حماية كاملة للبيانات', f2_desc: 'تشفير كامل، موافقة صريحة، لا مشاركة للبيانات بدون إذنك',
    f3_title: 'بدون تشخيص أو أحكام', f3_desc: 'نقدم مؤشرات قابلة للقياس فقط — لا ملصقات، لا أحكام عاطفية',
    f4_title: 'للمحترفين والأفراد', f4_desc: 'يدعم المعالجين النفسيين، مختصي الموارد البشرية، والمدربين',
    f5_title: 'تقارير بصرية احترافية', f5_desc: 'رسوم بيانية تفاعلية وتقارير مفصلة قابلة للتحميل والمشاركة',
    f6_title: 'متعدد اللغات', f6_desc: 'واجهة كاملة بالعربية والإنجليزية والفرنسية مع دعم RTL',
    tests_tag: 'الاختبارات', tests_title: 'اختر تقييمك المناسب',
    tests_desc: '12 اختباراً متخصصاً في أبعاد سلوكية وعاطفية مختلفة',
    all_tests: 'الكل', personal: 'شخصي', professional: 'مهني', preparatory: 'تحضيري',
    start_test: 'ابدأ الاختبار',
    t1_title: 'تقييم الوعي الذاتي', t1_desc: 'قياس مستوى الوعي بأنماطك العاطفية والسلوكية', t1_time: '15 دقيقة', t1_q: '20 سؤال',
    t2_title: 'التنظيم العاطفي', t2_desc: 'استكشاف قدرتك على إدارة مشاعرك والتكيف مع المواقف الضاغطة', t2_time: '20 دقيقة', t2_q: '25 سؤال',
    t3_title: 'أنماط اتخاذ القرار', t3_desc: 'تحليل أسلوبك في اتخاذ القرارات تحت الضغط', t3_time: '18 دقيقة', t3_q: '22 سؤال',
    t4_title: 'إدارة الإجهاد', t4_desc: 'قياس ميولك في التعامل مع الإجهاد والتوتر', t4_time: '12 دقيقة', t4_q: '18 سؤال',
    t5_title: 'إدارة النزاعات', t5_desc: 'تحليل أسلوبك في التعامل مع النزاعات في بيئات العمل', t5_time: '16 دقيقة', t5_q: '20 سؤال',
    t6_title: 'المرونة والتكيف', t6_desc: 'قياس مستوى مرونتك العاطفية وقدرتك على التكيف', t6_time: '14 دقيقة', t6_q: '17 سؤال',
    reports_tag: 'التقارير', reports_title: 'تقارير احترافية وبصرية',
    reports_desc: 'نتائجك مُقدَّمة بشكل مرئي واضح يمكن مشاركته مع المختصين',
    ind1: 'التنظيم العاطفي', ind2: 'المرونة السلوكية', ind3: 'إدارة الإجهاد', ind4: 'الوعي الاجتماعي',
    ethics_note: 'هذا التقرير لا يمثل تشخيصاً نفسياً — يُنصح باستشارة مختص للتفسير الدقيق',
    download_pdf: 'تحميل PDF', share_pro: 'مشاركة مع مختص',
    rf1_title: 'مخططات الرادار التفاعلية', rf1_desc: 'تمثيل بصري للأبعاد العاطفية والسلوكية',
    rf2_title: 'مؤشرات كمية دقيقة', rf2_desc: 'أرقام وإحصاءات واضحة بدون تفسيرات ذاتية',
    rf3_title: 'مشاركة آمنة ومُتحكم بها', rf3_desc: 'شارك تقريرك مع المختصين بصلاحيات محددة',
    test_tag: 'آراء المستخدمين', test_title: 'ماذا يقول مستخدمو وعي؟',
    test1_text: '"منصة رائعة ساعدتني على فهم نمط ردود أفعالي تحت الضغط."',
    test1_name: 'نور الهدى', test1_role: 'طالبة دكتوراه',
    test2_text: '"أستخدم وعي مع عملائي قبل الجلسة الأولى. يوفر لي بيانات منظمة."',
    test2_name: 'د. سارة القاضي', test2_role: 'معالجة نفسية',
    test3_text: '"استخدمنا المنصة في تقييم الكفاءة العاطفية لفريق الإدارة."',
    test3_name: 'ياسر العمري', test3_role: 'مدير موارد بشرية',
    test4_text: '"ما أعجبني هو غياب الأحكام والتشخيصات. شعرت بالأمان الكامل."',
    test4_name: 'محمد الأحمد', test4_role: 'مدرب تطوير ذاتي',
    about_tag: 'من نحن', about_title: 'رؤيتنا: وعي حقيقي بلا أحكام',
    about_desc1: 'WA3Y منصة ويب أكاديمية طورها فريق من طلاب جامعيين متخصصين.',
    about_desc2: 'منصتنا لا تشخص الحالات النفسية ولا تضع الملصقات. هدفنا تزويدك بأدوات قياس موثوقة.',
    val1: 'شفافية كاملة', val2: 'حدود أخلاقية صارمة', val3: 'منهجية علمية موثقة', val4: 'خصوصية المستخدم أولاً',
    role_leader: 'قائد المشروع', role_dev: 'مطورة واجهات', role_design: 'مصممة UX',
    role_analysis: 'محللة بيانات', role_backend: 'مطور الواجهة الخلفية', role_admin: 'المشرف الأكاديمي',
    faq_tag: 'الأسئلة الشائعة', faq_title: 'أجوبة على أهم أسئلتك',
    q1: 'هل المنصة تشخص حالات نفسية؟', a1: 'لا. WA3Y لا تشخص أي حالة نفسية أو طبية. نقدم فقط مؤشرات سلوكية كمية وأنماط استجابة قابلة للقياس.',
    q2: 'هل بياناتي محفوظة وسرية؟', a2: 'نعم. جميع بياناتك مشفرة بالكامل. لا نشارك أي معلومات مع طرف ثالث بدون موافقتك الصريحة.',
    q3: 'كم يستغرق الاختبار؟', a3: 'تتراوح مدة الاختبارات بين 12 و 25 دقيقة حسب نوع التقييم. يمكنك الإيقاف المؤقت في أي وقت.',
    q4: 'هل التقييمات مجانية؟', a4: 'تتوفر اختبارات أساسية مجانية. الاشتراك المدفوع يتيح الوصول لتقارير أعمق.',
    q5: 'هل يمكن للمختصين استخدام المنصة؟', a5: 'نعم. يوفر WA3Y واجهة خاصة للمختصين لاستقبال تقارير عملائهم.',
    contact_tag: 'تواصل معنا', contact_title: 'نحن هنا للمساعدة', contact_desc: 'لديك سؤال أو اقتراح؟ تواصل معنا مباشرة',
    contact_email: 'البريد الإلكتروني', contact_location: 'الموقع', contact_city: 'الجزائر، قسنطينة',
    name_ph: 'اسمك الكامل', email_ph: 'بريدك الإلكتروني', msg_ph: 'رسالتك...',
    subj_general: 'استفسار عام', subj_pro: 'طلب نسخة مهنية', subj_tech: 'دعم تقني',
    send_msg: 'إرسال الرسالة',
    footer_desc: 'منصة الوعي السلوكي والعاطفي — أداة تدعم نموك الذاتي بشكل علمي وأخلاقي.',
    footer_platform: 'المنصة', footer_legal: 'قانوني', footer_support: 'الدعم',
    privacy: 'سياسة الخصوصية', terms: 'الشروط والأحكام', ethics: 'الإطار الأخلاقي',
    faq_link: 'الأسئلة الشائعة', contact_link: 'تواصل معنا', pro_access: 'وصول المختصين',
    footer_copy: '© 2026 WA3Y — وعي. جميع الحقوق محفوظة.',
    footer_ethics_note: 'هذه المنصة لا تقدم تشخيصاً نفسياً أو طبياً',
    search_placeholder: 'ابحث عن اختبار أو موضوع...',
    welcome_back: 'مرحباً بعودتك', create_account: 'إنشاء حساب جديد',
    google_login: 'متابعة مع Google', fb_login: 'متابعة مع Facebook',
    or: 'أو', email: 'البريد الإلكتروني', password: 'كلمة المرور',
    forgot_pass: 'نسيت كلمة المرور؟', login_btn: 'تسجيل الدخول',
    full_name: 'الاسم الكامل', confirm_pass: 'تأكيد كلمة المرور',
    agree_terms: 'أوافق على الشروط والأحكام وسياسة الخصوصية',
    register_btn: 'إنشاء الحساب', prev: 'السابق', next: 'التالي',
  },
  en: {
    nav_home: 'Home', nav_tests: 'Tests', nav_reports: 'Reports',
    nav_about: 'About', nav_contact: 'Contact',
    cat_personal: 'Personal', cat_professional: 'Professional', cat_preparatory: 'Preparatory',
    notifications: 'Notifications', login: 'Log In', register: 'Sign Up',
    hero_badge: 'Fully Safe & Ethical Platform',
    hero_line1: 'Discover', hero_line2: 'Your Inner Awareness', hero_line3: 'Scientifically',
    hero_desc: 'Structured behavioral and emotional assessments to help you understand your response patterns — no diagnosis, no judgment, only measurable insights.',
    start_assessment: 'Start Assessment', learn_more: 'Learn More',
    stat_users: 'Active Users', stat_tests: 'Specialized Tests', stat_satisfaction: 'Satisfaction Rate',
    float1: 'Emotional Regulation', float2: 'Visual Reports', float3: 'Full Privacy',
    scroll_hint: 'Scroll Down',
    features_tag: 'Why WA3Y?', features_title: 'Built on Science & Ethics',
    features_desc: 'Reliable assessment tools that enhance self-awareness without judgment',
    f1_title: 'Scientific Methodology', f1_desc: 'Built on established psychological dimensions with logical pattern analysis',
    f2_title: 'Full Data Protection', f2_desc: 'Complete encryption, explicit consent, no data sharing without permission',
    f3_title: 'No Diagnosis or Judgment', f3_desc: 'We provide measurable indicators only — no labels, no emotional judgments',
    f4_title: 'For Professionals & Individuals', f4_desc: 'Supports psychologists, HR specialists, and coaches',
    f5_title: 'Professional Visual Reports', f5_desc: 'Interactive charts and detailed reports downloadable and shareable',
    f6_title: 'Multilingual', f6_desc: 'Full interface in Arabic, English, and French with RTL support',
    tests_tag: 'Tests', tests_title: 'Choose Your Assessment',
    tests_desc: '12 specialized tests across different behavioral and emotional dimensions',
    all_tests: 'All', personal: 'Personal', professional: 'Professional', preparatory: 'Preparatory',
    start_test: 'Start Test',
    t1_title: 'Self-Awareness Assessment', t1_desc: 'Measure your awareness of emotional and behavioral patterns', t1_time: '15 min', t1_q: '20 questions',
    t2_title: 'Emotional Regulation', t2_desc: 'Explore your ability to manage emotions and cope with stress', t2_time: '20 min', t2_q: '25 questions',
    t3_title: 'Decision-Making Patterns', t3_desc: 'Analyze your decision-making style under pressure', t3_time: '18 min', t3_q: '22 questions',
    t4_title: 'Stress Management', t4_desc: 'Measure your tendencies in dealing with stress and tension', t4_time: '12 min', t4_q: '18 questions',
    t5_title: 'Conflict Management', t5_desc: 'Analyze your approach to conflicts in work environments', t5_time: '16 min', t5_q: '20 questions',
    t6_title: 'Resilience & Adaptability', t6_desc: 'Measure your emotional flexibility and ability to adapt', t6_time: '14 min', t6_q: '17 questions',
    reports_tag: 'Reports', reports_title: 'Professional Visual Reports',
    reports_desc: 'Your results presented clearly and visually, shareable with professionals',
    ind1: 'Emotional Regulation', ind2: 'Behavioral Flexibility', ind3: 'Stress Management', ind4: 'Social Awareness',
    ethics_note: 'This report is not a psychological diagnosis — consulting a professional for accurate interpretation is advised',
    download_pdf: 'Download PDF', share_pro: 'Share with Professional',
    rf1_title: 'Interactive Radar Charts', rf1_desc: 'Visual representation of emotional and behavioral dimensions',
    rf2_title: 'Precise Quantitative Indicators', rf2_desc: 'Clear numbers and stats without subjective interpretation',
    rf3_title: 'Secure Controlled Sharing', rf3_desc: 'Share your report with professionals with specific permissions',
    test_tag: 'User Reviews', test_title: 'What WA3Y Users Say',
    test1_text: '"An amazing platform that helped me understand my reaction patterns under pressure."',
    test1_name: 'Nour Al-Huda', test1_role: 'PhD Student',
    test2_text: '"I use WA3Y with my clients before the first session. It provides structured data."',
    test2_name: 'Dr. Sarah Al-Qadi', test2_role: 'Psychotherapist',
    test3_text: '"We used the platform to assess the emotional competence of our management team."',
    test3_name: 'Yasser Al-Omari', test3_role: 'HR Manager',
    test4_text: '"What I loved is the absence of judgments and diagnoses. I felt completely safe."',
    test4_name: 'Mohammed Al-Ahmad', test4_role: 'Self-Development Coach',
    about_tag: 'About Us', about_title: 'Our Vision: Real Awareness Without Judgment',
    about_desc1: 'WA3Y is an academic web platform developed by a team of university students specialized in AI and applied psychology.',
    about_desc2: 'Our platform does not diagnose conditions or label anyone. Our sole goal is to provide reliable measurement tools.',
    val1: 'Full Transparency', val2: 'Strict Ethical Boundaries', val3: 'Documented Scientific Methodology', val4: 'User Privacy First',
    role_leader: 'Project Leader', role_dev: 'Frontend Developer', role_design: 'UX Designer',
    role_analysis: 'Data Analyst', role_backend: 'Backend Developer', role_admin: 'Academic Supervisor',
    faq_tag: 'FAQ', faq_title: 'Answers to Your Key Questions',
    q1: 'Does the platform diagnose psychological conditions?', a1: 'No. WA3Y does not diagnose any psychological or medical condition. We only provide quantitative behavioral indicators.',
    q2: 'Is my data secure and confidential?', a2: 'Yes. All your data is fully encrypted. We do not share any information with third parties without your explicit consent.',
    q3: 'How long does a test take?', a3: 'Tests range from 12 to 25 minutes depending on the assessment type. You can pause at any time.',
    q4: 'Are the assessments free?', a4: 'Basic tests are free for all users. Paid subscription provides access to deeper reports.',
    q5: 'Can professionals use the platform?', a5: 'Yes. WA3Y provides a special interface for professionals to receive reports from their clients.',
    contact_tag: 'Contact Us', contact_title: 'We\'re Here to Help', contact_desc: 'Have a question or suggestion? Contact us directly',
    contact_email: 'Email', contact_location: 'Location', contact_city: 'Algeria, Constantine',
    name_ph: 'Your Full Name', email_ph: 'Your Email', msg_ph: 'Your message...',
    subj_general: 'General Inquiry', subj_pro: 'Request Professional Version', subj_tech: 'Technical Support',
    send_msg: 'Send Message',
    footer_desc: 'Behavioral and Emotional Awareness Platform — a tool supporting your self-growth scientifically and ethically.',
    footer_platform: 'Platform', footer_legal: 'Legal', footer_support: 'Support',
    privacy: 'Privacy Policy', terms: 'Terms & Conditions', ethics: 'Ethical Framework',
    faq_link: 'FAQ', contact_link: 'Contact Us', pro_access: 'Professional Access',
    footer_copy: '© 2026 WA3Y. All rights reserved.',
    footer_ethics_note: 'This platform does not provide psychological or medical diagnosis',
    search_placeholder: 'Search for a test or topic...',
    welcome_back: 'Welcome Back', create_account: 'Create New Account',
    google_login: 'Continue with Google', fb_login: 'Continue with Facebook',
    or: 'or', email: 'Email', password: 'Password',
    forgot_pass: 'Forgot password?', login_btn: 'Log In',
    full_name: 'Full Name', confirm_pass: 'Confirm Password',
    agree_terms: 'I agree to the Terms & Conditions and Privacy Policy',
    register_btn: 'Create Account', prev: 'Previous', next: 'Next',
  },
  fr: {
    nav_home: 'Accueil', nav_tests: 'Tests', nav_reports: 'Rapports',
    nav_about: 'À propos', nav_contact: 'Contact',
    cat_personal: 'Personnel', cat_professional: 'Professionnel', cat_preparatory: 'Préparatoire',
    notifications: 'Notifications', login: 'Connexion', register: 'S\'inscrire',
    hero_badge: 'Plateforme Sûre et Éthique',
    hero_line1: 'Découvrez', hero_line2: 'Votre Conscience Intérieure', hero_line3: 'Scientifiquement',
    hero_desc: 'Des évaluations comportementales et émotionnelles structurées pour comprendre vos patterns de réponse — sans diagnostic, sans jugement.',
    start_assessment: 'Commencer l\'évaluation', learn_more: 'En savoir plus',
    stat_users: 'Utilisateurs actifs', stat_tests: 'Tests spécialisés', stat_satisfaction: 'Taux de satisfaction',
    float1: 'Régulation émotionnelle', float2: 'Rapports visuels', float3: 'Confidentialité totale',
    scroll_hint: 'Défiler vers le bas',
    features_tag: 'Pourquoi WA3Y?', features_title: 'Construit sur la Science et l\'Éthique',
    features_desc: 'Des outils d\'évaluation fiables qui améliorent la conscience de soi sans jugement',
    f1_title: 'Méthodologie Scientifique', f1_desc: 'Basée sur des dimensions psychologiques établies',
    f2_title: 'Protection Totale des Données', f2_desc: 'Chiffrement complet, consentement explicite',
    f3_title: 'Sans Diagnostic ni Jugement', f3_desc: 'Uniquement des indicateurs mesurables — sans étiquettes',
    f4_title: 'Pour Professionnels et Individus', f4_desc: 'Soutient les psychologues, RH et coachs',
    f5_title: 'Rapports Visuels Professionnels', f5_desc: 'Graphiques interactifs et rapports détaillés',
    f6_title: 'Multilingue', f6_desc: 'Interface complète en arabe, anglais et français',
    tests_tag: 'Tests', tests_title: 'Choisissez Votre Évaluation',
    tests_desc: '12 tests spécialisés dans différentes dimensions comportementales',
    all_tests: 'Tous', personal: 'Personnel', professional: 'Professionnel', preparatory: 'Préparatoire',
    start_test: 'Commencer le Test',
    t1_title: 'Évaluation de la Conscience', t1_desc: 'Mesurer votre niveau de conscience émotionnelle', t1_time: '15 min', t1_q: '20 questions',
    t2_title: 'Régulation Émotionnelle', t2_desc: 'Explorer votre capacité à gérer vos émotions', t2_time: '20 min', t2_q: '25 questions',
    t3_title: 'Prise de Décision', t3_desc: 'Analyser votre style de prise de décision', t3_time: '18 min', t3_q: '22 questions',
    t4_title: 'Gestion du Stress', t4_desc: 'Mesurer vos tendances face au stress', t4_time: '12 min', t4_q: '18 questions',
    t5_title: 'Gestion des Conflits', t5_desc: 'Analyser votre approche des conflits', t5_time: '16 min', t5_q: '20 questions',
    t6_title: 'Résilience et Adaptabilité', t6_desc: 'Mesurer votre flexibilité émotionnelle', t6_time: '14 min', t6_q: '17 questions',
    reports_tag: 'Rapports', reports_title: 'Rapports Visuels Professionnels',
    reports_desc: 'Vos résultats présentés clairement et visuellement',
    ind1: 'Régulation émotionnelle', ind2: 'Flexibilité comportementale', ind3: 'Gestion du stress', ind4: 'Conscience sociale',
    ethics_note: 'Ce rapport ne constitue pas un diagnostic psychologique',
    download_pdf: 'Télécharger PDF', share_pro: 'Partager avec un professionnel',
    rf1_title: 'Graphiques Radar Interactifs', rf1_desc: 'Représentation visuelle des dimensions',
    rf2_title: 'Indicateurs Quantitatifs', rf2_desc: 'Chiffres et statistiques clairs',
    rf3_title: 'Partage Sécurisé', rf3_desc: 'Partagez votre rapport avec des permissions spécifiques',
    test_tag: 'Avis Utilisateurs', test_title: 'Ce Que Disent les Utilisateurs',
    test1_text: '"Une plateforme remarquable qui m\'a aidé à comprendre mes patterns de réaction."',
    test1_name: 'Nour Al-Huda', test1_role: 'Doctorante',
    test2_text: '"J\'utilise WA3Y avec mes clients avant la première séance."',
    test2_name: 'Dr. Sarah Al-Qadi', test2_role: 'Psychothérapeute',
    test3_text: '"Nous avons utilisé la plateforme pour évaluer l\'équipe de direction."',
    test3_name: 'Yasser Al-Omari', test3_role: 'Directeur RH',
    test4_text: '"Ce que j\'ai aimé c\'est l\'absence de jugements et de diagnostics."',
    test4_name: 'Mohammed Al-Ahmad', test4_role: 'Coach développement personnel',
    about_tag: 'À Propos', about_title: 'Notre Vision: Vraie Conscience Sans Jugement',
    about_desc1: 'WA3Y est une plateforme web académique développée par une équipe d\'étudiants universitaires.',
    about_desc2: 'Notre plateforme ne diagnostique pas et n\'étiquette personne. Notre seul objectif est de fournir des outils de mesure fiables.',
    val1: 'Transparence totale', val2: 'Limites éthiques strictes', val3: 'Méthodologie scientifique', val4: 'Confidentialité d\'abord',
    role_leader: 'Chef de Projet', role_dev: 'Développeuse Frontend', role_design: 'Designer UX',
    role_analysis: 'Analyste de Données', role_backend: 'Développeur Backend', role_admin: 'Superviseur Académique',
    faq_tag: 'FAQ', faq_title: 'Réponses à Vos Questions',
    q1: 'La plateforme diagnostique-t-elle des conditions?', a1: 'Non. WA3Y ne diagnostique aucune condition psychologique ou médicale.',
    q2: 'Mes données sont-elles sécurisées?', a2: 'Oui. Toutes vos données sont entièrement chiffrées.',
    q3: 'Combien de temps dure un test?', a3: 'Les tests durent entre 12 et 25 minutes selon le type.',
    q4: 'Les évaluations sont-elles gratuites?', a4: 'Les tests de base sont gratuits pour tous les utilisateurs.',
    q5: 'Les professionnels peuvent-ils utiliser la plateforme?', a5: 'Oui. WA3Y fournit une interface spéciale pour les professionnels.',
    contact_tag: 'Contactez-Nous', contact_title: 'Nous Sommes Là Pour Aider', contact_desc: 'Une question? Contactez-nous directement',
    contact_email: 'Email', contact_location: 'Localisation', contact_city: 'Algérie, Constantine',
    name_ph: 'Votre nom complet', email_ph: 'Votre email', msg_ph: 'Votre message...',
    subj_general: 'Demande générale', subj_pro: 'Demande version pro', subj_tech: 'Support technique',
    send_msg: 'Envoyer le Message',
    footer_desc: 'Plateforme de conscience comportementale et émotionnelle.',
    footer_platform: 'Plateforme', footer_legal: 'Légal', footer_support: 'Support',
    privacy: 'Politique de Confidentialité', terms: 'CGU', ethics: 'Cadre Éthique',
    faq_link: 'FAQ', contact_link: 'Contact', pro_access: 'Accès Professionnel',
    footer_copy: '© 2026 WA3Y. Tous droits réservés.',
    footer_ethics_note: 'Cette plateforme ne fournit pas de diagnostic psychologique',
    search_placeholder: 'Rechercher un test ou un sujet...',
    welcome_back: 'Bon Retour', create_account: 'Créer un Compte',
    google_login: 'Continuer avec Google', fb_login: 'Continuer avec Facebook',
    or: 'ou', email: 'Email', password: 'Mot de passe',
    forgot_pass: 'Mot de passe oublié?', login_btn: 'Se connecter',
    full_name: 'Nom complet', confirm_pass: 'Confirmer le mot de passe',
    agree_terms: 'J\'accepte les CGU et la Politique de confidentialité',
    register_btn: 'Créer le Compte', prev: 'Précédent', next: 'Suivant',
  }
};
 
// ══════════════════════════════════════
// TEST DATA
// ══════════════════════════════════════
const testsData = {
  1: {
    title: 'تقييم الوعي الذاتي',
    questions: [
      {
        text: 'عندما تواجه موقفاً ضاغطاً، ما هو أول رد فعل عادةً؟',
        options: ['أتوقف وأفكر قبل أن أتصرف', 'أتصرف بسرعة ثم أفكر', 'أشعر بالقلق وأتجنب الموقف', 'أطلب المساعدة فوراً']
      },
      {
        text: 'كيف تتعامل مع المشاعر السلبية كالغضب أو الحزن؟',
        options: ['أعترف بها وأعالجها', 'أحاول تجاهلها', 'أعبر عنها بشكل مباشر', 'أفضل الانسحاب حتى تهدأ']
      },
      {
        text: 'عندما تخطئ، كيف تتعامل مع الموقف؟',
        options: ['أتحمل المسؤولية وأتعلم منها', 'أبرر الخطأ لنفسي', 'أشعر بالذنب لفترة طويلة', 'أحاول إصلاح الخطأ فوراً']
      },
      {
        text: 'ما مدى وعيك بتأثير مشاعرك على قراراتك؟',
        options: ['واعٍ جداً وأتحكم في ذلك', 'أدرك ذلك أحياناً', 'نادراً ما أفكر في هذا', 'لا أعتقد أن المشاعر تؤثر على قراراتي']
      },
      {
        text: 'كيف تستجيب للنقد البناء من الآخرين؟',
        options: ['أقبله بانفتاح وأستفيد منه', 'أقبله لكن يؤثر علي عاطفياً', 'أجد صعوبة في قبوله أحياناً', 'أميل للدفاع عن نفسي أولاً']
      }
    ]
  },
  2: {
    title: 'التنظيم العاطفي',
    questions: [
      {
        text: 'عندما تشعر بالإحباط الشديد، ما الذي تفعله عادةً؟',
        options: ['أمارس تقنيات التنفس أو التأمل', 'أمارس نشاطاً بدنياً', 'أتحدث مع شخص قريب', 'أعزل نفسي حتى أهدأ']
      },
      {
        text: 'هل تستطيع التعرف على مشاعرك ووصفها بدقة؟',
        options: ['نعم، بشكل عام', 'أحياناً تكون المشاعر مبهمة', 'أجد صعوبة في ذلك', 'لا أعير الأمر اهتماماً كبيراً']
      },
      {
        text: 'كيف تتعامل مع مشاعر الآخرين السلبية؟',
        options: ['أحاول الفهم والتعاطف', 'أساعد على حل المشكلة', 'أشعر بالانزعاج وأنسحب', 'أجد صعوبة في عدم التأثر']
      },
      {
        text: 'عند مواجهة خيبة أمل كبيرة، كيف تتعافى؟',
        options: ['أمنح نفسي وقتاً للتعافي ثم أمضي', 'أبحث عن معنى في التجربة', 'يستغرق الأمر وقتاً طويلاً', 'أتجنب التفكير في الأمر']
      },
      {
        text: 'هل تجد صعوبة في التركيز عند وجود ضغوط عاطفية؟',
        options: ['نادراً، أستطيع الفصل عادةً', 'أحياناً تؤثر الضغوط على تركيزي', 'كثيراً، يصعب الفصل بينهما', 'دائماً تقريباً']
      }
    ]
  },
  3: {
    title: 'أنماط اتخاذ القرار',
    questions: [
      {
        text: 'عند مواجهة قرار صعب، ما هو أسلوبك المعتاد؟',
        options: ['أجمع المعلومات وأحلل الخيارات', 'أثق بحدسي', 'أستشير الآخرين', 'أتجنب القرار حتى اللحظة الأخيرة']
      },
      {
        text: 'كيف تتعامل مع عدم اليقين في القرارات؟',
        options: ['أقبله كجزء طبيعي من العملية', 'أحاول تقليله بجمع معلومات أكثر', 'يسبب لي قلقاً ملحوظاً', 'يصعّب علي اتخاذ القرار']
      },
      {
        text: 'هل تراجع قراراتك بعد اتخاذها؟',
        options: ['أحياناً للتعلم منها', 'نادراً، أثق في قراراتي', 'كثيراً، أشك في نفسي', 'دائماً، وهذا يسبب لي ضغطاً']
      },
      {
        text: 'عند الضغط الزمني، كيف تتخذ قراراتك؟',
        options: ['أحدد الأولويات بسرعة وأقرر', 'أتصرف بناءً على الغريزة', 'أشعر بالضغط ويتأثر قراري', 'أطلب تمديداً للوقت']
      },
      {
        text: 'كيف تستجيب بعد اتخاذ قرار غير موفق؟',
        options: ['أتعلم منه وأتقدم', 'أحلل الأسباب ثم أتجاوز', 'أشعر بالندم لفترة', 'أتجنب موقفاً مشابهاً']
      }
    ]
  }
};
 
// Default fallback for tests 4-6
for (let i = 4; i <= 6; i++) {
  testsData[i] = testsData[1];
}
 
// ══════════════════════════════════════
// STATE
// ══════════════════════════════════════
let state = {
  lang: localStorage.getItem('wa3y_lang') || 'ar',
  theme: localStorage.getItem('wa3y_theme') || 'light',
  currentTest: null,
  currentQuestion: 0,
  answers: {},
  slideIndex: 0,
};
 
// ══════════════════════════════════════
// LOADER
// ══════════════════════════════════════
function initLoader() {
  const fill = document.getElementById('loaderFill');
  const text = document.getElementById('loaderText');
  const messages = ['جاري تحميل المنصة...', 'تحضير الاختبارات...', 'اكتمل التحميل ✓'];
  let progress = 0;
 
  const interval = setInterval(() => {
    progress += Math.random() * 25 + 10;
    if (progress > 100) progress = 100;
    fill.style.width = progress + '%';
 
    if (progress >= 40) text.textContent = messages[1];
    if (progress >= 85) text.textContent = messages[2];
 
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
        document.body.style.overflow = '';
        // ✅ حُذف: window.scrollTo(0, 0) — لا تمرير تلقائي عند اكتمال التحميل
        initApp();
      }, 500);
    }
  }, 120);
 
  document.body.style.overflow = 'hidden';
}
 
// ══════════════════════════════════════
// APP INIT
// ══════════════════════════════════════
function initApp() {
  applyTheme(state.theme);
  applyLanguage(state.lang);
  initNavbar();
  initParticles();
  // ✅ حُذف: initScrollEffects() — كان يسبب تمرير parallax تلقائياً للـ hero
  initReveal();
  initCounter();
  initTilt3D();
  initRipples();
  initRadarChart();
  initTestimonials();
  initBackToTop();
  initReadingProgress();
  initSearchToggle();
  initNotifications();
  initFilterTabs();
  initHamburger();
  initSafeLinks();
}
 
// ══════════════════════════════════════
// THEME
// ══════════════════════════════════════
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  const icon = document.getElementById('darkIcon');
  if (icon) icon.className = t === 'dark' ? 'fa fa-sun' : 'fa fa-moon';
  localStorage.setItem('wa3y_theme', t);
  state.theme = t;
}
 
document.getElementById('darkToggle').addEventListener('click', () => {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
});
 
// ══════════════════════════════════════
// LANGUAGE
// ══════════════════════════════════════
function applyLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('wa3y_lang', lang);
 
  const t = translations[lang] || translations.ar;
  const isRTL = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.classList.toggle('ltr', !isRTL);
 
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
 
  const currentLangEl = document.getElementById('currentLang');
  const labels = { ar: 'عر', en: 'EN', fr: 'FR' };
  if (currentLangEl) currentLangEl.textContent = labels[lang];
 
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.onclick?.toString().includes(`'${lang}'`));
  });
}
 
window.setLanguage = function(lang) {
  applyLanguage(lang);
};
 
// ══════════════════════════════════════
// SAFE LINKS
// ══════════════════════════════════════
function initSafeLinks() {
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.setAttribute('href', 'javascript:void(0)');
  });
}
 
// ══════════════════════════════════════
// NAVBAR
// ══════════════════════════════════════
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-link');
 
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
 
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { threshold: 0.3 });
 
  sections.forEach(s => observer.observe(s));
}
 
// ══════════════════════════════════════
// HAMBURGER
// ══════════════════════════════════════
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });
}
 
// ══════════════════════════════════════
// SEARCH
// ══════════════════════════════════════
function initSearchToggle() {
  const toggle = document.getElementById('searchToggle');
  const popup = document.getElementById('searchPopup');
  const close = document.getElementById('searchClose');
  const input = document.getElementById('searchInput');
 
  toggle.addEventListener('click', () => {
    popup.classList.toggle('open');
    if (popup.classList.contains('open')) {
      setTimeout(() => input.focus(), 100);
    }
  });
  close.addEventListener('click', () => {
    popup.classList.remove('open');
    input.blur();
  });
}
 
// ══════════════════════════════════════
// NOTIFICATIONS
// ══════════════════════════════════════
function initNotifications() {
  const btn = document.getElementById('notifBtn');
  const dropdown = document.getElementById('notifDropdown');
 
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
    document.getElementById('notifBadge').style.display = 'none';
  });
  document.addEventListener('click', () => dropdown.classList.remove('open'));
}
 
// ══════════════════════════════════════
// PARTICLES CANVAS
// ══════════════════════════════════════
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
 
  let w, h, particles;
 
  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
 
  function createParticles() {
    particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.7 ? '#FFD700' : '#50C878'
    }));
  }
 
  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
 
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    });
 
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 100) * 0.12;
          ctx.strokeStyle = '#50C878';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
    requestAnimationFrame(draw);
  }
 
  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => { resize(); createParticles(); });
}
 
// ══════════════════════════════════════
// REVEAL ON SCROLL
// ══════════════════════════════════════
function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
 
  elements.forEach(el => observer.observe(el));
}
 
// ══════════════════════════════════════
// COUNTERS
// ══════════════════════════════════════
function initCounter() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current).toLocaleString('ar');
        }, 25);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
 
  counters.forEach(c => observer.observe(c));
}
 
// ══════════════════════════════════════
// 3D TILT
// ══════════════════════════════════════
function initTilt3D() {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(8px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateY(0) rotateX(0) translateZ(0)';
    });
  });
}
 
// ══════════════════════════════════════
// RIPPLE EFFECT
// ══════════════════════════════════════
function initRipples() {
  document.querySelectorAll('.ripple').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const wave = document.createElement('span');
      wave.className = 'ripple-wave';
      const size = Math.max(rect.width, rect.height);
      wave.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${e.clientX - rect.left - size / 2}px;
        top: ${e.clientY - rect.top - size / 2}px;
      `;
      this.appendChild(wave);
      setTimeout(() => wave.remove(), 600);
    });
  });
}
 
// ══════════════════════════════════════
// RADAR CHART
// ══════════════════════════════════════
function initRadarChart() {
  const canvas = document.getElementById('radarChart');
  if (!canvas) return;
 
  const isDark = state.theme === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,50,32,0.1)';
  const textColor = 'rgba(255,255,255,0.6)';
 
  new Chart(canvas, {
    type: 'radar',
    data: {
      labels: ['التنظيم العاطفي', 'المرونة السلوكية', 'إدارة الإجهاد', 'الوعي الاجتماعي', 'اتخاذ القرار', 'التكيف'],
      datasets: [{
        data: [82, 75, 68, 90, 78, 85],
        backgroundColor: 'rgba(80,200,120,0.15)',
        borderColor: '#50C878',
        borderWidth: 2,
        pointBackgroundColor: '#50C878',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: { display: false },
          grid: { color: gridColor },
          pointLabels: { color: textColor, font: { size: 11, family: 'Tajawal' } },
          angleLines: { color: gridColor }
        }
      },
      plugins: { legend: { display: false } }
    }
  });
}
 
// ══════════════════════════════════════
// TESTIMONIALS SLIDER
// ══════════════════════════════════════
function initTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  if (!track) return;
 
  const cards = track.querySelectorAll('.testimonial-card');
  if (!cards.length) return;
 
  // ✅ إصلاح: حساب العرض الفعلي للمسار وليس scrollIntoView
  const total = cards.length;
 
  // تحديث العرض عند تغيير حجم النافذة
  window.addEventListener('resize', () => {
    goToSlide(state.slideIndex);
  }, { passive: true });
 
  // التشغيل التلقائي بـ transform فقط — لا scrollIntoView
  setInterval(() => {
    const next = (state.slideIndex + 1) % total;
    goToSlide(next);
  }, 5000);
}
 
// ✅ إصلاح كامل: استخدام translateX بدلاً من scrollIntoView
window.goToSlide = function(idx) {
  state.slideIndex = idx;
  const track = document.getElementById('testimonialsTrack');
  if (!track) return;
 
  const cards = track.querySelectorAll('.testimonial-card');
  if (!cards.length) return;
 
  // حساب عرض البطاقة الأولى (= 100% من الحاوية)
  const cardWidth = cards[0].offsetWidth;
  track.style.transform = `translateX(${idx * cardWidth}px)`;
 
  // تحديث النقاط
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });
 
  // تحديث العداد
  const counter = document.querySelector('.slider-counter');
  if (counter) counter.textContent = `${idx + 1} / ${cards.length}`;
 
  // تحديث حالة أزرار السابق/التالي
  const prevBtn = document.querySelector('.slider-btn[onclick*="prev"]');
  const nextBtn = document.querySelector('.slider-btn[onclick*="next"]');
  if (prevBtn) prevBtn.disabled = idx === 0;
  if (nextBtn) nextBtn.disabled = idx === cards.length - 1;
};
 
// دوال التنقل اليدوي
window.sliderPrev = function() {
  if (state.slideIndex > 0) goToSlide(state.slideIndex - 1);
};
 
window.sliderNext = function() {
  const track = document.getElementById('testimonialsTrack');
  if (!track) return;
  const total = track.querySelectorAll('.testimonial-card').length;
  if (state.slideIndex < total - 1) goToSlide(state.slideIndex + 1);
};
 
// ══════════════════════════════════════
// READING PROGRESS
// ══════════════════════════════════════
function initReadingProgress() {
  const bar = document.getElementById('readingProgress');
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (window.scrollY / total) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
}
 
// ══════════════════════════════════════
// BACK TO TOP
// ══════════════════════════════════════
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
 
// ══════════════════════════════════════
// FILTER TABS
// ══════════════════════════════════════
function initFilterTabs() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.dataset.filter;
      document.querySelectorAll('.test-card').forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
        if (show) card.classList.remove('hidden');
        else card.classList.add('hidden');
      });
    });
  });
}
 
// ══════════════════════════════════════
// FAQ
// ══════════════════════════════════════
window.toggleFaq = function(btn) {
  const item = btn.closest('.faq-item');
  const answer = item.querySelector('.faq-a');
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q.open').forEach(q => {
    q.classList.remove('open');
    q.closest('.faq-item').querySelector('.faq-a').classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
};
 
// ══════════════════════════════════════
// TOAST NOTIFICATIONS
// ══════════════════════════════════════
function showToast(msg, type = 'success', duration = 4000) {
  const icons = { success: 'fa-check-circle', error: 'fa-times-circle', warning: 'fa-exclamation-triangle', info: 'fa-info-circle' };
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fa ${icons[type]} toast-icon"></i>
    <span class="toast-msg">${msg}</span>
    <button class="toast-close" onclick="this.closest('.toast').remove()"><i class="fa fa-times"></i></button>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toast-out 0.4s ease forwards';
    setTimeout(() => toast.remove(), 400);
  }, duration);
}
 
// ══════════════════════════════════════
// MODALS
// ══════════════════════════════════════
document.getElementById('openLogin').addEventListener('click', () => openModal('loginModal'));
 
window.openModal = function(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
};
 
window.closeModal = function(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
};
 
window.closeModalOutside = function(e) {
  if (e.target === e.currentTarget) closeModal(e.currentTarget.id);
};
 
window.closeTestOutside = function(e) {
  if (e.target === e.currentTarget) {
    closeModal('testModal');
  }
};
 
// Auth tabs
window.switchTab = function(tab) {
  document.querySelectorAll('.modal-tab').forEach((t, i) => t.classList.toggle('active', (i === 0) === (tab === 'login')));
  document.getElementById('loginForm').classList.toggle('hidden', tab !== 'login');
  document.getElementById('registerForm').classList.toggle('hidden', tab !== 'register');
};
 
// Toggle password
window.togglePassword = function(id) {
  const input = document.getElementById(id);
  input.type = input.type === 'password' ? 'text' : 'password';
};
 
// Login
window.doLogin = function() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPass').value;
  if (!email || !pass) {
    showToast('يرجى ملء جميع الحقول', 'error');
    return;
  }
  if (!email.includes('@')) {
    showToast('يرجى إدخال بريد إلكتروني صحيح', 'error');
    return;
  }
  closeModal('loginModal');
  showToast('تم تسجيل الدخول بنجاح!', 'success');
  document.getElementById('openLogin').textContent = email.split('@')[0];
};
 
// Register
window.doRegister = function() {
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const pass = document.getElementById('regPass').value;
  const confirm = document.getElementById('regConfirm').value;
  const agreed = document.getElementById('agreeTerms').checked;
 
  if (!name || !email || !pass || !confirm) { showToast('يرجى ملء جميع الحقول', 'error'); return; }
  if (pass !== confirm) { showToast('كلمتا المرور غير متطابقتين', 'error'); return; }
  if (pass.length < 8) { showToast('كلمة المرور يجب أن تكون 8 أحرف على الأقل', 'warning'); return; }
  if (!agreed) { showToast('يرجى الموافقة على الشروط والأحكام', 'warning'); return; }
 
  closeModal('loginModal');
  showToast(`مرحباً ${name}! تم إنشاء حسابك بنجاح`, 'success');
};
 
// ══════════════════════════════════════
// TEST INTERFACE
// ══════════════════════════════════════





 
window.selectAnswer = function(idx) {
  state.answers[state.currentQuestion] = idx;
  document.querySelectorAll('.option-btn').forEach((btn, i) => btn.classList.toggle('selected', i === idx));
};
 
window.nextQuestion = function() {
  const test = testsData[state.currentTest];
  if (state.answers[state.currentQuestion] === undefined) {
    showToast('يرجى اختيار إجابة قبل المتابعة', 'warning');
    return;
  }
  if (state.currentQuestion < test.questions.length - 1) {
    state.currentQuestion++;
    renderQuestion();
  } else {
    showTestResults();
  }
};
 
window.prevQuestion = function() {
  if (state.currentQuestion > 0) {
    state.currentQuestion--;
    renderQuestion();
  }
};
 
function showTestResults() {
  document.getElementById('testProgressFill').style.width = '100%';
  document.getElementById('testProgressText').textContent = 'مكتمل ✓';
 
  const scores = Object.values(state.answers);
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  const level = avg < 1 ? 'مرتفع' : avg < 2 ? 'متوسط' : 'يحتاج تطوير';
 
  document.getElementById('testQuestionArea').innerHTML = `
    <div class="test-complete">
      <div class="test-complete-icon"><i class="fa fa-check"></i></div>
      <h3>أُكمل الاختبار بنجاح!</h3>
      <p>شكراً لإتمام التقييم. نتائجك تشير إلى مستوى <strong style="color:var(--emerald)">${level}</strong> في هذا البُعد.</p>
      <div class="report-ethics-note" style="margin:16px auto;max-width:400px;text-align:right">
        <i class="fa fa-circle-info"></i>
        <small>هذا التقييم لا يمثل تشخيصاً نفسياً. يُنصح باستشارة مختص للتفسير الدقيق.</small>
      </div>
      <button class="btn-primary ripple" onclick="closeModal('testModal'); showToast('تم حفظ نتائجك بنجاح!', 'success')" style="margin:0 auto">
        <i class="fa fa-chart-bar"></i> عرض التقرير الكامل
      </button>
    </div>
  `;
 
  document.getElementById('testPrevBtn').style.visibility = 'hidden';
  document.getElementById('testNextBtn').style.display = 'none';
  showToast('تم إكمال الاختبار بنجاح!', 'success');
}
 
// ══════════════════════════════════════
// CONTACT
// ══════════════════════════════════════
window.submitContact = function(e) {
  e.preventDefault();
  showToast('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', 'success');
  e.target.reset();
};
 
// ══════════════════════════════════════
// REPORT ACTIONS (simulated)
// ══════════════════════════════════════
document.addEventListener('click', (e) => {
  if (e.target.closest('.btn-report')) showToast('جاري تحضير ملف PDF...', 'info');
  if (e.target.closest('.btn-share')) showToast('تم نسخ رابط المشاركة!', 'success');
});
 
// ══════════════════════════════════════
// START
// ══════════════════════════════════════
document.addEventListener('DOMContentLoaded', initLoader);
