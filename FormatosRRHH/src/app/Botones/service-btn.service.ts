import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBTNService {

  isLoading: boolean = false;
  progress: number = 0;
  constructor() { }

  simulateLoading() {
    this.isLoading = true;
    const interval = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        clearInterval(interval);
        this.isLoading = false;
        this.progress = 0;
      }
    }, 200);
  }
}
