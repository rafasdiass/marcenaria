import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoomComponent } from '../../rooms/room/room.component';
import { ProductSelectionComponent } from '../../product-selection/product-selection/product-selection.component';
import { ProductConfigurationComponent } from '../../product-configuration/product-configuration/product-configuration.component';
import { SummaryComponent } from '../../summary/summary/summary.component';

@Component({
  selector: 'app-workshop',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RoomComponent,
    ProductSelectionComponent,
    ProductConfigurationComponent,
    SummaryComponent,
  ],
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss'],
})
export class WorkshopComponent {
  currentStep: string = 'rooms';

  setStep(step: string): void {
    this.currentStep = step;
  }

  isStep(step: string): boolean {
    return this.currentStep === step;
  }

  navigateToRoomSelection(): void {
    this.setStep('rooms');
  }

  navigateToProductSelection(): void {
    this.setStep('product-selection');
  }

  navigateToProductConfiguration(): void {
    this.setStep('product-configuration');
  }

  navigateToSummary(): void {
    this.setStep('summary');
  }
}
