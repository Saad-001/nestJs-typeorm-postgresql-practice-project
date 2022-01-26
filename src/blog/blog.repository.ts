import { EntityRepository, Repository } from "typeorm"
import { Blogs } from "./blogs.entity";
@EntityRepository(Blogs)
export class BlogRepository extends Repository<Blogs> {

}