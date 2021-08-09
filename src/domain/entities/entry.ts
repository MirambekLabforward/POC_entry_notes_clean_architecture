import { Author } from "../../../domain/entities/author";

export interface Entry {
    id:number;
    title:string;
    text: string;
    author:Author;
}