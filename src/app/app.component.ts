import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'graphql-front';
  posts = [];

  constructor(private apolloClient: Apollo) {}

  ngOnInit(): void {
    this.apolloClient.watchQuery({
      query: gql`
        {
          posts {
            title
            body
          }
        }
      `
    }).valueChanges.subscribe((result: any) => {
      this.posts = result?.data;
    });
  }
}
