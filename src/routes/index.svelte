<script context="module">
	import { removeExtension, formatISO8601 } from '$lib/utils';

	export async function load() {
		const posts = import.meta.globEager(`./*.svelte.md`);
		const sortedPosts = Object.entries(posts)
			.map(([filename, { metadata }]) => ({
				...metadata,
				url: removeExtension(filename, '.svelte.md'),
				date: metadata.date
			}))
			.filter(({ draft }) => !draft)
			.sort((a, b) => -a.date.localeCompare(b.date));
		return { props: { posts: sortedPosts } };
	}
</script>

<script>
	import BlinkingCaret from '$lib/BlinkingCaret.svelte';
	export let posts;
</script>

<svelte:head>
	<title>chrisgreen.codes</title>
</svelte:head>

<h1>chrisgreen.codes<BlinkingCaret /></h1>
<p>
	Hey there! I'm Chris, a software engineer based in Edinburgh.
	<br />
	These days I'm mostly writing JavaScript (React Native) and Clojure at
	<a href="https://hellorelish.com">Relish</a>.
	<br />
	As you can tell this site is pretty bare at the minute, but you can check out my
	<a href="https://github.com/chrisgreen1993">Github</a>
	or shoot me an <a href="mailto:chrisgreen1993@gmail.com">email</a> in the meantime.
</p>

{#if posts.length}
	<h2>Posts</h2>
{/if}
<ul>
	{#each posts as { url, title, date }}
		<li>{formatISO8601(date)} - <a href={url}>{title}</a></li>
	{/each}
</ul>

<style>
	h1 {
		color: var(--color-primary);
		font-size: clamp(var(--text-lg), 5vw, var(--text-xxxl));
	}

	h2 {
		font-size: var(--text-xl);
	}
</style>
