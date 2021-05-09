<script>
	export let title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section>
	<slot></slot>
</section>
