import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';
import { nonbreak } from 'src/app/helpers/nonbreak';

@Component({
  selector: 'app-content-text',
  standalone: true,
  imports: [],
  templateUrl: './content-text.component.html',
  styleUrl: './content-text.component.scss'
})
export class ContentTextComponent extends DynamicBlock {

  onTextChange = (text: string) => {
    const template = `
    <!-- start: content text -->
    <tr>
        <td class="textColor1"
            style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;padding:4px 0 16px;">
           ${nonbreak(text)}
        </td>
    </tr>
    <!-- end: content text -->
    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
