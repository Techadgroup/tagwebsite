import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layout/default/default.module';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { TagservicesComponent } from './modules/tagservices/tagservices.component';
import { BlogComponent } from './modules/blog/blog.component';
import { NetgateComponent } from './modules/netgate/netgate.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { BlogdetailsComponent } from './modules/blogdetails/blogdetails.component';
import { NetgatedetailsComponent } from './modules/netgatedetails/netgatedetails.component';
import { FaqComponent } from './modules/faq/faq.component';
import { MainHttpService } from './services/main-http.service';
import { HttpinterceptorService } from './services/httpinterceptor.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WrongrouteComponent } from './modules/wrongroute/wrongroute.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { TrackOrderComponent } from './modules/track-order/track-order.component';
import { ContactusComponent } from './modules/contactus/contactus.component';
import { ManagementteamComponent } from './modules/managementteam/managementteam.component';
import { TeammemberdetailComponent } from './modules/teammemberdetail/teammemberdetail.component';
import { DocumentsComponent } from './modules/documents/documents.component';
import { BlogcsrComponent } from './modules/blogcsr/blogcsr.component';
import { MissionComponent } from './modules/mission/mission.component';
import { ConsultancyserviceComponent } from './modules/consultancyservice/consultancyservice.component';
import { TechnicalserviceComponent } from './modules/technicalservice/technicalservice.component';
import { PartnershipsComponent } from './modules/partnerships/partnerships.component';
import { GallerycategoryComponent } from './modules/gallerycategory/gallerycategory.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    TagservicesComponent,
    BlogComponent,
    NetgateComponent,
    AboutusComponent,
    BlogdetailsComponent,
    NetgatedetailsComponent,
    FaqComponent,
    WrongrouteComponent,
    GalleryComponent,
    TrackOrderComponent,
    ContactusComponent,
    ManagementteamComponent,
    TeammemberdetailComponent,
    DocumentsComponent,
    BlogcsrComponent,
    MissionComponent,
    ConsultancyserviceComponent,
    TechnicalserviceComponent,
    PartnershipsComponent,
    GallerycategoryComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AnimateOnScrollModule.forRoot(),
    NgbCarouselModule,

  ],

  providers: [
    MainHttpService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorService,
      multi: true,
    },
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


