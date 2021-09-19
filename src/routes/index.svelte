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

<h1>chrisgreen.codes</h1>
<p>Hey there! I'm Chris, a software engineer based in Edinburgh.</p>

<ul>
	{#each posts as { url, title, date }}
		<li>{date.toISOString().slice(0, 10)} - <a href={url}>{title}</a></li>
	{/each}
</ul>

<style>
	h1 {
		color: var(--color-primary);
	}
</style>
