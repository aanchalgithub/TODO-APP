import { BadRequestException, HttpException, HttpVersionNotSupportedException, Injectable, NotFoundException } from "@nestjs/common";
import { Todo } from "./schema/todo.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { TodoDto } from "./dto/todo.dto";
import { NotFoundError } from "rxjs";
import { title } from "process";


@Injectable()
export class TodoService{
    constructor(
        @InjectModel(Todo.name) private todoModel : Model<Todo>
    ){}

    async createTodo(body : TodoDto){
       try {

        body['title'] = body.title.toLowerCase()
        let data = await this.todoModel.create({...body})

        return {
            success : true,
            message : `ToDo Task ${body.title}created Successfully!...`
        }

       } catch (err) {
        
         throw new BadRequestException(err.message)
       }
    }

    async readAllTask(search :string='',status : string){
       try {
       console.log(status);
       
        let readTask = await this.todoModel.find({
            $or :[
                {title : {$regex : search, $options : 'i'}},
                {description : {$regex : search, $options : 'i'}},
                // {status : {$regex : search, $options : 'i'}}
            ]
        })
        return readTask;  
       } catch (error) {
        throw new BadRequestException(error,error.message)
       }      
    }

    async updateTask(id : string,body:TodoDto){
        try {
            body['title'] = body.title.toLowerCase()
         const todo =   await this.todoModel.findByIdAndUpdate(id,body, {new : true})
         if(!todo){
            throw new NotFoundException("Todo not found")
         }
            return {
                success : true,
                message : `ToDo ${body.title} updated successfully!!!...`,
                data : body,
            };
        } catch (error) {    
            throw new BadRequestException(error.message)
        }
    }

    async deleteTask(id: string){
        try {
            await this.todoModel.findByIdAndDelete(id)
        return {
            success : true,
            message : `Task ${id} deleted successfully!.......`
        }
        } catch (error) {
            throw new BadRequestException(error,error.message)
        }
    }

    async getSingleBook(id : string){
       try {
        let singleBook = await this.todoModel.findOne({_id : id})
        if(!singleBook){
            throw new NotFoundException("Book Not Found")
        }
      
        return{
            success : true,
            data : singleBook
        }
       } catch (error) {
        throw new BadRequestException(error,error.message)
    
       }
        
    }
}