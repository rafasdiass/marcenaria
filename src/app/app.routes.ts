import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home-component/home.component';
import { CheckoutComponent } from './content/components/checkout/checkout-component/checkout.component';
import { OrderConfirmationComponent } from './content/components/checkout/order-confirmation/order-confirmation-component/order-confirmation.component';
import { ProductConfigurationComponent } from './content/components/product-configuration/product-configuration-component/product-configuration.component';
import { ProductSelectionComponent } from './content/components/product-selection/product-selection-component/product-selection.component';
import { BathroomComponent } from './content/components/rooms/bathroom/bathroom-component/bathroom.component';
import { BedroomComponent } from './content/components/rooms/bedroom/bedroom-component/bedroom.component';
import { KitchenComponent } from './content/components/rooms/kitchen/kitchen-component/kitchen.component';
import { LivingRoomComponent } from './content/components/rooms/living-room/living-room-component/living-room.component';
import { OfficeComponent } from './content/components/rooms/office/office-component/office.component';
import { RoomComponent } from './content/components/rooms/room-component/room.component';
import { SummaryComponent } from './content/components/summary/summary-component/summary.component';
import { CartComponent } from './content/components/cart/cart-component/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota inicial
  { path: 'home', component: HomeComponent }, // Rota adicional para 'home'
  { path: 'rooms', component: RoomComponent },
  { path: 'rooms/kitchen', component: KitchenComponent },
  { path: 'rooms/bedroom', component: BedroomComponent },
  { path: 'rooms/bathroom', component: BathroomComponent },
  { path: 'rooms/living-room', component: LivingRoomComponent },
  { path: 'rooms/office', component: OfficeComponent },
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout/confirmation', component: OrderConfirmationComponent },
  { path: 'product-selection', component: ProductSelectionComponent },
  { path: 'product-configuration', component: ProductConfigurationComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '**', redirectTo: '' } // Rota coringa para redirecionar para a página inicial
];
