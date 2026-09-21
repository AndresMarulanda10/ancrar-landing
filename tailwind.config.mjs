/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                appAccent: '#142C3C',
                appBody: '#F4F4F4',
                appText: '#142C3C',
                appGray: {
                    100: '#F4F4F4',
                    200: '#D1D5DB',
                    300: '#9CA3AF',
                    400: '#6B7280',
                    500: '#4B5563',
                    600: '#334155',
                    700: '#142C3C',
                },
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1.5rem',
                    lg: '2rem',
                },
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    '2xl': '1440px',
                },
            },
            fontFamily: {
                Helvetica: ['Helvetica', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
