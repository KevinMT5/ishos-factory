import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ubicaciones',
  imports: [CommonModule],
  templateUrl: './ubicaciones.html',
  styleUrl: './ubicaciones.scss'
})
export class Ubicaciones {
  ubicaciones = [
    { name: 'Parque Los Pinitos', address: '4a Calle Poniente, Parque Los Pinitos, Ahuachapán', weekday: '10:00 AM – 8:00 PM', weekend: '09:00 AM – 9:00 PM' },
    { name: '2da Avenida Norte', address: '2da Avenida Norte, Ahuachapán, El Salvador', weekday: '10:00 AM – 8:00 PM', weekend: '09:00 AM – 9:00 PM' },
  ];
}