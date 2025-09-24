import { removeExtension } from '$lib/utils';

export async function load() {
	const posts = import.meta.glob('./*.svelte.md', { eager: true });
	const sortedPosts = Object.entries(posts)
		.map(([filename, { metadata }]) => ({
			...metadata,
			url: removeExtension(filename, '.svelte.md'),
			date: metadata.date
		}))
		.filter(({ draft }) => !draft)
		.sort((a, b) => -a.date.localeCompare(b.date));
	return { posts: sortedPosts };
}
