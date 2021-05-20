class Articulo {
  constructor(nombre, precio, tipo, tamanio, unidad, precioUnid, precioMitad, precioMin, ingredientes, allIngredientes, ingredOrig) {
    this.artNombre = nombre;
    this.artPrecio = precio;
    this.artTipo = tipo;
    this.artTamanio = tamanio;
    this.artUnidad = parseInt(unidad);
    this.artPrecioUnid = precioUnid;
    this.artPrecioMitad = precioMitad;
    this.artPrecioMin = precioMin;
    this.artIngred = ingredientes;
    this.artAllIngred = allIngredientes;
    this.artIngredOrig = ingredOrig;
    this.artIngredAdded = [];
    this.artIngredRemoved = [];
  }

  addToIngred(ingrediente){
    this.artIngred.push(ingrediente);

  }

  addToAllIngred(ingrediente){
    this.artAllIngred.push(ingrediente);
  }

  removeFromIngred(ingrediente){
    this.artIngred = this.artIngred.filter(item => item.nombre != ingrediente.nombre);

    let nombre = ingrediente.nombre;

    if(this.artIngredOrig.some(item => item.nombre == nombre)){
      this.artIngredRemoved.push(ingrediente);
    }

  }

  removeFromAllIngred(ingrediente){
    this.artAllIngred = this.artAllIngred.filter(item => item.nombre != ingrediente.nombre);
  }

  cargarAllIngred(ingredientes, allIngredientes){
    this.artAllIngred = 
      allIngredientes.filter(item => !ingredientes.some(ingr => ingr.nombre == item.nombre));
  }

  getIngrediente(nomIngred){
    let obj = this.artIngred.find(item => item.nombre == nomIngred);

    return obj;
  }

  getAllIngrediente(nomIngred){
    let obj = this.artAllIngred.find(item => item.nombre == nomIngred);

    return obj;
  }

  cargarLiIngred(ingrediente){
    if(ingrediente.tipo == "p"){
      return "<li class='list-group-item py-3'>"+ingrediente.nombre+"</li>";  
    }else if(ingrediente.tipo == "x"){
      return "<li id='salsaEligir' class='d-inline-flex list-group-item py-3'> "+ingrediente.nombre+" <i class='material-icons'>add_box</i></li>";
    }else{
      return "<li class='list-group-item py-3'>"+ingrediente.nombre+"<button type='button' class='close'>&times;</button></li>";
    }

  }

  cargarTdAllIngred(ingrediente){
    let txt = "";
    txt += '<tr><td class="d-flex flex-fill justify-content-end px-1 py-3 text-left">'+ingrediente.nombre+'</td>';
    txt += '<td class= "px-1 py-3"><span class="badge badge-light">'+ingrediente.suplemento+'€</span></td></tr>';    
    return txt;
  }

  updatePrecio(suplemento, operacion){
    let precio = 0;

    if(operacion == "suma"){
      precio = parseFloat(this.artPrecio) + parseFloat(suplemento);
    }else{
      precio = parseFloat(this.artPrecio) - parseFloat(suplemento);
    }
    
    this.artPrecio = precio.toFixed(2);
  }

  updateUnidad(cantidad){
    let precio = parseFloat(this.artPrecio);
    let diferencia = 0;

    diferencia = cantidad - this.artUnidad;

    if(diferencia < 0){
      diferencia = diferencia * -1;
    }

    if(diferencia != 0){
      let precioAux;

      if(this.artTamanio == 1){
        precioAux = parseFloat(this.artPrecioUnid);
      }else if(this.artTamanio == 2){
        precioAux = parseFloat(this.artPrecioMitad);
      }else{
        precioAux = parseFloat(this.artPrecioMin);
      }

      if(this.artUnidad < cantidad){
        for(var i=0;i<diferencia;i++){
          precio += precioAux; 
        }
      }else{
        for(var i=0;i<diferencia;i++){
          precio -= precioAux; 
        }        
      }
    }

    this.artUnidad = parseInt(cantidad);
    this.artPrecio = precio.toFixed(2);

  }  

  updateTamanio(tamanio, nombre){
    this.artTamanio = tamanio;
    this.artTipo = nombre;

    let precioAux;
    let precio = 0;

    if(this.artTamanio == 1){
      precioAux = parseFloat(this.artPrecioUnid);
    }else if(this.artTamanio == 2){
      precioAux = parseFloat(this.artPrecioMitad);
    }else{
      precioAux = parseFloat(this.artPrecioMin);
    }

    for(var i=0;i<this.artUnidad;i++){
      precio += precioAux; 
    }

    this.artPrecio = precio.toFixed(2);

  }

  sortArtAllIngred(){
    this.artAllIngred.sort(function(a, b){
      var x = a.nombre.toLowerCase();
      var y = b.nombre.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
  }

  checkAddedAndRemoved(){
    this.artIngredAdded = this.artIngred.filter(item => !this.artIngredOrig.some(ingr => ingr.nombre == item.nombre));    

    this.artIngredRemoved = this.artIngredOrig.filter(item => !this.artIngred.some(ingr => ingr.nombre == item.nombre));    
  }

}
