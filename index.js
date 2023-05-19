const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
const root = document.getElementById("root");
  const h1 = document.createElement("h1");
h1.innerHTML = "FREELANCERS";
  root.appendChild(h1);
h1.style.backgroundColor= "red";
  const ul = document.createElement('ul');

  ul.setAttribute('users', 'list-items');
  for (let i = 0; i<= users.length-1; i++){
    const li = document.createElement("li");

    //li.innerHTML = users[i].occupation;
    //concatnation below
  //li.innerHTML=users[i].name +" "+ "is "+ users[i].age + " years old.";
    //temporal literal below
   li.innerHTML=`${users[i].name} is ${users[i].age} year olds.`;
    li.style.fontSize= "20pt";
    //li.style.fontFamily= "times"
    li.className= "person";
    ul.appendChild(li);
  }
root.appendChild(ul);
}

//call the main function
main();
