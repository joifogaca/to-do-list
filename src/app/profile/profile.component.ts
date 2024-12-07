import { Component, NgModule } from '@angular/core';
import { FotoComponent } from './foto/foto.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FotoComponent, FormsModule],
  providers: [Router],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  nome: string ='';
  email: string ='joi.fogaca@gmail.com';
  constructor(private router: Router, private route: ActivatedRoute) {}

  goToAlterarEmail(): void {
    console.log('goToAlterarEmail');
    this.router.navigate(['altera-email'], {relativeTo: this.route});
  }



}
