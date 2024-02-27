

    function rot13(str) {
        let A=65;
        let Z=90;
       // let s=""
        return str.replace(/[A-Za-z]/g, function(char) {
       
            const C = char.charCodeAt(0);
            console.log(C)
            const res =C >=A && C <= Z ? A:Z;
    
           return String.fromCharCode((C-res+ 13) % 26 +res );
       // }); //83=S res=65 =32%265 =6=F maid ascii 6+res=65 =F 
    })}
    
    console.log(rot13("SERR CVMMN!")); //FREE PIZZA!
    
    
    