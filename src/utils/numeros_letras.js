if (typeof document !== "undefined") {
    var contrato__alquiler = document.getElementById('contrato__alquiler');
    if(contrato__alquiler){
        document.getElementById("contrato__alquiler").addEventListener("keyup", function (e) {
            document.getElementById("contrato__alquiler__letras").innerHTML = numeroALetras(this.value);
            console.log(this.value);
        });
        document.getElementById("contrato__alquiler").addEventListener("change", function (e) {
            document.getElementById("contrato__alquiler__letras").innerHTML = numeroALetras(this.value);
            console.log(this.value);
        });
        document.getElementById("contrato__alquiler").addEventListener("change", function (e) {
            document.getElementById("contrato__alquiler__letras__dato").innerHTML = numeroALetras(this.value);
            console.log(this.value);
        });
    }
    
    var contrato__garantia = document.getElementById('contrato__garantia');
    if(contrato__garantia){
        document.getElementById("contrato__garantia").addEventListener("keyup", function (e) {
            document.getElementById("contrato__garantia__letras").innerHTML = numeroALetras(this.value);
            console.log(this.value);
        });
        document.getElementById("contrato__garantia").addEventListener("change", function (e) {
            document.getElementById("contrato__garantia__letras").innerHTML = numeroALetras(this.value);
            console.log(this.value);
        });
        document.getElementById("contrato__garantia").addEventListener("change", function (e) {
            document.getElementById("contrato__garantia__letras__dato").innerHTML = numeroALetras(this.value);
            console.log(this.value);
        });
    }
}

function numeroALetras(n) {
    var num = parseInt((n * 100) + '');

    var centavos = num % 100;
    var numero = parseInt(n + '');

    var respuesta = '';

    if (numero > 999) {
        if ((numero + '').length > 6) {

            var residuo = parseInt((numero + '')) % 1000000;
            var x = parseInt(numero / 1000000);

            if (x == 1) {
                respuesta = ' UN MILLON ' + numeroALetras(residuo);
            } else {
                respuesta = numeroALetras(x) + ' MILLONES ' + numeroALetras(residuo);
            }
        } else if ((numero + '').length > 3) {
            var residuo = parseInt((numero + '')) % 1000;
            var x = parseInt(numero / 1000);

            if (x == 1) {
                respuesta = ' MIL' + numeroALetras(residuo);
            } else {
                respuesta = numeroALetras(x) + ' MIL ' + numeroALetras(residuo);
            }
        }
    } else {
        if (numero == 100) {
            respuesta = 'CIEN';
        } else if (numero > 100) {
            var cen = parseInt(numero / 100);
            var dec = numero % 100;

            respuesta = ' ' + centenas_nal(cen) + ' ' + numeroALetras(dec);
        } else {
            var dec = numero % 100;

            if (dec < 20) {
                respuesta = ' ' + unidades_nal(dec);
            } else {
                var unis = dec % 10;
                var ddec = parseInt(dec / 10);

                if (unis != 0) {
                    respuesta = ' ' + decenas_nal(ddec) + ' Y ' + unidades_nal(unis);
                } else {
                    respuesta = ' ' + decenas_nal(ddec);
                }
            }
        }
    }

    return respuesta;
}

///////////////////////////

function unidades_nal(n) {
    if (n + '' == '1') {
        return 'UNO'
    }
    if (n + '' == '2') {
        return 'DOS'
    }
    if (n + '' == '3') {
        return 'TRES'
    }
    if (n + '' == '4') {
        return 'CUATRO'
    }
    if (n + '' == '5') {
        return 'CINCO'
    }
    if (n + '' == '6') {
        return 'SEIS'
    }
    if (n + '' == '7') {
        return 'SIETE'
    }
    if (n + '' == '8') {
        return 'OCHO'
    }
    if (n + '' == '9') {
        return 'NUEVE'
    }


    if (n + '' == '10') {
        return 'DIEZ'
    }
    if (n + '' == '11') {
        return 'ONCE'
    }
    if (n + '' == '12') {
        return 'DOCE'
    }
    if (n + '' == '13') {
        return 'TRECE'
    }
    if (n + '' == '14') {
        return 'CATORCE'
    }
    if (n + '' == '15') {
        return 'QUINCE'
    }
    if (n + '' == '16') {
        return 'DIECISEIS'
    }
    if (n + '' == '17') {
        return 'DIECISIETE'
    }
    if (n + '' == '18') {
        return 'DIECIOCHO'
    }
    if (n + '' == '19') {
        return 'DIECINUEVE'
    }

    return '';
}

function decenas_nal(n) {
    if (n + '' == '1') {
        return 'DIEZ'
    }
    if (n + '' == '2') {
        return 'VEINTE'
    }
    if (n + '' == '3') {
        return 'TREINTA'
    }
    if (n + '' == '4') {
        return 'CUARENTA'
    }
    if (n + '' == '5') {
        return 'CINCUENTA'
    }
    if (n + '' == '6') {
        return 'SESENTA'
    }
    if (n + '' == '7') {
        return 'SETENTA'
    }
    if (n + '' == '8') {
        return 'OCHENTA'
    }
    if (n + '' == '9') {
        return 'NOVENTA'
    }

    return '';
}

function centenas_nal(n) {
    if (n + '' == '1') {
        return 'CIENTO'
    }
    if (n + '' == '2') {
        return 'DOCIENTOS'
    }
    if (n + '' == '3') {
        return 'TRECIENTOS'
    }
    if (n + '' == '4') {
        return 'CUATROCIENTOS'
    }
    if (n + '' == '5') {
        return 'QUINIENTOS'
    }
    if (n + '' == '6') {
        return 'SEISCIENTOS'
    }
    if (n + '' == '7') {
        return 'SETECIENTOS'
    }
    if (n + '' == '8') {
        return 'OCHOCIENTOS'
    }
    if (n + '' == '9') {
        return 'NOVECIENTOS'
    }

    return '';
}