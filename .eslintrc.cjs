module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'standard-with-typescript',
		'plugin:react/recommended',
		'plugin:i18next/recommended',
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:storybook/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}', '**/src/**/*.{test,stories}.{ts,tsx}'],
			rules: {'i18next/no-literal-string': 'off', 'max-length': 'off'},
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'i18next', '@typescript-eslint', 'react-hooks'],
	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		'no-unused-vars': 'warn',
		'no-tabs': ['error', {allowIndentationTabs: true}],
		'array-bracket-spacing': ['error', 'never'],
		'object-curly-spacing': ['error', 'never'],
		'no-shadow': 'off',
		'import-extensions': 'off',
		'no-underscore-dangle': 'off',
		'react/jsx-key': 1,
		'react/jsx-pascal-case': 2,
		'react/no-deprecated': 1,
		'react/no-danger': 1,
		'react/react-in-jsx-scope': 'off',
		'react/button-has-type': 'error',
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		// 'react/require-default-props': 'off',
		// 'react/require-render-return': 'off',
		// 'react/require-optimization': 'off',
		// 'react/jsx-indent-spacing': ['error', 'never'],
		// 'react/jsx-indent': ['error', 'never'],
		'@typescript-eslint/semi': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/object-curly-spacing': ['error', 'never'],
		'@typescript-eslint/func-call-spacing': ['error', 'never'],
		'@typescript-eslint/indent': ['error', 'tab'],
		// "@typescript-eslint/comma-dangle": ["error", "always"],
		'@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'comma',
					requireLast: true,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false,
				},
			},
		],
		'jsx-quotes': ['error', 'prefer-double'],
		'i18next/no-literal-string': ['error', {markupOnly: true, ignoreAttributes: true}],
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
		// Дополнительные правила для прочих случаев
	},
	globals: {
		__IS_DEV__: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
