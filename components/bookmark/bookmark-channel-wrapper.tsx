'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function BookmarkChannelWrapper({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	useEffect(() => {
		const channel = new BroadcastChannel('bookmarks');

		channel.onmessage = (event) => {
			if (event.data === 'bookmark-updated') {
				router.refresh();
			}
		};

		return () => channel.close();
	}, [router]);

	return <>{children}</>;
}
