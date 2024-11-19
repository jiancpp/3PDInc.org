
let RightB = document.getElementById('RightButton');
let LeftB = document.getElementById('LeftButton');

let prog1 = document.querySelector('.Items .program1 .ProgramContainer');  
let prog2 = document.querySelector('.Items .program2 .ProgramContainer');  
let prog3 = document.querySelector('.Items .program3 .ProgramContainer');  

let item1Zindex = document.querySelector('.Items .program1');

let item2Zindex = document.querySelector('.Items .program2');

let item3Zindex = document.querySelector('.Items .program3');

let fadeinbox1 = document.querySelector('.program1 .fadeinbox');

let fadeinbox2 = document.querySelector('.program2 .fadeinbox');

let fadeinbox3 = document.querySelector('.program3 .fadeinbox');

let programArray = [prog1,prog2,prog3];

let programZindArray = [item1Zindex,item2Zindex,item3Zindex];

let fadeinboxArray = [fadeinbox1,fadeinbox2,fadeinbox3];


moveSliderLeft=()=>{

    RightB.setAttribute('onclick', null);
    LeftB.setAttribute('onclick', null);

    if(programArray[0] == prog1){
        programArray[0].setAttribute('style','transform: translateX(740px) scale(1);');
   
    }else if(programArray[0] == prog2){
        programArray[0].setAttribute('style','transform: translateX(230px) scale(0.645161);');
    }else if(programArray[0] == prog3){
        programArray[0].setAttribute('style','transform: translateX(0px) scale(1);');
    }

    if(programArray[1] == prog2){
        programArray[1].setAttribute('style','transform: translateX(-230px) scale(0.645161);');
    }else if(programArray[1] == prog3){
        programArray[1].setAttribute('style','transform: translateX(-740px) scale(1);');
    }else if(programArray[1] == prog1){
        programArray[1].setAttribute('style','transform: translateX(0px) scale(1);');
    }

    if(programArray[2] == prog3){
        programArray[2].setAttribute('style','transform: translateX(-370px) scale(1.55);');
    }else if(programArray[2] == prog2){
        programArray[2].setAttribute('style','transform: translateX(0px) scale(1);');
    }else if(programArray[2] == prog1){
        programArray[2].setAttribute('style','transform: translateX(365px) scale(1.55);');
    }
    

    fadeinboxArray[1].classList.remove('lighteneffect');
    fadeinboxArray[1].classList.add('darkeneffect');

    fadeinboxArray[2].classList.remove('darkeneffect');
    fadeinboxArray[2].classList.add('lighteneffect');

    
    programZindArray[0].setAttribute('style', 'z-index: 100;');

    programZindArray[1].setAttribute('style', 'z-index: 200;');

    programZindArray[2].setAttribute('style', 'z-index: 300;');



    setTimeout(()=>{
            programArray.push(programArray.shift());

            programZindArray.push(programZindArray.shift());

            fadeinboxArray.push(fadeinboxArray.shift());

            LeftB.setAttribute('onclick', "moveSliderLeft()");
            RightB.setAttribute('onclick', "moveSliderRight()");
        }, 1250);
}


moveSliderRight=()=>{

    RightB.setAttribute('onclick', null);
    LeftB.setAttribute('onclick', null);

    if(programArray[0] == prog1){
    programArray[0].setAttribute('style','transform: translateX(370px) scale(1.55);');
    }else if(programArray[0] == prog2){
            programArray[0].setAttribute('style','transform: translateX(0px) scale(1);');
    }else if(programArray[0] == prog3){
            programArray[0].setAttribute('style','transform: translateX(-350px) scale(1.55);');
    }

    if(programArray[1] == prog2){
    programArray[1].setAttribute('style','transform: translateX(240px) scale(0.645161);');
    }else if(programArray[1] == prog3){
        programArray[1].setAttribute('style','transform: translateX(0px) scale(1);');
    }else if(programArray[1] == prog1){
        programArray[1].setAttribute('style','transform: translateX(740px) scale(1);');
}

    if(programArray[2] == prog3){
    programArray[2].setAttribute('style','transform: translateX(-740px) scale(1);');
    }else if(programArray[2] == prog1){
        programArray[2].setAttribute('style','transform: translateX(0px) scale(1);');
    }else if(programArray[2] == prog2){
        programArray[2].setAttribute('style','transform: translateX(-230px) scale(0.645161);');
}
    
    fadeinboxArray[0].classList.remove('darkeneffect');
    fadeinboxArray[0].classList.add('lighteneffect');
    
    fadeinboxArray[1].classList.remove('lighteneffect');
    fadeinboxArray[1].classList.add('darkeneffect');


    
    programZindArray[0].setAttribute('style', 'z-index: 300;');

    programZindArray[1].setAttribute('style', 'z-index: 200;');

    programZindArray[2].setAttribute('style', 'z-index:  100;');

   

    setTimeout(()=>{
        programArray.unshift(programArray.pop());
        
        programZindArray.unshift(programZindArray.pop());

        fadeinboxArray.unshift(fadeinboxArray.pop());

        RightB.setAttribute('onclick', "javascript: moveSliderRight()");
        LeftB.setAttribute('onclick', "javascript: moveSliderLeft()");
    }, 1250);
}



