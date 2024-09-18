import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
})
export class TweetComponent implements OnInit {
  posts: any[] = [];
  content: string = '';

  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    this.tweetService.getAllPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  postTweet() {
    const user = 'TestUser'; // Replace with actual authenticated user
    this.tweetService.createPost(user, this.content).subscribe((data) => {
      this.posts.push(data);
      this.content = '';
    });
  }
}
