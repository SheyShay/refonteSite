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