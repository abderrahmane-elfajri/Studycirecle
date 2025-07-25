// Language switching functionality
let currentLanguage = 'en';

// Translation data
const translations = {
    en: {
        // Navigation
        'Home': 'Home',
        'About': 'About',
        'Program': 'Program',
        'Schedule': 'Schedule',
        'Pricing': 'Pricing',
        
        // Hero section
        'Transform Your Summer into Your Best Investment!': 'Transform Your Summer into Your Best Investment!',
        'Every summer, we tell ourselves we\'ll study hard, learn new skills, and prepare for our future… but time slips away in endless scrolling and distractions. The Studycircle Summer Program was created to change that.': 'Every summer, we tell ourselves we\'ll study hard, learn new skills, and prepare for our future… but time slips away in endless scrolling and distractions. The Studycircle Summer Program was created to change that.',
        'Join Now': 'Join Now',
        'Watch Video': 'Watch Video',
        
        // Video section
        'Learn More About Our Program': 'Learn More About Our Program',
        
        // Who section
        'Who Is This For?': 'Who Is This For?',
        'You\'re a Bac student this year and want to feel fully prepared and confident.': 'You\'re a Bac student this year and want to feel fully prepared and confident.',
        'You\'re curious about new fields like coding, entrepreneurship, study techniques, and more.': 'You\'re curious about new fields like coding, entrepreneurship, study techniques, and more.',
        'You\'re tired of wasting time and want an environment that keeps you motivated and consistent.': 'You\'re tired of wasting time and want an environment that keeps you motivated and consistent.',
        
        // Program section
        'What\'s Included': 'What\'s Included',
        'Bac Track': 'Bac Track',
        'Skills Track': 'Skills Track',
        'All Students Get': 'All Students Get',
        'Live sessions in Maths, Physics, and SVT': 'Live sessions in Maths, Physics, and SVT',
        'Exercises and corrections': 'Exercises and corrections',
        'Tips and strategies to boost your grades': 'Tips and strategies to boost your grades',
        'Weekly study plans': 'Weekly study plans',
        'Introduction to coding, robotics, cybersecurity, AI tools': 'Introduction to coding, robotics, cybersecurity, AI tools',
        'Freelancing, video editing, and graphic design': 'Freelancing, video editing, and graphic design',
        'Real-life projects to build your portfolio': 'Real-life projects to build your portfolio',
        'Session replays': 'Session replays',
        'Private community': 'Private community',
        'Expert guidance': 'Expert guidance',
        'Certificate': 'Certificate',
        
        // Schedule section
        'Weekly Schedule': 'Weekly Schedule',
        'Monday': 'Monday',
        'Tuesday': 'Tuesday',
        'Wednesday': 'Wednesday',
        'Thursday': 'Thursday',
        'Friday': 'Friday',
        'Saturday': 'Saturday',
        'Sunday': 'Sunday',
        'Math Session': 'Math Session',
        'Physics Session': 'Physics Session',
        'Skill Building': 'Skill Building',
        'Group Study (Math)': 'Group Study (Math)',
        'Group Study (Physics)': 'Group Study (Physics)',
        'Optional Group Study': 'Optional Group Study',
        'Mini Project': 'Mini Project',
        'Rest Day': 'Rest Day',
        
        // Pricing section
        'Pricing & Payment': 'Pricing & Payment',
        'Perfect for Bac students': 'Perfect for Bac students',
        'Learn real-world skills': 'Learn real-world skills',
        'Combo Package': 'Combo Package',
        'Both tracks at special price': 'Both tracks at special price',
        'Payments can be made in multiple installments. Contact us for details.': 'Payments can be made in multiple installments. Contact us for details.',
        
        // Dates section
        'Program Dates': 'Program Dates',
        'Start Date': 'Start Date',
        'End Date': 'End Date',
        'Format': 'Format',
        'July 28th, 2025': 'July 28th, 2025',
        'August 6th, 2025': 'August 6th, 2025',
        '100% Online': '100% Online',
        
        // Schedule notes
        '*Schedule is not finalized yet - these times are examples and may be adjusted based on student preferences.': '*Schedule is not finalized yet - these times are examples and may be adjusted based on student preferences.',
        '*This schedule is flexible and can be adjusted based on student preferences and availability.': '*This schedule is flexible and can be adjusted based on student preferences and availability.',
        
        // FAQ section
        'Frequently Asked Questions': 'Frequently Asked Questions',
        'Is everything online?': 'Is everything online?',
        'Yes! All sessions are live on Zoom and in private groups.': 'Yes! All sessions are live on Zoom and in private groups.',
        'Can I pay in installments?': 'Can I pay in installments?',
        'Yes, you can pay in multiple installments. Contact us for details.': 'Yes, you can pay in multiple installments. Contact us for details.',
        'Can I join both tracks?': 'Can I join both tracks?',
        'Yes! And we will make sure that both tracks happen at different times.': 'Yes! And we will make sure that both tracks happen at different times.',
        'Will I get a certificate?': 'Will I get a certificate?',
        'Yes, you\'ll receive a certificate you can add to your CV or portfolio.': 'Yes, you\'ll receive a certificate you can add to your CV or portfolio.',
        
        // CTA section
        'Ready to Transform Your Summer?': 'Ready to Transform Your Summer?',
        'Join hundreds of students who are already making their summer count!': 'Join hundreds of students who are already making their summer count!',
        'Register Now': 'Register Now',
        
        // Footer
        'Transform your summer into your best investment.': 'Transform your summer into your best investment.',
        'Contact': 'Contact',
        'Follow Us': 'Follow Us',
        'All rights reserved.': 'All rights reserved.',
        
        // New Bac Track content
        '🔴 Live sessions in Maths and Physics (4 sessions per week)': '🔴 Live sessions in Maths and Physics (4 sessions per week)',
        '📝 Group exercise sessions with detailed corrections and explanations': '📝 Group exercise sessions with detailed corrections and explanations',
        '🎯 Two flexible levels, based on your current skills, so nothing is too easy or too hard — and you can switch between levels whenever you want': '🎯 Two flexible levels, based on your current skills, so nothing is too easy or too hard — and you can switch between levels whenever you want',
        '📹 Recorded sessions available anytime, including whiteboard explanations so you can review lessons at your own pace': '📹 Recorded sessions available anytime, including whiteboard explanations so you can review lessons at your own pace',
        '🏆 High-quality study materials to help you prepare for the school year (lesson PDFs and practice exercises)': '🏆 High-quality study materials to help you prepare for the school year (lesson PDFs and practice exercises)',
        '📅 Post-bac insights through live sessions featuring students from various universities': '📅 Post-bac insights through live sessions featuring students from various universities',
        
        // New Skills Track content
        '💻 Python — learn the fundamentals of programming from scratch': '💻 Python — learn the fundamentals of programming from scratch',
        '📝 C++ — create practical, real-world applications': '📝 C++ — create practical, real-world applications',
        '🤖 Robotics — explore Arduino basics, circuits, and an introduction to mechatronics': '🤖 Robotics — explore Arduino basics, circuits, and an introduction to mechatronics',
        '🎨 AI Tools — discover how to integrate AI effectively into everyday tasks': '🎨 AI Tools — discover how to integrate AI effectively into everyday tasks',
        '🎬 Video Editing & Graphic Design — master creative tools to produce professional visuals and videos': '🎬 Video Editing & Graphic Design — master creative tools to produce professional visuals and videos',
        '💼 Freelancing & Business Skills — learn how to land your first freelance job and build a strong portfolio': '💼 Freelancing & Business Skills — learn how to land your first freelance job and build a strong portfolio',
        '🚀 Real Projects — work on hands-on projects to enrich your portfolio': '🚀 Real Projects — work on hands-on projects to enrich your portfolio',
        'Perfect for students who want to explore valuable, marketable skills and start building a strong portfolio for their future career — with introductory courses designed to help you discover each field.': 'Perfect for students who want to explore valuable, marketable skills and start building a strong portfolio for their future career — with introductory courses designed to help you discover each field.',
        // Registration page
        'Choose Your Plan': 'Choose Your Plan',
        'Complete Your Registration': 'Complete Your Registration',
        'Need Help?': 'Need Help?',
        'Join hundreds of students transforming their summer into their best investment!': 'Join hundreds of students transforming their summer into their best investment!',
        'Save 100 DH!': 'Save 100 DH!',
        'Any questions or special requests...': 'Any questions or special requests...'
    },
    
    fr: {
        // Navigation
        'Home': 'Accueil',
        'About': 'À propos',
        'Program': 'Programme',
        'Schedule': 'Horaire',
        'Pricing': 'Tarifs',
        
        // Hero section
        'Transform Your Summer into Your Best Investment!': 'Transformez votre été en votre meilleur investissement!',
        'Every summer, we tell ourselves we\'ll study hard, learn new skills, and prepare for our future… but time slips away in endless scrolling and distractions. The Studycircle Summer Program was created to change that.': 'Chaque été, nous nous disons que nous étudierons dur, apprendrons de nouvelles compétences et nous préparerons pour notre avenir... mais le temps s\'échappe dans un défilement et des distractions sans fin. Le programme d\'été Studycircle a été créé pour changer cela.',
        'Join Now': 'Rejoignez maintenant',
        'Watch Video': 'Regarder la vidéo',
        
        // Video section
        'Learn More About Our Program': 'En savoir plus sur notre programme',
        
        // Who section
        'Who Is This For?': 'Pour qui est-ce?',
        'You\'re a Bac student this year and want to feel fully prepared and confident.': 'Vous êtes étudiant au Bac cette année et voulez vous sentir complètement préparé et confiant.',
        'You\'re curious about new fields like coding, entrepreneurship, study techniques, and more.': 'Vous êtes curieux de nouveaux domaines comme la programmation, l\'entrepreneuriat, les techniques d\'étude, et plus encore.',
        'You\'re tired of wasting time and want an environment that keeps you motivated and consistent.': 'Vous êtes fatigué de perdre du temps et voulez un environnement qui vous garde motivé et constant.',
        
        // Program section
        'What\'s Included': 'Ce qui est inclus',
        'Bac Track': 'Parcours Bac',
        'Skills Track': 'Parcours Compétences',
        'All Students Get': 'Tous les étudiants reçoivent',
        'Live sessions in Maths, Physics, and SVT': 'Sessions en direct en Maths, Physique et SVT',
        'Exercises and corrections': 'Exercices et corrections',
        'Tips and strategies to boost your grades': 'Conseils et stratégies pour améliorer vos notes',
        'Weekly study plans': 'Plans d\'étude hebdomadaires',
        'Introduction to coding, robotics, cybersecurity, AI tools': 'Introduction à la programmation, robotique, cybersécurité, outils IA',
        'Freelancing, video editing, and graphic design': 'Freelancing, montage vidéo et design graphique',
        'Real-life projects to build your portfolio': 'Projets réels pour construire votre portfolio',
        'Session replays': 'Rediffusions de sessions',
        'Private community': 'Communauté privée',
        'Expert guidance': 'Guidance d\'experts',
        'Certificate': 'Certificat',
        
        // Schedule section
        'Weekly Schedule': 'Horaire hebdomadaire',
        'Monday': 'Lundi',
        'Tuesday': 'Mardi',
        'Wednesday': 'Mercredi',
        'Thursday': 'Jeudi',
        'Friday': 'Vendredi',
        'Saturday': 'Samedi',
        'Sunday': 'Dimanche',
        'Math Session': 'Session de Maths',
        'Physics Session': 'Session de Physique',
        'Skill Building': 'Développement des compétences',
        'Group Study (Math)': 'Étude en groupe (Maths)',
        'Group Study (Physics)': 'Étude en groupe (Physique)',
        'Optional Group Study': 'Étude de groupe optionnelle',
        'Mini Project': 'Mini Projet',
        'Rest Day': 'Jour de repos',
        
        // Pricing section
        'Pricing & Payment': 'Tarifs et paiement',
        'Perfect for Bac students': 'Parfait pour les étudiants au Bac',
        'Learn real-world skills': 'Apprenez des compétences du monde réel',
        'Combo Package': 'Package Combo',
        'Both tracks at special price': 'Les deux parcours à prix spécial',
        'Payments can be made in multiple installments. Contact us for details.': 'Les paiements peuvent être effectués en plusieurs versements. Contactez-nous pour plus de détails.',
        
        // Dates section
        'Program Dates': 'Dates du programme',
        'Start Date': 'Date de début',
        'End Date': 'Date de fin',
        'Format': 'Format',
        'July 28th, 2025': '28 juillet 2025',
        'August 6th, 2025': '6 août 2025',
        '100% Online': '100% en ligne',
        
        // Schedule notes
        '*Schedule is not finalized yet - these times are examples and may be adjusted based on student preferences.': '*L\'horaire n\'est pas encore finalisé - ces heures sont des exemples et peuvent être ajustées selon les préférences des étudiants.',
        '*This schedule is flexible and can be adjusted based on student preferences and availability.': '*Cet horaire est flexible et peut être ajusté selon les préférences et la disponibilité des étudiants.',
        
        // FAQ section
        'Frequently Asked Questions': 'Questions fréquemment posées',
        'Is everything online?': 'Tout est-il en ligne?',
        'Yes! All sessions are live on Zoom and in private groups.': 'Oui! Toutes les sessions sont en direct sur Zoom et dans des groupes privés.',
        'Can I pay in installments?': 'Puis-je payer en plusieurs fois?',
        'Yes, you can pay in multiple installments. Contact us for details.': 'Oui, vous pouvez payer en plusieurs versements. Contactez-nous pour plus de détails.',
        'Can I join both tracks?': 'Puis-je rejoindre les deux parcours?',
        'Yes! And we will make sure that both tracks happen at different times.': 'Oui! Et nous nous assurerons que les deux parcours se déroulent à des moments différents.',
        'Will I get a certificate?': 'Vais-je recevoir un certificat?',
        'Yes, you\'ll receive a certificate you can add to your CV or portfolio.': 'Oui, vous recevrez un certificat que vous pouvez ajouter à votre CV ou portfolio.',
        
        // CTA section
        'Ready to Transform Your Summer?': 'Prêt à transformer votre été?',
        'Join hundreds of students who are already making their summer count!': 'Rejoignez des centaines d\'étudiants qui font déjà compter leur été!',
        'Register Now': 'S\'inscrire maintenant',
        
        // Footer
        'Transform your summer into your best investment.': 'Transformez votre été en votre meilleur investissement.',
        'Contact': 'Contact',
        'Follow Us': 'Suivez-nous',
        'All rights reserved.': 'Tous droits réservés.',
        
        // New Bac Track content
        '🔴 Live sessions in Maths and Physics (4 sessions per week)': '🔴 Sessions en direct en Maths et Physique (4 sessions par semaine)',
        '📝 Group exercise sessions with detailed corrections and explanations': '📝 Sessions d\'exercices en groupe avec corrections détaillées et explications',
        '🎯 Two flexible levels, based on your current skills, so nothing is too easy or too hard — and you can switch between levels whenever you want': '🎯 Deux niveaux flexibles, basés sur vos compétences actuelles, pour que rien ne soit trop facile ou trop difficile — et vous pouvez changer de niveau quand vous le souhaitez',
        '📹 Recorded sessions available anytime, including whiteboard explanations so you can review lessons at your own pace': '📹 Sessions enregistrées disponibles à tout moment, y compris les explications au tableau pour que vous puissiez réviser les leçons à votre rythme',
        '🏆 High-quality study materials to help you prepare for the school year (lesson PDFs and practice exercises)': '🏆 Matériaux d\'étude de haute qualité pour vous aider à vous préparer pour l\'année scolaire (PDFs de leçons et exercices pratiques)',
        '📅 Post-bac insights through live sessions featuring students from various universities': '📅 Aperçus post-bac grâce à des sessions en direct avec des étudiants de diverses universités',
        
        // New Skills Track content
        '💻 Python — learn the fundamentals of programming from scratch': '💻 Python — apprenez les fondamentaux de la programmation à partir de zéro',
        '📝 C++ — create practical, real-world applications': '📝 C++ — créez des applications pratiques du monde réel',
        '🤖 Robotics — explore Arduino basics, circuits, and an introduction to mechatronics': '🤖 Robotique — explorez les bases d\'Arduino, les circuits, et une introduction à la mécatronique',
        '🎨 AI Tools — discover how to integrate AI effectively into everyday tasks': '🎨 Outils IA — découvrez comment intégrer efficacement l\'IA dans les tâches quotidiennes',
        '🎬 Video Editing & Graphic Design — master creative tools to produce professional visuals and videos': '🎬 Montage vidéo et design graphique — maîtrisez les outils créatifs pour produire des visuels et vidéos professionnels',
        '💼 Freelancing & Business Skills — learn how to land your first freelance job and build a strong portfolio': '💼 Freelancing et compétences commerciales — apprenez comment décrocher votre premier emploi freelance et créer un portfolio solide',
        '🚀 Real Projects — work on hands-on projects to enrich your portfolio': '🚀 Projets réels — travaillez sur des projets pratiques pour enrichir votre portfolio',
        'Perfect for students who want to explore valuable, marketable skills and start building a strong portfolio for their future career — with introductory courses designed to help you discover each field.': 'Parfait pour les étudiants qui veulent explorer des compétences précieuses et commercialisables et commencer à créer un portfolio solide pour leur future carrière — avec des cours d\'introduction conçus pour vous aider à découvrir chaque domaine.',
        // Registration page
        'Choose Your Plan': 'Choose Your Plan',
        'Complete Your Registration': 'Complete Your Registration',
        'Need Help?': 'Need Help?',
        'Join hundreds of students transforming their summer into their best investment!': 'Join hundreds of students transforming their summer into their best investment!',
        'Save 100 DH!': 'Save 100 DH!',
        'Any questions or special requests...': 'Any questions or special requests...'
    },
    
    ar: {
        // Navigation
        'Home': 'الرئيسية',
        'About': 'حول',
        'Program': 'البرنامج',
        'Schedule': 'الجدول',
        'Pricing': 'الأسعار',
        
        // Hero section
        'Transform Your Summer into Your Best Investment!': 'حول صيفك إلى أفضل استثمار لك!',
        'Every summer, we tell ourselves we\'ll study hard, learn new skills, and prepare for our future… but time slips away in endless scrolling and distractions. The Studycircle Summer Program was created to change that.': 'كل صيف، نقول لأنفسنا أننا سندرس بجد، ونتعلم مهارات جديدة، ونستعد لمستقبلنا... لكن الوقت ينزلق في التمرير اللانهائي والإلهاءات. تم إنشاء برنامج Studycircle الصيفي لتغيير ذلك.',
        'Join Now': 'انضم الآن',
        'Watch Video': 'شاهد الفيديو',
        
        // Video section
        'Learn More About Our Program': 'تعرف على المزيد حول برنامجنا',
        
        // Who section
        'Who Is This For?': 'لمن هذا؟',
        'You\'re a Bac student this year and want to feel fully prepared and confident.': 'أنت طالب في البكالوريا هذا العام وتريد أن تشعر بالاستعداد الكامل والثقة.',
        'You\'re curious about new fields like coding, entrepreneurship, study techniques, and more.': 'أنت فضولي حول مجالات جديدة مثل البرمجة وريادة الأعمال وتقنيات الدراسة والمزيد.',
        'You\'re tired of wasting time and want an environment that keeps you motivated and consistent.': 'أنت متعب من إضاعة الوقت وتريد بيئة تبقيك محفزًا ومتسقًا.',
        
        // Program section
        'What\'s Included': 'ما هو مدرج',
        'Bac Track': 'مسار البكالوريا',
        'Skills Track': 'مسار المهارات',
        'All Students Get': 'جميع الطلاب يحصلون على',
        'Live sessions in Maths, Physics, and SVT': 'جلسات مباشرة في الرياضيات والفيزياء والعلوم الطبيعية',
        'Exercises and corrections': 'تمارين وتصحيحات',
        'Tips and strategies to boost your grades': 'نصائح واستراتيجيات لتحسين درجاتك',
        'Weekly study plans': 'خطط دراسية أسبوعية',
        'Introduction to coding, robotics, cybersecurity, AI tools': 'مقدمة في البرمجة والروبوتات والأمن السيبراني وأدوات الذكاء الاصطناعي',
        'Freelancing, video editing, and graphic design': 'العمل الحر وتحرير الفيديو والتصميم الجرافيكي',
        'Real-life projects to build your portfolio': 'مشاريع حقيقية لبناء محفظتك',
        'Session replays': 'إعادة تشغيل الجلسات',
        'Private community': 'مجتمع خاص',
        'Expert guidance': 'إرشاد الخبراء',
        'Certificate': 'شهادة',
        
        // Schedule section
        'Weekly Schedule': 'الجدول الأسبوعي',
        'Monday': 'الاثنين',
        'Tuesday': 'الثلاثاء',
        'Wednesday': 'الأربعاء',
        'Thursday': 'الخميس',
        'Friday': 'الجمعة',
        'Saturday': 'السبت',
        'Sunday': 'الأحد',
        'Math Session': 'جلسة الرياضيات',
        'Physics Session': 'جلسة الفيزياء',
        'Skill Building': 'بناء المهارات',
        'Group Study (Math)': 'دراسة جماعية (رياضيات)',
        'Group Study (Physics)': 'دراسة جماعية (فيزياء)',
        'Optional Group Study': 'دراسة جماعية اختيارية',
        'Mini Project': 'مشروع صغير',
        'Rest Day': 'يوم راحة',
        
        // Pricing section
        'Pricing & Payment': 'التسعير والدفع',
        'Perfect for Bac students': 'مثالي لطلاب البكالوريا',
        'Learn real-world skills': 'تعلم مهارات العالم الحقيقي',
        'Combo Package': 'باقة مجمعة',
        'Both tracks at special price': 'كلا المسارين بسعر خاص',
        'Payments can be made in multiple installments. Contact us for details.': 'يمكن الدفع على أقساط متعددة. اتصل بنا للحصول على التفاصيل.',
        
        // Dates section
        'Program Dates': 'تواريخ البرنامج',
        'Start Date': 'تاريخ البداية',
        'End Date': 'تاريخ الانتهاء',
        'Format': 'الشكل',
        'July 28th, 2025': '28 يوليو 2025',
        'August 6th, 2025': '6 أغسطس 2025',
        '100% Online': '100% عبر الإنترنت',
        
        // Schedule notes
        '*Schedule is not finalized yet - these times are examples and may be adjusted based on student preferences.': '*الجدول غير مكتمل بعد - هذه الأوقات أمثلة ويمكن تعديلها حسب تفضيلات الطلاب.',
        '*This schedule is flexible and can be adjusted based on student preferences and availability.': '*هذا الجدول مرن ويمكن تعديله حسب تفضيلات الطلاب وتوفرهم.',
        
        // FAQ section
        'Frequently Asked Questions': 'الأسئلة المتكررة',
        'Is everything online?': 'هل كل شيء عبر الإنترنت؟',
        'Yes! All sessions are live on Zoom and in private groups.': 'نعم! جميع الجلسات مباشرة على Zoom وفي مجموعات خاصة.',
        'Can I pay in installments?': 'هل يمكنني الدفع على أقساط؟',
        'Yes, you can pay in multiple installments. Contact us for details.': 'نعم، يمكنك الدفع على أقساط متعددة. اتصل بنا للحصول على التفاصيل.',
        'Can I join both tracks?': 'هل يمكنني الانضمام إلى كلا المسارين؟',
        'Yes! And we will make sure that both tracks happen at different times.': 'نعم! وسنتأكد من أن كلا المسارين يحدثان في أوقات مختلفة.',
        'Will I get a certificate?': 'هل سأحصل على شهادة؟',
        'Yes, you\'ll receive a certificate you can add to your CV or portfolio.': 'نعم، ستحصل على شهادة يمكنك إضافتها إلى سيرتك الذاتية أو محفظتك.',
        
        // CTA section
        'Ready to Transform Your Summer?': 'هل أنت مستعد لتحويل صيفك؟',
        'Join hundreds of students who are already making their summer count!': 'انضم إلى مئات الطلاب الذين يجعلون صيفهم يحتسب بالفعل!',
        'Register Now': 'سجل الآن',
        
        // Footer
        'Transform your summer into your best investment.': 'حول صيفك إلى أفضل استثمار لك.',
        'Contact': 'اتصل',
        'Follow Us': 'تابعنا',
        'All rights reserved.': 'جميع الحقوق محفوظة.',
        
        // New Bac Track content
        '🔴 Live sessions in Maths and Physics (4 sessions per week)': '🔴 جلسات مباشرة في الرياضيات والفيزياء (4 جلسات في الأسبوع)',
        '📝 Group exercise sessions with detailed corrections and explanations': '📝 جلسات تمارين جماعية مع تصحيحات مفصلة وشروحات',
        '🎯 Two flexible levels, based on your current skills, so nothing is too easy or too hard — and you can switch between levels whenever you want': '🎯 مستويان مرنان، بناءً على مهاراتك الحالية، بحيث لا يكون شيء سهلاً جداً أو صعباً جداً — ويمكنك التبديل بين المستويات متى شئت',
        '📹 Recorded sessions available anytime, including whiteboard explanations so you can review lessons at your own pace': '📹 جلسات مسجلة متاحة في أي وقت، بما في ذلك شروحات السبورة حتى تتمكن من مراجعة الدروس بالسرعة التي تناسبك',
        '🏆 High-quality study materials to help you prepare for the school year (lesson PDFs and practice exercises)': '🏆 مواد دراسية عالية الجودة لمساعدتك في التحضير للسنة الدراسية (ملفات PDF للدروس وتمارين تطبيقية)',
        '📅 Post-bac insights through live sessions featuring students from various universities': '📅 نظرات ما بعد البكالوريا من خلال جلسات مباشرة مع طلاب من جامعات مختلفة',
        
        // New Skills Track content
        '💻 Python — learn the fundamentals of programming from scratch': '💻 Python — تعلم أساسيات البرمجة من الصفر',
        '📝 C++ — create practical, real-world applications': '📝 C++ — أنشئ تطبيقات عملية من العالم الحقيقي',
        '🤖 Robotics — explore Arduino basics, circuits, and an introduction to mechatronics': '🤖 الروبوتات — استكشف أساسيات Arduino والدوائر ومقدمة في الميكاترونيكا',
        '🎨 AI Tools — discover how to integrate AI effectively into everyday tasks': '🎨 أدوات الذكاء الاصطناعي — اكتشف كيفية دمج الذكاء الاصطناعي بفعالية في المهام اليومية',
        '🎬 Video Editing & Graphic Design — master creative tools to produce professional visuals and videos': '🎬 تحرير الفيديو والتصميم الجرافيكي — إتقان الأدوات الإبداعية لإنتاج مرئيات وفيديوهات احترافية',
        '💼 Freelancing & Business Skills — learn how to land your first freelance job and build a strong portfolio': '💼 العمل الحر والمهارات التجارية — تعلم كيفية الحصول على أول وظيفة حرة وبناء محفظة قوية',
        '🚀 Real Projects — work on hands-on projects to enrich your portfolio': '🚀 مشاريع حقيقية — اعمل على مشاريع عملية لإثراء محفظتك',
        'Perfect for students who want to explore valuable, marketable skills and start building a strong portfolio for their future career — with introductory courses designed to help you discover each field.': 'مثالي للطلاب الذين يريدون استكشاف مهارات قيمة وقابلة للتسويق وبدء بناء محفظة قوية لمستقبلهم المهني — مع دورات تمهيدية مصممة لمساعدتك على اكتشاف كل مجال.',
        // Registration page
        'Choose Your Plan': 'اختر خطتك',
        'Complete Your Registration': 'أكمل تسجيلك',
        'Need Help?': 'تحتاج مساعدة؟',
        'Join hundreds of students transforming their summer into their best investment!': 'انضم إلى مئات الطلاب الذين يحولون صيفهم إلى أفضل استثمار لهم!',
        'Any questions or special requests...': 'أي أسئلة أو طلبات خاصة...'
    }
};

