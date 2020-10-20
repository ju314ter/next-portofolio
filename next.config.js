const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withCSS(withSass({
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        });

        return config;
    }
}));