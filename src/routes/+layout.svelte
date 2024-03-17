<script>
	import '../app.css';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    inject({ mode: dev ? 'development' : 'production' });
</script>

<br />
<hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700" />
<hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700" />
<div class="w-full flex justify-center text-center p-1">
	<a
		href="/"
		class="a bold mx-2 text-4xl transition-colors duration-300 text-[var(--pri)] hover:text-[var(--sec)]"
		>Sam</a
	>
	<div class="dropdown relative mx-2">
		<button
			class="a bold text-4xl transition-colors duration-300 hover:text-[var(--sec)] dropdown-btn"
			>Policy</button
		>
		<div class="dropdown-content absolute hidden text-[var(--sec)] pt-1">
			<!-- <a href="/Policy/ASUC" class="a rounded-t py-2 px-4 block whitespace-no-wrap"
				>ASUC Reform</a
			> -->
			<a href="/Policy/Career" class="a py-2 px-4 block whitespace-no-wrap"
				>COEP</a
			>
			<a href="/Policy/Health" class="a py-2 px-4 block whitespace-no-wrap">Student Health</a>
			<a href="/Policy/Housing" class="a rounded-b py-2 px-4 block whitespace-no-wrap">Housing</a>
			<a href="/Policy/Divestment" class="a rounded-b py-2 px-4 block whitespace-no-wrap">Divestment</a>
		</div>
	</div>
	<!-- <a
		href="/Endorsements"
		class="a bold mx-2 text-4xl transition-colors duration-300 hover:text-[var(--pri)]"
		>Endorsements</a
	> -->
	<!-- <a
		href="/Team"
		class="a bold mx-2 text-4xl transition-colors duration-300 hover:text-[var(--pri)]">Our Team</a
	> -->
</div>

<hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700" />
<hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700" />
<slot />

<div class="m-10"></div>
<style>
	:global(body) {
		letter-spacing: 0.1em;
	}

	/* Dynamic font size using viewport width (vw) */
	.a {
		font-size: 2.5vw; /* Adjust the vw value as needed */
	}

	.a {
		font-size: clamp(1rem, 3rem, 5rem); /* Use clamp() to set a minimum and maximum font size */
	}

	.dropdown-btn:focus + .dropdown-content,
	.dropdown-btn:hover + .dropdown-content,
	.dropdown-content:hover {
		display: block;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: var(--bg);
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	.dropdown-content a {
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	.dropdown-content a:hover {
		background-color: var(--sec);
	}

</style>
