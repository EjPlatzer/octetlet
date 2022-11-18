<form>
	<fieldset>
		<legend>#1: What element has the atomic number 1?</legend>
		<div class="answers">
			<input type="radio" name="question1" id="answer1" />
			<label for="answer1">Hydrogen</label>

			<input type="radio" name="question1" id="answer2" />
			<label for="answer2">Helium</label>

			<input type="radio" name="question1" id="answer3" />
			<label for="answer3">Oxygen</label>

			<input type="radio" name="question1" id="answer4" />
			<label for="answer4">Carbon</label>
		</div>
	</fieldset>
</form>

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
