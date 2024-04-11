import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-button-with-gif',
  standalone: true,
  imports: [],
  templateUrl: './button-with-gif.component.html',
  styleUrl: './button-with-gif.component.scss'
})
export class ButtonWithGifComponent extends DynamicBlock {

  onTextChange = (text: string, text1: string) => {
    const template = `
    <!-- start: image -->
    <tr>
        <td align="center" style="padding-bottom:0px;">
            <img src="https://email.cdn-tinkoff.ru/email/images/4_star_up.gif" 
                style="display:block;width:100%;max-width:536px; vertical-align:top;" border="0"
                alt="" width="536">
        </td>
    </tr>
    <!-- end: image -->

<!-- start: button with background -->
    <tr>
        <td style="padding:0px 0 0px;" align="center">
            <table align="center" style="margin:0 auto;" cellpadding="0"
                cellspacing="0" border="0">
                <tr>
                    <td class="btnBack" bgcolor="#ffdd2d" align="center"
                        style="mso-padding-alt:16px 36px 16px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;border-radius:4px;">
                        <a href="${text1}" target="_blank"
                            style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;display:inline-block;vertical-align:top;font-size:17px;line-height:24px;color:#333333;font-weight:normal;text-decoration:none;text-align:center;padding:16px 36px 16px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;border-radius:4px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-width:100%;">
                            ${text}
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <!-- end: button with background -->

<!-- start: image -->
    <tr>
        <td align="center" style="padding-bottom:0px;">
            <img src="https://email.cdn-tinkoff.ru/email/images/4_star_down.gif" 
                style="display:block;width:100%;max-width:536px; vertical-align:top;" border="0"
                alt="" width="536">
        </td>
    </tr>
    <!-- end: image -->

    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
