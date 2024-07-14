const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,mjs,ts,tsx}': [buildEslintCommand, 'prettier --write'],
  '*.css': ['stylelint --fix', 'prettier --write'],
  '*.{json,mdx}': 'prettier --write --ignore-unknown',
};
