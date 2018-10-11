import { ɵrenderComponent as renderComponent } from '@angular/core'
import { Component, Context } from '@mif/core'
import { setCurrentContext, AppComponent } from './app'

export class RedApp extends Component<void> {
  onCreate(context: Context): HTMLMainElement {
    const host = document.createElement('main')
    host.id = 'app'
    setCurrentContext(context)
    renderComponent(AppComponent, { host })
    return host
  }
}
