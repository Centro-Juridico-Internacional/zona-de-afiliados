import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialMediaItem {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  SOCIALMEDIA: SocialMediaItem[] = [
    { name: 'Linkedin', url: 'https://www.linkedin.com/company/centro-juridico-internacional-s-a-s-/', icon: '/assets/footer/in.svg' },
    { name: 'Facebook', url: 'https://www.facebook.com/CentroJuridicoInternacional/', icon: '/assets/footer/fb.svg' },
    { name: 'YouTube', url: 'https://youtube.com/channel/UCUMJo4IlIG8bETW-OhoNNkg?si=OoXPD1Q6Iv4cNAk2', icon: '/assets/footer/yt.svg' },
    { name: 'Instagram', url: 'https://www.instagram.com/centrojuridicosas', icon: '/assets/footer/ig.svg' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@centrojuridicosas', icon: '/assets/footer/tiktok.svg' }
  ];
}
