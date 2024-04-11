import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-operator',
  standalone: true,
  imports: [],
  templateUrl: './operator.component.html',
  styleUrl: './operator.component.scss'
})
export class OperatorComponent extends DynamicBlock {

  onTextChange = (text: string) => {
    const template = `
           ${text}
    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
