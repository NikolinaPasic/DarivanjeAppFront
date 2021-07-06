import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-winner-modal',
  templateUrl: './winner-modal.component.html',
  styleUrls: ['./winner-modal.component.scss'],
})

export class WinnerModalComponent implements OnInit {

  constructor(private ctrl: ModalController) { }

  ngOnInit() {}

  dismissModal(){
    this.ctrl.dismiss();
  }

}
