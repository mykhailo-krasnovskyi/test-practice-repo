const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = Math.random();
        if (number > 0.5) {
            resolve(number);
        } else {
            reject(new Error('Operation is wrong'));
        }
    }, 3000);
})

async function printValue() {
    try {
        const value = await newPromise;
        console.log(value);
    } catch (error) {
        console.log(error);
    }

}

printValue();

// newPromise
//     .then(value => console.log('FROM THEN ' + value))
//     .catch((error) => console.log('FROM CATCH' + error))
//     .finally(() => console.log('Finally'));

// console.log(newPromise)


// function asyncFoo() {
//     setTimeout(() => {
//         return 'Test string';

//     }, 0);
// }

// console.log(asyncFoo());