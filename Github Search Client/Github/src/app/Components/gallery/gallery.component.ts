import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {repo, github_response} from '../../Model/repo'
import { BlockingProxy } from '../../../../node_modules/blocking-proxy';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input() data: repo[];
  @Input() isBookmark: boolean;
  @Output() notify: EventEmitter<repo> = new EventEmitter<repo>();
  constructor() { }

  addToBookmarks(item: repo){
    this.notify.emit(item);
 }
}
