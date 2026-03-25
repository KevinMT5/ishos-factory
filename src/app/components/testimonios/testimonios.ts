import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonios',
  imports: [CommonModule],
  templateUrl: './testimonios.html',
  styleUrl: './testimonios.scss'
})
export class Testimonios {
  testimonios = [
    { avatar: '👩🏽', name: 'Sofía Ramírez', loc: 'Ahuachapán', text: 'El sorbete de pitahaya es lo mejor que he probado. Se nota que está hecho con ingredientes frescos y mucho amor. ¡Ya soy cliente fiel!' },
    { avatar: '👨🏽', name: 'Carlos Mendoza', loc: 'San Salvador', text: 'Fui de visita y no me arrepiento. El sabor de taro me sorprendió. La chica que atiende es súper amable y se nota el orgullo por su marca.' },
    { avatar: '👩🏼', name: 'María Fernanda', loc: 'Santa Ana', text: 'La historia detrás de Isho\'s lo hace todavía más especial. El de mango con chile es un recuerdo de infancia en cada cucharada.' },
  ];
}