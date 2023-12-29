import { Component } from '@angular/core';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.component.html',
  styleUrls: ['./list-cours.component.css']
})
export class ListCoursComponent {
cour:Cours[]=[];
constructor(private coursService: CoursService, private router: Router) {}
ngOnInit(): void {
  this.getCours();
  
}
private getCours(): void {
  this.coursService.getListeCours().subscribe(data => {
    this.cour = data;
    
  });
 
}
supprimerCours(id: number): void {
  if (id === undefined || id === null) {
    console.error("L'ID du cours est indéfini.");
    return;
  }
  console.log('ID du cours à supprimer :', id);

  this.coursService.supprimerCours(id).subscribe(
    () => {
      window.location.reload();
       // Replace console.log with alert
      // Effectuer d'autres actions si nécessaire
    },
    error => {
      console.error('Échec de la suppression du cours :', error);

      if (error instanceof HttpErrorResponse) {
        try {
          const errorObject = JSON.parse(error.error);
          console.log('Contenu de l\'erreur :', errorObject);
        } catch (jsonError) {
          console.log('Erreur lors de l\'analyse JSON de la réponse.');
          console.log('Réponse brute du serveur :', error.error);
        }
      }
    }
  );
     window.location.reload();

}
redirigerVersPageModifier(coursId: number): void {
  // Utilisez le service Router pour naviguer vers la page de modification
  this.router.navigate(['/modifier', coursId]);
}
}
