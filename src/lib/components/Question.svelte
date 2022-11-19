<script lang="ts">
	import type { QuestionWithAnswers } from 'src/routes/demo/+page.server';

	export let question: QuestionWithAnswers;
</script>

<fieldset>
	<legend>{question.label}</legend>
	<div class="answers">
		{#each question.answers as answer}
			<input type="radio" name={question.id} id={answer.id} value={answer.id} />
			<label for={answer.id}>{answer.label}</label>
		{/each}
	</div>
</fieldset>

<style>
	legend {
		font-size: 2rem;
	}
	.answers {
		display: inline-grid;
		grid-auto-flow: dense;
		align-items: center;
		column-gap: 1.5rem;
		font-size: 2rem;
	}

	label {
		grid-column: 2;
	}

	input[type='radio'] {
		height: 2rem;
		width: 100%;
		margin: 1rem;
	}
</style>
