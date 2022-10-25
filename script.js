let array = [[0,0,0],[0,0,0],[0,0,0]];
let boxarr = document.querySelectorAll(".btn");
let flag = true;

boxarr.forEach( element =>{
    element.onclick = (e) => {
        if(flag){
            e.target.textContent = "x";
            let q = parseInt(element.id / 3);
            let r = parseInt(element.id%3);
            if(r == 0){
                r=3;
                q= q-1;
            }
            array[q][r-1] = 1;
            e.target.disabled = true;
            flag = false;
            playermove();
            rowcheck();
            colcheck();
            diagonalcheck();

    } else{
        e.target.textContent = "O";
        let q = parseInt(element.id / 3);
        let r = parseInt(element.id%3);
        if(r == 0){
            r=3;
            q= q-1;
        }
        array[q][r-1] = 2;
        e.target.disabled = true;
        flag = true;
        playermove();
        rowcheck();
        colcheck();
        diagonalcheck();


    }
    }
});

playermove = ()=>{
if(flag){
    document.getElementById("player_turn").innerHTML = "i) Player X turn"
}else{
    document.getElementById("player_turn").innerHTML = "ii) Player O turn"
}
let boxarr = document.querySelectorAll(".btn");
count = 0;
boxarr.forEach(element=>{
    if(element.disabled == true){
        count ++
    }
    if(count == 9){
        document.getElementById("player_turn").innerHTML=("Match over");
    }
})

}

rowcheck = ()=>{
    array.forEach((row) =>{

if(row[0] == 1 && row[1] == 1 && row[2] == 1){
    document.getElementById("result").innerHTML = "❀ Player X won";
    boxarr.forEach(element=>{element.disabled = true});
}
else if(row[0] == 2 && row[1] == 2 && row[2] == 2){
    document.getElementById("result").innerHTML = "❀ Player O won";
    boxarr.forEach(element=>{element.disabled = true});

}
    });
}

colcheck = ()=>{
    array_col1 =[]
    array_col2 =[]
    array_col3 =[]

    array.forEach(element=>{
        element.filter((val,index)=>{
            if (index == 0){
               return array_col1.push(val);
            }else if(index == 1){
                return array_col2.push(val);
            }
            else if(index == 2){
                return array_col3.push(val);
            }
        });
    });
    array_col = [array_col1,array_col2,array_col3]

    array_col.forEach((col) =>{

        if(col[0] == 1 && col[1] == 1 && col[2] == 1){
            document.getElementById("result").innerHTML = "❀ Player X won";
            boxarr.forEach(element=>{element.disabled = true});
        }
        else if(col[0] == 2 && col[1] == 2 && col[2] == 2){
            document.getElementById("result").innerHTML = "❀ Player O won";
            boxarr.forEach(element=>{element.disabled = true});
        
        }
            });
}
diagonalcheck=()=>{
    diag1 = [array[0][0],array[1][1],array[2][2]];
    diag2 = [array[0][2],array[1][1],array[2][0]];
    diag = [diag1,diag2]

    diag.forEach((slant) =>{

        if(slant[0] == 1 && slant[1] == 1 && slant[2] == 1){
            document.getElementById("result").innerHTML = "❀ Player X won";
            boxarr.forEach(element=>{element.disabled = true});
        }
        else if(slant[0] == 2 && slant[1] == 2 && slant[2] == 2){
            document.getElementById("result").innerHTML = "❀ Player O won";
            boxarr.forEach(element=>{element.disabled = true});
        
        }
            });
    

}