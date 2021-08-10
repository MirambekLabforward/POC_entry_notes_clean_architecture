import { Author } from "./author";

export interface Entry {
    id:number;
    title:string;
    text: string;
    author:Author;
}
