    import { Component } from '@angular/core';
    import { HeroSectionComponent } from '../hero-section/hero-section.component';
    import { PricingSection } from '../pricing-section/pricing-section';
    import {ContactSection} from '../contact-section/contact-section.component';
    import { FeaturesSectionComponent } from '../features-section/features-section.component';
    import { ClientFeaturesSectionComponent } from '../client-features-section/client-features-section.component';
    import { FooterSection } from '../footer-section/footer-section.component';
    import { VideoSectionComponent } from '../video-section/video-section.component';
    import { AboutTeamSectionComponent } from '../about-team-section/about-team-section.component';


@Component({
  selector: 'app-layout',
  imports: [
    HeroSectionComponent,
    FeaturesSectionComponent,
    VideoSectionComponent,
    AboutTeamSectionComponent,
    ClientFeaturesSectionComponent,
    PricingSection,
    ContactSection,
    FooterSection],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
