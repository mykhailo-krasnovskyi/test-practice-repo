// function greetings(callback) {
//     const name = 'John';
//     callback(name);
// }

// function sayHi(name) {
//     console.log('Hi, my name is ' + name);
// }

// function sayHello(name) {
//     console.log('Hello, my name is ' + name);
// }

// greetings(sayHi);
// greetings(sayHello);



// console.log('Start');
// console.log(2 + 2);
// console.log(3 + 3);
// console.log('Finish');


// console.log('Start');

// setTimeout(() => {
//     console.log('This text is shown in 2 secs');
// }, 2000);

// console.log('Finish');

function processPayment(onSuccessCb, onFailureCb, paymentId) {

    const isPaymentSuccess = true;

    if (isPaymentSuccess) {
        onSuccessCb(paymentId);
    } else {
        onFailureCb(paymentId);
    }

}


function onPaymentSuccess(id) {
    console.log(`Payment ${id} is success `);
}

function onPaymentFailure(id) {
    console.log(`Payment ${id} is failed `);
}

processPayment(onPaymentSuccess, onPaymentFailure, '7742747742');