export type LangCode = 'EN' | 'AR' | 'ES' | 'PT' | 'FR' | 'DE'

export type LanguageMeta = {
  code: LangCode
  label: string
  native: string
  dir: 'rtl' | 'ltr'
  htmlLang: string
}

export const languages: LanguageMeta[] = [
  { code: 'EN', label: 'English', native: 'English', dir: 'ltr', htmlLang: 'en' },
  { code: 'AR', label: 'Arabic', native: 'العربية', dir: 'rtl', htmlLang: 'ar' },
  { code: 'ES', label: 'Spanish', native: 'Español', dir: 'ltr', htmlLang: 'es' },
  { code: 'PT', label: 'Portuguese', native: 'Português', dir: 'ltr', htmlLang: 'pt' },
  { code: 'FR', label: 'French', native: 'Français', dir: 'ltr', htmlLang: 'fr' },
  { code: 'DE', label: 'German', native: 'Deutsch', dir: 'ltr', htmlLang: 'de' },
]

export const DEFAULT_LANG: LangCode = 'AR'

export type Dictionary = {
  nav: { howItWorks: string; pricing: string; features: string }
  header: { login: string; startFree: string; selectLanguage: string; availableLanguages: string }
  hero: {
    badge: string
    titlePrefix: string
    titleHighlight: string
    titleSuffix: string
    subtitle: string
    tabUpload: string
    tabYoutube: string
    dropText: string
    dropFormats: string
    ytLabel: string
    ytPlaceholder: string
    cta: string
    note: string
  }
  how: {
    eyebrow: string
    title: string
    subtitle: string
    steps: { title: string; desc: string }[]
  }
  features: {
    eyebrow: string
    title: string
    items: { title: string; desc: string }[]
  }
  pricing: {
    eyebrow: string
    title: string
    subtitle: string
    mostPopular: string
    plans: {
      name: string
      period: string
      desc: string
      features: string[]
      cta: string
    }[]
  }
  footer: {
    ctaTitle: string
    ctaSubtitle: string
    cta: string
    terms: string
    privacy: string
    contact: string
    rights: string
  }
}

