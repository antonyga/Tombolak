// Preload .txt file with list of tasks

function Preload(){
    raw = loadStrings('tasks.txt');
    
}

function setup(){
    noCanvas();
    let sdf = raw[0];
    console.log(sdf);
}


//var button = document.getElementById('rndBtn');


//button.onclick = function randomTask (){    
    
    /*const selectedTaskss = document.querySelector('.task p')
    const task = ['HelloWorld', 'do-while', 'sample of a boolean'];
    const computerNumber = Math.floor(Math.random() * 3); 
    const lastChoice = task[computerNumber];   
    selectedTaskss.textContent = (`Your task is: ${lastChoice}`);
    console.log(computerNumber);*/  
    //tasksList = loadStrings('tasks.txt');
    //let roro = tasksList[0];
    //console.log(roro); 
    
//}

Preload();
setup();
