(function(){

    let bgColors = [" linear-gradient(\n" + "90deg\n" + ", #cfecd0, #a0cea7, #9ec0db)", "linear-gradient(\n" + " 90deg\n" + ", #cfecd0, #ffc5ca)", "linear-gradient(\n" + "90deg\n" + ", #ee5c87, #ffc5ca, #d587b3)"]
    document.querySelector("#setQbtn").addEventListener("click", startGame);


    function startGame(){
        const setQ = +document.querySelector("#setQ").value;
        if (setQ > 0){
            document.querySelector(".times-to-play-show p").innerHTML = `We will play ${setQ} times, let's go!`;
            document.querySelectorAll('.g-btn').forEach(item =>{
                item.addEventListener('click', checkGame);
            });
            let clickCounter = 0;
            let winCounter = 0;
            let loseCounter = 0;

            function checkGame(){
                clickCounter ++;
                //getting elements
                const show = document.querySelector(".show-container");
                const bdy = document.querySelector(".result-container");
                const res = document.querySelector(".result");
                let elemId = this.id;
                if(clickCounter <= setQ){
                    //random word
                    const words = ['rock','paper','scissors','lizard','spock'];
                    const num = Math.floor(Math.random() * words.length);
                    const randomWord = words[num];
                    // show item that user chose and random item
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
                `);};

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
                    let resBtn = document.querySelector(".resBtn");
                    resBtn.style.display = "block";

                    resBtn.addEventListener("click", function(){
                        const resultItems = ()=>{
                            return (`
                       <div class="userShowItem">
                            <h3>You score ${winCounter}</h3>
                       </div>
                        
                        <div class="computerShowItem">
                            <h3>Computer score ${loseCounter}</h3>
                        </div> 
                        `);}

                        const  showEnd = (result, color) =>{
                            res.innerHTML = result;
                            bdy.style.background = color;
                        }

                        let score = winCounter - loseCounter;
                        bdy.style.color = "#7952B3";
                        show.innerHTML = resultItems();

                        if(score > 0){
                            showEnd("You win!", bgColors[0]);
                        } else if (score === 0){
                            showEnd("Draw!" ,  bgColors[1]);
                        } else{
                            showEnd("lost!" ,  bgColors[2]);
                        }
                    })
                }

            }
        }

    }


})();

