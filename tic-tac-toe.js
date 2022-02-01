window.onload = () => {
    class Player{
        constructor(turn, X, O){
            this.turn = turn;
            this.X = X;
            this.O = O;
        }
    }
    let player1 = new Player();
    let x = document.getElementById('x');
    let o = document.getElementById('o');

    x.addEventListener('click', async (e)=>{
        player1.X = 'x'
    })
    o.addEventListener('click', async (e)=>{
        player1.O = 'o'
    })

    let box1 = document.getElementById('box1');
    box1.addEventListener('click', async (e)=>{
        if (player1.X === 'x'){
            box1.style.backgroundImage = 'url("https://res.cloudinary.com/dzjkwepju/image/upload/v1639522469/Styckr/Untitled_design_27_icrk1f.png")'
        }
        if (player1.O === 'o'){
            box1.style.backgroundImage = 'url("https://res.cloudinary.com/dzjkwepju/image/upload/v1639440204/Styckr/Untitled_design_16_s6ieeg.png")'
        }
    })

    console.log(player1)
};