// Function to change language
function changeLanguage() {
    const select = document.getElementById('languageSelect');
    const selectedLanguage = select.value;
    currentLanguage = selectedLanguage;
    
    // Store language preference in localStorage
    localStorage.setItem('selectedLanguage', selectedLanguage);
    
    // Update document language and direction
    document.documentElement.lang = selectedLanguage;
    if (selectedLanguage === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.classList.add('rtl');
    } else {
        document.documentElement.dir = 'ltr';
        document.body.classList.remove('rtl');
    }
    
    // Update all translatable elements
    updateTranslations();
}

// Function to load saved language preference
function loadLanguagePreference() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        const select = document.getElementById('languageSelect');
        if (select) {
            select.value = savedLanguage;
        }
        
        // Update document language and direction
        document.documentElement.lang = savedLanguage;
        if (savedLanguage === 'ar') {
            document.documentElement.dir = 'rtl';
            document.body.classList.add('rtl');
        } else {
            document.documentElement.dir = 'ltr';
            document.body.classList.remove('rtl');
        }
        
        // Update translations after DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateTranslations);
        } else {
            updateTranslations();
        }
    }
}

// Function to update translations
function updateTranslations() {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(element => {
        const key = element.getAttribute('data-en');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// FAQ toggle functionality
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-answer').forEach(item => {
        if (item !== answer) {
            item.classList.remove('active');
        }
    });
    
    document.querySelectorAll('.faq-question i').forEach(item => {
        if (item !== icon) {
            item.style.transform = 'rotate(0deg)';
        }
    });
    
    // Toggle current FAQ item
    answer.classList.toggle('active');
    
    if (answer.classList.contains('active')) {
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.style.transform = 'rotate(0deg)';
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to header
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (header) {
            if (currentScrollY > 100) {
                header.style.background = 'rgba(102, 126, 234, 0.95)';
            } else {
                header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.card, .pricing-card, .day-card, .date-item');
    if (animatedElements.length > 0) {
        animatedElements.forEach(el => {
            if (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            }
        });
    }
    
    // Initialize language on page load
    updateTranslations();
});

// Add click animation to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .rtl {
        direction: rtl;
    }
    
    .rtl .hero-buttons {
        flex-direction: row-reverse;
    }
    
    .rtl .nav ul {
        flex-direction: row-reverse;
    }
    
    .rtl .logo {
        flex-direction: row-reverse;
    }
    
    .rtl .benefit {
        flex-direction: row-reverse;
    }
    
    .rtl .date-item {
        flex-direction: row-reverse;
    }
    
    .rtl .faq-question {
        flex-direction: row-reverse;
    }
`;
document.head.appendChild(style);

// Mobile navigation functionality
function toggleMobileNav() {
    const nav = document.getElementById('mobileNav');
    const overlay = document.getElementById('mobileMenuOverlay');
    const hamburger = document.querySelector('.hamburger');
    
    console.log('Toggle mobile nav called');
    console.log('Nav element:', nav);
    console.log('Overlay element:', overlay);
    console.log('Hamburger element:', hamburger);
    
    if (nav && overlay && hamburger) {
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        console.log('Nav has active class:', nav.classList.contains('active'));
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    } else {
        console.error('One or more elements not found!');
    }
}

function closeMobileNav() {
    const nav = document.getElementById('mobileNav');
    const overlay = document.getElementById('mobileMenuOverlay');
    const hamburger = document.querySelector('.hamburger');
    
    if (nav && overlay && hamburger) {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.classList.remove('active');
        
        // Restore body scroll
        document.body.style.overflow = '';
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.getElementById('mobileNav');
    const hamburger = document.querySelector('.hamburger');
    
    if (nav && hamburger && nav.classList.contains('active')) {
        // Check if click is outside the nav and hamburger
        if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
            closeMobileNav();
        }
    }
});

// Prevent menu close when clicking inside the nav
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('mobileNav');
    if (nav) {
        nav.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
});

// Add typing effect to hero title
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title span:nth-child(2)');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid white';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
});

// Add particles background effect
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return; // Exit if hero section doesn't exist
    
    const particlesCount = 50;
    
    for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        hero.appendChild(particle);
    }
}

// Add float animation for particles
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
            opacity: 0.5;
        }
        50% {
            transform: translateY(-20px);
            opacity: 1;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles when page loads
document.addEventListener('DOMContentLoaded', createParticles);

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add entrance animations
    setTimeout(() => {
        const elements = document.querySelectorAll('.hero-content > *');
        if (elements.length > 0) {
            elements.forEach((el, index) => {
                if (el) {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        }
    }, 500);
});

// Add initial loading styles
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    .hero-content > * {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    body.loaded .hero-content > * {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(loadingStyle);

// Registration Form Functions
function openRegistrationForm(selectedPlan = '') {
    const modal = document.getElementById('registrationModal');
    modal.style.display = 'block';
    
    // Pre-select plan if provided
    if (selectedPlan) {
        const planSelect = document.getElementById('plan');
        planSelect.value = selectedPlan;
    }
    
    // Update form translations
    updateTranslations();
}

function closeRegistrationForm() {
    const modal = document.getElementById('registrationModal');
    modal.style.display = 'none';
    
    // Reset form
    document.getElementById('registrationForm').reset();
    
    // Hide any messages
    const message = document.getElementById('submitMessage');
    message.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('registrationModal');
    if (event.target === modal) {
        closeRegistrationForm();
    }
}

// Registration page functionality
let selectedPlan = '';

// Google Sheets configuration
const SHEET_ID = '1L9qOU8KrhOekutnd5_uUUxfl9Gv8QE1fMONu-khDrjc';
const API_KEY = 'AIzaSyCzJE3U_XZhjVPukHjbVYmikwptj0sqY4k';

// IMPORTANT: Replace this with your actual Google Apps Script deployment URL
// You need to deploy the Google Apps Script as a web app first
// Follow the steps in SETUP-INSTRUCTIONS.md to get your URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz5hRtR52GuyiDu2St8ZbDvnUSDbMmeQl5m3LEfoF8Q2ugX7e7iMyXi8TKOKqsl3N7BcA/exec';

// Plan selection functionality
function selectPlan(planName) {
    // Remove selected class from all cards
    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach(card => card.classList.remove('selected'));
    
    // Add selected class to clicked card
    event.target.closest('.pricing-card').classList.add('selected');
    
    // Update the select dropdown
    const planSelect = document.getElementById('plan');
    if (planSelect) {
        planSelect.value = planName;
    }
}

// Form submission functionality
async function submitRegistration(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.btn-submit');
    const messageDiv = document.getElementById('submitMessage');
    
    // Check privacy policy agreement
    const privacyCheckbox = document.getElementById('privacyPolicy');
    if (!privacyCheckbox || !privacyCheckbox.checked) {
        messageDiv.className = 'submit-message error';
        messageDiv.innerHTML = getTranslatedText('privacy_required', 'Please agree to the Privacy Policy before submitting.');
        messageDiv.style.display = 'block';
        messageDiv.scrollIntoView({ behavior: 'smooth' });
        
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> <span data-en="Submit Registration" data-fr="Soumettre l\'inscription" data-ar="إرسال التسجيل">Submit Registration</span>';
        return;
    }
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Submitting...</span>';
    
    try {
        // Prepare data for Google Sheets
        const registrationData = {
            timestamp: new Date().toISOString(),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            plan: formData.get('plan'),
            message: formData.get('message') || '',
            privacyAgreed: formData.get('privacyPolicy') ? 'Yes' : 'No',
            language: currentLanguage
        };
        
        // Try to submit to Google Sheets using Apps Script
        const success = await submitToGoogleSheets(registrationData);
        
        if (success) {
            // Show success message
            messageDiv.className = 'submit-message success';
            messageDiv.innerHTML = getTranslatedText('registration_success', 'Registration submitted successfully! We will contact you soon.');
            messageDiv.style.display = 'block';
            
            // Reset form
            form.reset();
            selectedPlan = '';
            
            // Remove selected class from all cards
            const cards = document.querySelectorAll('.plan-selection .pricing-card');
            cards.forEach(card => card.classList.remove('selected'));
            
            // Scroll to message
            messageDiv.scrollIntoView({ behavior: 'smooth' });
            
        } else {
            throw new Error('Registration failed');
        }
        
    } catch (error) {
        console.error('Registration error:', error);
        
        // Check if it's a configuration issue
        if (GOOGLE_SCRIPT_URL === 'REPLACE_WITH_YOUR_ACTUAL_DEPLOYED_SCRIPT_URL') {
            // Show configuration error message
            messageDiv.className = 'submit-message error';
            messageDiv.innerHTML = `
                <strong>⚠️ Configuration Error</strong><br>
                The Google Apps Script URL is not configured. Please follow the setup instructions to deploy your Google Apps Script and update the URL in script.js.
            `;
        } else {
            // Show general error message
            messageDiv.className = 'submit-message error';
            messageDiv.innerHTML = getTranslatedText('registration_error', 'There was an error submitting your registration. Please try again or contact us directly.');
        }
        
        messageDiv.style.display = 'block';
        
        // Add debugging information
        console.error('🔍 Debugging Information:');
        console.error('• GOOGLE_SCRIPT_URL:', GOOGLE_SCRIPT_URL);
        console.error('• Registration data:', registrationData);
        console.error('• Current language:', currentLanguage);
        console.error('• Error details:', error);
        
        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth' });
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> <span data-en="Submit Registration" data-fr="Soumettre l\'inscription" data-ar="إرسال التسجيل">Submit Registration</span>';
        
        // Update button text based on current language
        updateLanguage();
    }
}

// Function to submit data to Google Sheets
async function submitToGoogleSheets(data) {
    try {
        // Check if Google Apps Script URL is configured
        if (GOOGLE_SCRIPT_URL === 'REPLACE_WITH_YOUR_ACTUAL_DEPLOYED_SCRIPT_URL') {
            console.error('⚠️  Google Apps Script URL not configured!');
            console.error('📋 Please follow the setup instructions in SETUP-INSTRUCTIONS.md');
            console.error('🔗 You need to deploy the Google Apps Script and update the URL in script.js');
            
            // Return false to show error message
            return false;
        }
        
        // Submit to Google Apps Script Web App
        console.log('🚀 Sending data to Google Apps Script...');
        console.log('📍 URL:', GOOGLE_SCRIPT_URL);
        console.log('📦 Data being sent:', data);
        
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            mode: 'no-cors' // This helps avoid CORS issues
        });
        
        // Since we're using no-cors mode, we can't read the response
        // We'll assume success if no error is thrown
        console.log('✅ Request sent to Google Apps Script successfully');
        console.log('📋 Please check your Google Sheet for the registration data');
        console.log('🔗 Google Sheet: https://docs.google.com/spreadsheets/d/1L9qOU8KrhOekutnd5_uUUxfl9Gv8QE1fMONu-khDrjc/edit');
        
        return true;
        
    } catch (error) {
        console.error('Google Sheets submission error:', error);
        return false;
    }
}

// Fallback method: Show configuration error message
async function sendEmailFallback(data) {
    console.error('🚨 Google Apps Script URL not configured!');
    console.error('📋 Please follow these steps:');
    console.error('1. Go to https://script.google.com');
    console.error('2. Create a new project');
    console.error('3. Copy code from google-apps-script-fixed.js');
    console.error('4. Deploy as web app with "Anyone" access');
    console.error('5. Update GOOGLE_SCRIPT_URL in script.js');
    console.error('6. Registration data:', data);
    
    // Return false to indicate failure
    return false;
}

// Helper function to get translated text
function getTranslatedText(key, defaultText) {
    const messages = {
        en: {
            'registration_success': 'Registration submitted successfully! We will contact you soon.',
            'registration_error': 'There was an error submitting your registration. Please try again or contact us directly.'
        },
        fr: {
            'registration_success': 'Inscription soumise avec succès ! Nous vous contacterons bientôt.',
            'registration_error': 'Il y a eu une erreur lors de la soumission de votre inscription. Veuillez réessayer ou nous contacter directement.'
        },
        ar: {
            'registration_success': 'تم إرسال التسجيل بنجاح! سنتواصل معك قريباً.',
            'registration_error': 'حدث خطأ أثناء إرسال تسجيلك. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.'
        }
    };
    
    return messages[currentLanguage] && messages[currentLanguage][key] 
        ? messages[currentLanguage][key] 
        : defaultText;
}

// Initialize registration page
function initializeRegistrationPage() {
    // Check if we're on the registration page
    if (window.location.pathname.includes('register.html')) {
        // Handle URL parameters to pre-select plan
        const urlParams = new URLSearchParams(window.location.search);
        const selectedPlan = urlParams.get('plan');
        
        if (selectedPlan) {
            const planSelect = document.getElementById('plan');
            if (planSelect) {
                // Wait a bit for the page to fully load before setting the value
                setTimeout(() => {
                    planSelect.value = selectedPlan;
                }, 100);
            }
        }
        
        // Set up event listeners for plan selection
        const planCards = document.querySelectorAll('.plan-selection .pricing-card');
        planCards.forEach(card => {
            card.addEventListener('click', function() {
                const planName = this.querySelector('h3').textContent.trim();
                selectPlan(planName);
            });
        });
        
        // Update form validation
        const form = document.getElementById('registrationForm');
        if (form) {
            const inputs = form.querySelectorAll('input[required], select[required]');
            inputs.forEach(input => {
                input.addEventListener('blur', validateField);
                input.addEventListener('input', clearFieldError);
            });
        }
    }
}

// Field validation
function validateField(event) {
    const field = event.target;
    const value = field.value.trim();
    
    // Remove existing error styling
    field.classList.remove('error');
    
    // Check if field is empty
    if (!value && field.hasAttribute('required')) {
        field.classList.add('error');
        return false;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            field.classList.add('error');
            return false;
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            field.classList.add('error');
            return false;
        }
    }
    
    return true;
}

// Clear field error styling
function clearFieldError(event) {
    const field = event.target;
    field.classList.remove('error');
}

// Add error styling to CSS
const errorStyles = `
.form-group input.error,
.form-group select.error,
.form-group textarea.error {
    border-color: #dc3545;
    box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
}
`;

// Inject error styles
const styleSheet = document.createElement('style');
styleSheet.textContent = errorStyles;
document.head.appendChild(styleSheet);

// Update existing translations with registration page content
const registrationTranslations = {
    en: {
        'Choose Your Plan': 'Choose Your Plan',
        'Complete Your Registration': 'Complete Your Registration',
        'Need Help?': 'Need Help?',
        'Join hundreds of students transforming their summer into their best investment!': 'Join hundreds of students transforming their summer into their best investment!',
        'Save 100 DH!': 'Save 100 DH!',
        'Any questions or special requests...': 'Any questions or special requests...',
        'Bonus Udemy courses access': 'Bonus Udemy courses access',
        'Customizable training plan': 'Customizable training plan',
        'privacy_required': 'Please agree to the Privacy Policy before submitting.',
        'registration_success': 'Registration submitted successfully! We will contact you soon.'
    },
    fr: {
        'Choose Your Plan': 'Choisissez votre plan',
        'Complete Your Registration': 'Complétez votre inscription',
        'Need Help?': 'Besoin d\'aide?',
        'Join hundreds of students transforming their summer into their best investment!': 'Rejoignez des centaines d\'étudiants qui transforment leur été en leur meilleur investissement!',
        'Save 100 DH!': 'Économisez 100 DH!',
        'Any questions or special requests...': 'Des questions ou des demandes spéciales...',
        'Bonus Udemy courses access': 'Accès bonus aux cours Udemy',
        'Customizable training plan': 'Plan de formation personnalisable',
        'privacy_required': 'Veuillez accepter la Politique de confidentialité avant de soumettre.',
        'registration_success': 'Inscription soumise avec succès! Nous vous contacterons bientôt.'
    },
    ar: {
        'Choose Your Plan': 'اختر خطتك',
        'Complete Your Registration': 'أكمل تسجيلك',
        'Need Help?': 'تحتاج مساعدة؟',
        'Join hundreds of students transforming their summer into their best investment!': 'انضم إلى مئات الطلاب الذين يحولون صيفهم إلى أفضل استثمار لهم!',
        'Save 100 DH!': 'وفر 100 درهم!',
        'Any questions or special requests...': 'أي أسئلة أو طلبات خاصة...',
        'Bonus Udemy courses access': 'وصول إضافي لدورات Udemy',
        'Customizable training plan': 'خطة تدريب قابلة للتخصيص',
        'privacy_required': 'يرجى الموافقة على سياسة الخصوصية قبل الإرسال.',
        'registration_success': 'تم إرسال التسجيل بنجاح! سنتواصل معك قريباً.'
    }
};

// Merge registration translations
Object.keys(registrationTranslations).forEach(lang => {
    if (translations[lang]) {
        Object.assign(translations[lang], registrationTranslations[lang]);
    }
});

// Video Reel Functions
function playVideoReel(reelId) {
    const reel = document.querySelector(`[data-reel-id="${reelId}"]`);
    if (reel) {
        const iframe = reel.querySelector('iframe');
        const playButton = reel.querySelector('.play-button');
        const overlay = reel.querySelector('.reel-overlay');
        
        if (iframe && playButton) {
            // Hide the overlay and play button
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
            
            // Get current iframe src and add autoplay parameter
            let currentSrc = iframe.src;
            
            // For Google Drive videos, we need to modify the URL to enable autoplay
            if (currentSrc.includes('drive.google.com')) {
                // Remove any existing parameters and add our own
                const baseUrl = currentSrc.split('?')[0];
                iframe.src = baseUrl + '?autoplay=1&controls=1';
            }
            
            // Add playing class for visual effects
            reel.classList.add('playing');
            
            // Update view count
            const views = reel.querySelector('.views');
            if (views) {
                const currentViews = parseInt(views.textContent.replace(/[^\d]/g, ''));
                const newViews = currentViews + Math.floor(Math.random() * 10) + 1;
                views.textContent = `${newViews.toLocaleString()} views`;
            }
            
            // Show pause button temporarily then hide overlay completely
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
            
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 1000);
            
            // Add click listener to iframe to allow pausing
            iframe.addEventListener('click', function() {
                pauseVideoReel(reelId);
            });
            
            console.log(`Playing video reel: ${reelId}`);
        }
    }
}

function pauseVideoReel(reelId) {
    const reel = document.querySelector(`[data-reel-id="${reelId}"]`);
    if (reel) {
        const iframe = reel.querySelector('iframe');
        const playButton = reel.querySelector('.play-button');
        const overlay = reel.querySelector('.reel-overlay');
        
        if (iframe && playButton) {
            // Show overlay again
            overlay.style.display = 'flex';
            overlay.style.opacity = '1';
            overlay.style.pointerEvents = 'all';
            
            // Reset iframe src to stop autoplay
            let currentSrc = iframe.src;
            if (currentSrc.includes('autoplay=1')) {
                const baseUrl = currentSrc.split('?')[0];
                iframe.src = baseUrl + '?controls=1';
            }
            
            // Remove playing class
            reel.classList.remove('playing');
            
            // Show play button again
            playButton.innerHTML = '<i class="fas fa-play"></i>';
            
            console.log(`Paused video reel: ${reelId}`);
        }
    }
}

function likeReel(reelId) {
    const reel = document.querySelector(`[data-reel-id="${reelId}"]`);
    if (reel) {
        const likeButton = reel.querySelector('.reel-action.likes');
        const heartIcon = likeButton.querySelector('i');
        
        // Toggle like state
        if (heartIcon.classList.contains('fas')) {
            heartIcon.classList.remove('fas');
            heartIcon.classList.add('far');
            likeButton.classList.remove('liked');
        } else {
            heartIcon.classList.remove('far');
            heartIcon.classList.add('fas');
            likeButton.classList.add('liked');
            
            // Create floating heart effect
            createFloatingHeart(likeButton);
        }
        
        // Update like count
        const likeCount = likeButton.querySelector('span');
        const currentLikes = parseInt(likeCount.textContent);
        const isLiked = heartIcon.classList.contains('fas');
        likeCount.textContent = isLiked ? currentLikes + 1 : currentLikes - 1;
    }
}

function createFloatingHeart(button) {
    const heart = document.createElement('div');
    heart.innerHTML = '<i class="fas fa-heart"></i>';
    heart.style.cssText = `
        position: absolute;
        color: #ff3040;
        font-size: 24px;
        pointer-events: none;
        animation: floatHeart 1s ease-out forwards;
        z-index: 1000;
    `;
    
    const rect = button.getBoundingClientRect();
    heart.style.left = rect.left + rect.width/2 + 'px';
    heart.style.top = rect.top + 'px';
    
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 1000);
}

function shareReel(reelId) {
    const shareData = {
        title: 'StudyCircle Summer Program - Transform Your Summer!',
        text: 'Check out this amazing StudyCircle Summer Program! Transform your summer into your best investment.',
        url: window.location.href + '#video'
    };
    
    if (navigator.share) {
        navigator.share(shareData);
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareData.url).then(() => {
            showToast('Link copied to clipboard!');
        });
    }
    
    console.log(`Sharing video reel: ${reelId}`);
}

function scrollToComments() {
    // Scroll to FAQ section as "comments" equivalent
    const faqSection = document.querySelector('.faq-section');
    if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        z-index: 10000;
        animation: toastFadeInOut 3s ease-in-out forwards;
    `;
    
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Instagram Reel Functions
function openInstagramReel() {
    // Open the Instagram reel in a new tab
    const instagramUrl = 'https://www.instagram.com/reel/DMh7nafI86L/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==';
    window.open(instagramUrl, '_blank');
    
    // Update view count
    const views = document.querySelector('.reel-stat .views');
    if (views) {
        const currentViews = parseInt(views.textContent.replace(/[^\d]/g, ''));
        const newViews = currentViews + Math.floor(Math.random() * 5) + 1;
        views.textContent = `${newViews.toLocaleString()} views`;
    }
    
    // Show toast message
    showToast('Opening Instagram reel in new tab...');
    
    console.log('Opening Instagram reel in new tab');
}

function shareInstagramReel() {
    const shareData = {
        title: 'StudyCircle Student Success Story - Instagram Reel',
        text: 'Check out this amazing student transformation story from StudyCircle!',
        url: 'https://www.instagram.com/reel/DMh5KE4IaTF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    };
    
    if (navigator.share) {
        navigator.share(shareData);
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareData.url).then(() => {
            showToast('Instagram reel link copied to clipboard!');
        });
    }
    
    console.log('Sharing Instagram reel');
}

// Enhanced Instagram Reel Functions
function likeReel() {
    const likeButton = document.querySelector('.side-actions .action-btn:first-child .action-count');
    if (likeButton) {
        const currentLikes = parseFloat(likeButton.textContent);
        let newLikes;
        if (likeButton.textContent.includes('K')) {
            newLikes = (currentLikes + 0.1).toFixed(1) + 'K';
        } else {
            newLikes = (parseInt(currentLikes) + Math.floor(Math.random() * 5) + 1).toString();
        }
        likeButton.textContent = newLikes;
        
        // Add heart animation
        const heartIcon = document.querySelector('.side-actions .action-btn:first-child .action-icon i');
        if (heartIcon) {
            heartIcon.style.color = '#ff3040';
            heartIcon.classList.add('fas');
            heartIcon.classList.remove('far');
            setTimeout(() => {
                heartIcon.style.color = 'white';
            }, 1000);
        }
        
        // Create floating heart effect
        createFloatingEffect(heartIcon.parentElement, '❤️');
    }
    
    showToast('❤️ Liked the reel!');
}

function shareReel() {
    const instagramUrl = 'https://www.instagram.com/reel/DMh7nafI86L/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==';
    
    const shareData = {
        title: 'StudyCircle Summer Program - Transform Your Future!',
        text: 'Check out this amazing transformation journey with StudyCircle! 🎓✨',
        url: instagramUrl
    };
    
    if (navigator.share) {
        navigator.share(shareData).then(() => {
            showToast('📤 Shared successfully!');
        }).catch(err => {
            console.log('Error sharing:', err);
            fallbackShare(instagramUrl);
        });
    } else {
        fallbackShare(instagramUrl);
    }
    
    // Update share count
    const shareCount = document.querySelector('.side-actions .action-btn:nth-child(3) .action-count');
    if (shareCount) {
        const currentShares = parseInt(shareCount.textContent);
        shareCount.textContent = (currentShares + 1).toString();
    }
    
    // Create floating share effect
    const shareIcon = document.querySelector('.side-actions .action-btn:nth-child(3) .action-icon');
    if (shareIcon) {
        createFloatingEffect(shareIcon, '📤');
    }
}

function fallbackShare(url) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showToast('📋 Link copied to clipboard!');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('📋 Link copied to clipboard!');
    }
}

