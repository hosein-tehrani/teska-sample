export interface Todo {

 id:string;

 title:string;

 description:string;

 status:'todo'|'doing'|'done';

 createdAt:number;

}