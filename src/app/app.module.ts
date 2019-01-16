import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JobsComponent } from './jobs/jobs.component';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { HuThirteenComponent } from './events/individual-events/01-hu-thirteen/hu-thirteen.component';
import { HuTwelveComponent } from './events/individual-events/02-hu-twelve/hu-twelve.component';
import { HuElevenComponent } from './events/individual-events/03-hu-eleven/hu-eleven.component';
import { HuTenComponent } from './events/individual-events/04-hu-ten/hu-ten.component';
import { HuNineComponent } from './events/individual-events/05-hu-nine/hu-nine.component';
import { HuEightComponent } from './events/individual-events/06-hu-eight/hu-eight.component';
import { HuSevenComponent } from './events/individual-events/07-hu-seven/hu-seven.component';
import { HuSixComponent } from './events/individual-events/08-hu-six/hu-six.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    SponsorsComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    SignUpComponent,
    JobsComponent,
    HuThirteenComponent,
    HuTwelveComponent,
    HuElevenComponent,
    HuTenComponent,
    HuNineComponent,
    HuEightComponent,
    HuSevenComponent,
    HuSixComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    AccordionModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
