class Carrito {
  constructor() {
    this.carArticulo = [];
    this.carPrecioTotal = 0;
    this.carNumArticulos = 0;
  }

  getArticulo(indice) {
    return this.carArticulo[indice];
  }

  addArticulo(articulo){
    this.carArticulo.push(articulo);

    this.addPrecio(articulo.artPrecio);

    this.addNumArticulo(articulo.artUnidad);
  }

  removeArticulo(indice){
    this.removePrecio(this.carArticulo[indice].artPrecio);

    this.removeNumArticulo(this.carArticulo[indice].artUnidad);

    this.carArticulo.splice(indice, 1);
  }

  addPrecio(precio){
    this.carPrecioTotal += parseFloat(precio);
  }

  removePrecio(precio){
    this.carPrecioTotal -= parseFloat(precio);
  }

  addNumArticulo(num){
    this.carNumArticulos += num;
  }

  removeNumArticulo(num){
    this.carNumArticulos -= num;
  }

  showArticulo(articulo){
    let txt = '';

    txt += '<tr><td class= "py-3 px-1">'+articulo.artUnidad+'</td>';

    txt += '<td class="py-3 px-1 text-left"><div>'+articulo.artTipo+" "+articulo.artNombre+'</div>';

    if(articulo.artIngredAdded.length != 0){
      let ingredientes = '';
      let ingredAdded = articulo.artIngredAdded.length; 

      for(var i=0; i<ingredAdded; i++){
        if(i == 0){
          ingredientes += 'Con '+articulo.artIngredAdded[i].nombre;
        }else{
          ingredientes += ', '+articulo.artIngredAdded[i].nombre;
        }
      }

      txt += '<div><small>'+ingredientes+'</small></div></td>';
    }

    txt += '<td class= "py-3">'+articulo.artPrecio+'€</td>';

    txt += '<td id="removeArticuloCarrito" class= "py-3"><i class="material-icons">delete</i></td></tr>';

    return txt;

  }

}
