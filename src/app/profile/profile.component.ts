import { Component } from '@angular/core';
import { FotoComponent } from './foto/foto.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FotoComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
