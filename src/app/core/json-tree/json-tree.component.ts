import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-json-tree',
  templateUrl: './json-tree.component.html',
  styleUrls: ['./json-tree.component.scss']
})

export class JSONTreeComponent {
  public nodes: any[];
  public options: any = {};

  @Input() set json(json: string) {
    if (json) {
      this.nodes = this.JSONToArray(json);
    }
  }

  JSONToArray(item) {
    const arr = [];

    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        if (typeof item[key] === 'object' && !item[key].length) {
          arr.push({
            id: key,
            children: this.JSONToArray(item[key])
          });
        } else {
          arr.push({
            id: key,
            nodeClass: `hljs-${typeof item[key]}`,
            value: item[key],
          })
        }
      }
    }

    return arr;
  }
}


