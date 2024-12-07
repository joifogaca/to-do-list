import { Component } from '@angular/core';
import { FotoComponent } from './foto/foto.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FotoComponent, FormsModule],
  providers: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private router: Router) {}

  goToAlterarEmail(): void {
    this.router.navigate(['profile/altera-email']);
  }

  nome: string ='';
  email: string ='joi.fogaca@gmail.com';

}