// Create floating effect for interactions
function createFloatingEffect(element, emoji) {
    const floating = document.createElement('div');
    floating.textContent = emoji;
    floating.style.cssText = `
        position: absolute;
        font-size: 24px;
        pointer-events: none;
        animation: floatUp 2s ease-out forwards;
        z-index: 1000;
    `;
    
    const rect = element.getBoundingClientRect();
    floating.style.left = (rect.left + rect.width/2) + 'px';
    floating.style.top = rect.top + 'px';
    
    document.body.appendChild(floating);
    
    setTimeout(() => floating.remove(), 2000);
}

// Add floating animation keyframes
const floatingStyle = document.createElement('style');
floatingStyle.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-50px) scale(1.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatingStyle);

// Add enhanced button animations
function addButtonEnhancements() {
    const watchReelBtn = document.querySelector('.watch-reel-btn');
    if (watchReelBtn) {
        watchReelBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 15px 40px rgba(131, 58, 180, 0.6), 0 0 30px rgba(253, 29, 29, 0.4)';
        });
        
        watchReelBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 10px 30px rgba(131, 58, 180, 0.5)';
        });
        
        watchReelBtn.addEventListener('click', function() {
            this.style.transform = 'translateY(-1px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            }, 150);
        });
    }
    
    const registerBtn = document.querySelector('.register-btn');
    if (registerBtn) {
        registerBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
            this.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.2)';
        });
        
        registerBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
            this.style.boxShadow = 'none';
        });
        
        registerBtn.addEventListener('click', function() {
            this.style.transform = 'translateY(0px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px) scale(1.02)';
            }, 150);
        });
    }
    
    // Add Instagram camera and search hover effects
    const cameraIcon = document.querySelector('.ig-camera-icon');
    const searchIcon = document.querySelector('.ig-search');
    
    [cameraIcon, searchIcon].forEach(icon => {
        if (icon) {
            icon.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.color = '#fd1d1d';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.color = 'white';
            });
        }
    });
}

