import app from "./app.js";
import PORT from "./constants.js";


app.listen(PORT,()=>{
    console.log(`App listening on Port ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send('App is working')
})