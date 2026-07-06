import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-video-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.css'],
})
export class VideoSectionComponent {}
