import { AuthorState } from './author-state';

export interface EntryState {
    id:number;
    title:string;
    text: string;
    author:AuthorState;
    isEditing?:boolean;
}
