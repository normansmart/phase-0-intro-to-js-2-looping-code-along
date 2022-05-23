// Code your solutions in this file

const names = ["Guadalupa", "Ollie", "Aki"];

function writeCards(names, event) {

    // 1) Create a new, empty array to hold the messages.
   
    // So, this should be done within the function. We want to be
    // able to update this locally-scoped array with the information
    // we get from each name in the array, combined with the event
    const messages = [];
   
     for (let i = 0; i < names.length; i++) {
   
       // 2) using string interpolation
   
       // What's great is that you've already discovered template strings
       // String concatenation has its uses but this far better.
       const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
   
       // So, instead of logging the message to the console
       // we're going to push it to the messages array
       messages.push(message);
     }
   
     // 3) After the loop finishes and all of the messages
     // have been added to the new array, return the new array.
     return messages;
   
   }


   function countDown() {
   
    let countup = 0;
    while (countup < 11) {
      console.log(countup++);
    }


}