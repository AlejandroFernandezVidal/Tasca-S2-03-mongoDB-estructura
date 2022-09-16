use pizzeria
db.createCollection("clientes")
db.clientes.insertOne({nombre:"pepe",apellido:"navarrete",direccion:"c/barcelona nº3",codigo_postal:"08001",localidad:ObjectId("62fccec0de3f076aad1d105c"),telefono:"765432109"})
db.createCollection("pedidos")
db.pedidos.insertOne({cliente:ObjectId("62fcca33de3f076aad1d104e"),fecha_hora:ISODate("2022-08-08T00:00:00.000Z"),local :"",domicilio:{fecha_hora:ISODate("2022-08-08T00:25:00.000Z"),repartidor:ObjectId("62fcceb2de3f076aad1d105b")},cantidad_producto:[1,1,1],precio:29.05,tienda:ObjectId("62fcce73de3f076aad1d105a")})
db.createCollection("categoria")
db.categoria.insertOne({nombre:"deliciosas"})
db.createCollection("productos")
db.productos.insertMany([{pizzas:{nombre:"clasica",descripcion:"fina masa acompañada de jamon y queso",categoria:ObjectId("62fccd60de3f076aad1d1051"),imagen:"imagen direccion",precio:15.95}},{hamburguesas:{nombre:"normal",descripcion:"una carne deliciosa con el mejor pan artesanal",imagen:"imagen direccion",precio:10.95}},{bebidas:{nombre:"refresco",descripcion:"el mejor refresco con un sabor unico",imagen:"imagen direccion",precio:2.15}},{pedidos:ObjectId("62fcce73de3f076aad1d105a")}])
db.createCollection("tiendas")
db.tiendas.insertOne({direccion:"c/balmes nº1",codigo_postal:"08002",localidad:ObjectId("62fccec0de3f076aad1d105c")})
db.createCollection("trabajadores")
db.trabajadores.insertOne({nombre:"antonio",apellido:"navarro",tienda:ObjectId("62fcce73de3f076aad1d105a"),cocinero_repartidor:"repartidor",nif:"01234567A",telefono:"234567890"})
db.createCollection("provincias")
db.provincias.insertOne({nombre:"barcelona"})
db.createCollection("localidades")
db.localidades.insertOne({nombre:"barcelona",provincia:ObjectId("63244695ad80355419e3167f")})