import { getXataClient, type AnswerRecord, type QuestionRecord } from '$lib/xata';
import type { SelectedPick } from '@xata.io/client';
import type { PageServerLoad } from './$types';

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

	return [{ ...question, answers }];
};
