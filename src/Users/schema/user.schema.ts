import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps : true})
export class User{
    @Prop({required : true})
    first_name : string;

    @Prop({required : false})
    middle_name : string;

    @Prop({required : false})
    last_name : string;

    @Prop({unique : true, required : true})
    user_name : string;

    @Prop({unique : true, required : true})
    email : string;

    @Prop({required : false})
    is_Verify : boolean;

    @Prop()
    verify_at : Date;

    @Prop()
    password : string;
}

const userSchema = SchemaFactory.createForClass(User)
export default userSchema