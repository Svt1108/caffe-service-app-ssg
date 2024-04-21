import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  OnInit,
} from '@angular/core';
import { Path404Service } from '../../core/services/path404.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: `./not-found.component.html`,
  styleUrl: './not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent implements OnInit {
  constructor(
    private path404service: Path404Service,
    private zone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.path404service.setPath404(true);
  }

  ngOnDestroy(): void {
    this.path404service.setPath404(false);
  }

  public onBackClick() {
    this.zone.run(() => {
      this.router.navigate(['/welcome']);
    });
  }
}
