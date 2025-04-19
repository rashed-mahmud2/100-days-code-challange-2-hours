// const ticket = new Promise((resolve, reject) => {
//   const isBoard = true;
//   if (isBoard) {
//     resolve("You are now in the flight");
//   } else {
//     reject("Your flight has been cancelled");
//   }
// });

// ticket
//   .then((data) => {
//     console.log("wohoo", data);
//   })
//   .catch((data) => {
//     console.log("Oh NO!", data);
//   })
//   .finally(() => {
//     console.log("I will always be executed");
//   });

function getChesse() {
  return new Promise((resolve, rejecet) => {
    setTimeout(() => {
      const chesse = "🧈";
      resolve(chesse);
    }, 2000);
  });
}

function makeDough(chesse) {
  return new Promise((resolve, rejecet) => {
    setTimeout(() => {
      const dough = chesse + "🫓";
      // resolve(dough);
      rejecet("bad chesse");
    }, 2000);
  });
}

function beakPizza(dough) {
  return new Promise((resolve, rejecet) => {
    setTimeout(() => {
      const pizza = dough + "🍕";
      resolve(pizza);
    }, 2000);
  });
}

async function orderPizza() {
  try {
    const chesse = await getChesse();
    console.log("here is the chesse", chesse);

    const dough = await makeDough(chesse);
    console.log("here is the dough", dough);

    const pizza = await beakPizza(dough);
    console.log("here is the pizza", pizza);
  } catch (error) {
    console.log("error occured", error);
  } finally {
    console.log("process completed");
  }
}

orderPizza();
// getChesse()
//   .then((chesse) => {
//     console.log("here is the chesse", chesse);
//     return makeDough(chesse);
//   })
//   .then((dough) => {
//     console.log("here is the dough", dough);
//     return beakPizza(dough);
//   })
//   .then((pizza) => {
//     console.log("here is the pizza", pizza);
//   })
//   .catch((err) => {
//     console.log("error occured", err);
//   })
//   .finally(() => {
//     console.log("Proccess completed");
//   });

const students = [
  { id: "001", name: "Rashed", sports: "cricket" },
  { id: "002", name: "Rahid", sports: "Football" },
  { id: "003", name: "Raju", sports: "cricket" },
  { id: "004", name: "Emran", sports: "Football" },
  { id: "005", name: "Kamrul", sports: "Babminton" },
  { id: "006", name: "Sagor", sports: "Badminton" },
];

console.log(students);

const newarray = students.filter((curValue) => {
  if (curValue.sports === "cricket") {
    return true;
  } else {
    return false;
  }
});

console.log(newarray);

const names = newarray.map((curValue, index, arry) => {
  return `<li>${curValue.name}</li>`;
});

console.log(names);

const div = document.getElementById("container");

div.innerHTML = `<ul>${names.join("")}`;
