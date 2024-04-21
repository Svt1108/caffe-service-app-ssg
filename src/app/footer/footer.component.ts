import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Path404Service } from '../core/services/path404.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: `./footer.component.html`,
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  constructor(public path404service: Path404Service) {}
}
