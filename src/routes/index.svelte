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
	import BlinkingCaret from '$lib/BlinkingCaret.svelte'
	export let posts;
</script>

<svelte:head>
	<title>chrisgreen.codes</title>
</svelte:head>

<h1>chrisgreen.codes<BlinkingCaret /></h1>
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
