import {Component, OnInit} from '@angular/core';
import {SourceListService} from './source-list.service';

@Component({selector: 'app-source-list', templateUrl: './source-list.component.html', styleUrls: ['./source-list.component.less']})
export class SourceListComponent implements OnInit {

  public name: string;

  constructor(public sourceListService: SourceListService) {}

  ngOnInit() {
    this.doGetList();
  }

  public doGetList() {
    this
      .sourceListService
      .getList()
      .subscribe(data => {
        console.log(data);
      });
  }

}
