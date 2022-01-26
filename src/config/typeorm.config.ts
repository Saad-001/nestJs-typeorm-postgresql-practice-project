import { Quies } from './../Quies/quies.entity';
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Blogs } from "../blog/blogs.entity";

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    username: 'postgres',
    password: 'postgress',
    database: 'blogs',
    entities: [
        // __dirname + 'dist/**/*.entity{.ts,.js}',
        Blogs,
        Quies
    ],
    synchronize: true,
}