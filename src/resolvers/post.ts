import { Post } from '../entities/Post';
import { Ctx, Query, Resolver } from 'type-graphql';
import { MyContext } from '../types';

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(@Ctx() { em }: MyContext): Promise<Post[]> {
    return em.find(Post, {});
  }
}
