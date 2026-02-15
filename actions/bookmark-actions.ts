'use server';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';

const newBookmarkSchema = z.object({
	name: z.string({
		message: 'Please enter an valid name',
	}),
	url: z.url({
		message: 'Please enter an valid url',
	}),
});

export async function addBookMarkAction(prevState: any, formData: FormData) {
    console.log("FIRED")
	const name = formData.get('name');
    const url = formData.get('url');
	const { success, error, data } = newBookmarkSchema.safeParse({ name, url });

	if (!success) {
		return { ...prevState, zodErrors: error.flatten().fieldErrors, success: false };
	}

    const supabase = await createClient();
	const result = await supabase.from('Bookmark').insert({name: name, url: url}).select();

	if (!result) {
		return {
			...prevState,
			zodErrors: null,
			errorMessage: 'Ops! Something went wrong. Please try again.',
		};
	}

	if (result.error) {
		return {
			...prevState,
			strapiErrors: result.error,
			zodErrors: null,
			errorMessage: 'Failed to Subscribe.',
		};
	}

	return {
		...prevState,
		zodErrors: null,
		errorMessage: null,
		successMessage: 'Successfully Subscribed!',
	};

    
}
