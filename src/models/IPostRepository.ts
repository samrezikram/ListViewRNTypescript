import { Post } from "./Post";
import { GetPostsData } from "./GetPostsData";

export const IPostRepositoryToken = Symbol();

export interface IPostRepository {
  get: (data: GetPostsData) => Promise<Post[]>;
  find: (id: number) => Promise<Post>
}
