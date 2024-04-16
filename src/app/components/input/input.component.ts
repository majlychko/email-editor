import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, EventEmitter, Output, Type } from '@angular/core';
import { AccentTextWithBackgroundComponent } from '@components/dynamic/accent-text-with-background/accent-text-with-background.component';
import { LittleTitleComponent } from '@components/dynamic/little-title/little-title.component';
import { TextLineComponent } from '@components/dynamic/text-line/text-line.component';
import { PreheaderComponent } from '@components/dynamic/preheader/preheader.component';
import { HeaderTitleComponent } from '@components/dynamic/header-title/header-title.component';
import { HeaderTextComponent } from '@components/dynamic/header-text/header-text.component';
import { HeaderEndComponent } from '@components/dynamic/header-end/header-end.component';
import { ContentTextComponent } from '@components/dynamic/content-text/content-text.component';
import { ContentTitleComponent } from '@components/dynamic/content-title/content-title.component';
import { AccentTextWithBorderComponent } from '@components/dynamic/accent-text-with-border/accent-text-with-border.component';
import { ButtonWithBackgroundComponent } from '@components/dynamic/button-with-background/button-with-background.component';
import { ButtonWithGifComponent } from '@components/dynamic/button-with-gif/button-with-gif.component';
import { FooterOneComponent } from '@components/dynamic/footer-one/footer-one.component';
import { FooterTwoComponent } from '@components/dynamic/footer-two/footer-two.component';
import { FooterThreeComponent } from '@components/dynamic/footer-three/footer-three.component';
import { FooterFourComponent } from '@components/dynamic/footer-four/footer-four.component';
import { FooterFiveComponent } from '@components/dynamic/footer-five/footer-five.component';
import { AlarmBlockComponent } from '@components/dynamic/alarm-block/alarm-block.component';
import { PromoBlockComponent } from '@components/dynamic/promo-block/promo-block.component';
import { BringFriendComponent } from '@components/dynamic/bring-friend/bring-friend.component';
import { EmptyPreheaderComponent } from '@components/dynamic/empty-preheader/empty-preheader.component';
import { BtnsComponent } from '@components/dynamic/btns/btns.component';
import { ImageComponent } from '@components/dynamic/image/image.component';
import { SquareImageComponent } from '@components/dynamic/square-image/square-image.component';
import { CircleImageComponent } from '@components/dynamic/circle-image/circle-image.component';
import { OperatorComponent } from '@components/dynamic/operator/operator.component';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiTilesModule } from '@taiga-ui/kit';
import { ComponentOutletInjectorModule } from 'ng-dynamic-component';
import { DynamicListComponent } from '@components/dynamic/dynamic-list/dynamic-list.component';

interface IComponent {
  component: Type<any>
  name: string
  height: number
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

  components: IComponent[] = [
    {
      component: ContentTitleComponent,
      name: 'ContentTitle',
      height: 1
    },
    {
      component: ContentTextComponent,
      name: 'ContentText',
      height: 2
    },
    {
      component: PreheaderComponent,
      name: 'Preheader',
      height: 1
    },
    {
      component: HeaderTitleComponent,
      name: 'HeaderTitle',
      height: 1
    },
    {
      component: HeaderTextComponent,
      name: 'HeaderText',
      height: 1
    },
    {
      component: HeaderEndComponent,
      name: 'Обязательный блок после хедера',
      height: 1
    },
    {
      component: LittleTitleComponent,
      name: 'Little Title',
      height: 1
    },
    {
      component: AccentTextWithBackgroundComponent,
      name: 'Accent text with background',
      height: 1
    },
    {
      component: AccentTextWithBorderComponent,
      name: 'AccentTextWithBorder',
      height: 1
    },
    {
      component: TextLineComponent,
      name: 'Text line',
      height: 1
    },
    {
      component: ImageComponent,
      name: 'Image - название файла изображения',
      height: 1
    },
    {
      component: ButtonWithBackgroundComponent,
      name: 'Кнопка',
      height: 2
    },
    {
      component: ButtonWithGifComponent, 
      name: 'Кнопка с гиф',
      height: 2
    },
    {
      component: FooterOneComponent,
      name: 'FooterOne - футер добавлен в код',
      height: 1
    },
    {
      component: FooterTwoComponent,
      name: 'FooterTwo - ссылка на условия акции',
      height: 1
    },
    {
      component: FooterThreeComponent,
      name: 'FooterThree - футер добавлен в код',
      height: 1
    },
    {
      component: FooterFourComponent,
      name: 'FooterFour - ссылка на условия акции',
      height: 1
    },
    {
      component: FooterFiveComponent,
      name: 'FooterFive - ссылка на условия акции',
      height: 1
    },
    {
      component: AlarmBlockComponent,
      name: 'AlarmBlock',
      height: 2
    },
    {
      component: PromoBlockComponent,
      name: 'PromoBlock',
      height: 2
    },
    {
      component: BringFriendComponent,
      name: 'BringFriend',
      height: 2
    },
    {
      component: EmptyPreheaderComponent,
      name: 'EmptyPreheader',
      height: 1
    },
    {
      component: BtnsComponent,
      name: 'BtnsPreheader',
      height: 1
    },
    {
      component: DynamicListComponent,
      name: 'Список',
      height: 3
    },
    {
      component: SquareImageComponent,
      name: 'Блок с маленькой квадратной картинкой',
      height: 2
    },
    {
      component: CircleImageComponent,
      name: 'Блок с маленькой круглой картинкой',
      height: 3
    },
    {
      component: OperatorComponent,
      name: 'Условные операторы',
      height: 1
    },
  ]

  blocks: IBlock[] = []

  order = new Map();

  addComponent = (block: IComponent) => {

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
    const updatedOrder: [number, number][] = [];
    const position = this.order.get(index)

    this.blocks.splice(index, 1);
    this.order.delete(index)

    this.order.forEach((key, value) => {
      updatedOrder.push([value >= index ? value - 1 : value, key > position ? key - 1 : key]);
    })

    this.order = new Map(updatedOrder)
    const code = this.updateCode(this.order);
    this.onGenerateCode.emit(code);
  }

  generateCode = (changed: { order: number, text: string }): string => {
    this.blocks[changed.order].code = changed.text;
    const code = this.updateCode(this.order);
    return code
  }

  onDrag(e: Map<number, number>) {
    const code = this.updateCode(e);
    this.onGenerateCode.emit(code);
  }

  updateCode = (order: Map<number, number>) => {
    let code = '';
    const sorted = ([...order].sort((a, b) => Number(a[1]) - Number(b[1])))

    sorted.forEach((e) => {
      code += this.blocks[e[0]].code
    })

    return code
  }
}


