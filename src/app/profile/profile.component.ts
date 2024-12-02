import { Component } from '@angular/core';
import { FotoComponent } from './foto/foto.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FotoComponent, FormsModule],
  providers: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  nome: string ='';
  email: string ='joi.fogaca@gmail.com';

}
