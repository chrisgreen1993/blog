<script>
	export let title;
	export let date;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section>
	<a href="/">Home</a>
	<p>{date.slice(0, 10)}</p>
	<slot></slot>
</section>
