import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  styleUrl: './footer.component.css',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  today: number = Date.now();
}
