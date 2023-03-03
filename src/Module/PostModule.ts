import { IPostRepositoryToken } from 'src/models/IPostRepository';
import { PostRepository } from 'src/application/network/PostRepository';
import { DependencyContainer, module, ReactjectModule } from "reactject";
import FindPostUseCase from "src/application/useCases/FindPostUseCase";
import GetPostsUseCase from "src/application/useCases/GetPostsUseCase";
@module()
export class PostModule extends ReactjectModule {
  register(container: DependencyContainer) {
    super.register(container);

    container.registerSingleton(IPostRepositoryToken, PostRepository);

    container.registerSingleton(FindPostUseCase);
    container.registerSingleton(GetPostsUseCase);
  }
}
