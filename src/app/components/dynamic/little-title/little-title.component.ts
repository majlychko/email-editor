import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';
import { nonbreak } from 'src/app/helpers/nonbreak';
@Component({
  selector: 'app-little-title',
  standalone: true,
  imports: [],
  templateUrl: './little-title.component.html',
  styleUrl: './little-title.component.scss'
})
export class LittleTitleComponent extends DynamicBlock {

  onTextChange = (text: string) => {
    const template = `
    <!-- start: little title -->
    <tr>
        <td class="textColor1"
            style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:20px;line-height:28px;color:#333333;font-weight:600;padding:12px 0 8px;">
            ${nonbreak(text)}
        </td>
    </tr>
    <!-- end: little title -->  
    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
