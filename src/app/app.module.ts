import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartPageComponent } from './start-page/start-page.component';
import { WorksComponent } from './works/works.component';
import { ProjectComponent } from './project/project.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartPageComponent,
    WorksComponent,
    ProjectComponent,
    TestimonialComponent,
    FooterComponent,
    MobileNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
