import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { TodoDto } from "./dto/todo.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import {Query as ExpressQuery} from 'express-serve-static-core'

@Controller('todo')
@ApiTags('Todo Task')
export class TodoController{
    constructor(private todoService : TodoService){}

    @Post('/create')
    @ApiOperation({summary : "Create the Todo Task, it includes title, description, status,completed_at"})
    async createTodoC(@Body() body : TodoDto){
        return this.todoService.createTodo(body)
    }

    @Get('/read-all-list')
    @ApiOperation({summary : "Read all the created Task"})
    async readAllTaskC(@Query('search') search : string ,@Query('status') status : string){
        return this.todoService.readAllTask(search,status)
    }

    @Put('/update_task/:id')
    @ApiOperation({summary : "Update the particular task"})
    async updateTaskC(@Param('id') id : string , @Body() body : TodoDto){
        return this.todoService.updateTask(id, body)
    }

    @Delete('/delete/:id')
    @ApiOperation({summary : "Delete the particular Task"})
    async deleteTaskC(@Param('id') id : string){
        return this.todoService.deleteTask(id)
    }

    @Get('/single_book/:id')
    @ApiOperation({summary : "By this, you will get the single book"})
    async getSingleBookC(@Param('id') id : string){
        return this.todoService.getSingleBook(id)
    }
}