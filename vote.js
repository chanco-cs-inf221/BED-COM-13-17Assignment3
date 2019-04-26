
// vote submition

// creting Array for each president

let Chilima = [];
    const voteChili = (ev)  => {
        ev.preventDefault();
        let Chili = {
            name : 'Saulos klaus Chilima',
            party : 'UTM'
        }
         Chilima.push(Chili);
    }

let Peter = [];
    const voteApm = (ev)  => {
        ev.preventDefault();
        let Apm = {
            name : 'Aurthur peter Muthalika',
            party : 'DPP'
        }
        Peter.push(Apm);
    }
   
let Chakwera = [];
    const voteMcp = (ev)  => {
        ev.preventDefault();
        let Lazalo = {
            name : 'Lazarus Chakwera',
            party : 'MCP'
        }
         Chakwera.push(Lazalo);
    }

    let count = 0;

// geting the submition button from the form
    var buttons = document.getElementById('voteButton').addEventListener('click',vote);

// function that set values into the local storage
    function vote ( ) {
        if(document.getElementById('chilima').checked == true){
           
            localStorage.setItem('Chilima',JSON.stringify(Chilima.push(count++)));
            document.forms[0].reset();
        }
        else if(document.getElementById('Chakwera').checked == true){

            localStorage.setItem('Chakwera',JSON.stringify(Chakwera.push(count++)));
            document.forms[0].reset();
        }
        else if(document.getElementById('Peter').checked == true){

            localStorage.setItem('Peter',JSON.stringify(Peter.push(count++)));
            document.forms[0].reset();
        }
    }
    
   