import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function AddBookmark() {
  return (
		<Dialog>
			<DialogTrigger><Plus/>New Bookmark</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add a New Bookmark</DialogTitle>
					<DialogDescription>Fill-out the name and url and click save to add a new bookmark</DialogDescription>
				</DialogHeader>
                <form action="">
                    
                </form>
			</DialogContent>
		</Dialog>
  );
}