let attendeesArray = [];

function handleFiles(files){
    if(window.handleFiles){
        getAsText(files[0]);
    }
    else{
        alert('fileReader not supported in this browser.');
    }
}

function getAsText(fileToRead){
    var reader = new FileReader();    
    // Read the file into memory as UFT-8
    reader.readAsText(fileToRead);

    reader.onload = loadHandler;

    // Handle load errors
    reader.onerror = errorHandler;    
}

function loadHandler(event){
    var csv = event.target.result; 
    processData(csv);  
}

function processData(csv){
    // Split the csv array to separate each task in the list.
    var allTextLines = csv.split('\n');
    
    // Pass the array
    attendeesArray = allTextLines;    
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Cannot read file!");
	}
}

const randomizerWinner = ()=>{    
    const task = document.querySelector('.task p');
    let min = 0;
    let max = attendeesArray.length - 1;

    // Get a random number from total items in array. Let's say the array has 10 items.
    // This line below chose a random number between 0 and 9.
    let winnerIndex = Math.floor(Math.random() * (max - min));
    
    // In the line below we set the choosen number to an item position in the array attendeesArray.
    // Lets say the array contains 3 items ('Mary', 'Sussy', 'Pedro'). If the chosen number is 0
    // the variable winner will be set to 'Mary'.
    let winner = attendeesArray[winnerIndex];

    // Pass the choosen task to the HTML, so user can visualize it.
    task.textContent = winner;    
}

// The button that triggers the randomizerWinner function.
document.querySelector('.randomBtn button').addEventListener('click', randomizerWinner);