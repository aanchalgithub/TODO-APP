import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps : true})
export class Todo{
@Prop({required : true, unique : true})
title : string;

@Prop({required : true})
description : string;

@Prop({required : false})
status : string;

@Prop()
completed_at : Date;
}

const todoSchema = SchemaFactory.createForClass(Todo)
export default todoSchema;