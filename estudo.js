function media(){  
    let n1 = document.getElementById("v1").value;
    let n2 = document.getElementById("v2").value;
    let n3 = document.getElementById("v3").value;
    let r = (Number(n1) + Number(n2) + Number(n3))/3;

    document.getElementById("resultado").innerHTML = "Média " + r;
}
