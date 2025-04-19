function getChesse(callback) {
  setTimeout(() => {
    const chesse = "🧈";
    console.log("here is the chesse", chesse);
    callback(chesse);
  }, 2000);
}

function makeDough(chesse, callback) {
  setTimeout(() => {
    const dough = chesse + "🫓";
    console.log("here is the dough", dough);
    callback(dough);
  }, 2000);
}

function makePizza(dough, callback) {
  setTimeout(() => {
    const pizza = dough + "🍕";
    console.log("here is the pizza", pizza);
    callback(pizza);
  }, 2000);
}

getChesse((chesse) => {
  console.log("get the chesse", chesse);
  makeDough(chesse, (dough) => {
    console.log("got my dough", dough);
    makePizza(dough, (pizza) => {
      console.log("Finally making complete my Pizza", pizza);
    });
  });
});
