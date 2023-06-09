import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ScrollupbuttonComponent } from './components/scrollupbutton/scrollupbutton.component';
import { PartnersComponent } from './components/partners/partners.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { NextDirective } from './components/next.directive';
import { PrevDirective } from './components/prev.directive';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ScrollupbuttonComponent,
    PartnersComponent,
    CarouselComponent,
    SpinnerComponent,
    NextDirective,
    PrevDirective,
    TestimonialsComponent,
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ScrollupbuttonComponent,
    PartnersComponent,
    CarouselComponent,
    TestimonialsComponent,
    SpinnerComponent,
    NextDirective,
    PrevDirective,
  ]
})
export class SharedModule { }
