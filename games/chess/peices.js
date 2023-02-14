
function bool_colour(c){
    var x;
    if (c=='w'){
        var x=true;
    };
    if (c=='b'){
        var x=false;
    }
    return x;
}
export class pawn{
    
    constructor(c,s){
        this.c=c;
        this.c_bool=bool_colour(c);
        this.times_moved=0
        this.last_turn_moved;

        
        var id=`${s[0]}.${s[1]}`;
        this.div=document.getElementById(id);
        var spriteurl=`./sprite/${this.c}pawn.png`;
        var sprite= document.createElement('img');
        sprite.src=spriteurl;
        this.div.appendChild(sprite);
        sprite.id='piece';

    }
    get_valid_squares(selected,board){ 
        const pos=selected[0]
        const turn_counter=board.turn_counter
        board=board.board
        if(selected[1].c_bool){
            var pawn_double=[[0,2]]
            var check=[[0,1]]
            var take=[[-1,1],[1,1]]
            var en_passant=[[-1,0],[1,0]]
            var take_if_enemy=false
            var fourorthree=4
            var pawndoublecheck=1

        }
        else{
            var pawn_double=[[0,-2]]
            var check=[[0,-1]]
            var take=[[-1,-1],[1,-1]]
            var en_passant=[[-1,0],[1,0]]
            var take_if_enemy=true
            var fourorthree=3
            var pawndoublecheck=-1

        }
        var valid=[]
        var en_passant_valid=[]
        check.map(i=>{
            try{
                var x=[i[0]+pos[0],i[1]+pos[1]]
                if (board[x[0]][x[1]][1]=='n'){
                    valid.push(board[x[0]][x[1]])
                }
            }
            catch{}    
        })
        take.map(i=>{
            try{
                var x=[i[0]+pos[0],i[1]+pos[1]]
                if (board[x[0]][x[1]][1].c_bool==take_if_enemy){
                    valid.push(board[x[0]][x[1]])
                }
            }
            catch{}   
        })
        pawn_double.map(i=>{
            try{
                var x=[i[0]+pos[0],i[1]+pos[1]]
                if (board[x[0]][x[1]][1]=='n' && board[x[0]][x[1]-pawndoublecheck][1]=='n'&&this.times_moved==0){
                    valid.push(board[x[0]][x[1]])
                }
            }
            catch{}    
        })
        en_passant.map(i=>{
            try{
                var x=[i[0]+pos[0],i[1]+pos[1]]
                if (typeof(board[x[0]][x[1]][1])==typeof(selected[1])&&board[x[0]][x[1]][1].c_bool==take_if_enemy&&
                board[x[0]][x[1]][1].times_moved==1&&x[1]==fourorthree&&turn_counter-1==board[x[0]][x[1]][1].last_turn_moved){
                    var add
                    if(selected[1].c_bool){
                        add=1
                    }
                    else{add=-1}
                    valid.push(board[x[0]][x[1]+add])
                }
            } 
            catch{} 
        })
        return valid
   
    }
    piece_moved(){
        this.times_moved++
        
    }
    promote(square){
        this.createpromotion_box(square)
    }

    createpromotion_box(){
        var knight=`./sprite/${this.c}knight.png`
        var bishop=`./sprite/${this.c}bishop.png`
        var queen=`./sprite/${this.c}queen.png`
        var rook=`./sprite/${this.c}rook.png`
        var arr=[knight,bishop,queen,rook]
        var promotion_div=document.createElement("div")
        promotion_div.classList.add('promotion_box')
        arr.map(i=>{
            var div=this.creatediv(i)
            console.log(div)
            console.log(promotion_div)
            promotion_div.appendChild(div)
        })


    }
    

    

    creatediv(child){
        var img=document.createElement("img")
        img.src=child
        img.id='piece'
        var x=document.createElement('div');
        x.classList.add('square');
        x.classList.add('promotion_box_child');
        x.appendChild(img)
        return x;
    }


   
}


export class rook{
    constructor(c,s){
        this.last_turn_moved
        this.c=c;
        this.c_bool=bool_colour(c);

        var id=`${s[0]}.${s[1]}`;
        this.div=document.getElementById(id);
        var spriteurl=`./sprite/${this.c}rook.png`;
        var sprite= document.createElement('img');
        sprite.src=spriteurl;
        this.div.appendChild(sprite);

        sprite.id='piece';

        this.times_moved=0

    }
}

