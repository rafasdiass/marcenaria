import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar-component/navbar.component';
import { FooterComponent } from '../footer/footer-component/footer.component';




@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule,NavbarComponent,FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
