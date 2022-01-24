// ------------------------------------MENU HAMBOURGER------------------------------------------------

let hamburgerMenuState='close';

function doClickHamburger(){
    console.log('On est là!');
    console.log(hamburgerMenuState);
    if(hamburgerMenuState=='close'){
        document.getElementById("menuHamburger").style.display = "flex";
        hamburgerMenuState='open';
    }else{
        document.getElementById("menuHamburger").style.display = "none";
        hamburgerMenuState='close';
    }
}

//--------------------------------------Cards------------------------------------------------------

let largeur1=0;
let largeur2=0
let onlyOnce=0;
let lastId=[];
console.log(document.getElementById('eric-desc').style.display);

function doClickPersonne(id){
    lastId.push(id);
    console.log(lastId);
    if(document.getElementById(id+'-desc').offsetWidth==0){
        document.getElementById(id+'-desc').style.display="block";
        document.getElementById(id+'-tete').style.display="none";
        console.log('oui');
    }else{
        document.getElementById(id+'-desc').style.display="none";
        document.getElementById(id+'-tete').style.display="block";
        console.log('non');
    }

    console.log(lastId);
    console.log(lastId.length)

    if(lastId.length==2){
        if(lastId[0]!=lastId[1]){
            console.log('pas les meme')
            document.getElementById(lastId[0]+'-desc').style.display="none";
            document.getElementById(lastId[0]+'-tete').style.display="block";
            lastId.splice(0,1);
        }else{
            console.log('le meme')
            lastId.splice(0,2);
        }
    }
    console.log(lastId);
}

function doClickTest(id){
    console.log(id);
    console.log('display='+document.getElementById('eric-desc').offsetWidth);
}
