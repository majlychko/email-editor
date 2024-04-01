import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-accent-text-with-border',
  standalone: true,
  imports: [],
  templateUrl: './accent-text-with-border.component.html',
  styleUrl: './accent-text-with-border.component.scss'
})
export class AccentTextWithBorderComponent extends DynamicBlock {

  onTextChange = (text: string) => {
    const template = `
    <!-- start: accent text with border -->
    <tr>
        <td>
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td style="padding:12px 0 12px;">
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
                <tr>
                    <td style="padding:16px 0 16px;">
                        <table border="0" cellpadding="0" cellspacing="0"
                            width="100%">
                            <tr>
                                <td class="textColor1" align="center"
                                    style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:20px;line-height:28px;color:#333333;font-weight:normal;">
                                    ${text}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="padding:12px 0 12px;">
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
    <!-- end: accent text with border -->
    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
