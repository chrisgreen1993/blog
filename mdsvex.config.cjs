const path = require('path');

const postLayoutPath = path.join(__dirname, './src/lib/PostLayout.svelte');

module.exports = {
	extensions: ['.svelte.md'],
	layout: postLayoutPath,
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [require('remark-abbr')],
	rehypePlugins: [require('rehype-slug')]
};
