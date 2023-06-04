import { Router } from "express"
import { penelAdmin, crearProducto, publicarProducto, editarProductoForm, editarProducto, eliminarProducto } from "../controllers/adminController.js"
import { justAdmin } from "../middleware/autorizacion.js"

const adminRoutes = Router()

//Panel de administracion
adminRoutes.get('/', justAdmin, penelAdmin )

//Agregar un producto
adminRoutes.get('/crear', justAdmin, crearProducto)
adminRoutes.post('/crear', justAdmin, publicarProducto)

//Editar un producto
adminRoutes.get('/editar/:pid', justAdmin, editarProductoForm)
adminRoutes.post('/editar/:pid', justAdmin, editarProducto)

//Elimiar un producto
adminRoutes.delete('/eliminar/:pid', eliminarProducto) 

export default adminRoutes