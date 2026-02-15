import { createClient } from '@/lib/supabase/server';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Trash } from 'lucide-react';
import { removeBookMarkAction } from '@/actions/bookmark-actions';
import DeleteBookmarkButton from './delete-bookmark-button';
import { BookmarkChannelWrapper } from './bookmark-channel-wrapper';

export default async function BookmarkList() {
	const supabase = await createClient();
	const { data } = await supabase.from('Bookmark').select();

	return (
		<BookmarkChannelWrapper>
			<div className="flex flex-col gap-5">
				{data?.map((bookmark, index) => {
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
