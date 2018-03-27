import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SharedService, SidebarService, UserService , LoginGuardGuard, UploadService} from './service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UserService,
    LoginGuardGuard,
    UploadService
  ],
  declarations: []
})
export class ServiceModule { }
