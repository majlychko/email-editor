import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent extends DynamicBlock {

  onTextChange = (text: string) => {
    const template = `
    <!-- start: image -->
    <tr>
        <td align="center" style="padding-bottom:32px;">
            <img src="${text}"
                style="display:block;width:100%;max-width:536px;" border="0"
                alt="" width="536">
        </td>
    </tr>
    <!-- end: image -->

    `
    this.onChange.emit({ order: this.order, text: template })
  }
}
