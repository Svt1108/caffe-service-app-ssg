import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule, CommonModule],
})
export class SpinnerComponent {
  constructor(public loader: SpinnerService) {}
}
