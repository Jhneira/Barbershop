import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { NavServiceService } from 'src/app/services/nav-service.service';

import {faMapLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @ViewChildren("pages", {read:ElementRef})
  pages!: QueryList<ElementRef>;

  observer$!:IntersectionObserver;
  currentServices: string = "cabeza";

  faMapLocationDot = faMapLocationDot;
  faPhone = faPhone;
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;

  headServices: any[] =
  [{
    name: 'Corte Barbería 68',
    description: 'Corte de cabello con tijera al gusto del cliente. Incluye lavado de cabello.'
  },
  {
    name: 'Afeitada Barbería 68',
    description: 'Al estilo clásico con toalla caliente y espuma o gel para afeitar.'

  },
  {
    name: 'Exfoliación Capilar',
    description: 'Eliminación de células muertas y exceso de grasa del cuero cabelludo, favoreciendo el crecimiento del cabello.'
  },
  {
    name: 'Hidratación Capilar',
    description: 'Masaje en el cuero cabelludo para la óptima hidratación de la hebra del cabello.'
  },
  {
    name: 'Facial Profunda',
    description: 'Hidratación y limpieza profunda de rostro removiendo puntos negros.'
  }
  ];

bodyServices: any[] =
  [{
    name: 'Manicure',
    description: 'Limpieza profunda, exfoliación e hidratación de las manos.'
  },
  {
    name: 'Pedicure',
    description: 'Exclusivo para caballeros. Tratamiento para uñas enterradas, exfoliación e hidratación de pies y pantorrillas.'

  },
  {
    name: 'Depilación',
    description: 'Reducción de bellos con máquina o depilación total con cera en cualquier área del cuerpo/cuerpo completo.'
  }
  ];

spaServices: any[] =
  [{
    name: 'Masaje Relajante',
    description: 'Masaje suave de cuerpo completo con una duración apróximada de una hora.'
  },
  {
    name: 'Masaje Deportivo',
    description: 'Masaje fuerte enfocado en la necesidad del cliente.'

  },
  {
    name: 'Masaje Thai',
    description: 'Masaje realizado sobre un tatami en el suelo utilizando un conjunto de técnicas orientales. Masaje de cuerpo completo con una duración apróximada de una hora.'
  }
  ];

  constructor(private navServices: NavServiceService ) {}

  ngOnInit(): void {
    this.showObserver()
  }

  ngAfterViewInit(): void {
    this.pages.forEach(page => {
      this.observer$.observe(page.nativeElement)
    })
  }

  showObserver() {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5

    }

    this.observer$ = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.navServices.navValueData = entry.target.className;
        }
      })
    }, options)

  }

  showServices(data: string) {
    this.currentServices = data;
  }

}
