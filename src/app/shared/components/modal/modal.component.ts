import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {

  close = output<void>();

  closeModal() {
    this.close.emit();
  }

}
