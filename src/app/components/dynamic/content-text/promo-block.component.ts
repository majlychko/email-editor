import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-promo-block',
  standalone: true,
  imports: [],
  templateUrl: './promo-block.component.html',
  styleUrl: './promo-block.component.scss'
})
export class PromoBlockComponent extends DynamicBlock {

  onTextChange = (text: string) => {
    const template = `
    <!-- start: content text -->
    <tr>
        <td class="textColor1"
            style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;padding:4px 0 16px;">
           ${text}
        </td>
    </tr>
    <!-- end: content text -->
    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
