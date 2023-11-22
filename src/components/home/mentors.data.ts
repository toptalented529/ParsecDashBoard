import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/phone.png',
    name: 'Tokens MOS y UNE a tu alcance',
    category: 'UI/UX Design',
    description:
      'Aqui puedes adquirir toekns UNE para adquirir licencias, y tokens MOS para comprar productos de la red.',
    company: {
      name: 'Grab',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 2,
    photo: '/images/mentors/pad.png',
    name: 'Aplica para obtener préstamos en moneda UNE',
    category: 'Machine Learning',
    description:
      'Obtiene préstamos para invertir en productos blockchain. 0 para adquirir tokens MOS.',
    company: {
      name: 'Google',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/screen.png',
    name: 'Sybil',
    category: 'Android Development',
    description:
      'Vote on offchain proposals whith the Snapshot interface. Votes are weighed by the number of UNE delegates.',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
  {
    id: 4,
    photo: '/images/mentors/token.png',
    name: 'Governance Portal',
    category: 'Fullstack Development',
    description:
      'Vote on official Uniswap gobernance proposalsand view past proposals.',
    company: {
      name: 'Microsoft',
      logo: '/images/companies/microsoft.png',
    },
  },
]
