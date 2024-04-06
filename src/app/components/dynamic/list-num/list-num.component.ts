import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-list-num',
  standalone: true,
  imports: [],
  templateUrl: './list-num.component.html',
  styleUrl: './list-num.component.scss'
})
export class ListNumComponent extends DynamicBlock {

  onTextChange = (text: string, text1: string) => {
    const template = `
    <!-- start: num list -->
    <tr>
        <td style="padding-bottom:4px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td style="padding:4px 0 4px;">
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
    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
