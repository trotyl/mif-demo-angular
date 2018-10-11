import { Component } from '@angular/core'
import { render, Context } from '@mif/core'
import moment from 'moment'
import { BlueBasket, BlueBuy } from 'mif-demo-react'
import { GreenRecos } from 'mif-demo-vue'
import { product, Product, Variant } from './data'

let currentContext: Context | null = null

export function setCurrentContext(context: Context): void {
  currentContext = context
}

@Component({
  templateUrl: './app.html',
})
export class AppComponent {
  context: Context
  product: Product
  activeVariant!: Variant
  basket!: BlueBasket
  buy!: BlueBuy
  recos!: GreenRecos

  constructor() {
    this.product = product
    this.context = currentContext!
    currentContext = null

    this.activeVariant = this.product.variants[0]

    console.log(`Moment date from red: ${moment().format()}`)

    setTimeout(() => this.renderChildComponents(), 0)
  }

  renderChildComponents(): void {
    this.basket = render(BlueBasket, { context: this.context }, document.querySelector('#basket') as HTMLDivElement)
    this.buy = render(BlueBuy, { context: this.context }, document.querySelector('#buy') as HTMLDivElement)
    this.buy.set({ sku: this.activeVariant.sku })

    this.recos = render(GreenRecos, { context: this.context }, document.querySelector('#reco') as HTMLDivElement)
    this.recos.set({ sku: this.activeVariant.sku })
  }

  chooseOption(variant: Variant): void {
    this.activeVariant = variant
    this.buy.set({ sku: variant.sku })
    this.recos.set({ sku: this.activeVariant.sku })
  }
}
