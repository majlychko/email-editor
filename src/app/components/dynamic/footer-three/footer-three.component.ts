import { AfterContentInit, Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-footer-three',
  standalone: true,
  imports: [],
  templateUrl: './footer-three.component.html',
  styleUrl: './footer-three.component.scss'
})
export class FooterThreeComponent extends DynamicBlock implements AfterContentInit {
  template = `
<tr>
                                    <td style="padding-bottom:65px;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="width:100%;">
                                            <tr>
                                                <td style="padding:40px 0 32px;">
                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tr>
                                                            <td class="accentBorder" height="1" bgColor="#494a4c"
                                                                style="background:url(https://email.cdn-tinkoff.ru/email/images/Line56.png);font-size:1px;line-height:1px;">
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="padding:8px 0 8px;">
                                                    <a href="[% param.url_unsub_topic %]" class="textColor2" target="_blank"
                                                        style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;color:#adadad;font-weight:normal;font-size:12px;line-height:20px;display:inline-block;text-decoration:none;">
                                                        Отписаться
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="padding:8px 0 8px;">
                                                    <a target="_blank" href="https://www.tinkoff.ru/" class="textColor2"
                                                        style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;color:#adadad;font-weight:normal;font-size:12px;line-height:20px;text-decoration:none;">T-Bank.ru</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="padding-top:24px;">
                                                    <a 
                                                        style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;display:inline-block;color:#336fee;text-decoration:none;">
                                                        <img src="https://email.cdn-tinkoff.ru/email/images/logo24.png"
                                                            style="display:block;" height="49" border="0"
                                                            alt="T-Bank.ru">
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
  `
  ngAfterContentInit() {
    setTimeout(() => {
      this.onChange.emit({ order: this.order, text: this.template })
    }, 0);

  }
}