// Initialize enhanced video section animations
function initializeVideoSection() {
    // Add phone hover animations
    const phoneFrame = document.querySelector('.phone-frame');
    if (phoneFrame) {
        phoneFrame.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        phoneFrame.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
    }
    
    // Add play button pulse animation
    const playButton = document.querySelector('.play-button-main');
    if (playButton) {
        setInterval(() => {
            playButton.style.transform = 'scale(1.05)';
            setTimeout(() => {
                playButton.style.transform = 'scale(1)';
            }, 200);
        }, 4000);
    }
    
    // Add floating animation to action buttons
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach((btn, index) => {
        btn.style.animationDelay = `${index * 0.3}s`;
        btn.classList.add('floating-animation');
    });
    
    // Add stats counter animation
    animateStats();
    
    // Add Instagram navigation item active effect
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Animate stats numbers
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = stat.textContent;
        let current = 0;
        const increment = target.includes('K') ? 0.1 : 1;
        const isK = target.includes('K');
        const targetValue = parseFloat(target);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= targetValue) {
                current = targetValue;
                clearInterval(timer);
            }
            
            if (isK) {
                stat.textContent = current.toFixed(1) + 'K';
            } else {
                stat.textContent = Math.floor(current).toString();
            }
        }, 30);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load language preference first
    loadLanguagePreference();
    
    // Initialize registration page if elements exist
    if (document.querySelector('.plan-selection') || document.querySelector('#registrationForm')) {
        initializeRegistrationPage();
    }
    
    // Initialize checkbox functionality
    initializeCheckbox();
    
    // Add button enhancements for video section
    addButtonEnhancements();
    
    // Initialize enhanced video section animations
    initializeVideoSection();
});

