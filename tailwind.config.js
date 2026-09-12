module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    corePlugins: {preflight: true},
    theme: {
        extend: { fontFamily: {headline: "var(--headline-font-family)"}},

    },
    plugins: [],
};