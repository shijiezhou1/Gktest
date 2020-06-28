import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HierarchyService } from '../services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  // template: '<app-menu-tree [treeData]="node"></app-menu-tree>',
  styleUrls: ['./hierarchy.component.css'],
})
export class HierarchyComponent implements OnInit {
  hierarchyLists: any;
  msg: string;
  objectKeys(obj) {
    return Object.keys(obj);
  }

  constructor(
    private _location: Location, private hierarchyService: HierarchyService,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const firstRes = { "status": 200, "entity": { "nodeStandardMetadata": { "nodeId": "1584420547524", "resource": null, "resourceType": null, "locationType": null, "displayName": "Green Koncepts Pte Ltd", "deviceId": null, "children": [{ "nodeId": "1584420558984", "resource": null, "resourceType": null, "locationType": null, "displayName": "Level 3", "deviceId": null, "children": [{ "nodeId": "1584420568914", "resource": null, "resourceType": null, "locationType": null, "displayName": "#03-15", "deviceId": null, "children": [{ "nodeId": "1584420577974", "resource": null, "resourceType": null, "locationType": null, "displayName": "Energy", "deviceId": null, "children": null, "customMetadata": [] }, { "nodeId": "1584420590985", "resource": null, "resourceType": null, "locationType": null, "displayName": "Temperature & Humidity", "deviceId": null, "children": null, "customMetadata": [] }], "customMetadata": [] }], "customMetadata": [] }], "customMetadata": [] }, "callerID": "337.1593314079.28b15c348ee6a5c2b569abcec91d14794711907c" }, "metadata": {} }

    this.hierarchyLists = [firstRes.entity.nodeStandardMetadata];

    console.log('here')
    console.log(this.hierarchyLists);
    // await this.hierarchyService
    //   .getCustomOrder()s
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.msg = 'Success!';
    //       this.hierarchyLists = data.entity.nodeStandardMetadata;
    //     },
    //     error => {
    //       this.msg = 'Fail!';
    //     });
  }

  backClicked() {
    this._location.back();
  }
}
