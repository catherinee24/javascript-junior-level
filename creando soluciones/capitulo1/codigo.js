dineroCofla = prompt("Cuanto dinero tienes Cofla?");
dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
dineroPedro = prompt("Cuanto dinero tienes Pedro?");


dineroCofla = parseInt(dineroCofla); //FUNCION QUE NOS PERMITE CONVERTIRLO A NUMEROS 

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla; compra el helado de agua");
    alert("y te sobran " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla; compra el helado de crema");
    alert("y te sobran " + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla; compra el helado de chocolate");
    alert("y te sobran " + (dineroCofla - 1.6));

}else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla; compra el helado de pistacho con crema mani");
    alert("y te sobran " + (dineroCofla - 1.8));

}
else if (dineroCofla >= 2.9) {
    alert("Cofla; compra el helado de triple chocolate o 1/4kg");
    alert("y te sobran " + (dineroCofla - 2.9));

} else {
    alert("Cofla; lo siento, tu saldo es insuficiente");
}



//OPCION PARA ROBERTO

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto; compra el helado de agua");
    alert("y te sobran " + (dineroRoberto - 0.6));
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto; compra el helado de crema");
    alert("y te sobran " + (dineroRoberto - 1));
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto; compra el helado de chocolate");
    alert("y te sobran " + (dineroRoberto - 1.6));

}else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto; compra el helado de pistacho con crema mani");
    alert("y te sobran " + (dineroRoberto - 1.8));
}
else if (dineroRoberto >= 2.9) {
    alert("Roberto; compra el helado de triple chocolate o 1/4kg");
    alert("y te sobran " + (dineroRoberto - 2.9));

} else {
    alert("Roberto; lo siento, tu saldo es insuficiente");
}



// opcion para Pedro

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro; compra el helado de agua");
    alert("y te sobran " + (dineroPedro - 0.6));
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro; compra el helado de crema");
    alert("y te sobran " + (dineroPedro - 1));
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro; compra el helado de chocolate");
    alert("y te sobran " + (dineroPedro - 1.6));

}else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro; compra el helado de pistacho con crema mani");
    alert("y te sobran " + (dineroPedro - 1.8));

}
else if (dineroPedro >= 2.9) {
    alert("Pedro; compra el helado de triple chocolate o 1/4kg");
    alert("y te sobran " + (dineroPedro - 2.9));

} else {
    alert("Pedro; lo siento, tu saldo es insuficiente");
}





