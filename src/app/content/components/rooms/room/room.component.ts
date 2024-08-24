import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {

  constructor(private router: Router) {}

  onRoomSelect(room: string): void {
    this.router.navigate([`/rooms/${room}`]);  // Navega para o componente específico do cômodo selecionado
  }
}
