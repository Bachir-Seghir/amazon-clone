module.exports = {
    extends: ['react-app'],
    rules: {
        'jsx-a11y/anchor-is-valid': [
        'error',
        {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
        },
        ]},
};