export class bishop{
    constructor(c,s){
        this.last_turn_moved
        this.c=c;
        this.c_bool=bool_colour(c);

        var id=`${s[0]}.${s[1]}`;
        this.div=document.getElementById(id);
        var spriteurl=`./sprite/${this.c}bishop.png`;
        var sprite= document.createElement('img');
        sprite.src=spriteurl;
        this.div.appendChild(sprite);

        sprite.id='piece';

        this.times_moved=0
    }
    piece_moved(){
        this.times_moved++
    }
}

export class knight{
    constructor(c,s){
        this.last_turn_moved
        this.c=c;
        this.c_bool=bool_colour(c);

        var id=`${s[0]}.${s[1]}`;
        this.div=document.getElementById(id);
        var spriteurl=`./sprite/${this.c}knight.png`;
        var sprite= document.createElement('img');
        sprite.src=spriteurl;
        this.div.appendChild(sprite);

        sprite.id='piece';

        this.times_moved=0
    }
    piece_moved(){
        this.times_moved++
    }
}

export class queen{
    constructor(c,s){
        this.last_turn_moved
        this.c=c;
        this.c_bool=bool_colour(c);

        var id=`${s[0]}.${s[1]}`;
        this.div=document.getElementById(id);
        var spriteurl=`./sprite/${this.c}queen.png`;
        var sprite= document.createElement('img');
        sprite.src=spriteurl;
        this.div.appendChild(sprite);

        sprite.id='piece';

        this.times_moved=0
    }
    piece_moved(){
        this.times_moved++
    }
}

export class king{
    constructor(c,s){
        this.last_turn_moved
        this.c=c;
        this.c_bool=bool_colour(c);
     
        var id=`${s[0]}.${s[1]}`;
        this.div=document.getElementById(id);
        var spriteurl=`./sprite/${this.c}king.png`;
        var sprite= document.createElement('img');
        sprite.src=spriteurl;
        this.div.appendChild(sprite);

        sprite.id='piece';

        this.times_moved=0
    }
    piece_moved(){
        this.times_moved++
    }
}

export class board{
    constructor(){
        this.turn_counter=0

        this.board=[];
        for(let i =0;i<8;i++){
            this.board.push([])
            for (let j=0;j<8;j++){
                var id=`${i}.${j}`
                var div=document.getElementById(id);
                var p='n'
      
                this.board[i].push([[i,j],p,div]);
                
            }
        }
    }
    setboard(){
        this.board.forEach(i => {
            i.forEach(j=>{ 
                //place wrook
                if (j[0].toString()==[0,0].toString() ||j[0].toString()==[7,0].toString() ){
                j[1]=new rook('w',j[0]);};
                //place wknight
                if (j[0].toString()==[1,0].toString() ||j[0].toString()==[6,0].toString() ){
                j[1]=new knight('w',j[0]);};
                //place wbishop
                if (j[0].toString()==[2,0].toString() ||j[0].toString()==[5,0].toString() ){
                    j[1]=new bishop('w',j[0]);};
                //place wking
                if (j[0].toString()==[3,0].toString()){
                    j[1]=new king('w',j[0]);};
                //place wqueen
                if (j[0].toString()==[4,0].toString()  ){
                    j[1]=new queen('w',j[0]);};
                //place wpawn
                if (j[0][1]==1 ){
                    j[1]=new pawn('w',j[0]);};

                    //place brook
                if (j[0].toString()==[0,7].toString() ||j[0].toString()==[7,7].toString() ){
                    j[1]=new rook('b',j[0]);};
                    //place bknight
                    if (j[0].toString()==[1,7].toString() ||j[0].toString()==[6,7].toString() ){
                    j[1]=new knight('b',j[0]);};
                    //place bbishop
                    if (j[0].toString()==[2,7].toString() ||j[0].toString()==[5,7].toString() ){
                        j[1]=new bishop('b',j[0]);};
                    //place bking
                    if (j[0].toString()==[3,7].toString()){
                        j[1]=new king('b',j[0]);};
                    //place bqueen
                    if (j[0].toString()==[4,7].toString()  ){
                        j[1]=new queen('b',j[0]);};
                    //place bpawn
                    if (j[0][1]==6 ){
                        j[1]=new pawn('b',j[0]);}; 
            });
            
        });
    }
}






