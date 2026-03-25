import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Stats } from '../../components/stats/stats';
import { Productos } from '../../components/productos/productos';
import { Historia } from '../../components/historia/historia';
import { Configurador } from '../../components/configurador/configurador';
import { ArViewer } from '../../components/ar-viewer/ar-viewer';
import { Testimonios } from '../../components/testimonios/testimonios';
import { Ubicaciones } from '../../components/ubicaciones/ubicaciones';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Navbar, Hero, Stats, Productos,
    Historia, Configurador, ArViewer,
    Testimonios, Ubicaciones, Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}