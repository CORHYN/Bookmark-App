import { removeBookMarkAction } from '@/actions/bookmark-actions';
import { createClient } from '@/lib/supabase/server';
import { Card, CardContent } from '../ui/card';
import { BookmarkChannelWrapper } from './bookmark-channel-wrapper';
import DeleteBookmarkButton from './delete-bookmark-button';
import { redirect } from 'next/navigation';

export default async function BookmarkList() {
	const supabase = await createClient();
    const { data, error } = await supabase.auth.getClaims();
    
        if (error || !data?.claims) {
            redirect('/auth/login');
        }
    
	const { data: bookmarks } = await supabase.from('Bookmark').select();

	return (
		<BookmarkChannelWrapper>
			<div className="flex flex-col gap-5">
				{bookmarks?.map((bookmark, index) => {
					return (
						<Card key={index}>
							<CardContent className="pt-6 flex justify-between">
								<p className="text-lg">{bookmark.name}</p>
								<DeleteBookmarkButton bookMarkId={bookmark.id} handleOnClick={removeBookMarkAction} />
							</CardContent>
						</Card>
					);
				})}
			</div>
		</BookmarkChannelWrapper>
	);
}
