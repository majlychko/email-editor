import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';
import { nonbreak } from 'src/app/helpers/nonbreak';

@Component({
  selector: 'app-promo-block',
  standalone: true,
  imports: [],
  templateUrl: './promo-block.component.html',
  styleUrl: './promo-block.component.scss'
})
export class PromoBlockComponent extends DynamicBlock {

  onTextChange = (text: string, text1: string) => {
    const template = `
    <!-- start: promo block -->
    <tr>
        <td style="padding:12px 0 12px;">
            <table class="promoAccentBlock" border="0" cellpadding="0"
                cellspacing="32" width="100%" bgColor="#f5f6f7">
                <tr>
                    <td>
                        <table border="0" cellpadding="0" cellspacing="0"
                            width="100%">
                            <tr>
                                <td class="textColor1" align="center"
                                    style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:32px;line-height:40px;color:#333333;font-weight:normal;">
                                    ${text}
                                </td>
                            </tr>
                            <tr>
                                <td class="textColor3" align="center"
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
    <!-- end: promo block -->
    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
