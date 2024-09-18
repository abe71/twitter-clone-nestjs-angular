import { Controller, Post, Get, Body } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Post('create')
    async create(@Body() body: { user: string; content: string }) {
        return this.postsService.createPost(body.user, body.content);
    }

    @Get()
    async findAll() {
        return this.postsService.getAllPosts();
    }
}
