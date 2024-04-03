import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-content-title',
  standalone: true,
  imports: [],
  templateUrl: './content-title.component.html',
  styleUrl: './content-title.component.scss'
})
export class ContentTitleComponent extends DynamicBlock {

  onTextChange = (text: string) => {
    const template = `
    <!-- start: content title -->
    <tr>
        <td class="textColor1"
            style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:24px;line-height:32px;color:#333333;font-weight:600;padding:12px 0 8px;">
            ${text}
        </td>
    </tr>
    <!-- end: content title -->
    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
