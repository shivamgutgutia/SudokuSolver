function lock(){
  for (var i=0 ; i<9 ; i++){
    for (var j=0 ; j<9 ; j++){
      var id= i.toString()+j.toString();
      var emt = document.getElementById(id);
      var num = emt.value;
      if (num==''){
        board[i][j]=0;
      } else{
        board[i][j]=parseInt(num);
      } 
    }
  }
  console.log(board)
  
}

var board = new Array(9);
for (var i=0 ; i<9 ; i++){
  board[i]=new Array(9) 
}


function validNumberCheck(row,col,num){
  for (var i=0 ; i<9 ; i++){
    if (board[i][col]==num){
      return false
    }
    
  }
  for (var i=0 ; i<9 ; i++){
    if (board[row][i]==num){
      return false
    }
  }
  for (var i=Math.floor(row/3)*3 ; i<Math.floor(row/3)*3+3 ; i++){
    for (var j=Math.floor(col/3)*3 ; j<Math.floor(col/3)*3+3 ; j++){
      if (board[i][j]==num){
        return false
      }
    }
  } 
  
  return true  
}

function emptyCells(){
  for (var i=0 ; i<9 ; i++){
    for (var j=0 ; j<9 ; j++){
      if (board[i][j]==0){
        var coor = new Array(2);
        coor[0]=i;
        coor[1]=j;
        return coor
      }
    }
  }
  return false
}

function innerSolve(){
  
  //console.log(board)
  
  
  var emptyCell=emptyCells();
  if (!emptyCell){
    return true
  }
  var row = emptyCell[0];
  var col= emptyCell[1];
  
  for (var i=1 ; i<10 ; i++){
    if (validNumberCheck(row,col,i)){
      board[row][col]=i;
      if (innerSolve()){
        return true
      }else{
        board[row][col]=0;
      }  
    }
    
  }
  return false
}
  
function solve(){
  if (innerSolve()){
    for (var i=0 ; i<9 ; i++){
      for (var j=0 ; j<9 ; j++){
        var id= i.toString()+j.toString();
        console.log(id)
        var emt = document.getElementById(id);
        emt.value=board[i][j];
      }
    }
  }else{
    console.log("cannot solve")
  }
}