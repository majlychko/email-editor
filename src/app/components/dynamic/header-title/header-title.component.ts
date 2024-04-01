import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-header-title',
  standalone: true,
  imports: [],
  templateUrl: './header-title.component.html',
  styleUrl: './header-title.component.scss'
})
export class HeaderTitleComponent extends DynamicBlock {

  onTextChange = (text: string) => {
    const template = `
    <!-- start: header title -->
    <tr>
        <td class="textColor1" align="center"
            style="font-family: San Francisco, Segoe, Roboto, Arial, Helvetica, sans-serif;color:#333333;font-weight:600;font-size:26px;line-height:36px;letter-spacing:0;">
            ${text}
        </td>
    </tr>
    <!-- end: header title -->
    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
