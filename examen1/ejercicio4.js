/*function calcular() {
    const importe1 = document.getElementById("importe1");
    const importe2 = document.getElementById("importe2");
    const importe3 = document.getElementById("importe3");
    const importe4 = document.getElementById("importe4");
    const importe5 = document.getElementById("importe5");
    const concepto1 = document.getElementById("concepto1");
    const concepto2 = document.getElementById("concepto2");
    const concepto3 = document.getElementById("concepto3");
    const concepto4 = document.getElementById("concepto4");
    const concepto5 = document.getElementById("concepto5");
    const total = document.getElementById("total");

    let totalImportes = 0;
    if(isNaN(Number(importe1.value)) || isNaN(parseFloat(importe1.value))) {
        importe1.style.backgroundColor = "red";
    } else {
        importe1.style.backgroundColor = "white";
        totalImportes = totalImportes + parseFloat(importe1.value);
        // totalImportes += importe1.value;
    }
    if(isNaN(Number(importe2.value)) || isNaN(parseFloat(importe2.value))) {
        importe2.style.backgroundColor = "red";
    } else {
        importe1.style.backgroundColor = "white";
        totalImportes = totalImportes + parseFloat(importe2.value);
        // totalImportes += importe2.value;
    }
    if(isNaN(Number(importe3.value)) || isNaN(parseFloat(importe3.value))) {
        importe3.style.backgroundColor = "red";
    } else {
        importe1.style.backgroundColor = "white";
        totalImportes = totalImportes + parseFloat(importe3.value);
        // totalImportes += importe3.value;
    }
    if(isNaN(Number(importe4.value)) || isNaN(parseFloat(importe4.value))) {
        importe4.style.backgroundColor = "red";
    } else {
        importe1.style.backgroundColor = "white";
        totalImportes = totalImportes + parseFloat(importe4.value);
        // totalImportes += importe4.value;
    }    
    if(isNaN(Number(importe5.value)) || isNaN(parseFloat(importe5.value))) {
        importe5.style.backgroundColor = "red";
    } else {
        importe1.style.backgroundColor = "white";
        totalImportes = totalImportes + parseFloat(importe5.value);
        // totalImportes += importe5.value;
    }    
    total.value = totalImportes;

    if(concepto1.value == "" && importe1.value != "") {
        concepto1.style.backgroundColor = "red";
    } else {
        concepto1.style.backgroundColor = "white";
    }
    if(concepto2.value == "" && importe2.value != "") {
        concepto2.style.backgroundColor = "red";
    } else {
        concepto2.style.backgroundColor = "white";
    }
    if(concepto3.value == "" && importe3.value != "") {
        concepto3.style.backgroundColor = "red";
    } else {
        concepto3.style.backgroundColor = "white";
    }
    if(concepto4.value == "" && importe4.value != "") {
        concepto4.style.backgroundColor = "red";
    } else {
        concepto4.style.backgroundColor = "white";
    }
    if(concepto5.value == "" && importe5.value != "") {
        concepto5.style.backgroundColor = "red";
    } else {
        concepto5.style.backgroundColor = "white";
    }

    if(concepto1.value != "" && importe1.value == "") {
        importe1.style.backgroundColor = "red";
    } else {
        importe1.style.backgroundColor = "white";
    }
    if(concepto2.value != "" && importe2.value == "") {
        importe2.style.backgroundColor = "red";
    } else {
        importe2.style.backgroundColor = "white";
    }
    if(concepto3.value != "" && importe3.value == "") {
        importe3.style.backgroundColor = "red";
    } else {
        importe3.style.backgroundColor = "white";
    }
    if(concepto4.value != "" && importe4.value == "") {
        importe4.style.backgroundColor = "red";
    } else {
        importe4.style.backgroundColor = "white";
    }
    if(concepto5.value != "" && importe5.value == "") {
        importe5.style.backgroundColor = "red";
    } else {
        importe5.style.backgroundColor = "white";
    }
}
*/

function calcular() {
    const conceptos = document.querySelectorAll("[id^='concepto']");
    const importes = document.querySelectorAll("[id^='importe']");
    let totalImportes = 0;

    for (const importe of importes) {
        if(isNaN(Number(importe.value)) || isNaN(parseFloat(importe.value))) {
            importe.style.backgroundColor = "red";
        } else {
            importe.style.backgroundColor = "white";
            totalImportes = totalImportes + parseFloat(importe.value);
            // totalImportes += importe.value;
        }
    }
    total.value = totalImportes;

    for (let i = 0; i < conceptos.length; i++) {
        if(conceptos[i].value == "" && importes[i].value != "") {
            conceptos[i].style.backgroundColor = "red";
        } else {
            conceptos[i].style.backgroundColor = "white";
        }
    }

    for (let i = 0; i < importes.length; i++) {
        if(importes[i].value == "" && conceptos[i].value != "") {
            importes[i].style.backgroundColor = "red";
        } else {
            importes[i].style.backgroundColor = "white";
        }
    }
}

document.getElementById("calcular").addEventListener("click", calcular);