// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the first form, and handle its submit event
  const firstForm= document.querySelector('#first-form')

  firstForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [ 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#first-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

      // Use reduce to multiply all the numbers in the data array
      const sum = data.reduce((multiplier, currentElement) => multiplier * currentElement, 1);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#first-form .output').innerHTML = sum
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })



  //Find the second form on the page via id 'second-form'
  const secondForm = document.querySelector('#second-form')
    
  //Listen for the submit action within the second form
  secondForm.addEventListener('submit', function(event){

    //Prevent the page form submitting to a server
      event.preventDefault()
      
      //An array of numbers that the form will use against the number submitted by the user
      let data = [4, 8, 10, 12]

      const inputField = document.querySelector('#second-form .input')
      const userInput = inputField.value
      const userNumber = parseInt(userInput)

      //This prevents the user from submitting anything other than a number
      if(!isNaN(userNumber)){
    
      //Each number in the original array will be multipled by the user's number, thus creating a new array
      const newArray = data.map(num => ` ${num * userNumber}`) 
      
      //Display the newly generated array on the webpage for the user to see.
      document.querySelector('#second-form .output').innerHTML = newArray
   
    }

    //Clear the form field so the user can submit again.
    inputField.value = ''
  })

  //Find the third form on the web page via id 'third-form
  const thirdForm = document.querySelector('#third-form')

  //Listen for the submit action within the third form
  thirdForm.addEventListener('submit', function(event){

    //Prevent the page form submitting to a server
      event.preventDefault()
      
      //An array of numbers that the form will use against the number submitted by the user in this case 'age'
      let data = [18, 24, 36, 45, 65, 80]

      const inputField = document.querySelector('#third-form .input')
      const userInput = inputField.value
      const userNumber = parseInt(userInput)

      //This prevents the user from submitting anything other than a number
      if(!isNaN(userNumber)){

       // The code will cycle through the above array until it finds a number that is greather than the users age
      let findValue = data.find(val => val > userNumber);

      
      //Display the first number greater than user input (age)
      document.querySelector('#third-form .output').innerHTML = findValue
   
    }

    //Clear the form field so the user can submit again.
    inputField.value = ''
  });


  //Find the fourth form on the web page via id 'fourth-form
  const fourthForm = document.querySelector('#fourth-form')

  //Listen for the submit action within the third form
  fourthForm.addEventListener('submit', function(event){

    //Prevent the page form submitting to a server
      event.preventDefault()
      
      //An array of numbers that the form will use against the number submitted by the user
      const data = [1, 3, 2, 4]

      const inputField = document.querySelector('#fourth-form .input')
      const userInput = inputField.value
      const userNumber = parseInt(userInput)
      
      //This prevents the user from submitting anything other than a number
      if(!isNaN(userNumber)){
      
        //This method looks through my 'data' array to see if the number entered by the user is included. If yes, then expect a true output, if no, then false. 
        const dataContainsInput =  data.some((value) => userNumber ===value);
      
          
           //Display true or false depending on result. 
         document.querySelector('#fourth-form .output').innerHTML = dataContainsInput

      }
      

    //Clear the form field so the user can submit again.
    inputField.value = ''
  });

});