function calculadora() {

    var input1 = document.getElementById("numero1").value;
    var input2 = document.getElementById("numero2").value;
    var select = document.getElementById("select").value;
    var p = document.getElementById("resultado");

    if (input1 == '' || input2 == '') {
        p.innerHTML = 'digite numeros ';
        return
    }
    if (select === '+') {
        p.innerHTML = parseInt(input1) + parseInt(input2)
    }

}



