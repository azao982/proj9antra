import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursService } from '../cours.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {
  coursForm:FormGroup;
  constructor(private coursService:CoursService, private fb:FormBuilder, private router:Router) { }
  onAjouter(){
    this.coursService.addCours(this.coursForm.value).subscribe(data => console.log(data));
    // pour initialiser le formulaire de zero 
    this.router.navigate(['/Listcours']);
     alert("courses added successfully")
  }
ngOnInit(): void {
  this.coursForm = this.fb.group({
    image: ['', Validators.required],
    nomDuCours: ['', Validators.required],
    prix: [null, Validators.required],
  });

}

}
