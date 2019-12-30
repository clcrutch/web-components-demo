import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './hello-container.component.html',
  styleUrls: ['./hello-container.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HelloContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
