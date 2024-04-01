import { AfterContentInit, Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-text-line',
  standalone: true,
  imports: [],
  templateUrl: './text-line.component.html',
  styleUrl: './text-line.component.scss'
})
export class TextLineComponent extends DynamicBlock implements AfterContentInit {
  template = `
  <!-- start: text line -->
  <tr>
      <td style="padding:12px 0 12px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                  <td class="accentBorder" height="1" bgColor="#494a4c"
                      style="background:url(https://email.cdn-tinkoff.ru/email/images/Line56.png);font-size:1px;line-height:1px;">
                  </td>
              </tr>
          </table>
      </td>
  </tr>
  <!-- end: text line -->
  `
  ngAfterContentInit() {
    setTimeout(() => {
      this.onChange.emit({ order: this.order, text: this.template })
    }, 0);

  }
}

