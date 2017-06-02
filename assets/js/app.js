$(document).ready(function () {
	$(".modal").modal();


});

var agregarContactos= function(e){
    e.preventDefault();
    
    /*Obtener datos de usuario*/
    var $dondeAgregar=$("#areaMostrado");
    var $nombre=$("#nombre").val();
    var $telefono =$("#telefono").val();
    var $apellido=$("#apellido").val();
    
    /*Crear elementos*/    
    var $tarjeta = $("<div/>");
    var $sNombre = $("<span/>");
    var $sApellido= $("<span/>");
    var $pNumero= $("<p />");
    
    /*Poner los elementos en el DOM*/
    $tarjeta.append($sNombre);
    $tarjeta.append($sApellido);
    $tarjeta.append($pNumero);
    $dondeAgregar.append($tarjeta);
    
    /*Agregar contenido*/
    $nombre.text("");
/*   Hay un problema aqui con los nombres de la variable nombre*/
    
    
};

//Esta funcion se supone que imprime en el area designada para impresion
/*	$("[data-publication]").on("click", function (event) {
		var container = document.getElementById("areaMostrado");
		var type = $(event.currentTarget).data("publication");
		publish(container, type);
	});*/