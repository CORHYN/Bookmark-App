import { AuthButton } from '@/components/auth-button';
import AddBookmark from '@/components/bookmark/add-bookmark';
import BookmarkList from '@/components/bookmark/bookmark-list';
import { EnvVarWarning } from '@/components/env-var-warning';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

async function Bookmarks() {
	const supabase = await createClient();
	const { data, error } = await supabase.auth.getClaims();

	if (error || !data?.claims) {
		redirect('/auth/login');
	}

	const bookmarks = supabase.from('Bookmark').select();

	return <></>;
}

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col items-center">
			<div className="flex-1 w-full flex flex-col">
				<nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
					<div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
						<div className="flex gap-5 items-center">
							<ThemeSwitcher />
						</div>
					</div>
					<Suspense>
						<AuthButton />
					</Suspense>
				</nav>
				<main className="flex-1 flex flex-col gap-6 2xl:px-16 px-4 w-full container mx-auto">
					<div className="flex justify-end pt-10 pb-5">
						<AddBookmark />
					</div>
					<Suspense>
						<BookmarkList />
					</Suspense>
				</main>
				<footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16"></footer>
			</div>
		</main>
	);
}
