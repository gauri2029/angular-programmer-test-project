# Angular Programmer Test- Anatomical Structures

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

This is a project to retrieve data from APIs and display it on the interface.
#I have used Angular 18 for this project.
# API link-
All structures- https://apps.humanatlas.io/asctb-api/v2/1SqNmcPDB8PrZF1BhzgdKBxkfLcCR8VYMAkSIbnK_AXA/949267305
Example Structure link- https://www.ebi.ac.uk/ols/api/ontologies/uberon/terms?iri=http://purl.obolibrary.org/obo/UBERON_0002302

# Phase-I:
1. The project has 2 components-
1. AngularTestStructureComponent - it will display all the retrieved structures initially.
2. AngularTestStructureDetailComponent - after clicking on any one of the names of the structure, it will display a dialog with the following details-
Name ( label )
Description ( description or annotation.definition )
Ontology Link ( obo_id )
IRI ( iri )

2. I used Angular's HttpClient to perform HTTP GET requests and handle the response asynchronously for this task.

3. I created a data service for fetching and filtering unique anatomical structures by name using a Map to avoid duplicates.
4. I created a state for this project using Ngxs (https://www.ngxs.io/)- The state is updated with the fetched data and made available to the component via the Store.
5. The unique anatomical structures list is bound to an observable (structures$) fetched using NGXS and the DataService.

# Phase-II:
- When a structure is clicked, the ID of the structure is passed to the API, and additional details (name, description, ontology link, and IRI) are fetched asynchronously.
Upon fetching the detailed information, I have displayed the details in a modal dialog. (Angular Material's MatDialog component is used for the modal functionality.)
*The modal contains the fetched data along with a close button for dismissing the modal.

- Error Handling: For structures that do not have an ID, I have displayed appropriate error messages. This handles edge cases and ensures that the application remains stable even with incomplete data.

- The AppState class is used to manage the state of the anatomical structures. The FetchStructures action is dispatched from the component to fetch the data from the API, and the state is updated using the tap operator from RxJS. NGXS ensures that the application follows a unidirectional data flow.

- I have inserted the data fetching logic in a dedicated DataService, while I have handled the state management logic separately in the AppState class.

* Angular Material: The project uses Angular Material to enhance the UI. The modal dialog for displaying structure details is created using the MatDialog component, and I have used other Angular Material components such as MatCard, MatInput, and MatFormField to structure the UI components. While the UI design is simple, I focused primarily on the functionality of the project.

- For extra points, I deployed the application to GitHub Pages, allowing everyone to view it directly in their web browser.
- The deployment process involved building the Angular project and pushing the build files to the GitHub Pages branch.

- References- https://www.ngxs.io/, https://material.angular.io/, https://v18.angular.dev/overview