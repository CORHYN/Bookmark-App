import { createClient } from '@/lib/supabase/server';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Trash } from 'lucide-react';

export default async function BookmarkList() {
	const supabase = await createClient();
	const { data } = await supabase.from('Bookmark').select();

	return (
		<div className="flex flex-col gap-5">
			{data?.map((bookmark) => {
				return (
					<Card key={bookmark.id}>
						<CardContent className="pt-6 flex justify-between">
							<p className='text-lg'>{bookmark.name}</p>
							<div>
								<Button variant={'destructive'}><Trash className='w-2 h-1'/></Button>
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
