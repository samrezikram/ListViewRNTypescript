
import { injectable } from "reactject";
import axios from "axios";

import { GetPostsData } from "src/models/GetPostsData";
import { Post } from "src/models/Post";
import { IPostRepository } from "src/models/IPostRepository";

@injectable()
export class PostRepository implements IPostRepository {
  
  public async get({}: GetPostsData): Promise<Post[]> {
    return (
      await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
    ).data;
  }

  public async find(id: number) {
    return(
      await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    ).data
  }
}
