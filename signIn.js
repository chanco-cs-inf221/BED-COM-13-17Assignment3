
const confim=()=>{
    
    var x = document.getElementById("nationId").value;
    var y = document.getElementById("name").value;
    if (x ===""){
        alert("please fill the form");
        return false;
    }else if ( y === ""){
        alert("please fill the form  completely");
        return false;
    }
    else{
        return true;
    }
}







