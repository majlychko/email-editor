import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, EventEmitter, Output, Type } from '@angular/core';
import { AccentTextWithBackgroundComponent } from '@components/dynamic/accent-text-with-background/accent-text-with-background.component';
import { LittleTitleComponent } from '@components/dynamic/little-title/little-title.component';
import { TextLineComponent } from '@components/dynamic/text-line/text-line.component';
import { PreheaderComponent } from '@components/dynamic/preheader/preheader.component';
import { HeaderTitleComponent } from '@components/dynamic/header-title/header-title.component';
import { HeaderTextComponent } from '@components/dynamic/header-text/header-text.component';
import { ContentTextComponent } from '@components/dynamic/content-text/content-text.component';
import { AccentTextWithBorderComponent } from '@components/dynamic/accent-text-with-border/accent-text-with-border.component';
import { ButtonWithBackgroundComponent } from '@components/dynamic/button-with-background/button-with-background.component';
import { FooterTwoComponent } from '@components/dynamic/footer-two/footer-two.component';
import { ImageComponent } from '@components/dynamic/image/image.component';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiTilesModule } from '@taiga-ui/kit';
import { ComponentOutletInjectorModule } from 'ng-dynamic-component';

interface IComponent {
  [key: string]: {
    component: Type<any>
    name: string
    height: number
  }
}

interface IBlock {
  component: Type<any>
  name: string
  inputs: Record<string, unknown>
  outputs: any
  code: string
  height: number
}
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [TuiTilesModule, TuiSvgModule, TuiButtonModule, CommonModule, NgComponentOutlet, ComponentOutletInjectorModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Output() onGenerateCode = new EventEmitter<string>();

  components: IComponent = {
    LittleTitleComponent: {
      component: LittleTitleComponent,
      name: 'Little Title',
      height: 1
    },
    AccentTextWithBackgroundComponent: {
      component: AccentTextWithBackgroundComponent,
      name: 'Accent text with background',
      height: 1
    },
    TextLineComponent: {
      component: TextLineComponent,
      name: 'Text line',
      height: 1
    },
    PreheaderComponent: {
      component: PreheaderComponent,
      name: 'Preheader',
      height: 1
    },
    HeaderTitleComponent: {
      component: HeaderTitleComponent,
      name: 'HeaderTitle',
      height: 1
    },
    HeaderTextComponent: {
      component: HeaderTextComponent,
      name: 'HeaderTitle',
      height: 1
    },
    ContentTextComponent: {
      component: ContentTextComponent,
      name: 'ContentText',
      height: 1
    },
    AccentTextWithBorderComponent: {
      component: AccentTextWithBorderComponent,
      name: 'AccentTextWithBorder',
      height: 1
    },
    ImageComponent: {
      component: ImageComponent,
      name: 'Image',
      height: 1
    },
    ButtonWithBackgroundComponent: {
      component: ButtonWithBackgroundComponent,
      name: 'Button',
      height: 2
    },
    FooterTwoComponent: {
      component: FooterTwoComponent,
      name: 'FooterTwo - напиши сюда ссылку на условия акции',
      height: 1
    },
  }

  blocks: IBlock[] = []

  order = new Map();

  addComponent = (block: { name: string, component: Type<any>, height: number }) => {

    const order = this.blocks.length;
    this.order.set(order, order);
    this.blocks.push({
      name: block.name,
      component: block.component,
      inputs: { 'order': order },
      outputs: {
        onChange: (changed: { order: number, text: string }) => {
          this.onGenerateCode.emit(this.generateCode(changed));
        },
      },
      code: '',
      height: block.height
    })
    this.onGenerateCode.emit(this.generateCode({ order: order, text: '' }));
  }
  removeComponent = (index: number) => {
    this.blocks.splice(index, 1);
    this.order.delete(this.order.get(index))
  }

  generateCode = (changed: { order: number, text: string }): string => {
    this.blocks[changed.order].code = changed.text;
    let code = '';
    this.order.forEach(value => code += this.blocks[value].code)
    return code
  }

  onDrag() {
    let code = '';
    this.order.forEach(value => code += this.blocks[value].code)
    this.onGenerateCode.emit(code);
  }
}


