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
	Hey there! I'm Chris, a software engineer specialising in web technologies. I have over 8 years
	experience, spanning both frontend and full-stack roles.
</p>

<p>
	I'm currently working with TypeScript and React Native at
	<a target="_blank" href="https://enlock.com">Enlock</a> to build a fully encrypted online workspace.
</p>
<p>
	Previously I've worked with TypeScript and React at
	<a target="_blank" href="https://typeform.com">Typeform</a>, and have experience with Clojure at
	<a target="_blank" href="https://hellorelish.com">Relish</a>, as well as Ruby on Rails at
	<a target="_blank" href="https://freeagent.com">FreeAgent</a>.
</p>

<p>
	I also run a little music discovery app called
	<a target="_blank" href="https://listenlist.app">Listen List</a>, and have a couple of other small
	projects over on my <a target="_blank" href="https://github.com/chrisgreen1993">Github</a>.
</p>

<p>
	Feel free to check out my <a rel="external" href="cv.pdf">CV</a>, or shoot me an
	<a href="mailto:chrisgreen1993@gmail.com">email</a>.
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
