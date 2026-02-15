'use client'

import { addBookMarkAction } from '@/actions/bookmark-actions';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CircleAlert, Plus } from 'lucide-react';
import { useActionState, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export default function AddBookmark() {
    const [state, formAction] = useActionState(addBookMarkAction, { zodErrors: null, successMessage: null, errorMessage: null });
    const [open, setOpen] = useState<boolean>(false);

    useEffect(()=>{
        const channel = new BroadcastChannel('bookmarks');

        if (state?.successMessage) {
			toast.success(state?.successMessage);
            setOpen(false);
            channel.postMessage('bookmark-updated');
		}

        if(state?.errorMessage){
            toast.error(state?.errorMessage);
        }

        return () => channel.close();
    }, [state])
    
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button className="flex gap-4" variant={'default'}>
					<Plus />
					New Bookmark
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add a New Bookmark</DialogTitle>
					<DialogDescription>Fill-out the name and url and click save to add a new bookmark</DialogDescription>
				</DialogHeader>
				<form action={formAction} className="flex flex-col gap-5">
					<Label htmlFor="name-1" className="flex">
						Name
						<p className="pl-5 flex text-red-500 items-center">
							{state?.zodErrors?.name ? <CircleAlert className="h-4" /> : <></>}
							{state?.zodErrors?.name}
						</p>
					</Label>
					<Input name="name" placeholder="Bookmark Name" required />
					<Label htmlFor="url-1" className="flex">
						Url
						<p className="pl-5 flex text-red-500 items-center">
							{state?.zodErrors?.url ? <CircleAlert className="h-4" /> : <></>}
							{state?.zodErrors?.url}
						</p>
					</Label>
					<Input name="url" placeholder="Bookmark Url" required />
					<Button type="submit" variant={'secondary'}>
						Save
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
