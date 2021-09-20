<script>
	export let title;
	export let date;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section>
	<a href="/">&lt; Home</a>
	<p>Posted: {date.slice(0, 10)}</p>
	<slot />
</section>
