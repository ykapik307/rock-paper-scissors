const choices=document.querySelectorAll('.choice');
const score=document.querySelector('.score');
const result=document.querySelector('#result');
const restart=document.querySelector('#restart');
const modal=document.querySelector('.modal');
const scoreboard={
    player:0,
    computer:0
} ;

function play(e)
{
    restart.style.display='inline-block'; // restart button becomes visible
    const playerChoice=e.target.id;          // e is event here
    const computerChoice=getComputerChoice();
    const winner=getWinner(playerChoice,computerChoice);
    showWinner(winner,computerChoice);
    // console.log(playerChoice,computerChoice,winner);
}
 function getComputerChoice()
 {
     const rand=Math.random();
     if(rand<0.34)
    {    return 'rock'; }
    else if (rand<=0.67)
    { return 'paper';}
    else
    { return 'scissors';}
    
 }

 function getWinner(p,c)
 {
     if(p===c)
     {
        return 'draw';
     }
     else if(p==='rock')
     {
         if(c==='paper')
         {
             return 'computer';
         }
         else{
             return 'player'
         }
     }
     else if(p==='paper')
     {
         if(c==='rock')
         {
             return 'player';
         }
         else
         {
             return 'computer';
         }
     }
     else if(p==='scissors')
     {
         if(c==='rock')
         {
             return 'computer';
         }
         else{
             return 'player';
         }
     }
 }


 function showWinner(winner,computerChoice){
     if(winner==='player'){
         scoreboard.player++;
         result.innerHTML=`
         <h1 class="text-win">You Win</h1>
         <i class="fas fa-hand-${computerChoice} fa-10x"></i>
         <p>Computer chose <strong>${computerChoice}</strong></p>
         `;

     }
     else if(winner==='computer'){
        scoreboard.computer++;
        result.innerHTML=`
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
     }
     else{
        result.innerHTML=`
        <h1 >It's A Draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
     }
     score.innerHTML=`
     <p>Player: ${scoreboard.player}</p>
     <p> Computer: ${scoreboard.computer}</p>
     `;
     modal.style.display='block';
 }

 function clearModal(e){                //takes an argument event
    if(e.target==modal)
    {
        modal.style.display='none';
    }
 }
//Event Listner
choices.forEach(choice => choice.addEventListener('click',play));
//This will loop through all the choices as we selected them using queryselectorAll
//choice is a variable like i in usual for loops
//we add an eventlistner to each choice if clicked it will call function play


window.addEventListener('click',clearModal);
//remove the modal if we click outside anywhere on the screen

restart.addEventListener('click',() =>{
    scoreboard.player=0;
    scoreboard.computer=0;
    score.innerHTML=`
    <p>Player: 0</p>
    <p> Computer: 0</p>
    `;
})