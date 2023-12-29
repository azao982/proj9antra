import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from './cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  private apiUrl = 'http://localhost:9091/api/cours';

  constructor(private http: HttpClient) { }
  addCours(cour: Cours): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/ajouterCours`, cour);
  }
  getListeCours():Observable<Cours[]> {
    return this.http.get<Cours[]>(`${this.apiUrl}/ConsulterCours`);
  }
  supprimerCours(coursId: number): Observable<void> {
    // Utiliser `void` car le serveur ne renvoie probablement pas un nouvel objet Cours lors de la suppression
    return this.http.delete<void>(`${this.apiUrl}/supprimerCours/${coursId}`);
  }
  getById(id: number): Observable<Cours> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Cours>(url);
  }
  updateCours(cours: Cours, id: number): Observable<void> {
    const url = `${this.apiUrl}/ModifierCours/${id}`;
    return this.http.put<void>(url, cours);
  }

}
