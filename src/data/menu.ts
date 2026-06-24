export interface MenuItem {
  name: string;
  description: string;
  image: string;
  alt: string;
}

export interface PromoItem {
  schedule: string;
  title: string;
  dealHighlight?: string;
  note: string;
  image: string;
  alt: string;
}

export const platos: MenuItem[] = [
  {
    name: 'Rib Eye Roll On Reserva',
    description:
      'Corte premium a la parrilla, jugoso y con el sabor intenso que pide una buena reserva.',
    image: '/Image/Rib%20Eye%20Roll%20On%20Reserva.jpg',
    alt: 'Rib Eye Roll On Reserva servido en La Majada',
  },
  {
    name: 'Costillas de Rib Eye BBQ',
    description:
      'Costillas bañadas en salsa BBQ, tiernas y con ese ahumado que se desprende solo.',
    image: '/Image/Las%20Costillas%20de%20Rib%20Eye%20BBQ.jpg',
    alt: 'Costillas de Rib Eye BBQ en La Majada',
  },
  {
    name: 'Alambre gratinado',
    description:
      'Carne, pimiento y cebolla gratinados — de los favoritos para compartir en la mesa.',
    image: '/Image/Alambre%20Gratinado.jpg',
    alt: 'Alambre gratinado en La Majada',
  },
  {
    name: 'Fajitas de pollo',
    description:
      'Pollo marinado con verduras salteadas, caliente y listo para armar tu taco.',
    image: '/Image/Fajitas%20de%20Pollo.jpg',
    alt: 'Fajitas de pollo en La Majada',
  },
  {
    name: 'Chistorra',
    description:
      'Embutido crujiente por fuera, jugoso por dentro — ideal para botanear entre copas.',
    image: '/Image/chistorra.jpg',
    alt: 'Chistorra en La Majada',
  },
  {
    name: 'Papa asada',
    description:
      'Papa al horno con mantequilla y topping — el acompañante que nunca sobra.',
    image: '/Image/Papa%20asada.jpg',
    alt: 'Papa asada en La Majada',
  },
];

export const bebidas: MenuItem[] = [
  {
    name: 'Limonada',
    description:
      'Refrescante y natural — para acompañar la comida o refrescarte en la tarde.',
    image: '/Image/Limonada.jpg',
    alt: 'Limonada natural en La Majada',
  },
  {
    name: 'Mezcal y tamarindo',
    description:
      'Mezcal con el toque ácido del tamarindo — un clásico con carácter del norte.',
    image: '/Image/Mezcal%20Y%20tamarindo.jpg',
    alt: 'Mezcal con tamarindo en La Majada',
  },
];

export const promociones: PromoItem[] = [
  {
    schedule: 'Después de las 2:00 pm',
    dealHighlight: '2×1',
    title: 'en cerveza',
    note:
      'La tarde pide compañía. Pide dos, paga una — ideal para seguir la plática sin apurar la mesa.',
    image: '/Image/Cerveza.jpg',
    alt: 'Copas de cerveza servidas en La Majada',
  },
  {
    schedule: '8:00 am – 12:00 pm',
    title: 'Buffet de desayuno',
    note:
      'Empieza el día con todo: variedad en la mesa, café caliente y el ritmo tranquilo de una mañana de barrio.',
    image: '/Image/desayuno_bufett.jpg',
    alt: 'Buffet de desayuno en La Majada',
  },
];
