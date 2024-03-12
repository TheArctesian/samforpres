<script>
	import '../app.css';
</script>

<br>
<hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700" />
<div class="w-full flex justify-center text-center m-1 p-1">
	<a href="/" class="bold mx-2 text-4xl transition-colors duration-300 text-[var(--pri)] hover:text-[var(--sec)]"
		>Sam</a
	>
	<a
		href="/Policy"
		class="bold mx-2 text-4xl transition-colors duration-300 hover:text-[var(--pri)]">Policy</a
	>
	<a
		href="/Endorsements"
		class="bold mx-2 text-4xl transition-colors duration-300 hover:text-[var(--pri)]"
		>Endorsements</a
	>
	<a href="/Team" class="bold mx-2 text-4xl transition-colors duration-300 hover:text-[var(--pri)]"
		>Our Team</a
	>
</div>
<hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700" />
<slot />

<style>
	:global(body) {
		letter-spacing: 0.1em;
	}

	/* Responsive font sizes for the navbar */
	@media (max-width: 768px) {
		a {
			font-size: 1.3rem; /* Smaller font size for mobile screens */
		}
	}

	/* Additional styling for your navbar links can go here */
	a {
	}
</style>