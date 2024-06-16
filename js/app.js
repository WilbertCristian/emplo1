function convertir(){
    var valor = parseFloat(document.getElementById("monto").value);

    var de = document.getElementById("de").value;
    var a = document.getElementById("a").value;

    boliviano = 1;
    chileno = 136.29;
    mexicano = 2.46;
    argentino = 126.67  ;
    dolar = 0.1445;

    var resultado = 0;

/*
    console.log(valor);
    console.log(de);
    console.log(a);*/
    
    //de Bolivianos a: chileno, mexicano. argentino, dolar:
    if(de == 10 && a == 20){
        resultado = valor * (boliviano * chileno);
    }else if(de == 10 && a == 30){
        resultado = valor * (boliviano * mexicano);
    }else if(de == 10 && a ==40){
        resultado = valor * (boliviano * argentino);
    }else if(de == 10 && a ==50){
        resultado = valor * (boliviano * dolar);
    }
    
    //de Chileno a: boliviano, mexicano, argentino, dolar:
    else if(de == 20 && a == 10){
        resultado = valor * (boliviano / chileno);
    }else if(de == 20 && a == 30){
        resultado = valor * (mexicano / chileno);
    }else if(de == 20 && a == 40){
        resultado = valor * (argentino / chileno);
    }else if (de == 20 && a ==50){
        resultado = valor * (dolar / chileno);
    }

    //de Mexicano a: boliviano, chileno, argentino, dolar:
    else if(de == 30 && a == 10){
        resultado = valor * (boliviano / mexicano);
    }else if(de == 30 && a ==20){
        resultado = valor * (chileno / mexicano);
    }else if(de == 30 && a ==40){
        resultado = valor * (argentino / mexicano);
    }else if(de == 30 && a ==50){
        resultado = valor * (dolar / mexicano);
    }

    //de Argentino a: boliviano, chileno, mexicano, dolar:
    else if(de == 40 && a ==10){
        resultado = valor * (boliviano / argentino);
    }else if(de == 40 && a ==20){
        resultado = valor * (chileno / argentino);
    }else if(de == 40 && a ==30){
        resultado = valor * (mexicano / argentino);
    }else if(de == 40 && a ==50){
        resultado = valor * ( dolar / argentino);
    }

    //de Dolar a: boliviano, chileno, mexicano, argentino:
    else if(de == 50 && a== 10){
        resultado = valor * (boliviano / dolar);
    }else if(de == 50 && a==20){
        resultado = valor * (chileno / dolar);
    }else if(de == 50 && a==30){
        resultado = valor * (mexicano / dolar);
    }else if(de == 50 && a==40){
        resultado = valor * (argentino / dolar);
    }
    else{
        resultado = valor;
    }
    
    /*console.log(resultado);*/
    document.getElementById("respuesta").innerHTML = resultado.toFixed(2);
}   