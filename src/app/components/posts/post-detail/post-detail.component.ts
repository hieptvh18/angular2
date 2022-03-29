import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  private id: any = null;
  post: any;

  constructor(
    private routes: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.id = this.routes.snapshot.params['id'];
    if (this.id) {

      this.postService.show(this.id).subscribe((res) => {
        this.post = res;
      });
      
    }else{
      this.post = {
        'title':"",
        "content": '',
        "status":0
      }
    }
  }
}
