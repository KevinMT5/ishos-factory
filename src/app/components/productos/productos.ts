import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.scss'
})
export class Productos {
  productos = [
    { emoji: '🫐', bg: 'linear-gradient(135deg,#fce4ec,#f8bbd0)', tag: 'Nuevo', tagClass: 'tag-new', name: 'Pitahaya Rosa', desc: 'Sorbete cremoso de fruta del dragón, refrescante y vibrante. El favorito de temporada.', price: '$1.50' },
    { emoji: '🍈', bg: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)', tag: 'Vegano', tagClass: 'tag-vegan', name: 'Taro Mágico', desc: 'Sabor único inspirado en la raíz de taro, suave con un color morado natural impresionante.', price: '$1.75' },
    { emoji: '🥭', bg: 'linear-gradient(135deg,#fff3e0,#ffe0b2)', tag: 'Clásico', tagClass: 'tag-classic', name: 'Mango con Chile', desc: 'El sabor salvadoreño por excelencia. Mango maduro con toque de chile y limón.', price: '$1.25' },
    { emoji: '🫒', bg: 'linear-gradient(135deg,#f3e5f5,#e1bee7)', tag: 'Exótico', tagClass: 'tag-exotic', name: 'Jabuticaba', desc: 'La fruta tropical brasileña ahora en sorbete. Intenso y frutal, difícil de olvidar.', price: '$2.00' },
    { emoji: '🍑', bg: 'linear-gradient(135deg,#e0f7f4,#b2dfdb)', tag: 'Clásico', tagClass: 'tag-classic', name: 'Durazno con Mermelada', desc: 'Sorbete de durazno fresco con remolino de mermelada artesanal. Dulce y nostálgico.', price: '$1.50' },
    { emoji: '🍓', bg: 'linear-gradient(135deg,#fce4ec,#f8bbd0)', tag: 'Sin Azúcar', tagClass: 'tag-vegan', name: 'Fresa Natural', desc: 'Para quienes cuidan su salud sin renunciar al sabor. Fresa pura, sin azúcar añadida.', price: '$1.50' },
  ];
}