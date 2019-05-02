import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HelloContainerComponent } from './hello-container/hello-container.component';

@NgModule({
  declarations: [
    HelloComponent,
    HelloContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    HelloComponent,
    HelloContainerComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    window.addEventListener('WebComponentsReady', () => {
      const helloCustomElement = createCustomElement(HelloComponent, {
        injector: this.injector
      });
      const helloContainerCustomElement = createCustomElement(HelloContainerComponent, {
        injector: this.injector
      });

      customElements.define('app-hello', helloCustomElement);
      customElements.define('app-hello-container', helloContainerCustomElement);
    });
  }
}
