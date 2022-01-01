const { Controller, syslib } = require('regoch-web');


class FormCtrl extends Controller {

  constructor(app) {
    super();
    this.testForm = new syslib.Form('testF');
    this.testForm.debugOptions = {
      setControl: true,
      setControls: false,
      getControl: false,
      getControls: false,
      delControl: false,
      delControls: false
    };
  }

  async loader(trx) {
    this.setTitle('Form Test');
    this.unloadCSS(['/assets/css/theme.css']);
    await this.loadView('#primary', 'playground/form/primary.html', 'inner');
  }



  async setFullName() {
    this.testForm.setControl('fullName', 'John');

    await syslib.util.sleep(1300);
    this.testForm.setControl('fullName', 'Johnny');

    await syslib.util.sleep(800);
    const fullName = this.testForm.getControl('fullName');
    console.log('fullName::', fullName);

    await syslib.util.sleep(800);
    this.testForm.delControl('fullName');
  }
  async getFullName() {
    const fullName = this.testForm.getControl('fullName');
    console.log('fullName::', fullName);
  }


  async setAge() {
    this.testForm.setControl('age', 23);
  }
  async getAge() {
    const age = this.testForm.getControl('age');
    console.log('age::', typeof age, age);
  }


  async setCountry() {
    this.testForm.setControl('country', 'Croatia');
    await syslib.util.sleep(1300);
    this.testForm.setControl('country', 'UK');
    await syslib.util.sleep(1300);
    this.testForm.delControl('country');
  }
  async getCountry() {
    const country = this.testForm.getControl('country');
    console.log('country::', country);
  }


  async setFamily() {
    this.testForm.setControl('family', ['Betty', 'Lara']);
  }
  async getFamily() {
    const family = this.testForm.getControl('family');
    console.log('family::', family);
  }
  async emptyFamily() {
    this.testForm.delControl('family');
  }


  async setJobs() {
    this.testForm.setControl('jobs', ['IT', 'Marketing']);
  }
  async getJobs() {
    const jobs = this.testForm.getControl('jobs');
    console.log('selected jobs::', jobs);
  }
  async emptyJobs() {
    this.testForm.delControl('jobs');
  }


  async setPet() {
    this.testForm.setControl('pet', 'cat');
  }
  async getPet() {
    const pet = this.testForm.getControl('pet');
    console.log('selected pet::', pet);
  }
  async emptyPet() {
    this.testForm.delControl('pet');
  }


  // used data-rg-print
  async generateAutos() {
    this.$model.autos = [
      { id: 1, name: 'Toyota', price: 8000 },
      { id: 2, name: 'WV', price: 4000 },
      { id: 3, name: 'BMW', price: 6000 },
      { id: 4, name: 'Fiat', price: 1000 },
      { id: 5, name: 'Audi', price: 5000 }
    ];

    await new Promise(r => setTimeout(r, 400));
    this.testForm.setControl('autosN', 2);
  }

  // used data-rg-echo
  async generatePlants() {
    this.$model.plants = [
      { id: 1, name: 'Corn', price: 8000 },
      { id: 2, name: 'Ananas', price: 4000 },
      { id: 3, name: 'Banana', price: 6000 },
      { id: 4, name: 'Potato', price: 1000 },
      { id: 5, name: 'Apple', price: 5000 }
    ];

    await new Promise(r => setTimeout(r, 700));
    this.testForm.setControl('plantsN', 3);
  }



  async setAll() {
    this.testForm.setControls({
      fullName: 'John Doe',
      age: 48,
      country: 'Kenya',
      family: ['Mary', 'Betty'],
      jobs: ['IT'],
      pet: 'horse',
      autosN: 5,
      plantsN: 5,
    });
  }



  // set control with name="fruit.seller.name"
  async setFruit() {
    const fruit = {
      name: 'apple',
      price: 22,
      seller: {
        name: 'Drog Ltd',
        city: 'London'
      }
    };

    this.testForm.setControl('fruit.name', fruit.name);
    this.testForm.setControl('fruit.seller.name', fruit.seller.name);
  }



}


module.exports = FormCtrl;
