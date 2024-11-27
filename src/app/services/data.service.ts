import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Row, Structure } from '../models/interface';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'https://apps.humanatlas.io/asctb-api/v2/1SqNmcPDB8PrZF1BhzgdKBxkfLcCR8VYMAkSIbnK_AXA/949267305';

  constructor(private http: HttpClient) {}

  fetchAnatomicalStructures(): Observable<Structure[]> {
    return this.http.get<{ data: Row[] }>(this.baseUrl).pipe(
      map((response) => {
        const rows = response.data;
        const uniqueAnotomicalStructures = new Map<string, Structure>();
        
        rows.forEach((row) => {
          row.anatomical_structures.forEach((structure) => {
            if (structure.name && !uniqueAnotomicalStructures.has(structure.name)) {
              uniqueAnotomicalStructures.set(structure.name, structure);
            }
          });
        });
  
        return Array.from(uniqueAnotomicalStructures.values());
      })
    );
  }
  

  fetchStructureDetail(id: string): Observable<any> {
    const baseIri = 'https://www.ebi.ac.uk/ols4/api/ontologies/uberon/terms?iri=http://purl.obolibrary.org/obo/';
    const iri = `${baseIri}${id.replace(':', '_')}`;
    return this.http.get(iri).pipe(
      map((response: any) => {
        if (response._embedded && response._embedded.terms && response._embedded.terms.length > 0) {
          const term = response._embedded.terms[0];
          return {
            name: term.label,
            description: term.description ? term.description[0] : 'No description available',
            ontologyLink: term.obo_id,
            iri: term.iri
          };
        }
        throw new Error('No term found');
      })
    );
  }
}
