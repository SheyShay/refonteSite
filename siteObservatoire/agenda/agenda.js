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

/* --------------------------------------CALENDRIER ----------------------------------------------------*/

let Cases = document.getElementsByClassName('case');

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() +1;
let day = date.getDate();

const monthName = ["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre"];
const UP_MONTH = 'upMonth';
const DOWN_MONTH = 'downMonth';


function CALENDRIER_REDUCER(action){
    switch(action){
        case UP_MONTH:
            if(month < 12)month++
            else{
                year++
                month = 1
            }
            break;

        case DOWN_MONTH:
            if(month > 0)month--
            else{
                year--
                month = 12
            }
            break;

        default:
            break;
    }

    calendrier(year, month);

    /* permet de mettre les places disponibles en bleu et en rouge les places indisponibles */
    if(year == 2022 && month== 2){
        document.getElementById(6).style.backgroundColor = "red";
        document.getElementById(13).style.backgroundColor = "rgb(143,143,143)";
    }else if(year == 2022 && month== 3){
        document.getElementById(6).style.backgroundColor = "red";
        document.getElementById(13).style.backgroundColor = "rgb(143,143,143)";
    }else if(year == 2022 && month== 4){
        document.getElementById(6).style.backgroundColor = "red";
        document.getElementById(13).style.backgroundColor = "rgb(143,143,143)";
    }else if(year == 2022 && month== 5){
        document.getElementById(6).style.backgroundColor = "rgb(143,143,143)";
        document.getElementById(13).style.backgroundColor = "#1096d1";
    }
    else{
        document.getElementById(6).style.backgroundColor = "rgb(143,143,143)";
        document.getElementById(13).style.backgroundColor = "rgb(143,143,143)";
    }
}

document.getElementById('avant').onclick = function(){
    CALENDRIER_REDUCER(DOWN_MONTH);
    console.log(month);
    console.log(year);
}
document.getElementById('apres').onclick = function(){
    CALENDRIER_REDUCER(UP_MONTH);
    console.log(month);
    console.log(year);
}

/* test pour pouvoir intéragir avec le calendrier pour ajouter une div plus tard */
// function changeColor(param){
//     document.getElementById(param).style.backgroundColor = "red";
// }

function calendrier(year, month){
    const monthNb = month + 12 *(year - year);

    let cld = [{dayStart : 5, length : 31, year : year, month : "janvier"}]

    for(i = 0; i < monthNb -1 ; i++){
        let yearSimulé = year + Math.floor(i/12);
        const monthsSImuléLongueur = [31, getFévrierLength(yearSimulé), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let monthSimuléIndex = (i + 1) - (yearSimulé - year) *12;

        cld[i + 1]= {
            dayStart: (cld[i].dayStart + monthsSImuléLongueur[monthSimuléIndex - 1]) % 7,
            length : monthsSImuléLongueur[monthSimuléIndex],
            year: year + Math.floor((i + 1)/12),
            month : monthName[monthSimuléIndex]
        }
        if(cld[i+1].month === undefined){
            cld[i+1].month = "Janvier";
            cld[i+1].length = 31;
        }
    }

    for(i = 0; i < Cases.length ; i++){
        Cases[i].innerText = "";
    }

    for(i = 0; i < cld[cld.length - 1].length ; i++){
        Cases[i + cld[cld.length - 1].dayStart].innerText = i + 1;
    }

    document.getElementById('cldT').innerText = cld[cld.length - 1].month.toLocaleUpperCase() + " " + cld[cld.length - 1].year;
}
calendrier(year, month);

function getFévrierLength(year){
    if(year % 4 === 0){
        return 29
    }else{
        return 28
    }
}