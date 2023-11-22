/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
        styledComponents: Boolean | {
            // Enabled by default in development, disabled in production to reduce file size,
            // setting this will override the default for all environments.
            displayName: Boolean,
            // Enabled by default.
            ssr: Boolean,
            // Enabled by default.
            fileName: Boolean,
            // Empty by default.
            topLevelImportPaths: String,
            // Defaults to ["index"].
            meaninglessFileNames: String,
            // Enabled by default.
            cssProp: Boolean,
            // Empty by default.
            namespace: String,
            // Not supported yet.
            minify: Boolean,
            // Not supported yet.
            transpileTemplateLiterals: Boolean,
            // Not supported yet.
            pure: Boolean,
        }
    }
};

module.exports = nextConfig;
