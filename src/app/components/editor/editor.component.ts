import { Component } from '@angular/core';
import { InputComponent } from '@components/input/input.component';
import { OutputComponent } from '@components/output/output.component';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [InputComponent, OutputComponent],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {
  code = '';
  onGenerateCode(code: string): void {
    this.code = code
  }
}
