
import{
    board
}from './peices.js'
var color_to_move =true// instead of black and white we will use true and false
var selected
var valid=[]
var move_history=[]
function select(id){//id is a string with 2 numbers in it "5.8"

    var mouseX = window.pageXOffset + event.clientX;
    var mouseY = window.pageYOffset + event.clientY;
    console.log("Mouse position: " + mouseX + ", " + mouseY);
    var square=getsquare(id)
    var square_piece=square[1]
    
    

        if (valid.find(i=>i==square)){

            try{check_for_en_passant(square)}catch{}
            //there is a better way of doing this but i dont know how I would have to restrucute a lot of things.
            //im not verry sure what that would be 
            // en passant is just a mess we didnt plan it out well enough
            // should we have don it in as a class function
            
            show_move_history()


            selected[1].last_turn_moved=b.turn_counter
            b.turn_counter++ 
            
            // createpromotion_box('w')
            



            //----------selected will be set to "n" dont use selected after this point

            //chec
            
            unhighlight_selected(selected)
            move_piece(square,selected)
            unhighlight_valid(valid)
            color_to_move=!color_to_move  
            selected=null
            square=null
            valid=[]


        }

        else if(square_piece.c_bool==color_to_move ){
            try{
                unhighlight_selected(selected)
                unhighlight_valid(valid)
            }catch{}

            
            selected=square    
            highlight_selected(selected)
            
            valid=selected[1].get_valid_squares(selected,b)
            highlight_valid(valid)
        }

        //we just need to define movement for each peice.


function show_move_history(){
        move_history.push([selected[1].constructor.name,selected[0],square[0],square])
        console.log('--------------------------------------->')
        for(let i in move_history){
            console.log(move_history[i][0], ` ${move_history[i][1]}   ${move_history[i][2]}   move history ${i}`)
        }
    }
}
function createpromotion_box(c){
    function creatediv(child){
        var img=document.createElement("img")
        img.src=child
        img.id='piece'
        var x=document.createElement('div');
        x.classList.add('square');
        x.classList.add('promotion_box_child');
        x.appendChild(img)
        return x;
    }
    var knight=`./sprite/${c}knight.png`
    var bishop=`./sprite/${c}bishop.png`
    var queen=`./sprite/${c}queen.png`
    var rook=`./sprite/${c}rook.png`
    var arr=[knight,bishop,queen,rook]
    var promotion_div=document.createElement("div")
    promotion_div.classList.add('promotion_box')
    arr.map(i=>{
        var div=creatediv(i)
        promotion_div.appendChild(div)
    })


   document.body.appendChild(promotion_div)
    return promotion_div



}

function create_box_on_mouse_pos(){
    var div = $(createpromotion_box('w'))
			.css({
				"left": e.pageX + 'px',
				"top": e.pageY + 'px'
			})
			.appendTo(document.body);
}
        
// $(function(){
//     $(document).click(function(e){
// 		var div = $(createpromotion_box('w'))
// 			.css({
// 				"left": e.pageX + 'px',
// 				"top": e.pageY + 'px'
// 			})
// 			.appendTo(document.body);
//     });
// });





function check_for_en_passant(square){
    console.log('look here')
    var lastmove=move_history[move_history.length-1]
   if (lastmove[0]==selected[1].constructor.name&&lastmove[0]=='pawn'){
        if(Math.abs(lastmove[1][1]-lastmove[2][1])==2){//if moved forward 2 squares
            var dif=parseInt((lastmove[1][1]-lastmove[2][1])*-.5)
            var target=[lastmove[1][0],lastmove[1][1]+dif]
            if(square[0].join(',')==target.join(',')){
                eat_piece(lastmove[3][0])
                
            }
        }
   }
}
function highlight_valid(arr){
    for(let i in arr){
        var div=get_div(arr[i][0])
        div.classList.add('valid')
      }
}
function unhighlight_valid(arr){
    for(let i in arr){
        var div=get_div(arr[i][0])
        div.classList.remove('valid')
      }
}
function highlight_selected(selected){
    var div=get_div(selected[0])
    div.classList.add('selected')
}
function unhighlight_selected(selected){
    var div=get_div(selected[0])
    div.classList.remove('selected')
}
function eat_piece(arr_cood){
    var element = get_div(arr_cood).firstElementChild;
    element.remove(); 
}
function move_piece(square,selected){


    selected[1].piece_moved()
    if (square[1]!='n'){
        eat_piece(square[0])
    }
    square[1]=selected[1]
    selected[1]='n'
    var selected_div=get_div(selected[0])
    var square_div=get_div(square[0])
    square_div.appendChild(selected_div.firstElementChild)

} 

function get_div(arr){
    var id= `${arr[0]}.${arr[1]}`;
    return document.getElementById(id);
    
}
function getsquare(id){
    var x=parseInt(id[0]);
    var y=parseInt(id[2]);
    return b.board[x][y];
}


//----------------------------------


var container=document.getElementById('container')
var row=0;
var color='n';


function createboard(width,height){
    function createrow(column,rows){
        function createsquare(color,id){
            var x=document.createElement('div');
            x.addEventListener('click',function(){select(this.id)});
            x.classList.add(color);
            x.classList.add('square');
            x.id=id
            x.innerHTML=id
            return x;
        }
        var x=document.createElement('div')
        for (let i =0;i<column;i++){
            
            if ((row+i)%2==0){  color ='light';}
            else{color='dark';}
            var n=`${i}.${row}`
            var square=createsquare(color,n);
    
            x.appendChild(square)
        }
        x.classList.add('column');
        row++
        return x
    }
    
    var rows=[]
    for (let i=0;i<height;i++){rows.push(createrow(width,rows))}
    for (let i in rows){
        container.appendChild(rows[rows.length-i-1]);
    }
}
//--------------------------------------------------------------------------


//--------------------------------------------------------------


createboard(8,8);
var b=new board();

b.setboard()


