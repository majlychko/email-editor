import { Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-footer-five',
  standalone: true,
  imports: [],
  templateUrl: './footer-five.component.html',
  styleUrl: './footer-five.component.scss'
})
export class FooterFiveComponent extends DynamicBlock {

  onTextChange = (text: string) => {
    const template = `
<tr>
                                    <td style="padding-bottom:48px;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="width:100%;">
                                            <tr>
                                                <td style="padding:32px 0 24px;">
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
                                                <td class="textColor1" align="center"
                                                    style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:12px;line-height:20px;color:#adadad;font-weight:normal;padding:4px 32px 4px;">
                                                   <a target="_blank" class="textColor2"
                                                        style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;color:#adadad;font-weight:normal;font-size:12px;line-height:20px;text-decoration:none;"> Не является индивидуальной инвестиционной рекомендацией</a>
                                                </td>
                                            </tr>

											<tr>
                                                <td class="textColor1" align="center"
                                                    style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:12px;line-height:20px;color:#adadad;font-weight:normal;padding:4px 32px 4px;">
                                                   <a target="_blank" href="https://www.tinkoff.ru/invest/disclaimers/risk/" class="textColor2"
                                                        style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;color:#adadad;font-weight:normal;font-size:12px;line-height:20px;text-decoration:none;">Подробнее об ограничении ответственности</a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td align="center" style="padding:4px 0 4px;">
                                                    <a href="${text}" class="textColor2" target="_blank"
                                                        style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;color:#adadad ;font-weight:normal;font-size:12px;line-height:20px;display:inline-block;text-decoration:none;">
                                                        Условия акции
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="padding:4px 0 4px;">
                                                    <a target="_blank" href="https://www.tinkoff.ru/" class="textColor2"
                                                        style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;color:#adadad;font-weight:normal;font-size:12px;line-height:20px;text-decoration:none;">T-Bank.ru</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="padding-top:20px;">
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
    this.onChange.emit({ order: this.order, text: template })
  }
}
