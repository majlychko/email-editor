import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';
import { nonbreak } from 'src/app/helpers/nonbreak';

@Component({
  selector: 'app-alarm-block',
  standalone: true,
  imports: [],
  templateUrl: './alarm-block.component.html',
  styleUrl: './alarm-block.component.scss'
})
export class AlarmBlockComponent extends DynamicBlock {

  onTextChange = (text: string, text1: string) => {
    const template = `
    <!-- start: alarm block -->
    <tr>
        <td style="padding:12px 0 12px;">
            <table class="alarmBlock" border="0" cellpadding="0"
                cellspacing="24" width="100%" bgColor="#fef6e3">
                <tr>
                    <td>
                        <table border="0" cellpadding="0" cellspacing="0"
                            width="100%">
                            <tr>
                                <td align="center">
                                    <img src="https://email.cdn-tinkoff.ru/email/images/ing64.png"
                                        style="max-width:100%;display:block;"
                                        border="0" alt="" width="40">
                                </td>
                            </tr>
                            <tr>
                                <td class="textColor1" align="center"
                                    style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:24px;line-height:32px;color:#333333;font-weight:600;padding:16px 0 8px;">
                                    ${nonbreak(text)}
                                </td>
                            </tr>
                            <tr>
                                <td class="textColor1" align="center"
                                    style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;padding:4px 0 16px;">
                                    ${nonbreak(text1)}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <!-- end: alarm block -->
    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
