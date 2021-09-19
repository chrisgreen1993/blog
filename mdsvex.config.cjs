const path = require('path');

const postLayoutPath = path.join(__dirname, './src/lib/PostLayout.svelte');

module.exports = {
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: postLayoutPath,
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [
		[
			require('remark-github'),
			{
				// Use your own repository
				repository: 'https://github.com/svelte-add/mdsvex.git'
			}
		],
		require('remark-abbr')
	],
	rehypePlugins: [
		require('rehype-slug')
	]
};
