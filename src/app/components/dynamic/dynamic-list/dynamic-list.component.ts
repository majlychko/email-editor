import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicBlock } from '../dynamic-block';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { debounceTime, distinctUntilChanged } from 'rxjs';


enum EBullets {
  BULLET,
  NUMBER,
  DASH
}

interface IBullet {
  id: EBullets,
  name: string
}

@Component({
  selector: 'app-dynamic-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TuiButtonModule, TuiSvgModule],
  templateUrl: './dynamic-list.component.html',
  styleUrl: './dynamic-list.component.scss'
})


export class DynamicListComponent extends DynamicBlock {
  listForm: FormGroup = new FormGroup({});
  bullets: IBullet[] = [
    { id: EBullets.BULLET, name: 'Маркер' },
    { id: EBullets.NUMBER, name: 'Число' },
    { id: EBullets.DASH, name: 'Черта' }
  ]

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.listForm = new FormGroup({
      bullets: new FormControl(EBullets.BULLET),
      items: this.formBuilder.array([new FormControl()])
    });

    this.listForm.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(change => {
        const code = this.generateCode(change.bullets, change.items)
        this.onChange.emit({ order: this.order, text: code })
      });

  }

  get formData() { return <FormArray>this.listForm.get('items'); }

  addItem(): void {
    (<FormArray>this.listForm.get('items')).push(new FormControl(null));
  }

  deleteItem(index: number): void {
    (<FormArray>this.listForm.get('items')).removeAt(index)
  }

  generateCode = (bulletType: EBullets, items: string[]): string => {

    let description = ''
    let bulletCode = ''
    switch (bulletType) {
      case EBullets.BULLET:
        description = 'list';
        bulletCode = `
  <td valign="top" width="24" class="bullet" style="padding:2px 0 0px;mso-padding-alt:0px 0 0; font:bold 32px/28px Arial, Helvetica, sans-serif; color:#ffdd2d;">&bull;
  `;
        break;
      case EBullets.NUMBER:
        description = 'num list';
        bulletCode = `
  <td valign="top" width="24" class="textColor1" style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;padding-bottom:2px;">
        `;
        break;
      case EBullets.DASH:
        description = 'dashed list';
        bulletCode = `
  <td valign="top" width="24" class="textColor1" style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;padding-bottom:2px;">—
  `;
        break;
      default:
    }

    const list = items.reduce(
      (acc, item, index) => acc + `
      <tr>
      <td style="padding:4px 0 ${index === items.length ? 12 : 4}px;">
          <table border="0" cellpadding="0" cellspacing="0"
              width="100%">
              <tr>
                  ${bulletCode}
                  ${bulletType === EBullets.NUMBER ? (index + 1)+'.' : ''}
                  </td>
                  <td class="textColor1"
                      style="font-family:'San Francisco', Segoe, Roboto, Arial, Helvetica, sans-serif;font-size:17px;line-height:24px;color:#333333;font-weight:normal;padding-bottom:2px;">
                      ${item}
                  </td>
              </tr>
          </table>
      </td>
  </tr>
      `,
      '',
    );


    const table = `
<!-- start: ${description} -->
    <tr>
        <td style="padding-bottom:4px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              ${list}
            </table>
        </td>
    </tr>
<!-- end: ${description} -->
`
    return table
  }
}
