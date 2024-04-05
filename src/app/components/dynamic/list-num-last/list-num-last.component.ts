import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-list-num-last',
  standalone: true,
  imports: [],
  templateUrl: './list-num-last.component.html',
  styleUrl: './list-num-last.component.scss'
})
export class ListNumLastComponent extends DynamicBlock {

  onTextChange = (text: string, text1: string) => {
    const template = `
    <tr>
    <td style="padding:4px 0 12px;">
        <table border="0" cellpadding="0" cellspacing="0"
            width="100%">
            <tr>
                <td valign="top" width="24" class="textColor1"
                    style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;padding-bottom:2px;">
                    ${text}
                </td>
                <td class="textColor1"
                    style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;padding-bottom:2px;">
                    ${text1}
                </td>
            </tr>
        </table>
    </td>
</tr>
</table>
</td>
</tr>
<!-- end: num list -->
    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
