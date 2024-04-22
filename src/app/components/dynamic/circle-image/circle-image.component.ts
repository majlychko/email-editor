import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';
import { nonbreak } from 'src/app/helpers/nonbreak';
@Component({
  selector: 'app-circle-image',
  standalone: true,
  imports: [],
  templateUrl: './circle-image.component.html',
  styleUrl: './circle-image.component.scss'
})
export class CircleImageComponent extends DynamicBlock {

  onTextChange = (text: string, text1: string, text2: string) => {
    const template = `
    <!-- start: block with little сircle image -->
    <tr>
        <td style="padding-top:12px;">
            <table border="0" cellspacing="0" cellpadding="0" width="100%">
                <tr>
                    <td style="padding-bottom:12px;">
                        <table border="0" cellspacing="0" cellpadding="0"
                            width="100%" style="font-size:0;">
                            <tr>
                                <td valign="center" style="width:76px;"> 
                                    <a href="#" target="_blank"
                                        style="font-size:0;text-decoration:none;display:inline-block;">
                                        <img height="60" width="60"
                                            src="https://email.cdn-tinkoff.ru/email/images/${text2}.png"
                                            border="0" alt=""
                                            style="display:block;max-width:100%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;border-radius:50%;">
                                    </a>
                                </td>
                                <td valign="center">
                                    <table border="0" cellspacing="0"
                                        cellpadding="0" width="100%">
                                        <tr>
                                            <td class="textColor1"
                                                style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;">
                                                ${nonbreak(text)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="textColor3"
                                                style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:15px;line-height:24px;color:#999999;font-weight:normal;">
                                                ${nonbreak(text1)}
                                            </td>
                                        </tr>
                                    </table>
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
    <!-- end: block with little сircle image -->
    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
