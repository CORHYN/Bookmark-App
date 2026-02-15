import { AuthButton } from '@/components/auth-button';
import { EnvVarWarning } from '@/components/env-var-warning';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

async function Bookmarks(){
    const supabase = await createClient();
	const { data, error } = await supabase.auth.getClaims();

	if (error || !data?.claims) {
		redirect('/auth/login');
	}

    const bookmarks = supabase.from('Bookmark').select();

    console.log(bookmarks);

    return <></>;
}

export default function Home() {
	

	return (
		<main className="min-h-screen flex flex-col items-center">
			<div className="flex-1 w-full flex flex-col gap-20 items-center">
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
				<div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
					<main className="flex-1 flex flex-col gap-6 px-4">
						<Suspense>
							<Bookmarks />
						</Suspense>
					</main>
				</div>
				<footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16"></footer>
			</div>
		</main>
	);
}
