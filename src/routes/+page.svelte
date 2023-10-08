<script>
    import { onMount } from "svelte";
	import logo from "../lib/images/SpaceAppsLogo_Default_2ColorWhi.width-440.jpegquality-60.png"
    import InputsPage from "./inputs_page.svelte";
    import OutputsPage from "./outputs_page.svelte";
	import { selectedPage } from "./stores.js";
	import fetchData from "./fetch_data";

	// onMount(async () => {
	// 	await fetchData();
	// });
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />

	<style type="text/css">
		body { margin:0; }
	</style>

</svelte:head>

<header>
	<div class="headerPadding"></div>
	<span class="corner logo-container">
		<img src={logo} alt="SvelteKit" height="65px"/>
	</span>

	<span class="corner text-container">
		<h3 class="title">Magnetic Reconnection</h3>
	</span>
	<div class="headerPadding"></div>
</header>
<div class="separator_line"></div>
<body>
	{#if ($selectedPage === "inputs_page")} 
		<InputsPage></InputsPage>
	{:else}
		<OutputsPage></OutputsPage>
	{/if}
</body>

<style>
	* {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.spacer {
		height: 30px;
	}

	.headerPadding {
		padding: 12px;
	}

	.corner {
		padding: 25;
	}

	.title {
		color: #C6C6C6;
		font-size: 25px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		margin: 0; /* Remove default margin from h3 */
	}

	.logo-container, .text-container {
		flex: 1;  /* This will ensure that both containers take up equal space in the header */
		display: flex;
	}

	.logo-container {
		align-items: flex-start; /* Aligns logo to the top */
	}

	.text-container {
		align-items: flex-end; /* Aligns text to the bottom */
		justify-content: flex-end; /* Aligns text to the right within its container */
	}

	header {
		box-sizing: border-box;
		border: none;
		margin: 0;
		background: #272727;
		display: flex;
		padding: 10px;
	}

	body {
		background: #272727;
	}

	.separator_line {
		height: 7px;
		background: #2E2E2E;
	}
</style>