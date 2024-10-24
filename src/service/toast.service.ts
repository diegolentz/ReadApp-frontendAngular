import { Injectable, ApplicationRef, Injector, Renderer2, RendererFactory2, ComponentRef } from '@angular/core';
import { ToastComponent } from '../app/shared/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private renderer: Renderer2;

  constructor(
    private appRef: ApplicationRef,
    private injector: Injector,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  showToast(message: string, customClass: 'success' | 'error' | 'info' | 'warning') {
    // Crear instancia de ToastComponent
    const toastComponentRef = this.createToastComponent(message, customClass);

    // Añadirlo al DOM
    const toastElement = (toastComponentRef.hostView as any).rootNodes[0] as HTMLElement;
    this.renderer.appendChild(document.body, toastElement);

    // Remover el toast después del tiempo de duración
    setTimeout(() => {
      this.destroyToast(toastComponentRef);
    }, 5000);
  }

  private createToastComponent(message: string, type: 'success' | 'error' | 'info' | 'warning'): ComponentRef<ToastComponent> {
    // Crear una instancia de ToastComponent sin ViewContainerRef
    const componentRef = this.appRef.bootstrap(ToastComponent, document.createElement('div'));
    componentRef.instance.message = message;
    componentRef.instance.type = type;
    return componentRef;
  }

  private destroyToast(componentRef: ComponentRef<ToastComponent>) {
    this.renderer.removeChild(document.body, componentRef.location.nativeElement);
    componentRef.destroy();
  }
}
