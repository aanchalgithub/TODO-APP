import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class UserDto{
    @IsNotEmpty({message : "First Name should not be empty"})
    @MinLength(3,{
        message : "Minimum length of First Name should not be less than 3"
    })
    @ApiProperty({
        required : true,
        minLength : 3,
        type : String
    })
    first_name : string;

    @IsOptional()
    @ApiProperty({
        required : false,
        type : String
    })
    middle_name : string;

    @IsOptional()
    @ApiProperty({
        required : false,
        type : String
    })
    last_name : string;

    @IsNotEmpty({message : "First Name should not be empty"})
    @MinLength(3,{
        message : "Minimum length of User Name should not be less than 3"
    })
    @ApiProperty({
        required : true,
        minLength : 3,
        type : String
    })
    user_name : string;

    @IsNotEmpty({message : "Email should not be empty"})
    @IsEmail()
    @ApiProperty({
        required : true,
        type : String
    })
    email : string;

    @IsOptional()
    @ApiProperty({
        required : false,
        type : Boolean
    })
    is_Verify : boolean;

    @IsOptional()
    @ApiProperty({
        required : false,
        type : Date
    })
    verify_at : Date;

    @IsOptional()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    @ApiProperty({
        required : false,
        minLength : 3,
        maxLength : 20,
        type : String
    })
    password : string;
}