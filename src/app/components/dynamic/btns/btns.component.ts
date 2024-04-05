import { AfterContentInit, Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-btns',
  standalone: true,
  imports: [],
  templateUrl: './btns.component.html',
  styleUrl: './btns.component.scss'
})
export class BtnsComponent extends DynamicBlock implements AfterContentInit {
  template = `
  <!-- start: btns -->
  <tr>
      <td style="padding:24px 0 24px;" align="center">
          <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                  <td style="padding:0 6px;">
                      <a href="https://apps.apple.com/RU/app/id1183786286" target="_blank"
                          style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;display:block;font-size:16px;line-height:20px;font-weight:normal;text-decoration:none;text-align:center;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:132px;">
                          <img src="https://email.cdn-tinkoff.ru/email/images/ButtonStoreI.png"
                              alt="app store" width="132"
                              style="display:block;max-width:100%;width:132px;"
                              border="0">
                      </a>
                  </td>
                  <td style="padding:0 6px;">
                      <a href="https://play.google.com/store/apps/details?id=ru.tinkoff.investing" target="_blank"
                          style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;display:block;font-size:16px;line-height:20px;font-weight:normal;text-decoration:none;text-align:center;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:148px;">
                          <img src="https://email.cdn-tinkoff.ru/email/images/ButtonStoreA123.png"
                              alt="app store" width="148"
                              style="display:block;max-width:100%;width:148px;"
                              border="0">
                      </a>
                  </td>
              </tr>
          </table>
      </td>
  </tr>
  <!-- end: btns -->
  `
  ngAfterContentInit() {
    setTimeout(() => {
      this.onChange.emit({ order: this.order, text: this.template })
    }, 0);

  }
}

