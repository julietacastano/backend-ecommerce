export const justLogged = (req,res,next) =>{
    if(!req.isAuthenticated()){
        return res.redirect('/auth/login')
    }
    next()
}
