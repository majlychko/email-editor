import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';
import { nonbreak } from 'src/app/helpers/nonbreak';

@Component({
  selector: 'app-preheader',
  standalone: true,
  imports: [],
  templateUrl: './preheader.component.html',
  styleUrl: './preheader.component.scss'
})
export class PreheaderComponent extends DynamicBlock {

  onTextChange = (text: string) => {
    const template = `
    <!-- start: preheader -->
    <tr>
        <td class="textColor2" align="center"
            style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;
        color:#adadad;font-weight:normal;font-size:12px;line-height:20px;padding-bottom:12px;">
        ${nonbreak(text)}
        </td>
    </tr>
    <!-- end: preheader -->
    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
