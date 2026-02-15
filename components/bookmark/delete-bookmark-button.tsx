'use client'

import { Trash } from "lucide-react";
import { Button } from "../ui/button";

export default function DeleteBookmarkButton({ bookMarkId, handleOnClick }: { bookMarkId: number; handleOnClick: (id: number) => Promise<void> }) {
	return (
		<Button onClick={() => { handleOnClick(bookMarkId)}} variant={'destructive'}>
			<Trash className="w-2 h-1" />
		</Button>
	);
}