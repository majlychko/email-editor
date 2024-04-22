import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';
import { nonbreak } from 'src/app/helpers/nonbreak';

@Component({
  selector: 'app-accent-text-with-background',
  standalone: true,
  imports: [],
  templateUrl: './accent-text-with-background.component.html',
  styleUrl: './accent-text-with-background.component.scss'
})
export class AccentTextWithBackgroundComponent extends DynamicBlock {

  onTextChange = (text: string) => {
    const template = `
    <!-- start: accent text with background -->
    <tr>
        <td style="padding:12px 0 12px;">
            <table class="accentBlock" border="0" cellpadding="0"
                cellspacing="24" width="100%" bgColor="#ecf1f7">
                <tr>
                    <td>
                        <table border="0" cellpadding="0" cellspacing="0"
                            width="100%">
                            <tr>
                                <td class="textColor1"
                                    style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:20px;line-height:28px;color:#333333;font-weight:normal;">
                                    ${nonbreak(text)}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <!-- end: accent text with background -->
    `
    this.onChange.emit({ order: this.order, text: template })
  }



}
