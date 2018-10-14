import { Component } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { repo, github_response } from './Model/repo'
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bookmarkPage = false;
  gettingData = false; //loading while getting data
  githubResults: repo[] = [];
  bookmarks: repo[] = [];
  constructor(private http: HttpClient) { }

  //Search github reop
  search(searchTerm) {
    var self = this;
    this.githubResults = [];
    this.gettingData = true;
    this.http.get('https://api.github.com/search/repositories?q=' + searchTerm).subscribe(
      function (data: github_response) {
        data.items.forEach(function (item) {
          self.githubResults.push({ name: item.name, owner: item.owner });
        });
        self.gettingData = false;
      });
  }

  addBookmark(item) {
    this.githubResults.splice(this.githubResults.indexOf(item), 1);
    this.bookmarks.push(item);
    var temp = JSON.stringify({ name:item.name, avatar_url:item.owner.avatar_url});
    this.http.post('http://localhost:61153/Bookmark', 'name=' + item.name + '&avatar_url=' + item.avatar_url , httpOptions).subscribe();

  }

  showBookMarks() {
    this.bookmarkPage = true;
  }

  homePage() {
    this.bookmarkPage = false;
  }
}
