import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: "Great mountain!!",
      postedBy: "Endy",
      desc: "An amazing mountain situated next to himalayan range.",
      imageUrl: 'assets/mountain.jpg'
    },
    {
      title: "What an amazing tree!!",
      postedBy: "Abie Doe",
      desc: "So soothing to watch a green tree",
      imageUrl: 'assets/tree.jpg'
    },
    {
      title: "Hello doggy!!",
      postedBy: "Clen Park",
      desc: "Bought a new puppy tomorrow",
      imageUrl: 'assets/dog.jpg'
    }
  ]
}
