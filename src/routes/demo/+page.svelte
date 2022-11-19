<script lang="ts">
	import Question from '$lib/components/Question.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<form>
	<Question question={data[0]} />
</form>
