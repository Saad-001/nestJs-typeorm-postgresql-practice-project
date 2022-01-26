import { CreateBlogDto } from './dto/createBlog.dto';
import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import BlogServices from './blog.service';

@Controller('blog')
export class BlogController {
    constructor(private blogServices : BlogServices){}

    @Get('/')
    getAllBlogs(): number[] {
        return this.blogServices.getAllBlogs()
    }

    @Post('/create-blog')
    @UsePipes(ValidationPipe)
    @HttpCode(200)
    async createBlog(@Body() blogData: CreateBlogDto){
        return await this.blogServices.createNewBlog(blogData)
    }
}
