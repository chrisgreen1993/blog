<script>
	import { formatISO8601 } from '$lib/utils'

	export let title;
	export let date;
	
	const formattedDate = formatISO8601(date)
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<a href="/">&lt; Home</a>
<article>
	<header>
		<h1>{title}</h1>
		<time datetime={formattedDate}>Posted: {formattedDate}</time>
	</header>
	<slot />
</article>

<style>
	header {
		margin-bottom: var(--space-lg);
	}

	header h1 {
		color: var(--color-primary);
		margin-bottom: var(--space-unit);
	}
</style>
