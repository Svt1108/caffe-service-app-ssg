import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DataMachine } from '../../core/data/data.model';
import { OverlayService } from '../overlay.service';
import { dataMachine } from '../../core/data/data';

@Component({
  selector: 'app-overlay-machine',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './overlay-machine.component.html',
  styleUrl: './overlay-machine.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayMachineComponent {
  data?: DataMachine;
  constructor(public overlayService: OverlayService) {
    this.data = dataMachine.find(
      (elem) => elem.id === this.overlayService.overlayInput?.id
    );
  }
}
