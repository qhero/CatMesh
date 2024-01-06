// refresh.service.ts
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RefreshService {
  refreshEvent: EventEmitter<void> = new EventEmitter<void>();

  triggerRefresh(): void {
    this.refreshEvent.emit();
  }
}
