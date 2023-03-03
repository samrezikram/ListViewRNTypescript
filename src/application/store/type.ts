import { Post } from "src/models/Post";

export interface PostSliceState {
  isLoading: boolean;
  items: Post[];
}
