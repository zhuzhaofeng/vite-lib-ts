module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    semi: [2, 'always'], // 末尾分号
    quotes: [2, 'single'], // 使用单引号
    'linebreak-style': 'off', // 忽略检测换行风格
    // 过滤掉配置文件
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['vite.config.ts'] },
    ],
  },
};
