import { AfterContentInit, Component } from '@angular/core';
import { DynamicBlock } from '../dynamic-block';

@Component({
  selector: 'app-header-end',
  standalone: true,
  imports: [],
  templateUrl: './header-end.component.html',
  styleUrl: './header-end.component.scss'
})

export class HeaderEndComponent extends DynamicBlock implements AfterContentInit {
  template = `
  </table>
  </td>
</tr>
<!-- end: header -->

<tr>
  <td>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
  `
  ngAfterContentInit() {
    setTimeout(() => {
      this.onChange.emit({ order: this.order, text: this.template })
    }, 0);

  }
}

