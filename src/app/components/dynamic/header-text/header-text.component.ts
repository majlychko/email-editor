import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-header-text',
  standalone: true,
  imports: [],
  templateUrl: './header-text.component.html',
  styleUrl: './header-text.component.scss'
})
export class HeaderTextComponent extends DynamicBlock {

  onTextChange = (text: string) => {
    const template = `
    <!-- start: header text -->
    <tr>
        <td style="padding:12px 0 8px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td class="textColor1" align="center"
                        style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;color:#333333;font-weight:normal;font-size:20px;line-height:28px;">
                        ${text}
                    </td>
                </tr>
                <tr>
                    <td style="padding-top:32px;">
                        <table border="0" cellpadding="0" cellspacing="0"
                            width="100%">
                            <tr>
                                <td class="accentBorder" height="1"
                                    bgColor="#494a4c"
                                    style="background:url(https://email.cdn-tinkoff.ru/email/images/Line56.png);font-size:1px;line-height:1px;">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <!-- end: header text -->
    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
