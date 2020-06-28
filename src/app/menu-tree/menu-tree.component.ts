import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.css']
})
export class MenuTreeComponent implements OnInit {
  @Input() treeData: any[];

  log(val) {
    if (val) { console.log(val); }
  }

  objectKeys(obj: object): any {
    const arr = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push({ [key]: obj[key] });
      }
    }
    return arr;
  }

  constructor() { }

  ngOnInit() {
  }

  toggleChildren(data) {
    console.log('current treeData', data);
    data.visible = !data.visible;
  }

}
