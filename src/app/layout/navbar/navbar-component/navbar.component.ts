import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  
  constructor(private router: Router) {}

  navegarPara(comodo: string, event: Event) {
    event.preventDefault();

    // Redireciona para a rota específica do cômodo
    switch(comodo) {
      case 'home':
        this.router.navigate(['/home']);
        break;
      case 'kitchen':
        this.router.navigate(['/rooms/kitchen']);
        break;
      case 'bedroom':
        this.router.navigate(['/rooms/bedroom']);
        break;
      case 'bathroom':
        this.router.navigate(['/rooms/bathroom']);
        break;
      case 'living-room':
        this.router.navigate(['/rooms/living-room']);
        break;
      case 'office':
        this.router.navigate(['/rooms/office']);
        break;
      default:
        console.error(`Unknown section: ${comodo}`);
        break;
    }
  }

  toggleNavbar() {
    const navbar = document.getElementById('navbarNav');
    if (navbar) {
      navbar.classList.toggle('show');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar') && document.getElementById('navbarNav')?.classList.contains('show')) {
      document.getElementById('navbarNav')?.classList.remove('show');
    }
  }
}
