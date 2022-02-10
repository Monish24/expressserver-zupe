import { app } from "../../main"
import { spotifyApi } from '../../auth';

app.get('/api/getgenre',(req,res) => {
    spotifyApi.getCategories().then( data =>{
        req
        console.log(data.body)
        res.send(data.body)
    })
})