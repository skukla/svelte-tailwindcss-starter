module.exports = {
    purge: {
        mode: 'all',
        content: ['./**/**/*.html', './**/**/*.svelte'],

        options: {
            whitelistPatterns: [/svelte-/],
            defaultExtractor: (content) =>
                [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
        },
    },

    theme: {
        extend: {
            colors: {
                jet: {
                    100: '#4c4c4c',
                    200: '#3c3c3c',
                    300: '#2c2c2c',
                    400: '#252526',
                    500: '#1e1e1e'
                },
                platinum: {
                    100: '#f0f0f0',
                    200: '#e7e7e7',
                },
                sapphire: {
                    100: '#5cc0ff',
                    200: '#007ecc',
                    300: '#0063a1'
                },
                maize: {
                    100: '#dcba73'
                }
            },
            width: {
                '72': '20rem'
            },
            lineHeight: {
                '12': '3.8rem'
            }
        }
    },
    variants: {},
    plugins: [
        require("tailwindcss"), 
        require('@tailwindcss/ui')
    ],
    future: {
        // purgeLayersByDefault: true,
        // removeDeprecatedGapUtilities: true,
    },
};
