import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { BlogComponent } from './modules/blog/blog.component';
import { BlogcsrComponent } from './modules/blogcsr/blogcsr.component';
import { BlogdetailsComponent } from './modules/blogdetails/blogdetails.component';
import { ConsultancyserviceComponent } from './modules/consultancyservice/consultancyservice.component';
import { ContactusComponent } from './modules/contactus/contactus.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FaqComponent } from './modules/faq/faq.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { GallerycategoryComponent } from './modules/gallerycategory/gallerycategory.component';
import { HomeComponent } from './modules/home/home.component';
import { ManagementteamComponent } from './modules/managementteam/managementteam.component';
import { MissionComponent } from './modules/mission/mission.component';
import { NetgateComponent } from './modules/netgate/netgate.component';
import { NetgatedetailsComponent } from './modules/netgatedetails/netgatedetails.component';
import { PartnershipsComponent } from './modules/partnerships/partnerships.component';
import { TagservicesComponent } from './modules/tagservices/tagservices.component';
import { TeammemberdetailComponent } from './modules/teammemberdetail/teammemberdetail.component';
import { TechnicalserviceComponent } from './modules/technicalservice/technicalservice.component';
import { TrackOrderComponent } from './modules/track-order/track-order.component';
import { WrongrouteComponent } from './modules/wrongroute/wrongroute.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { TestimonialsComponent } from './shared/components/testimonials/testimonials.component';
import { NewsletterComponent } from './modules/newsletter/newsletter.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutusComponent
  },
  {
    path: 'our-services',
    component: TagservicesComponent
  },
  {
    path: 'netgate',
    component: NetgateComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog-detail/:id',
    component: BlogdetailsComponent
  },
  {
    path: 'netgate-detail/:id',
    component: NetgatedetailsComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'carousel',
    component: CarouselComponent
  },
  {
    path: 'album',
    component: GallerycategoryComponent
  },
  {
    path: 'gallery/:id',
    component: GalleryComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'track-my-order',
    component: TrackOrderComponent
  },
  {
    path: 'management',
    component: ManagementteamComponent
  },
  {
    path: 'our-mission-and-vision',
    component: MissionComponent
  },
  {
    path: 'blog-csr',
    component: BlogcsrComponent
  },
  {
    path: 'partnerships',
    component: PartnershipsComponent
  },
  {
    path: 'consultancy-services',
    component: TagservicesComponent
  },
  {
    path: 'technical-services',
    component: TechnicalserviceComponent
  },
  {
    path: 'managerdetail',
    component: TeammemberdetailComponent
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent
  },
  {
    path: 'newsletter',
    component: NewsletterComponent
  }

  ]
},

//Wild Card Route
{
  path: '**',
  pathMatch: 'full',
  component: WrongrouteComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
