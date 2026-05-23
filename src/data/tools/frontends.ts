import type { Category } from '@/types/tools';

export const frontends: Category[] = [
  {
    id: 'local-frontend',
    title: {
      en: 'Local Frontend',
      id: 'Frontend Lokal',
      es: 'Frontend Local',
      tl: 'Lokal na Frontend',
      vi: 'Frontend Cục bộ',
      'pt-BR': 'Frontend Local',
      ko: '로컬 프론트엔드',
      'zh-TW': '本地前端',
      'zh-CN': '本地前端',
      ja: 'ローカルフロントエンド',
      ar: 'واجهة أمامية محلية',
    },
    items: [
      {
        name: 'SillyTavern',
        url: 'https://docs.sillytavern.app/installation/',
        tags: [],
        extraLinks: [
          {
            label: 'Github',
            url: 'https://github.com/SillyTavern/SillyTavern',
          },
          {
            label: 'Discord',
            url: 'https://discord.gg/sillytavern',
          },
          {
            label: 'Docs',
            url: 'https://docs.sillytavern.app/',
          },
          {
            label: 'Donation',
            url: 'https://docs.sillytavern.app/#personal-donations',
          },
        ],
      },
      {
        name: 'TauriTavern',
        url: 'https://tauritavern.github.io/en/downloads/',
        tags: ['starred'],
        description: {
          en: 'Sillytavern fork(?) + Rust. Have APK, IPA and others.',
          id: 'Fork SillyTavern (?) + Rust. Tersedia APK, IPA, dan lainnya.',
          es: 'Fork de SillyTavern (?) + Rust. Disponible en APK, IPA y otros.',
          tl: 'Fork ng SillyTavern (?) + Rust. May APK, IPA, at iba pa.',
          vi: 'Fork SillyTavern (?) + Rust. Có APK, IPA và các định dạng khác.',
          'pt-BR': 'Fork do SillyTavern (?) + Rust. Disponível em APK, IPA e outros.',
          ko: 'SillyTavern 포크(?) + Rust. APK, IPA 등 제공.',
          'zh-TW': 'SillyTavern 分支(?) + Rust。提供 APK、IPA 等格式。',
          'zh-CN': 'SillyTavern 分支(?) + Rust。提供 APK、IPA 等格式。',
          ja: 'SillyTavern のフォーク(?) + Rust。APK、IPA などを用意。',
          ar: 'نسخة مشتقة من SillyTavern (?) + Rust. متوفر بصيغ APK و IPA وغيرها.',
        },
        extraLinks: [
          {
            label: 'Github',
            url: 'https://github.com/Darkatse/TauriTavern',
          },
          {
            label: 'Docs',
            url: 'https://tauritavern.github.io/en/',
          },
        ],
      },
      {
        name: 'RisuAI',
        url: 'https://risuai.net/',
        tags: [],
        extraLinks: [
          {
            label: 'Github',
            url: 'https://github.com/kwaroran/RisuAI',
          },
          {
            label: 'Discord',
            url: 'https://discord.com/invite/Exy3NrqkGm',
          },
          {
            label: 'Patreon',
            url: 'https://patreon.com/RisuAI',
          },
        ],
      },
      {
        name: 'LettuceAI',
        url: 'https://www.lettuceai.app/download',
        tags: [],
        extraLinks: [
          {
            label: 'Github',
            url: 'https://github.com/LettuceAI',
          },
          {
            label: 'Discord',
            url: 'https://discord.gg/745bEttw2r)',
          },
        ],
        description: {
          en: "Watching this with great interest, The dev is so diligent. 1 person yet improve so fast + guided onboarding, it's clear the dev love the user. Native app for Android, Windows, macOS, Linux. ",
          id: 'Memperhatikan ini dengan sangat tertarik, pengembangnya sangat rajin. Hanya 1 orang tapi berkembang sangat cepat + panduan awal, jelas bahwa pengembang peduli pada pengguna. Aplikasi native untuk Android, Windows, macOS, Linux.',
          es: 'Siguiendo esto con gran interés, el desarrollador es muy diligente. Una sola persona y mejora tan rápido + incorporación guiada, está claro que el desarrollador ama al usuario. Aplicación nativa para Android, Windows, macOS, Linux.',
          tl: 'Pinagmamasdan ito nang may malaking interes, napakasipag ng dev. 1 tao lang pero napakabilis ng pag-unlad + guided onboarding, malinaw na mahal ng dev ang user. Native app para sa Android, Windows, macOS, Linux.',
          vi: 'Theo dõi dự án này với sự quan tâm lớn, nhà phát triển rất tận tụy. Chỉ 1 người nhưng cải tiến rất nhanh + hướng dẫn sử dụng chi tiết, rõ ràng là nhà phát triển rất tâm huyết với người dùng. Ứng dụng gốc cho Android, Windows, macOS, Linux.',
          'pt-BR':
            'Acompanhando com grande interesse, o dev é muito diligente. Apenas 1 pessoa, mas melhora muito rápido + integração guiada, está claro que o dev ama o usuário. Aplicativo nativo para Android, Windows, macOS, Linux.',
          ko: '큰 관심을 가지고 지켜보고 있습니다. 개발자가 정말 성실하네요. 1인 개발임에도 개선 속도가 매우 빠르고 친절한 온보딩까지 갖춰져 있어, 개발자의 사용자 애정이 느껴집니다. Android, Windows, macOS, Linux용 네이티브 앱을 지원합니다.',
          'zh-TW':
            '持續高度關注中，開發者非常勤奮。雖然只有一個人但進步神速，加上引導式教學，顯然開發者非常在意使用者。支援 Android、Windows、macOS、Linux 的原生應用程式。',
          'zh-CN':
            '持续高度关注中，开发者非常勤奮。虽然只有一个人但进步神速，加上引导式教學，显然开发者非常在意用户。支持 Android、Windows、macOS、Linux 的原生应用程序。',
          ja: '非常に興味深く注視しています。開発者がとても勤勉です。たった1人なのに改善が非常に早く、ガイド付きのオンボーディングもあり、開発者のユーザー愛が伝わってきます。Android、Windows、macOS、Linux用のネイティブアプリです。',
          ar: 'أتابع هذا باهتمام كبير، المطور مجتهد للغاية. شخص واحد ومع ذلك يتطور بسرعة كبيرة + توجيه للمستخدمين الجدد، من الواضح أن المطور يحب المستخدم. تطبيق أصلي لأنظمة Android و Windows و macOS و Linux.',
        },
      },
      {
        name: 'Aventuras',
        url: 'https://github.com/AventurasTeam/Aventuras/releases',
        extraLinks: [
          {
            label: 'Discord',
            url: 'https://discord.gg/aventuras',
          },
        ],
        description: {
          en: 'Text Adventure focus, easier setup in some way (compared ST), Native apps for Android, Linux, Windows, mac',
          id: 'Fokus pada Petualangan Teks, pengaturan lebih mudah (dibandingkan ST), Aplikasi asli untuk Android, Linux, Windows, mac',
          es: 'Enfoque en aventuras de texto, configuración más sencilla (comparado con ST), aplicaciones nativas para Android, Linux, Windows, mac',
          tl: 'Focus sa Text Adventure, mas madaling i-setup (kumpara sa ST), Native na mga app para sa Android, Linux, Windows, mac',
          vi: 'Tập trung vào phiêu lưu văn bản, thiết lập dễ dàng hơn (so với ST), ứng dụng gốc cho Android, Linux, Windows, mac',
          'pt-BR':
            'Foco em aventuras de texto, configuração mais fácil (comparada ao ST), aplicativos nativos para Android, Linux, Windows, mac',
          ko: '텍스트 어드벤처 중심, 더 쉬운 설정(ST 대비), Android, Linux, Windows, mac용 네이티브 앱',
          'zh-TW':
            '專注於文字冒險，設定更簡單（與 ST 相比），提供 Android、Linux、Windows、mac 原生應用程式',
          'zh-CN':
            '专注于文字冒险，设置更简单（与 ST 相比），提供 Android、Linux、Windows、mac 原生应用',
          ja: 'テキストアドベンチャーに特化、STより簡単な設定、Android、Linux、Windows、mac用ネイティブアプリ',
          ar: 'تركيز على مغامرات النصوص، إعداد أسهل (مقارنة بـ ST)، تطبيقات أصلية لأنظمة Android و Linux و Windows و mac',
        },
      },
    ],
  },
  {
    id: 'cloud-frontend',
    title: {
      en: 'Cloud Frontend',
      id: 'Frontend Cloud',
      es: 'Frontend en la Nube',
      tl: 'Cloud Frontend',
      vi: 'Frontend Đám Mây',
      'pt-BR': 'Frontend na Nuvem',
      ko: '클라우드 프론트엔드',
      'zh-TW': '雲端前端',
      'zh-CN': '云端前端',
      ja: 'クラウドフロントエンド',
      ar: 'واجهة أمامية سحابية',
    },
    note: {
      en: 'When using cloud platforms, assume the devs can see all your chat logs and consider if you are comfortable with that. Use local frontend if you prefer privacy.',
      id: 'Saat menggunakan platform cloud, asumsikan pengembang dapat melihat semua log chat Anda. Gunakan frontend lokal jika Anda mengutamakan privasi.',
      es: 'Al usar plataformas en la nube, asuma que los desarrolladores pueden ver todos sus registros de chat. Use el frontend local si prefiere la privacidad.',
      tl: 'Kapag gumagamit ng cloud platforms, asahan na nakikita ng mga dev ang lahat ng chat logs mo. Gamitin ang local frontend kung mas gusto mo ang privacy.',
      vi: 'Khi sử dụng các nền tảng đám mây, hãy giả định rằng các nhà phát triển có thể xem tất cả nhật ký trò chuyện của bạn. Sử dụng frontend cục bộ nếu bạn muốn quyền riêng tư.',
      'pt-BR':
        'Ao usar plataformas na nuvem, assuma que os desenvolvedores podem ver todos os seus logs de chat. Use o frontend local se preferir privacidade.',
      ko: '클라우드 플랫폼을 사용할 경우 개발자가 모든 채팅 로그를 볼 수 있다고 가정하고 이를 고려하십시오. 개인정보 보호를 원하시면 로컬 프론트엔드를 사용하세요.',
      'zh-TW':
        '當使用雲端平台時，請假設開發者可以看到您所有的聊天記錄。如果您注重隱私，請使用本地前端。',
      'zh-CN':
        '使用云端平台时，请假设开发人员可以看到您的所有聊天记录。如果您注重隐私，请使用本地前端。',
      ja: 'クラウドプラットフォームを使用する場合、開発者がすべてのチャットログを確認できることを前提として検討してください。プライバシーを重視する場合はローカルフロントエンドを使用してください。',
      ar: 'عند استخدام المنصات السحابية، افترض أن المطورين يمكنهم رؤية جميع سجلات الدردشة الخاصة بك. استخدم الواجهة الأمامية المحلية إذا كنت تفضل الخصوصية.',
    },
    items: [
      {
        name: 'janitor',
        url: 'https://janitorai.com/',
        tags: [],
      },
      {
        name: 'Saucepan',
        url: 'https://saucepan.ai/',
        tags: [],
      },
    ],
  },
];
