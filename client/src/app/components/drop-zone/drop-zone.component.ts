import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.scss'],
})
export class DropZoneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fileBrowseHandler(event: any) {
    console.log(event.target.files);
  }

  fun() {}
}
