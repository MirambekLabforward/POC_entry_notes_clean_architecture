import { Author } from "../../../domain/entities/author";

export interface EntryState {
    id:number;
    title:string;
    text: string;
    author:Author;
    isEditing:boolean;
}