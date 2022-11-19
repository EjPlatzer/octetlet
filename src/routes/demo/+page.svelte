<script lang="ts">
	import { enhance } from '$app/forms';
	import Question from '$lib/components/Question.svelte';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;
</script>

<form method="post" use:enhance>
	{#each data.questions as question}
		<Question {question} />
	{/each}
	<button type="submit">Submit</button>
</form>

{#if form}
	<h2>Your answer was:</h2>
	{#if form.correct}
		<p>Correct! Great job!</p>
	{:else}
		<p>Wrong. Too bad :(</p>
	{/if}
{/if}
