import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('0.5s ease-in-out', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('0.5s ease-in-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ConnexionComponent implements OnInit {
  showForm = true;
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email, this.emailDomainValidator]],
      password: ['', Validators.required]
    });
  }

  getErrorMessage(fieldName: string): string {
    const control = this.loginForm.get(fieldName);

    if (control.hasError('required')) {
      return 'Ce champ est obligatoire';
    } else if (control.hasError('email')) {
      return 'Adresse email invalide';
    } else if (control.hasError('minlength')) {
      return 'Le mot de passe doit contenir au moins 6 caractères';
    }

    return '';
  }

  emailDomainValidator(control: FormControl): { [key: string]: boolean } | null {
    const email = control.value as string;

    if (email && email.indexOf('@') !== -1) {
      const [, domain] = email.split('@');
      if (domain.indexOf('.') === -1) {
        return { emailDomain: true }; // Validation failed
      }
    }

    return null; // Validation passed
  }

  onLogin(): void {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      (data: any) => {
        this.handleRoleNavigation(data.role);
        localStorage.setItem('role', data.role);
      },
      (error) => {
        console.error(error);
        this.errorMessage = "Vous n'êtes pas encore inscrit";
        alert(this.errorMessage);
      }
    );
  }

  private handleRoleNavigation(role: string): void {
    switch (role) {
      case 'admin':
        this.router.navigate(['/Listcours']);
        break;
      // Ajoutez d'autres cas selon vos besoins
      default:
        // Fallback vers une page par défaut ou gestion d'erreur
        break;
    }
  }
  toggleFormAnimation() {
    this.showForm = !this.showForm;
  }
}
