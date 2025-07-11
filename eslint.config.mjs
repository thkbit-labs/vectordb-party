// @ts-check
import eslintConfigPrettier from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  perfectionist.configs["recommended-natural"],
  {
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          environment: "bun",
        },
      ],
      "vue/attributes-order": ["error"],
    },
  },
  eslintConfigPrettier
);
