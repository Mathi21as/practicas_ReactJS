let mql = window.matchMedia("(max-width: 799px)");

function listenResoChanges(e){
    let elem = document.getElementsByTagName("button");
    if(e.matches){ 
        for (let i=0; i<=elem.length-1; i++){
            i===0 ? elem[i].innerHTML = "Mas" : elem[i].innerHTML = "Menos"
        }
    }
    else{
        for (let i=0; i<=elem.length-1; i++){
            i===0 ? elem[i].innerHTML = "Aumentar" : elem[i].innerHTML = "Disminuir"
        }
    }
}

mql.addListener(listenResoChanges);