export const translations: Record<LangCode, Dictionary> = {
  EN: {
    nav: { howItWorks: 'How it works', pricing: 'Pricing', features: 'Features' },
    header: {
      login: 'Log in',
      startFree: 'Start free',
      selectLanguage: 'Select language',
      availableLanguages: 'Available languages',
    },
    hero: {
      badge: 'AI-powered — 100K+ clips generated',
      titlePrefix: 'Turn long videos into ',
      titleHighlight: 'viral Reels and TikToks',
      titleSuffix: ' instantly with AI',
      subtitle:
        'Upload your video or paste a YouTube link, and let AI find the best moments and cut them into short vertical clips ready to post — with accurate auto captions.',
      tabUpload: 'Upload video',
      tabYoutube: 'YouTube link',
      dropText: 'Drag your video here or click to browse',
      dropFormats: 'MP4, MOV, WEBM — up to 2 GB',
      ytLabel: 'Paste your YouTube video link',
      ytPlaceholder: 'https://youtube.com/watch?v=...',
      cta: 'Start free trial',
      note: 'No credit card required · Results in minutes',
    },
    how: {
      eyebrow: 'How it works',
      title: 'Three simple steps to viral clips',
      subtitle: 'From one long video to a full library of short clips — no editing skills needed.',
      steps: [
        {
          title: 'Upload the video or paste the link',
          desc: 'Upload your video file directly or paste a YouTube link — we support all common formats and any length.',
        },
        {
          title: 'AI analyzes and cuts automatically',
          desc: 'Our system detects the strongest moments and catchy lines and splits the video into short vertical clips.',
        },
        {
          title: 'Download ready clips with captions',
          desc: 'Get perfectly vertical clips for Reels, TikTok and Shorts with auto captions ready to publish.',
        },
      ],
    },
    features: {
      eyebrow: 'Features',
      title: 'Everything you need to make viral short content',
      items: [
        {
          title: 'Smart auto-cutting',
          desc: 'AI detects the most engaging moments and turns them into standalone clips.',
        },
        {
          title: 'Captions in 30+ languages',
          desc: 'Accurate auto captions with professional styling ready to publish.',
        },
        {
          title: 'Optimized for the algorithm',
          desc: 'Vertical framing and catchy hooks designed to boost views and engagement.',
        },
        {
          title: 'Results in minutes',
          desc: 'Save hours of manual editing and get a full clip library fast.',
        },
        {
          title: 'Fully cloud-based',
          desc: 'Work from any device and browser with no heavy software to install.',
        },
        {
          title: 'High-quality export',
          desc: 'Export your clips up to 4K with perfect quality for every platform.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Simple plans for every creator',
      subtitle: 'Start free and upgrade when you need to. Cancel anytime.',
      mostPopular: 'Most popular',
      plans: [
        {
          name: 'Free',
          period: 'free forever',
          desc: 'Try the power of CutGenius with no commitment.',
          features: [
            '30 processing minutes per month',
            'Automatic short clips',
            'Basic auto captions',
            'Watermark on clips',
          ],
          cta: 'Start free',
        },
        {
          name: 'Basic',
          period: 'per month',
          desc: 'Best for individual content creators.',
          features: [
            '150 processing minutes per month',
            'No watermark',
            'Accurate auto captions',
            '1080p export',
            'Email support',
          ],
          cta: 'Subscribe now',
        },
        {
          name: 'Pro',
          period: 'per month',
          desc: 'For teams, agencies and pro creators.',
          features: [
            'Unlimited processing minutes',
            'Advanced AI features',
            'Your own branding on clips',
            '4K export',
            'Auto-publish scheduling',
            'Priority support',
          ],
          cta: 'Subscribe now',
        },
      ],
    },
    footer: {
      ctaTitle: 'Ready to turn your videos into viral clips?',
      ctaSubtitle:
        'Join thousands of creators saving time with CutGenius. Start free today.',
      cta: 'Start free trial',
      terms: 'Terms',
      privacy: 'Privacy',
      contact: 'Contact us',
      rights: 'All rights reserved.',
    },
  },
  AR: {
    nav: { howItWorks: 'كيف تعمل', pricing: 'الأسعار', features: 'الميزات' },
    header: {
      login: 'تسجيل الدخول',
      startFree: 'ابدأ مجانًا',
      selectLanguage: 'اختيار اللغة',
      availableLanguages: 'اللغات المتاحة',
    },
    hero: {
      badge: 'مدعوم بالذكاء الاصطناعي — أكثر من ١٠٠ ألف مقطع تم إنشاؤه',
      titlePrefix: 'حوّل الفيديوهات الطويلة إلى فيديوهات ',
      titleHighlight: 'ريلز وتيك توك رائجة',
      titleSuffix: ' فورًا باستخدام الذكاء الاصطناعي',
      subtitle:
        'ارفع فيديوك أو الصق رابط يوتيوب، ودع الذكاء الاصطناعي يكتشف أفضل اللحظات ويقصّها في مقاطع قصيرة عمودية جاهزة للنشر — مع ترجمة تلقائية دقيقة.',
      tabUpload: 'رفع فيديو',
      tabYoutube: 'رابط يوتيوب',
      dropText: 'اسحب فيديوك هنا أو انقر للاختيار',
      dropFormats: 'MP4، MOV، WEBM — حتى ٢ جيجابايت',
      ytLabel: 'الصق رابط الفيديو من يوتيوب',
      ytPlaceholder: 'https://youtube.com/watch?v=...',
      cta: 'ابدأ التجربة المجانية',
      note: 'لا حاجة لبطاقة ائتمان · نتائج خلال دقائق',
    },
    how: {
      eyebrow: 'كيفية الاستخدام',
      title: 'ثلاث خطوات بسيطة نحو مقاطع رائجة',
      subtitle: 'من الفيديو الطويل إلى مكتبة كاملة من المقاطع القصيرة — دون أي مهارات تحرير.',
      steps: [
        {
          title: 'ارفع الفيديو أو الصق الرابط',
          desc: 'حمّل ملف الفيديو مباشرة أو الصق رابط يوتيوب — ندعم جميع الصيغ الشائعة وبأي طول.',
        },
        {
          title: 'الذكاء الاصطناعي يحلل ويقصّ تلقائيًا',
          desc: 'يتعرّف نظامنا على أقوى اللحظات والجمل الجذابة ويقسّم الفيديو إلى مقاطع قصيرة عمودية.',
        },
        {
          title: 'نزّل مقاطع جاهزة مع ترجمة',
          desc: 'احصل على مقاطع بصيغة رأسية مثالية لريلز وتيك توك وشورتس مع ترجمة تلقائية جاهزة للنشر.',
        },
      ],
    },
    features: {
      eyebrow: 'الميزات',
      title: 'كل ما تحتاجه لصناعة محتوى قصير رائج',
      items: [
        {
          title: 'قصّ ذكي تلقائي',
          desc: 'يكتشف الذكاء الاصطناعي اللحظات الأكثر جذبًا ويحوّلها إلى مقاطع مستقلة.',
        },
        {
          title: 'ترجمة بأكثر من ٣٠ لغة',
          desc: 'ترجمة تلقائية دقيقة مع تنسيق احترافي جاهز للنشر مباشرة.',
        },
        {
          title: 'مُحسّن لخوارزميات الرواج',
          desc: 'إطارات عمودية وعناوين جذابة مصممة لزيادة المشاهدات والتفاعل.',
        },
        {
          title: 'نتائج خلال دقائق',
          desc: 'وفّر ساعات من التحرير اليدوي واحصل على مكتبة مقاطع كاملة بسرعة.',
        },
        {
          title: 'سحابي بالكامل',
          desc: 'اعمل من أي جهاز ومتصفح دون تثبيت أي برامج ثقيلة.',
        },
        {
          title: 'تصدير عالي الجودة',
          desc: 'صدّر مقاطعك بدقة تصل إلى 4K وبجودة مثالية لكل المنصات.',
        },
      ],
    },
    pricing: {
      eyebrow: 'الأسعار',
      title: 'باقات بسيطة تناسب كل منشئ محتوى',
      subtitle: 'ابدأ مجانًا وارتقِ حين تحتاج. يمكنك الإلغاء في أي وقت.',
      mostPopular: 'الأكثر شيوعًا',
      plans: [
        {
          name: 'المجانية',
          period: 'مجانًا للأبد',
          desc: 'جرّب قوة CutGenius دون أي التزام.',
          features: [
            '٣٠ دقيقة معالجة شهريًا',
            'مقاطع قصيرة تلقائية',
            'ترجمة تلقائية أساسية',
            'علامة مائية على المقاطع',
          ],
          cta: 'ابدأ مجانًا',
        },
        {
          name: 'الأساسية',
          period: 'شهريًا',
          desc: 'الأنسب لصنّاع المحتوى الأفراد.',
          features: [
            '١٥٠ دقيقة معالجة شهريًا',
            'بدون علامة مائية',
            'ترجمة تلقائية دقيقة',
            'تصدير بدقة 1080p',
            'دعم عبر البريد الإلكتروني',
          ],
          cta: 'اشترك الآن',
        },
        {
          name: 'الاحترافية',
          period: 'شهريًا',
          desc: 'للفرق والوكالات ومنشئي المحتوى المحترفين.',
          features: [
            'دقائق معالجة غير محدودة',
            'ميزات ذكاء اصطناعي متقدمة',
            'علامتك التجارية على المقاطع',
            'تصدير بدقة 4K',
            'جدولة النشر التلقائي',
            'دعم ذو أولوية',
          ],
          cta: 'اشترك الآن',
        },
      ],
    },
    footer: {
      ctaTitle: 'جاهز لتحويل فيديوهاتك إلى مقاطع رائجة؟',
      ctaSubtitle:
        'انضم إلى آلاف صنّاع المحتوى الذين يوفّرون وقتهم مع CutGenius. ابدأ مجانًا اليوم.',
      cta: 'ابدأ التجربة المجانية',
      terms: 'الشروط',
      privacy: 'الخصوصية',
      contact: 'تواصل معنا',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
  ES: {
    nav: { howItWorks: 'Cómo funciona', pricing: 'Precios', features: 'Funciones' },
    header: {
      login: 'Iniciar sesión',
      startFree: 'Empieza gratis',
      selectLanguage: 'Seleccionar idioma',
      availableLanguages: 'Idiomas disponibles',
    },
    hero: {
      badge: 'Con IA — más de 100 mil clips generados',
      titlePrefix: 'Convierte videos largos en ',
      titleHighlight: 'Reels y TikToks virales',
      titleSuffix: ' al instante con IA',
      subtitle:
        'Sube tu video o pega un enlace de YouTube y deja que la IA encuentre los mejores momentos y los recorte en clips verticales listos para publicar, con subtítulos automáticos precisos.',
      tabUpload: 'Subir video',
      tabYoutube: 'Enlace de YouTube',
      dropText: 'Arrastra tu video aquí o haz clic para elegir',
      dropFormats: 'MP4, MOV, WEBM — hasta 2 GB',
      ytLabel: 'Pega el enlace del video de YouTube',
      ytPlaceholder: 'https://youtube.com/watch?v=...',
      cta: 'Iniciar prueba gratis',
      note: 'Sin tarjeta de crédito · Resultados en minutos',
    },
    how: {
      eyebrow: 'Cómo funciona',
      title: 'Tres pasos simples hacia clips virales',
      subtitle:
        'De un video largo a una biblioteca completa de clips cortos, sin conocimientos de edición.',
      steps: [
        {
          title: 'Sube el video o pega el enlace',
          desc: 'Sube tu archivo de video directamente o pega un enlace de YouTube: admitimos todos los formatos comunes y cualquier duración.',
        },
        {
          title: 'La IA analiza y recorta automáticamente',
          desc: 'Nuestro sistema detecta los mejores momentos y frases atractivas y divide el video en clips verticales cortos.',
        },
        {
          title: 'Descarga clips listos con subtítulos',
          desc: 'Obtén clips verticales perfectos para Reels, TikTok y Shorts con subtítulos automáticos listos para publicar.',
        },
      ],
    },
    features: {
      eyebrow: 'Funciones',
      title: 'Todo lo que necesitas para crear contenido corto viral',
      items: [
        {
          title: 'Recorte inteligente automático',
          desc: 'La IA detecta los momentos más atractivos y los convierte en clips independientes.',
        },
        {
          title: 'Subtítulos en más de 30 idiomas',
          desc: 'Subtítulos automáticos precisos con un estilo profesional listo para publicar.',
        },
        {
          title: 'Optimizado para el algoritmo',
          desc: 'Encuadre vertical y ganchos atractivos diseñados para aumentar vistas e interacción.',
        },
        {
          title: 'Resultados en minutos',
          desc: 'Ahorra horas de edición manual y obtén una biblioteca de clips rápidamente.',
        },
        {
          title: 'Totalmente en la nube',
          desc: 'Trabaja desde cualquier dispositivo y navegador sin instalar software pesado.',
        },
        {
          title: 'Exportación de alta calidad',
          desc: 'Exporta tus clips hasta 4K con calidad perfecta para cada plataforma.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Precios',
      title: 'Planes simples para cada creador',
      subtitle: 'Empieza gratis y mejora cuando lo necesites. Cancela cuando quieras.',
      mostPopular: 'Más popular',
      plans: [
        {
          name: 'Gratis',
          period: 'gratis para siempre',
          desc: 'Prueba el poder de CutGenius sin compromiso.',
          features: [
            '30 minutos de procesamiento al mes',
            'Clips cortos automáticos',
            'Subtítulos automáticos básicos',
            'Marca de agua en los clips',
          ],
          cta: 'Empieza gratis',
        },
        {
          name: 'Básico',
          period: 'al mes',
          desc: 'Ideal para creadores de contenido individuales.',
          features: [
            '150 minutos de procesamiento al mes',
            'Sin marca de agua',
            'Subtítulos automáticos precisos',
            'Exportación en 1080p',
            'Soporte por correo',
          ],
          cta: 'Suscríbete ahora',
        },
        {
          name: 'Pro',
          period: 'al mes',
          desc: 'Para equipos, agencias y creadores profesionales.',
          features: [
            'Minutos de procesamiento ilimitados',
            'Funciones de IA avanzadas',
            'Tu propia marca en los clips',
            'Exportación en 4K',
            'Programación de publicación automática',
            'Soporte prioritario',
          ],
          cta: 'Suscríbete ahora',
        },
      ],
    },
    footer: {
      ctaTitle: '¿Listo para convertir tus videos en clips virales?',
      ctaSubtitle:
        'Únete a miles de creadores que ahorran tiempo con CutGenius. Empieza gratis hoy.',
      cta: 'Iniciar prueba gratis',
      terms: 'Términos',
      privacy: 'Privacidad',
      contact: 'Contáctanos',
      rights: 'Todos los derechos reservados.',
    },
  },
  PT: {
    nav: { howItWorks: 'Como funciona', pricing: 'Preços', features: 'Recursos' },
    header: {
      login: 'Entrar',
      startFree: 'Comece grátis',
      selectLanguage: 'Selecionar idioma',
      availableLanguages: 'Idiomas disponíveis',
    },
    hero: {
      badge: 'Com IA — mais de 100 mil clipes gerados',
      titlePrefix: 'Transforme vídeos longos em ',
      titleHighlight: 'Reels e TikToks virais',
      titleSuffix: ' na hora com IA',
      subtitle:
        'Envie seu vídeo ou cole um link do YouTube e deixe a IA encontrar os melhores momentos e recortá-los em clipes verticais prontos para postar, com legendas automáticas precisas.',
      tabUpload: 'Enviar vídeo',
      tabYoutube: 'Link do YouTube',
      dropText: 'Arraste seu vídeo aqui ou clique para escolher',
      dropFormats: 'MP4, MOV, WEBM — até 2 GB',
      ytLabel: 'Cole o link do vídeo do YouTube',
      ytPlaceholder: 'https://youtube.com/watch?v=...',
      cta: 'Iniciar teste grátis',
      note: 'Sem cartão de crédito · Resultados em minutos',
    },
    how: {
      eyebrow: 'Como funciona',
      title: 'Três passos simples para clipes virais',
      subtitle:
        'De um vídeo longo a uma biblioteca completa de clipes curtos, sem habilidades de edição.',
      steps: [
        {
          title: 'Envie o vídeo ou cole o link',
          desc: 'Envie seu arquivo de vídeo diretamente ou cole um link do YouTube: aceitamos todos os formatos comuns e qualquer duração.',
        },
        {
          title: 'A IA analisa e recorta automaticamente',
          desc: 'Nosso sistema detecta os melhores momentos e frases marcantes e divide o vídeo em clipes verticais curtos.',
        },
        {
          title: 'Baixe clipes prontos com legendas',
          desc: 'Receba clipes verticais perfeitos para Reels, TikTok e Shorts com legendas automáticas prontas para publicar.',
        },
      ],
    },
    features: {
      eyebrow: 'Recursos',
      title: 'Tudo o que você precisa para criar conteúdo curto viral',
      items: [
        {
          title: 'Corte inteligente automático',
          desc: 'A IA detecta os momentos mais envolventes e os transforma em clipes independentes.',
        },
        {
          title: 'Legendas em mais de 30 idiomas',
          desc: 'Legendas automáticas precisas com estilo profissional prontas para publicar.',
        },
        {
          title: 'Otimizado para o algoritmo',
          desc: 'Enquadramento vertical e ganchos atraentes feitos para aumentar visualizações e engajamento.',
        },
        {
          title: 'Resultados em minutos',
          desc: 'Economize horas de edição manual e tenha uma biblioteca de clipes rapidamente.',
        },
        {
          title: 'Totalmente na nuvem',
          desc: 'Trabalhe de qualquer dispositivo e navegador sem instalar softwares pesados.',
        },
        {
          title: 'Exportação de alta qualidade',
          desc: 'Exporte seus clipes em até 4K com qualidade perfeita para cada plataforma.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Preços',
      title: 'Planos simples para cada criador',
      subtitle: 'Comece grátis e faça upgrade quando precisar. Cancele quando quiser.',
      mostPopular: 'Mais popular',
      plans: [
        {
          name: 'Grátis',
          period: 'grátis para sempre',
          desc: 'Experimente o poder do CutGenius sem compromisso.',
          features: [
            '30 minutos de processamento por mês',
            'Clipes curtos automáticos',
            'Legendas automáticas básicas',
            'Marca d’água nos clipes',
          ],
          cta: 'Comece grátis',
        },
        {
          name: 'Básico',
          period: 'por mês',
          desc: 'Ideal para criadores de conteúdo individuais.',
          features: [
            '150 minutos de processamento por mês',
            'Sem marca d’água',
            'Legendas automáticas precisas',
            'Exportação em 1080p',
            'Suporte por e-mail',
          ],
          cta: 'Assine agora',
        },
        {
          name: 'Pro',
          period: 'por mês',
          desc: 'Para equipes, agências e criadores profissionais.',
          features: [
            'Minutos de processamento ilimitados',
            'Recursos de IA avançados',
            'Sua própria marca nos clipes',
            'Exportação em 4K',
            'Agendamento de publicação automática',
            'Suporte prioritário',
          ],
          cta: 'Assine agora',
        },
      ],
    },
    footer: {
      ctaTitle: 'Pronto para transformar seus vídeos em clipes virais?',
      ctaSubtitle:
        'Junte-se a milhares de criadores que economizam tempo com o CutGenius. Comece grátis hoje.',
      cta: 'Iniciar teste grátis',
      terms: 'Termos',
      privacy: 'Privacidade',
      contact: 'Fale conosco',
      rights: 'Todos os direitos reservados.',
    },
  },
  FR: {
    nav: { howItWorks: 'Comment ça marche', pricing: 'Tarifs', features: 'Fonctionnalités' },
    header: {
      login: 'Se connecter',
      startFree: 'Commencer gratuitement',
      selectLanguage: 'Choisir la langue',
      availableLanguages: 'Langues disponibles',
    },
    hero: {
      badge: 'Propulsé par l’IA — plus de 100 000 clips générés',
      titlePrefix: 'Transformez de longues vidéos en ',
      titleHighlight: 'Reels et TikToks viraux',
      titleSuffix: ' instantanément grâce à l’IA',
      subtitle:
        'Importez votre vidéo ou collez un lien YouTube, et laissez l’IA repérer les meilleurs moments et les découper en clips verticaux prêts à publier — avec des sous-titres automatiques précis.',
      tabUpload: 'Importer une vidéo',
      tabYoutube: 'Lien YouTube',
      dropText: 'Glissez votre vidéo ici ou cliquez pour choisir',
      dropFormats: 'MP4, MOV, WEBM — jusqu’à 2 Go',
      ytLabel: 'Collez le lien de la vidéo YouTube',
      ytPlaceholder: 'https://youtube.com/watch?v=...',
      cta: 'Commencer l’essai gratuit',
      note: 'Aucune carte bancaire requise · Résultats en quelques minutes',
    },
    how: {
      eyebrow: 'Comment ça marche',
      title: 'Trois étapes simples vers des clips viraux',
      subtitle:
        'D’une longue vidéo à une bibliothèque complète de clips courts, sans compétences de montage.',
      steps: [
        {
          title: 'Importez la vidéo ou collez le lien',
          desc: 'Importez votre fichier vidéo directement ou collez un lien YouTube : nous prenons en charge tous les formats courants et toute durée.',
        },
        {
          title: 'L’IA analyse et découpe automatiquement',
          desc: 'Notre système détecte les moments forts et les phrases accrocheuses et découpe la vidéo en clips verticaux courts.',
        },
        {
          title: 'Téléchargez des clips prêts avec sous-titres',
          desc: 'Obtenez des clips parfaitement verticaux pour Reels, TikTok et Shorts avec des sous-titres automatiques prêts à publier.',
        },
      ],
    },
    features: {
      eyebrow: 'Fonctionnalités',
      title: 'Tout ce qu’il vous faut pour créer du contenu court viral',
      items: [
        {
          title: 'Découpe intelligente automatique',
          desc: 'L’IA repère les moments les plus captivants et les transforme en clips indépendants.',
        },
        {
          title: 'Sous-titres en plus de 30 langues',
          desc: 'Sous-titres automatiques précis avec un style professionnel prêt à publier.',
        },
        {
          title: 'Optimisé pour l’algorithme',
          desc: 'Cadrage vertical et accroches percutantes conçus pour augmenter vues et engagement.',
        },
        {
          title: 'Résultats en quelques minutes',
          desc: 'Économisez des heures de montage manuel et obtenez rapidement une bibliothèque de clips.',
        },
        {
          title: 'Entièrement dans le cloud',
          desc: 'Travaillez depuis n’importe quel appareil et navigateur sans logiciel lourd à installer.',
        },
        {
          title: 'Export haute qualité',
          desc: 'Exportez vos clips jusqu’en 4K avec une qualité parfaite pour chaque plateforme.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Tarifs',
      title: 'Des offres simples pour chaque créateur',
      subtitle: 'Commencez gratuitement et évoluez quand vous en avez besoin. Annulez à tout moment.',
      mostPopular: 'Le plus populaire',
      plans: [
        {
          name: 'Gratuit',
          period: 'gratuit pour toujours',
          desc: 'Découvrez la puissance de CutGenius sans engagement.',
          features: [
            '30 minutes de traitement par mois',
            'Clips courts automatiques',
            'Sous-titres automatiques de base',
            'Filigrane sur les clips',
          ],
          cta: 'Commencer gratuitement',
        },
        {
          name: 'Basique',
          period: 'par mois',
          desc: 'Idéal pour les créateurs de contenu individuels.',
          features: [
            '150 minutes de traitement par mois',
            'Sans filigrane',
            'Sous-titres automatiques précis',
            'Export en 1080p',
            'Assistance par e-mail',
          ],
          cta: 'S’abonner',
        },
        {
          name: 'Pro',
          period: 'par mois',
          desc: 'Pour les équipes, agences et créateurs professionnels.',
          features: [
            'Minutes de traitement illimitées',
            'Fonctionnalités IA avancées',
            'Votre propre marque sur les clips',
            'Export en 4K',
            'Planification de publication automatique',
            'Assistance prioritaire',
          ],
          cta: 'S’abonner',
        },
      ],
    },
    footer: {
      ctaTitle: 'Prêt à transformer vos vidéos en clips viraux ?',
      ctaSubtitle:
        'Rejoignez des milliers de créateurs qui gagnent du temps avec CutGenius. Commencez gratuitement dès aujourd’hui.',
      cta: 'Commencer l’essai gratuit',
      terms: 'Conditions',
      privacy: 'Confidentialité',
      contact: 'Nous contacter',
      rights: 'Tous droits réservés.',
    },
  },
  DE: {
    nav: { howItWorks: 'So funktioniert’s', pricing: 'Preise', features: 'Funktionen' },
    header: {
      login: 'Anmelden',
      startFree: 'Kostenlos starten',
      selectLanguage: 'Sprache wählen',
      availableLanguages: 'Verfügbare Sprachen',
    },
    hero: {
      badge: 'KI-gestützt — über 100.000 Clips erstellt',
      titlePrefix: 'Verwandle lange Videos in ',
      titleHighlight: 'virale Reels und TikToks',
      titleSuffix: ' — sofort mit KI',
      subtitle:
        'Lade dein Video hoch oder füge einen YouTube-Link ein und lass die KI die besten Momente finden und in kurze vertikale Clips schneiden, die bereit zum Posten sind — mit präzisen Auto-Untertiteln.',
      tabUpload: 'Video hochladen',
      tabYoutube: 'YouTube-Link',
      dropText: 'Ziehe dein Video hierher oder klicke zum Auswählen',
      dropFormats: 'MP4, MOV, WEBM — bis zu 2 GB',
      ytLabel: 'Füge den YouTube-Videolink ein',
      ytPlaceholder: 'https://youtube.com/watch?v=...',
      cta: 'Kostenlos testen',
      note: 'Keine Kreditkarte nötig · Ergebnisse in Minuten',
    },
    how: {
      eyebrow: 'So funktioniert’s',
      title: 'Drei einfache Schritte zu viralen Clips',
      subtitle:
        'Von einem langen Video zu einer kompletten Bibliothek kurzer Clips — ganz ohne Schnittkenntnisse.',
      steps: [
        {
          title: 'Video hochladen oder Link einfügen',
          desc: 'Lade deine Videodatei direkt hoch oder füge einen YouTube-Link ein — wir unterstützen alle gängigen Formate und jede Länge.',
        },
        {
          title: 'Die KI analysiert und schneidet automatisch',
          desc: 'Unser System erkennt die stärksten Momente und einprägsamen Sätze und teilt das Video in kurze vertikale Clips.',
        },
        {
          title: 'Fertige Clips mit Untertiteln herunterladen',
          desc: 'Erhalte perfekt vertikale Clips für Reels, TikTok und Shorts mit Auto-Untertiteln, bereit zum Veröffentlichen.',
        },
      ],
    },
    features: {
      eyebrow: 'Funktionen',
      title: 'Alles, was du für virale Kurzvideos brauchst',
      items: [
        {
          title: 'Intelligenter Auto-Schnitt',
          desc: 'Die KI erkennt die fesselndsten Momente und macht daraus eigenständige Clips.',
        },
        {
          title: 'Untertitel in über 30 Sprachen',
          desc: 'Präzise Auto-Untertitel mit professionellem Stil, bereit zum Veröffentlichen.',
        },
        {
          title: 'Für den Algorithmus optimiert',
          desc: 'Vertikale Formate und packende Hooks, um Aufrufe und Interaktion zu steigern.',
        },
        {
          title: 'Ergebnisse in Minuten',
          desc: 'Spare Stunden manueller Bearbeitung und erhalte schnell eine ganze Clip-Bibliothek.',
        },
        {
          title: 'Vollständig cloudbasiert',
          desc: 'Arbeite von jedem Gerät und Browser aus, ohne schwere Software zu installieren.',
        },
        {
          title: 'Export in hoher Qualität',
          desc: 'Exportiere deine Clips bis zu 4K in perfekter Qualität für jede Plattform.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Preise',
      title: 'Einfache Tarife für jeden Creator',
      subtitle: 'Starte kostenlos und upgrade bei Bedarf. Jederzeit kündbar.',
      mostPopular: 'Am beliebtesten',
      plans: [
        {
          name: 'Kostenlos',
          period: 'für immer kostenlos',
          desc: 'Teste die Power von CutGenius ganz unverbindlich.',
          features: [
            '30 Verarbeitungsminuten pro Monat',
            'Automatische Kurzclips',
            'Einfache Auto-Untertitel',
            'Wasserzeichen auf den Clips',
          ],
          cta: 'Kostenlos starten',
        },
        {
          name: 'Basic',
          period: 'pro Monat',
          desc: 'Ideal für einzelne Content-Creator.',
          features: [
            '150 Verarbeitungsminuten pro Monat',
            'Ohne Wasserzeichen',
            'Präzise Auto-Untertitel',
            'Export in 1080p',
            'E-Mail-Support',
          ],
          cta: 'Jetzt abonnieren',
        },
        {
          name: 'Pro',
          period: 'pro Monat',
          desc: 'Für Teams, Agenturen und Profi-Creator.',
          features: [
            'Unbegrenzte Verarbeitungsminuten',
            'Erweiterte KI-Funktionen',
            'Dein eigenes Branding auf den Clips',
            'Export in 4K',
            'Automatische Veröffentlichungsplanung',
            'Priorisierter Support',
          ],
          cta: 'Jetzt abonnieren',
        },
      ],
    },
    footer: {
      ctaTitle: 'Bereit, deine Videos in virale Clips zu verwandeln?',
      ctaSubtitle:
        'Schließe dich Tausenden Creatorn an, die mit CutGenius Zeit sparen. Starte heute kostenlos.',
      cta: 'Kostenlos testen',
      terms: 'AGB',
      privacy: 'Datenschutz',
      contact: 'Kontakt',
      rights: 'Alle Rechte vorbehalten.',
    },
  },
}
