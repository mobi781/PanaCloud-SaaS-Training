console.log("Before Prepare food");

function prepareFood(data) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (data !== 21) {
                console.log("Prepare Food");
                resolve("Food is Ready");
            }
            else {
                reject("Value not acceptable");
            }

        }, 10);
    });

    return promise;
}
function prepareFrenchToast() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Prepare Frensh Toast");
            resolve("French Toast is Ready");
        }, 20);
    });
    return promise;
}
function prepareCoffee() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Prepare Coffee");
            resolve("Coffee is Ready");
        }, 30);
    });
    return promise;
}

async function startProcess() {
    try {
        let foodValue = await prepareFood(21);
        console.log("Food ", foodValue);
        console.log("After Prepare food dinner is ready");
        let frenchToastValue = await prepareFrenchToast();
        console.log("Toast ", frenchToastValue);
        console.log("After Prepare food dinner is ready");
        let coffeeValue = await prepareCoffee();
        console.log("Coffee ", coffeeValue);
        console.log("After Prepare food dinner is ready");
    }
    catch (error) {
        console.log("Error in catch = ", error);
    }
}
startProcess();

console.log('here second method FOR understanding promises');

let promise2 = new Promise((resolve, reject) => {
    let condition = false;
    condition == true ? resolve("resolve function executed") : reject("reject function executed");

})
promise2.then((message) => {
    console.log("congratulation your call is accepted and " + message)
})
    .catch((message) => {
        console.log("Sorry your call is rejected and ", message)
    })

