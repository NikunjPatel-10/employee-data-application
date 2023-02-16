import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CdkService } from './service/cdk.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { ApiService } from './service/api.service';
import { DataCommunicationService } from './service/data-communication.service';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [CdkService, ApiService , DataCommunicationService]
})
export class CoreModule { }
