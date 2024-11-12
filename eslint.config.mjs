import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginJs.configs.recommended,
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
    },
  },
];
