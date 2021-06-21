(function(){
    const show = document.querySelector(".show-container");
    const bdy = document.querySelector(".result-container");
    const res = document.querySelector(".result");
    const setQuantity = document.querySelector("#setQ");
    const timesToPlayText = document.querySelector(".times-to-play-show p");
    let elemId;
    let randomWord;

    const showItems = ()=>{
        return (`
                   <div class="userShowItem">
                   <h3>You score ${winCounter}</h3>
                   <h4>Your  choice </h4>
                   <button class="items-column g-btn" id=${elemId}>
                       <span class="fa fa-hand-${elemId}-o fa-fw fa-2x"></span>
                   </button>
                   </div>
                  
                    <div class="computerShowItem">
                    <h3>Computer score ${loseCounter}</h3>
                    <h4>Computer choice </h4>
                    <button class="items-column g-btn" id=${randomWord}>
                       <span class="fa fa-hand-${randomWord}-o fa-fw fa-2x"></span>
                    </button>
                    </div> 
        `);
    };

    let bgColors = [" linear-gradient(\n" + "90deg\n" + ", #cfecd0, #a0cea7, #9ec0db)", "linear-gradient(\n" + " 90deg\n" + ", #cfecd0, #ffc5ca)", "linear-gradient(\n" + "90deg\n" + ", #ee5c87, #ffc5ca, #d587b3)"]

    document.querySelector("#setQbtn").addEventListener("click", startGame);

    let clickCounter = 0;
    let winCounter = 0;
    let loseCounter = 0;

    function startGame(){
        const setQ = +setQuantity.value;

        if (setQ > 0){
            timesToPlayText.innerHTML = `We will play ${setQ} times, let's go!`;
            document.querySelectorAll('.g-btn').forEach(item =>{
                item.addEventListener('click', checkGame);
            });


            function checkGame(){
                    clickCounter ++;
                    elemId = this.id;
                    let newSetq = setQ + 1;
                if(clickCounter < newSetq){
                    //random word
                    const words = ['rock','paper','scissors','lizard','spock'];
                    const num = Math.floor(Math.random() * words.length);
                     randomWord = words[num];
                    // show item that user chose and random item
                    res.innerHTML = "";

                    if(randomWord === "scissors" && elemId === "rock"||
                        randomWord === "spock" && elemId === "rock"||
                        randomWord === "lizard" && elemId === "rock"||

                        randomWord === "rock" && elemId === "paper"||
                        randomWord ==="spock" && elemId === "paper"||

                        randomWord === "paper" && elemId === "scissors" ||
                        randomWord === "lizard" && elemId ==="scissors" ||
                        randomWord === "spock" && elemId ==="scissors" ||

                        randomWord === "spock" && elemId === "lizard" ||
                        randomWord === "paper" && elemId === "lizard"||

                        randomWord === "scissors"&& elemId === "spock"||
                        randomWord ==="rock" && elemId === "spock"
                    ){
                        winCounter ++;
                        show.innerHTML = showItems();
                    } else if (randomWord === elemId){
                        show.innerHTML = showItems();
                    } else{
                        loseCounter ++;
                        show.innerHTML = showItems();
                    }

                }
                if (setQ === clickCounter){

                    const  showEnd = (result, color) =>{
                        res.innerHTML = result;
                        bdy.style.background = color;
                    }

                    let score = winCounter - loseCounter;
                    bdy.style.color = "#7952B3";

                    if(score > 0){
                        showEnd("You win!", bgColors[0]);
                    } else if (score === 0){
                        showEnd("Draw!" ,  bgColors[1]);
                    } else{
                        showEnd("lost!" ,  bgColors[2]);
                    }
                }

            }
        }
    }


})();

