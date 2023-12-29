import { Component } from '@angular/core';
import { CoursService } from '../cours.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifiercours',
  templateUrl: './modifiercours.component.html',
  styleUrls: ['./modifiercours.component.css']
})
export class ModifiercoursComponent {
  constructor(private coursService: CoursService, private activatedRoute: ActivatedRoute,private router:Router) {}
  ngOnInit(): void {
    const id : any = this.activatedRoute.snapshot.paramMap.get('id');
    this.coursService.getById(id).subscribe(cours => {
      this.cours = cours;
    });
  }
  cours: any = {
    nomDuCours: '',
    prix: '',
    image: '',
  };
  onUpdate() {
    // Access all form data from 'formData' object
    console.log('Form Data:', this.cours);
  
    // Appeler la fonction de mise à jour du service
    this.coursService.updateCours(this.cours, this.cours.id).subscribe(() => {
      alert('Le cours a été modifié avec succès!'); // Use alert for success message
      // Rediriger vers la liste des cours après la mise à jour
      this.router.navigate(['/List']);
    }, error => {
      alert('Une erreur s\'est produite lors de la modification du cours.'); // Use alert for error message
    });
  }
  formData(arg0: string, formData: any) {
    throw new Error('Method not implemented.');
  }  
}
