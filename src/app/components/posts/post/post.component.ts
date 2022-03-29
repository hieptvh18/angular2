import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any;
  constructor(private postService: PostService,
    private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(){
    this.postService.get().subscribe(res=>{
        this.posts = res;
    });
  }

  remove(id:string|number){
    this.postService.destroy(id).subscribe(res=>{
      this.getPost();
    })
  }

}
