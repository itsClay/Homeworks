function titleize(names, callback) {
  let titleNames = names.map( name => {
    return `Mx. ${name} Jingleheimer Schmidt`
  });
  callback(titleNames);
}

// titleize(['John', 'Jacob', 'Schmitty!'], el => console.log(el));

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;

}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'PHRHRHRHRHRRr'`);
};

Elephant.prototype.grow = function () {
  this.height += 12;
};

Elephant.prototype.addTrick(trick) = function () {
  this.tricks.push(trick)
};

Elephant.prototype.play = function () {
  console.log(`${this.name} is ${this.tricks[Math.random(0, this.tricks.length)]}`)
};
