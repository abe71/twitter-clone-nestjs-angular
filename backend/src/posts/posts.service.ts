import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './schemas/post.schema';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) { }

    async createPost(user: string, content: string): Promise<Post> {
        const newPost = new this.postModel({ user, content });
        return newPost.save();
    }

    async getAllPosts(): Promise<Post[]> {
        return this.postModel.find().exec();
    }
}
