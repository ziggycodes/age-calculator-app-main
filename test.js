function valleyCount(n, path){
    let count = 0
    let valley = 0
    
    for (let i = 0; i < path.length; i++){

        if(count === 0) {
            valley++
        }
        
        else if(count !== 0){
            valley--
        }
        
        else if (path[i] === "U"){
            count++
        }
        else if(path[i] === "D") {
            count--
        }

        
        
        
       
    }

    return valley - n + 1
    
    
}

let x = "UDDDUDUU"
console.log(valleyCount(8, x))