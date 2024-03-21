function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function createLittleSq (){     
    const square = document.createElement("div");
    square.className = 'littlesquare'
    return square        
}
function createBombs(maxnum){
    let bombs = [];
    while(bombs.length < 16){
        let singleBomb = getRndInteger(1, maxnum);
        if (!bombs.includes(singleBomb)){
            bombs.push(singleBomb)
        }
        
    } 
    return bombs

}

let button = document.getElementById('startbutton')

button.addEventListener('click', function(){
        
    let choice = parseInt(document.getElementById("choice").value)
    
    let mainsquare = document.getElementById('mainsquare')
    mainsquare.innerHTML = '';
    
    if(choice === 1){
        for (let i = 1; i<= 100; i++){
            let littlesq = createLittleSq();                       
            mainsquare.appendChild(littlesq);
            littlesq.addEventListener('click', function(){
                littlesq.classList.add('squareon')
                const node = document.createElement("div");
                const textnode = document.createTextNode(i);
                node.appendChild(textnode)
                littlesq.appendChild(node)
                console.log('Hai cliccato la cella n.', i)
                
            }, {once : true})
        }
        let mines = createBombs(100);
        console.log(mines)




    } if (choice === 2){
        for (let i = 1; i<= 81; i++){
            let littlesq = createLittleSq();
            mainsquare.appendChild(littlesq);
            littlesq.classList.add('ninesquare')
            littlesq.addEventListener('click', function(){
                littlesq.classList.add('squareon')
                const node = document.createElement("div");
                const textnode = document.createTextNode(i);
                node.appendChild(textnode)
                littlesq.appendChild(node)
                console.log('Hai cliccato la cella n.', i)
                
            }, {once : true})
        }
    } if (choice === 3) {
        for (let i = 1; i<= 49; i++){
            let littlesq = createLittleSq();
            mainsquare.appendChild(littlesq);
            littlesq.classList.add('sevensquare')
            littlesq.addEventListener('click', function(){
                littlesq.classList.add('squareon')
                const node = document.createElement("div");
                const textnode = document.createTextNode(i);
                node.appendChild(textnode)
                littlesq.appendChild(node)
                console.log('Hai cliccato la cella n.', i)
                
            }, {once : true})
        }
    }
})   