// Privacy Policy Modal Functions
function showPrivacyPolicy() {
    const modal = document.getElementById('privacyModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
}

function closePrivacyPolicy() {
    const modal = document.getElementById('privacyModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore background scroll
    }
}

// Enhanced checkbox functionality
function initializeCheckbox() {
    const checkbox = document.getElementById('privacyPolicy');
    const checkboxWrapper = document.querySelector('.checkbox-wrapper');
    
    if (checkbox && checkboxWrapper) {
        // Add click handler to wrapper for better UX
        checkboxWrapper.addEventListener('click', function(e) {
            // Don't trigger if clicking on the link
            if (!e.target.closest('a')) {
                e.preventDefault();
                checkbox.checked = !checkbox.checked;
                // Trigger change event
                checkbox.dispatchEvent(new Event('change'));
            }
        });
        
        // Add visual feedback on checkbox change
        checkbox.addEventListener('change', function() {
            const checkboxCustom = document.querySelector('.checkbox-custom');
            if (checkboxCustom) {
                if (this.checked) {
                    checkboxCustom.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        checkboxCustom.style.transform = 'scale(1)';
                    }, 150);
                }
            }
        });
        
        // Prevent label click from bubbling when clicking the checkbox directly
        checkbox.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Close privacy modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('privacyModal');
    if (event.target === modal) {
        closePrivacyPolicy();
    }
});

// Close privacy modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePrivacyPolicy();
    }
});
