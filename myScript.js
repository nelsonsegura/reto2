function  leerComputador(){
	$.ajax({
url : 'https://g7f62cd68b301b3-xnyifj0oird3owal.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/computer/computer',
type : 'GET',
dataType : 'json',

success : function(computadores) {
	   		let cs=computadores.items;
	   		$("#listaComputadores").empty();
	   		for(i=0;i<cs.length;i++){
	   			$("#listaComputadores").append(cs[i].id+" <b>"+cs[i].brand+"</b> "+cs[i].model+" "+cs[i].category_id+" "+cs[i].name);
	   			$("#listaComputadores").append("<button onclick='borrarComputador("+cs[i].id+")'>Borrar</button><br>");
	}
},
error : function(xhr, status) {
alert('ha sucedido un problema');
}
});
}

function guardarComputador(){
	let idCl=$("#idpc").val();
    let no=$("#marca").val();
	let ma=$("#modelo").val();
	let ed=$("#categoria").val();
	let eda=$("#nombre").val();
	
	let data={
		id:idCl,
		brand:no,
		model:ma,
		category_id:ed,
		name:eda
	};
	
	let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);	
		
		
	$.ajax({
url : 'https://g7f62cd68b301b3-xnyifj0oird3owal.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/computer/computer',
type : 'POST',
// dataType : 'json',
data:dataToSend,
contentType:'application/json',

success : function(computadores) {
	$("#idpc").val("");
    $("#marca").val("");
	$("#modelo").val("");
	$("#categoria").val("");
	$("#nombre").val("");
},
error : function(xhr, status) {
//alert('ha sucedido un problema');
}
});	
}
function editarComputador(){
	let idCl=$("#idpc").val();
    let no=$("#marca").val();
	let ma=$("#modelo").val();
	let ed=$("#categoria").val();
	let eda=$("#nombre").val();

	let data={
		id:idCl,
		brand:no,
		model:ma,
		category_id:ed,
		name:eda
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://g7f62cd68b301b3-xnyifj0oird3owal.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/computer/computer',
	    type : 'PUT',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(computadores) {
			$("#idpc").val("");
			$("#marca").val("");
			$("#modelo").val("");
			$("#categoria").val("");
			$("#nombre").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerComputador();
	    }
	});

}

function borrarComputador(idCl){
	let data={
		id:idCl
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://g7f62cd68b301b3-xnyifj0oird3owal.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/computer/computer',
	    type : 'DELETE',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(computadores) {
			let idCl=$("#idpc").val();
			let no=$("#marca").val();
			let ma=$("#modelo").val();
			let ed=$("#categoria").val();
			let eda=$("#nombre").val();
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerComputador();
	    }
	});

}








function  leerClientes(){
	$.ajax({
url : 'https://g7f62cd68b301b3-ejemplog7.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client',
type : 'GET',
dataType : 'json',

success : function(clientes) {
	   		let cs=clientes.items;
	   		$("#listaClientes").empty();
	   		for(i=0;i<cs.length;i++){
	   			$("#listaClientes").append(cs[i].id+" <b>"+cs[i].name+"</b> "+cs[i].email+" "+cs[i].age);
	   			$("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button><br>");
	}
},
error : function(xhr, status) {
alert('ha sucedido un problema');
}
});
}

function guardarCliente(){
	let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
	let mailCliente=$("#mailCliente").val();
	let edad=$("#edadCliente").val();
	
	let data={
		id:idCliente,
		name:nombre,
		email:mailCliente,
		age:edad
	};
	
	let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);	
		
		
	$.ajax({
url : 'https://g7f62cd68b301b3-ejemplog7.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client',
type : 'POST',
// dataType : 'json',
data:dataToSend,
contentType:'application/json',

success : function(clientes) {
	$("#idCliente").val("");
    $("#nombreCliente").val("");
	$("#mailCliente").val("");
	$("#edadCliente").val("");
	
},
error : function(xhr, status) {
//alert('ha sucedido un problema');
}
});	
}
function editarCliente(){
	let idCliente=$("#idCliente").val();
	let nombre=$("#nombreCliente").val();
	let mailCliente=$("#mailCliente").val();
	let edad=$("#edadCliente").val();

	let data={
		id:idCliente,
		name:nombre,
		email:mailCliente,
		age:edad
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://g7f62cd68b301b3-ejemplog7.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client',
	    type : 'PUT',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(clientes) {
	   		$("#idCliente").val("");
			$("#nombreCliente").val("");
			$("#mailCliente").val("");
			$("#edadCliente").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerClientes();
	    }
	});

}

function borrarCliente(idCliente){
	let data={
		id:idCliente
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://g7f62cd68b301b3-ejemplog7.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client',
	    type : 'DELETE',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(clientes) {
	   		$("#idCliente").val("");
			$("#nombreCliente").val("");
			$("#mailCliente").val("");
			$("#edadCliente").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerClientes();
	    }
	});

}






function  leerMensaje(){
	$.ajax({
url : 'https://g7f62cd68b301b3-ejemplog7.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message',
type : 'GET',
dataType : 'json',

success : function(Mensaje) {
	   		let cs=Mensaje.items;
	   		$("#listaMensajes").empty();
	   		for(i=0;i<cs.length;i++){
	   			$("#listaMensajes").append(cs[i].id+" <b>"+cs[i].messagetext+"</b> ");
	   			$("#listaMensajes").append("<button onclick='borrarMensaje("+cs[i].id+")'>Borrar</button><br>");
	}
},
error : function(xhr, status) {
alert('ha sucedido un problema');
}
});
}
function guardarMensaje(){
	let idms=$("#idm").val();
    let mss=$("#MENSAJE").val();
	
	let data={
		id:idms,
		messagetext:mss,
	};
	
	let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);	
		
		
	$.ajax({
url : 'https://g7f62cd68b301b3-ejemplog7.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message',
type : 'POST',
// dataType : 'json',
data:dataToSend,
contentType:'application/json',

success : function(Mensaje) {
	$("#idm").val("");
    $("#MENSAJE").val("");
	
},
error : function(xhr, status) {
//alert('ha sucedido un problema');
}
});	
}
function editarMensaje(){
	let idms=$("#idm").val();
	let mss=$("#MENSAJE").val();

	let data={
		id:idms,
		messagetext:mss,
	
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://g7f62cd68b301b3-ejemplog7.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message',
	    type : 'PUT',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(Mensaje) {
	   		$("#idm").val("");
			$("#MENSAJE").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerMensaje();
	    }
	});

}

function borrarMensaje(idms){
	let data={
		id:idms
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://g7f62cd68b301b3-ejemplog7.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message',
	    type : 'DELETE',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(Mensaje) {
	   		$("#idm").val("");
			$("#MENSAJE").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerMensaje();
	    }
	});

}
