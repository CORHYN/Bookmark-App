import { AuthButton } from '@/components/auth-button';
import AddBookmark from '@/components/bookmark/add-bookmark';
import BookmarkList from '@/components/bookmark/bookmark-list';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Suspense } from 'react';

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col items-center">
			<div className="flex-1 w-full flex flex-col">
				<nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
					<div className="container mx-auto flex justify-between lg:px-10 px-4">
						<div className="flex gap-5 items-center">
							<ThemeSwitcher />
						</div>
						<Suspense>
							<AuthButton />
						</Suspense>
					</div>
				</nav>
				<main className="flex-1 flex flex-col gap-6 2xl:px-16 px-4 w-full container mx-auto">
					<div className="flex justify-end pt-10 pb-5">
						<AddBookmark />
					</div>
					<Suspense>
						<BookmarkList />
					</Suspense>
				</main>
				<footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                    <div>This is a bookmarker app made for a micro-challenge © 2026</div>
                </footer>
			</div>
		</main>
	);
}
