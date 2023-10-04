function ejemplo1(){
    alert("Bienvenidos a la clase de javascript")
}
function ejemplo2(){
    let nombre;
    nombre=prompt("Ingrese Nombre: ","");
    alert("Bienvenid@ "+ nombre);
}
function ejemplo3(){
    let n1,n2,n3, suma;
    n1=prompt("Ingresar 1er numero");
    n2=prompt("Ingresar 2er numero");
    suma=parseInt(n1)+parseInt(n2);
    document.write("La suma es : " + suma);
}
function ejemplo4(){
    document.write('<img src="https://img.freepik.com/fotos-premium/lago-camino-piedra-que-rodeado-arboles-lago-arbol-flores-rosas_772412-1105.jpg">')
}
function ejemplo5(){
    let respuesta=confirm("¿Desea visitar la pagina UTP?")
    if(respuesta){
        alert("Bien!!, buena eleccion")
        window.location="https://www.utp.edu.pe/web/?utm_source=google&utm_medium=cpc&utm_campaign=consideration_todas_search_trafico_lima-provincias_aon_utp&utm_term=todas_lima-provincias_kw-exacta-utp&utm_content=rsa&gclid=EAIaIQobChMIwd3wu57dgQMV9QV9Ch0BAwotEAAYASAAEgJxbvD_BwE";
    }
    else{
        alert("ok, será en otro momento");
    }
}
function ejemplo6(){
    let n;
    n = document.getElementById('nombre').value;
    document.write("Bienvenido " +n);
}
function ejemplo7(){
    let respuesta, medio;
    respuesta=document.getElementsByName('resp');
    for(var i=0; i<respuesta.length; i++){
        if(respuesta[i].checked)
            medio =respuesta[i].value;
    }
    document.write("Usted se desplaza en " +medio);
}
function ejemplo8(){
    let n1,n2,p;
    n1=document.producto.nro1.value;
    n2=document.producto.nro2.value;
    p=n1*n2;
    document.producto.resultado.value = p;
}
function ejem2(){
    var nom=document.getElementById('nombre').value;
    var gen, hobbie1="",hobbie2="",hobbie3="",hobbie4="";
    var porNombre=document.getElementsByName("genero");
    for(var i=0; i<porNombre.length;i++)
        if(porNombre[i].checked)
            gen=porNombre[i].value;
    var inst=document.getElementById('instruccion').value;
    if(document.getElementsByName("musica")[0].checked===true)
        var hobbie1="Musica";
    if(document.getElementsByName("lectura")[0].checked===true)
        var hobbie2="Lectura";
    if(document.getElementsByName("pelicula")[0].checked===true)
        var hobbie3="Pelicula";
    if(document.getElementsByName("deporte")[0].checked===true)
        var hobbie4="Deporte";
    document.Form2.respuesta.value = 
            "Su nombre es : "+nom+ 
            "\n Su genero es :"+gen+
            "\n Su grado de instruccion es :"+inst+
            "\n Sus hobbies son  :\n"+
            hobbie1+ " "+hobbie2+ " "+hobbie3+" "+hobbie4;
}
