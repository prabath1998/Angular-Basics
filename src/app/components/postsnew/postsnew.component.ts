import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postsnew',
  templateUrl: './postsnew.component.html',
  styleUrls: ['./postsnew.component.css'],
})
export class PostsnewComponent implements OnInit {
  postList: any[] = [];
  collectionSize: number = 0;
  pageSize: number = 5;
  page: number = 1;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.postService.getPostList().subscribe((data) => {
      this.postList = data;
      this.collectionSize = this.postList.length;
    });
  }
}
