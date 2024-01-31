// function

export let add = (x, y) => {
  return x + y;
};

// object
export let person = {
  name: "vamshi",
  age: 23,
};

// class

export class cars {
  constructor(name, year) {
    this.carName = name;
    this.carYear = year;
  }
  displayInfo(){
    console.log(`carname : ${this.carName} , year : ${this.carYear}`);
  }
}
