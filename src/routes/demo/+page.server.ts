import { getXataClient, type AnswerRecord, type QuestionRecord } from '$lib/server/xata';
import type { SelectedPick } from '@xata.io/client';
import type { Actions, PageServerLoad } from './$types';

export type QuestionWithAnswers = SelectedPick<QuestionRecord, ['label']> & {
	answers: SelectedPick<AnswerRecord, ['label']>[];
};

export const load: PageServerLoad = async () => {
	const xata = getXataClient();

	const question = await xata.db.question.select(['label']).getFirstOrThrow();

	const answers = await xata.db.answer
		.filter({ 'question.id': question.id })
		.select(['label'])
		.getAll();

	return { questions: [{ ...question, answers }] };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const xata = getXataClient();
		for (const [, answer] of data.entries()) {
			const isCorrectAnswer = await xata.db.answer.read(answer.toString(), ['correct']);
			return { correct: isCorrectAnswer?.correct ?? false };
		}

		return { correct: false };
	}
};
