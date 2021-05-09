<script context="module">
	export async function load() {
		const posts = import.meta.globEager(`./*.svelte.md`);
		const sortedPosts = Object.entries(posts)
			.map(([name, { metadata }]) => ({
				...metadata,
				url: name.slice(0, -10),
				date: new Date(metadata.date)
			}))
			.sort((a, b) => b.date - a.date);
		return { props: { posts: sortedPosts } };
	}
</script>

<script>
	export let posts;
</script>

<h1>Welcome to my blog</h1>
{#each posts as { url, title }}
	<p><a href={url}>{title}</a></p>
{/each}
