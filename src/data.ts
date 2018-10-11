import { InjectionToken } from '@angular/core'

export interface Variant {
  sku: string
  color: string
  name: string
  image: string
  thumb: string
  price: string
}

export interface Product {
  name: string
  variants: Variant[]
}

export const product: Product = {
  name: 'Tractor',
  variants: [
    {
      sku: 't_porsche',
      color: 'red',
      name: 'Porsche-Diesel Master 419',
      image: 'https://micro-frontends.org/1-composition-client-only/team-red/images/tractor-red.jpg',
      thumb: 'https://micro-frontends.org/1-composition-client-only/team-red/images/tractor-red-thumb.jpg',
      price: '66,00 €',
    },
    {
      sku: 't_fendt',
      color: 'green',
      name: 'Fendt F20 Dieselroß',
      image: 'https://micro-frontends.org/1-composition-client-only/team-red/images/tractor-green.jpg',
      thumb: 'https://micro-frontends.org/1-composition-client-only/team-red/images/tractor-green-thumb.jpg',
      price: '54,00 €',
    },
    {
      sku: 't_eicher',
      color: 'blue',
      name: 'Eicher Diesel 215/16',
      image: 'https://micro-frontends.org/1-composition-client-only/team-red/images/tractor-blue.jpg',
      thumb: 'https://micro-frontends.org/1-composition-client-only/team-red/images/tractor-blue-thumb.jpg',
      price: '58,00 €',
    },
  ],
}
