

 
function onclick(x){
    if (game){

        game.move(x);
    }
}


function createsquare(color,id){
    var x=document.createElement('div');
    x.addEventListener('click',function(){onclick(this.id)});
    x.classList.add(color);
    x.classList.add('square');
    x.id=id

    return x;
}

var row=0;
var container=document.getElementById('container')

function createrow(column){
    var x=document.createElement('div')
    for (let i =0;i<column;i++){
        
        if ((row+i)%2==0){  color ='light';}
        else{color='dark';}
        var n=`${i}.${row}`
        var square=createsquare(color,n);

        x.appendChild(square)
    }
    x.classList.add('column');
    container.appendChild(x);
    row++
}
//creates a row of columns of divs
function createboard(width,height){
    for (let i=0;i<height;i++){createrow(width)}
}


//sets up the html
createboard(3,3);


//tic tac toe game
class tictactoe{
    constructor(){
        this.board=this.createboard();
        this.turn=true;
        this.game=true;
}

    createboard() {
        var board=[];
        for (let i=0;i<3;i++){
            board.push([])
            for(let j=0;j<3;j++){
                board[i].push(null)
            }
        }
        return board;
    }


//main game loop, gets id from the clicked div #
    move(id){
        if(this.game){
            var div=document.getElementById(id);
            var s;
            
            if (this.turn){s="X"}
            else{s="O"}
            

            if (this.check_valid(id)){//will check if square is empty or not
                this.board[id[2]][id[0]]=s
                div.innerHTML=s;

                this.check_connect_3()//check for 3 O or X in a row
                this.turn=!this.turn;
            }
        }
        else{
            this.reset_board()
        }
        


            

    }
    reset_board(){
        console.log('reset')
        for (let i=0;i<3;i++){
            for (let j=0;j<3;j++){
                var v=`${j}.${i}`
                document.getElementById(v).innerHTML='';

                }
        }
        this.board=this.createboard()
        this.game=true

    }
    check_valid(id){
        if (!this.board[id[2]][id[0]]){
            return true
        }
    }
    check_connect_3(){
        console.log(this.game,"game")

        //just faster than doing it the smart way,just check all permutations 
        if( this.board[0][0]==this.board[0][1]&&this.board[0][2]==this.board[0][1]&&this.board[0][0]!=null||
            this.board[1][0]==this.board[1][1]&&this.board[1][2]==this.board[1][1]&&this.board[1][0]!=null||
            this.board[2][0]==this.board[2][1]&&this.board[2][2]==this.board[2][1]&&this.board[2][0]!=null||

            this.board[0][0]==this.board[1][0]&&this.board[2][0]==this.board[0][0]&&this.board[1][0]!=null||
            this.board[0][1]==this.board[1][1]&&this.board[2][1]==this.board[1][1]&&this.board[0][1]!=null||
            this.board[0][2]==this.board[1][2]&&this.board[2][2]==this.board[0][2]&&this.board[0][2]!=null||

            this.board[0][0]==this.board[1][1]&&this.board[2][2]==this.board[0][0]&&this.board[0][0]!=null||
            this.board[0][2]==this.board[1][1]&&this.board[2][0]==this.board[1][1]&&this.board[0][2]!=null

         ){
            console.log('gameover')
            this.game=false;
         }
    }
}
var game=new tictactoe();
console.log("js is working");
