console.log('######### yes prod config for webpack called !!!!');
const {merge} = require('webpack-merge');
const ModuleFederationPlugin= require('webpack/lib/container/ModuleFederationPlugin'); 
const commonConfig = require('./webpack.common');
const packageJson= require('../package.json');
const domain= process.env.PRODUCTION_DOMAIN;
console.log('marketing app => domain ', domain);

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: "https://mfe-marketing.herokuapp.com/dist/",
        // publicPath: "http://localhost:5000/dist/"
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports= merge(commonConfig, prodConfig);

