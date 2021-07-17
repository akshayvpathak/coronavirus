//array to save line by line 
let xInputs = [];
let mainString = '';
let numberOfInputLines = 0;

const getInput = async (resolve)=>{
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    readline.on('line',(line)=>{
    readline.close();
 
        xInputs.push(line);
    resolve(line);
    })
}
const getNumberofLines = async (resolve)=>{
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    readline.on('line',(line)=>{
    numberOfInputLines = line; 
    getMultiInput(numberOfInputLines,()=>{
        printData(xInputs);
    });
    readline.close();
    resolve(line);
    })
}


const getLines = (value,callback) => {
    let p = Promise.resolve(); 
    p = p.then(_ => {
        new Promise(resolve => getNumberofLines(resolve));
    });
    
    p.then(()=>{
        callback();
    });
}



const getMultiInput = (InputLines,callback)=>{
    let i = 0;
    let p = Promise.resolve(); 
    for (; i < InputLines; i++) {
        p = p.then(_ => new Promise(resolve => getInput(resolve)));
    }
    p.then(()=>{
        callback();
    });
}



    //get number of lines 
const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
});



readline.on('line',(line)=>{
    mainString = line;
    getLines(line,()=> {
       
    })
       
    readline.close();
})

    const printData = (data) => {
        console.log(mainString);
        console.log(data.length);
        data.map((substring,length)=> {
            if(length>=0){
                if(withCharacter(substring,mainString,substring.length,mainString.length)){
                    console.log('POSITIVE')
                }
                else{
                    console.log('NEGATIVE');
                };
            }
        })

    }

/* function isSubSequence(str1, str2, m, n){
     
    // Base Cases
    if (m == 0)
        return true;
    if (n == 0)
        return false;
          
    // If last characters of two strings
    // are matching
    if (str1[m - 1] == str2[n - 1])
        return isSubSequence(str1, str2,
                             m - 1, n - 1);
 
    // If last characters are not matching
    return isSubSequence(str1, str2, m, n - 1);
} */

function withCharacter(str1 ,str2 ,m, n){

    let j = 0
    let i = 0 


    while (j < m && i < n){
        if(str1[j] == str2[i])
        j = j+1;
        i = i + 1;
    }
        
    if(j == m){
        return true;
    }
    else {
        return false;
    }
}