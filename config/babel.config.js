module.exports = {
    cacheDirectory: true,
    babelrc: false,
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                useBuiltIns: 'entry'
            }
        ]
    ]
};
