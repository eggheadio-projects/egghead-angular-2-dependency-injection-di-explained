export class OtherDataService {

  items:Array<any> = [
    { id: 0, name: 'Person', country: 'country'},
    { id: 1, name: 'Person', country: 'country'},
    { id: 2, name: 'Person', country: 'country'}
  ];

  getItems() {
    return this.items;
  }

}
