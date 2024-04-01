import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-button-with-background',
  standalone: true,
  imports: [],
  templateUrl: './button-with-background.component.html',
  styleUrl: './button-with-background.component.scss'
})
export class ButtonWithBackgroundComponent extends DynamicBlock {

  onTextChange = (text: string) => {
    const template = `
    <!-- start: button with background -->
    <tr>
        <td style="padding:24px 0 24px;" align="center">
            <table align="center" style="margin:0 auto;" cellpadding="0"
                cellspacing="0" border="0">
                <tr>
                    <td class="btnBack" bgcolor="#ffdd2d" align="center"
                        style="mso-padding-alt:16px 36px 16px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;border-radius:4px;">
                        <a href="${text}" target="_blank"
                            style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;display:inline-block;vertical-align:top;font-size:17px;line-height:24px;color:#333333;font-weight:normal;text-decoration:none;text-align:center;padding:16px 36px 16px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;border-radius:4px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-width:100%;">
                            ${text}
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <!-- end: button with background -->
    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
