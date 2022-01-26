import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import BlogServices from './blog.service';
import { BlogRepository } from './blog.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BlogRepository])],
  controllers: [BlogController],
  providers: [BlogServices]
})
export class BlogModule {}
