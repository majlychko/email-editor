import { AfterContentInit, Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-social-telegram',
  standalone: true,
  imports: [],
  templateUrl: './social-telegram.component.html',
  styleUrl: './social-telegram.component.scss'
})
export class SocialTelegramComponent extends DynamicBlock implements AfterContentInit {
  template = `
  <!-- start: block with little image - socials -->
  <tr>
      <td style="padding-top:8px;">
          <table border="0" cellspacing="0" cellpadding="0" width="100%">
              <tr>
                  <td style="padding-bottom:8px;">
                      <table border="0" cellspacing="0" cellpadding="0"
                          width="100%" style="font-size:0;">
                          <tr>
                              <td valign="center" style="width:76px;">
                                  <a href="#" target="_blank"
                                      style="font-size:0;text-decoration:none;display:inline-block;">
                                      <img height="60" width="60"
                                          src="https://email.cdn-tinkoff.ru/email/images/telegramm.png"
                                          border="0" alt="Телеграм"
                                          style="display:block;max-width:100%;">
                                  </a>
                              </td>
                              <td valign="center" class="textColor1"
                                  style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;">
                                  Отправить <a href="#" class="link"
                                      style="font-size:17px;line-height:24px;font-weight:normal;color:#336fee !important;text-decoration:none;"
                                      target="_blank">в Телеграм</a>
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
  <!-- end: block with little image - socials -->
  `
  ngAfterContentInit() {
    setTimeout(() => {
      this.onChange.emit({ order: this.order, text: this.template })
    }, 0);

  }
}

