import Express from "express";
import routerCart from "../routes/routerCarts.js";
import routerProducts from "../routes/routerProducts.js";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import prodManager from "./productManager.js";
import Product from "./product.js";

const port = 8080

const app = Express()

app.use('/static', Express.static('./public'))

app.use(Express.json())
app.use(Express.urlencoded({extended:true}))

app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')

app.use('/api/products', routerProducts)
app.use('/api/carts',routerCart)

const serverConected = app.listen(port, ()=>{console.log(`conectado a puerto ${port}`)})

const io = new Server(serverConected)

io.on('connection', socket =>{
    console.log('New client connected')

    socket.on('newProduct', productData =>{
        const newProd = new Product(productData)

        prodManager.addProduct(productData)
        const getProd = prodManager.getProducts()
        console.log(getProd)
        io.sockets.emit('update', getProd)
    })

    socket.on('refresh', ()=>{
        const getProd = prodManager.getProducts()
        io.sockets.emit('update', getProd)
    })
})