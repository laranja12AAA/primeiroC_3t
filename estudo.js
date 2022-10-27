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
function moeda(atual){
    return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
function mat(){  
    let v = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
  
    if(!Number(v)){
        alert("O Capitual deve ser numérico.");
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
        return
    }
    if(!Number(j)){
        alert("Juros deve ser número.");
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return
    }
    if(!Number(t)){
        alert("Juros deve ser número.");
        document.getElementById("meses").value = "";
        document.getElementById("meses").focus();
        return
    }
    let r = 0;
    for(let i=1; i<=t; i++){
        r = v * (1+(j/100));
        v = r;
     // document.write("Mês " + i + " = " + moeda(r) + "<br>");
     
    }
    document.getElementById("totalGeral").innerHTML = "Total: "+moeda(r);
   // document.write("Resultado " + moeda(r));
}
