import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from "./+components/logo/logo.component";
import { BannerComponent } from "./+components/banner/banner.component";
import { ServiceComponent } from "./+components/service/service.component";
import { ServicesComponent } from "./+components/services/services.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LogoComponent,
    BannerComponent,
    ServiceComponent,
    ServicesComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alibaba.frontend';
  
}
