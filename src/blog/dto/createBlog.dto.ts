import { IsNotEmpty, Length } from "class-validator";


export class CreateBlogDto {
    @IsNotEmpty({message: 'the title should must be available'})
    @Length(3)
    title: string;

    @IsNotEmpty()
    @Length(3)
    description: string;
}