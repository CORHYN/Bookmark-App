'use client';

import { Trash } from 'lucide-react';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';

export default function DeleteBookmarkButton({ bookMarkId, handleOnClick }: { bookMarkId: number; handleOnClick: (id: number) => Promise<void> }) {
	const [updateTab, setUpdateTab] = useState<boolean>(false);

    useEffect(() => {
		const channel = new BroadcastChannel('bookmarks');
		channel.postMessage('bookmark-updated');
        setUpdateTab(false);
		return () => channel.close();
	}, [updateTab]);
    
    
    return (
		<Button
			onClick={() => {
				handleOnClick(bookMarkId);
                setUpdateTab(true);
			}}
			variant={'destructive'}
		>
			<Trash className="w-2 h-1" />
		</Button>
	);
}
