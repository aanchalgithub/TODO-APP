import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";

export class TodoDto{

@IsNotEmpty({message : "Title should not be empty"})
@ApiProperty({
    required : true,
    type : String
})
title : string;

@IsNotEmpty({message : "Description should not be empty"})
@ApiProperty({
    required : true,
    type : String
})
description : string;

@IsEnum(['pending','completed'],{message : "Value should be 'pending' or 'completed', first letter should be small"})
@ApiProperty({
    required : false,
    type : String,
    
})
status : 'pending' | 'completed' = 'pending'

}