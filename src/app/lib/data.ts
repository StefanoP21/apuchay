import { ChatIcon, PlusSquareIcon, ViewIcon } from '@chakra-ui/icons';

const features = [
  {
    heading: 'Fomentar la Participación Ciudadana',
    description:
      'Buscamos incrementar la participación de la comunidad en la supervisión y evaluación de proyectos en construcción. Empoderamos a los ciudadanos para que sean partícipes en el proceso, compartan sus observaciones, y contribuyan con su experiencia.',
    icon: ChatIcon,
  },
  {
    heading: 'Mejorar la Transparencia de los Proyectos ',
    description:
      'Garantizamos un acceso claro y comprensible a información detallada sobre presupuestos, plazos y progresos en proyectos de construcción. Nos esforzamos por ofrecer datos actualizados y precisos, promoviendo la transparencia en la gestión de fondos públicos.',
    icon: ViewIcon,
  },
  {
    heading: 'Fortalecer la Resiliencia Comunitaria',
    description:
      'Facilitamos la respuesta proactiva de la comunidad ante posibles riesgos asociados al Fenómeno del Niño. Buscamos proporcionar alertas tempranas, información relevante y recursos educativos para que las comunidades estén mejor preparadas.',
    icon: PlusSquareIcon,
  },
] as const;

export const hero = {
  title: '¡FORMA PARTE DEL CONTROL!',
  description:
    'Te brindamos toda la información necesaria de las obras públicas de prevención del Fenómeno del Niño que se ejecutan en tu localidad. Además, te proporcionamos una herramienta con la que podrás reportar obras que no se están ejecutando con normalidad y así nos apoyes para la toma de medidas correctivas.',
  cta: 'Realizar búsqueda',
} as const;

export const goal = {
  title: 'Nuestro Objetivo',
  description:
    'Queremos que tengas toda la información de las obras públicas de prevención del fenómeno del niño que se vienen ejecutando en tu localidad. Además, queremos que detectes las obras que no seestán ejecutando con normalidad y que nos ayudes a reportarlas para que se tomen las medidas correctivas.',
  features,
} as const;
