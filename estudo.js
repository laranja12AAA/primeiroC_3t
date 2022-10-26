function media(){  
    let n1 = document.getElementById("v1").value;
    let n2 = document.getElementById("v2").value;
    let n3 = document.getElementById("v3").value;
    let r = (Number(n1) + Number(n2) + Number(n3))/3;

    document.getElementById("resultado").innerHTML = "Média " + r;
}

function total(){
    let v = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    let r = 0;
    for(let i =1; i <=t; i++){
        r = v * (1 + (j/100));
        document.write("Mês " + i + " - valor: " + r + "<br>");
        v = r;
    }
    document.write("Resultado: " + r) ;
}    
