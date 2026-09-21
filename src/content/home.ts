export interface HomeFeature {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    buttonColor: string;
    phonePosition: 'left' | 'right';
    phoneTooltip: string;
}

export interface HomeFaq {
    id: number;
    question: string;
    answer: string;
}

export const appDescription =
    'ANCRAR is an app designed to help users understand and memorize Spanish verb conjugations through a card-game-style system, making it the ideal complement to any study method. Its approach simplifies one of the most challenging aspects of the language, allowing a more natural and effective learning experience for students, travelers, professionals, and multicultural companies, while building confidence throughout the process.';

export const titleOptions: string[] = [
    'Master Spanish verb conjugations with Ancrar: learn through play.',
    'An interactive app to practice Spanish verbs in a fun and effective way.',
    'Tool for multicultural teams to improve their Spanish skills.',
];

export const keywords: string[] = [
    'learn Spanish verbs',
    'practice Spanish conjugations',
    'Spanish learning app',
    'learn Spanish by playing',
    'Spanish verb conjugation practice',
    'app to practice Spanish for beginners',
    'interactive Spanish learning exercises',
    'Spanish learning app for companies',
    'practice Spanish tenses',
    'app to learn Spanish verb conjugations',
    'Spanish training for multicultural teams',
];

export const features: HomeFeature[] = [
    {
        id: 1,
        title: 'Tense-based training',
        description:
            'Practice the most relevant Spanish tenses. Choose your focus and set the duration of each session: 5, 10, or 15 minutes.',
        buttonText: 'Practice Spanish tenses',
        buttonColor: '#54BCAC',
        phonePosition: 'right',
        phoneTooltip: 'Choose your focus',
    },
    {
        id: 2,
        title: 'Visual and progressive explanations',
        description: 'Understand how each conjugation works before memorizing it.',
        buttonText: 'Understand first',
        buttonColor: '#AC7CDC',
        phonePosition: 'left',
        phoneTooltip: 'Learn step by step',
    },
    {
        id: 3,
        title: 'Clear and intuitive design',
        description: 'A clean, distraction-free interface with no ads.',
        buttonText: 'Learn distraction-free',
        buttonColor: '#54BCAC',
        phonePosition: 'right',
        phoneTooltip: 'No ads, no distractions',
    },
    {
        id: 4,
        title: 'Compatible with any learning method',
        description:
            'Use it alongside classes, self-study, or immersion experiences.',
        buttonText: 'Use your method',
        buttonColor: '#AC7CDC',
        phonePosition: 'left',
        phoneTooltip: 'Learn your way',
    },
    {
        id: 5,
        title: '1-on-1 multiplayer mode',
        description:
            'Challenge other users in real-time matches using a personalized code.',
        buttonText: 'Challenge a player',
        buttonColor: '#54BCAC',
        phonePosition: 'right',
        phoneTooltip: 'Play in real time',
    },
    {
        id: 6,
        title: 'Progress tracking',
        description:
            'Access detailed statistics to monitor your performance and improve with every session.',
        buttonText: 'Track your progress',
        buttonColor: '#AC7CDC',
        phonePosition: 'left',
        phoneTooltip: 'Improve every session',
    },
    {
        id: 7,
        title: 'Role management',
        description:
            'Track team progress with differentiated administrator and student profiles.',
        buttonText: 'Track team progress',
        buttonColor: '#54BCAC',
        phonePosition: 'right',
        phoneTooltip: 'Built for learning teams',
    },
];

export const faqs: HomeFaq[] = [
    {
        id: 1,
        question: 'Why the name "Ancrar"?',
        answer:
            'A new language can feel like an immense and unknown ocean, where an anchor is essential for finding stability. "Ancrar" is a made-up verb created with a single purpose: to help you "anchor" Spanish conjugations in your memory, turning one of the most complex aspects of the language into something accessible and fun.',
    },
    {
        id: 2,
        question: 'How is Ancrar different from other apps?',
        answer:
            'Unlike other platforms, Ancrar focuses exclusively on understanding and internalizing verb conjugations through a "card style game" system, designed for quick and effective practice sessions.',
    },
    {
        id: 3,
        question: 'Does the app replace a teacher or other learning methods?',
        answer:
            'No. Ancrar is meant to complement your learning, not replace it. Its purpose is to strengthen your foundation in grammar, helping you progress faster and with greater confidence.',
    },
    {
        id: 4,
        question: 'Do I need prior knowledge of Spanish to use Ancrar?',
        answer:
            'Not necessarily, but it is recommended. The app works best when combined with a parallel learning method, such as classes, language exchanges, or other resources, so you can maximize its potential.',
    },
    {
        id: 5,
        question: 'Is it recommended to use Ancrar alongside other language-learning apps?',
        answer:
            "Ancrar doesn't replace those apps, it enhances them. While other platforms focus on vocabulary and phrases in context, Ancrar helps you master conjugations, giving you more confidence when speaking and writing.",
    },
    {
        id: 6,
        question: 'How much time should I use Ancrar each day?',
        answer:
            'Just 5 to 15 minutes a day is enough. The short, focused sessions are designed to help you make consistent progress without feeling like a heavy or boring task.',
    },
    {
        id: 7,
        question: 'Does Ancrar have ads?',
        answer:
            "No. Ancrar is designed to keep your learning distraction-free, so you won't find any ads interrupting your practice.",
    },
    {
        id: 8,
        question: "What's the difference between the individual plan and the business (B2B) plan?",
        answer:
            'The individual plan is designed for students who want to practice on their own, while the business plan is tailored for multicultural teams, companies, or institutions that need to train multiple users and track their progress.',
    },
    {
        id: 9,
        question: 'Why is the business plan more expensive per user?',
        answer:
            'Because it includes exclusive features for organizations, such as individual and group progress tracking, allowing administrators and team leaders to better manage and optimize learning outcomes.',
    },
    {
        id: 10,
        question: 'How can a company access the service?',
        answer:
            'Companies can subscribe directly through the website or the app, where they will find both the terms and conditions and the standard contract for businesses. If your organization requires special conditions or customization, contact ancrarproject@gmail.com to coordinate a tailored proposal.',
    },
    {
        id: 11,
        question: 'Can I try the app before paying?',
        answer:
            'Yes. We offer a 7-day free trial so you can explore all the features and see if Ancrar fits your needs before committing to a paid plan.',
    },
    {
        id: 12,
        question: 'What do I need to use Ancrar?',
        answer:
            'You can use Ancrar on iOS or Android phones and tablets. All you need is a stable internet connection and a free account to start your 7-day trial.',
    },
];
