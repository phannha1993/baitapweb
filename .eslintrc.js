module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2021: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        requireConfigFile: false,
        sourceType: 'module',
        ecmaVersion: 2021, // hoặc phiên bản ES của bạn
    },
    plugins: ['vue'],
    
    extends: ['eslint:recommended', 'prettier'],
};
