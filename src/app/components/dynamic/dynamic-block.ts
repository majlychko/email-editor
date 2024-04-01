
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({ template: '' })

export class DynamicBlock {
  @Output() onChange = new EventEmitter<{ order: number, text: string }>();
  @Input() order = 0;
}
