import { CreateBlogDto } from './dto/createBlog.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogRepository } from './blog.repository';

@Injectable()
export default class BlogServices {

    constructor(@InjectRepository(BlogRepository) private blogRepository : BlogRepository){}

    getAllBlogs() : number[] {
        return [1, 2, 3]
    }

    async createNewBlog(blog : CreateBlogDto) {
        return await this.blogRepository.save(blog)
    }
}