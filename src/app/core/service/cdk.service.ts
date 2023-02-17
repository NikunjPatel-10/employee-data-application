import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal,ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

@Injectable()
export class CdkService {
  public overlayRef!: OverlayRef;

  constructor(private overlay: Overlay) {

  }

  displayOverlay<T>(component: ComponentType<T>) {
    this.overlayRef = this.overlay.create({

      hasBackdrop: true,
      // backdropClass: 'overlay-backdrop',
      // panelClass: 'overlay-panel',
      
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically()
     
    })

    const portal = new ComponentPortal(component);
    const componentRef=this.overlayRef.attach(portal);

    this.overlayRef.backdropClick().subscribe((res) => {
      console.log(res);
      if(res){
       const a = confirm("are you sure")
       if(a){
         this.overlayRef.detach()
       }
      }
    }
    
    );
   
    return componentRef
  }
  
  
}
