import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-list-last',
  standalone: true,
  imports: [],
  templateUrl: './list-last.component.html',
  styleUrl: './list-last.component.scss'
})
export class ListLastComponent extends DynamicBlock {

  onTextChange = (text: string) => {
    const template = `
    <tr>
    <td style="padding:4px 0 12px;">
        <table border="0" cellpadding="0" cellspacing="0"
            width="100%">
            <tr>
               <td valign="top" width="24" class="bullet"
                    style="padding:2px 0 0px;mso-padding-alt:0px 0 0; font:bold 32px/28px Arial, Helvetica, sans-serif; color:#ffdd2d;">
                    &bull;
                </td>
<td class="textColor1"
                    style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;padding: 0 0 0;">
                    ${text}
                </td>
               
            </tr>
        </table>
    </td>
</tr>
</table>
</td>
</tr>
<!-- end: list -->
    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
