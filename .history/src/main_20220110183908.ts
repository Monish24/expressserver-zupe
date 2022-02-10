import express from 'express';
import { connectToDB } from './database';
import { registerAllRoutes } from './routes';
import cors from 'cors';

export const app = express();

app.use(express.json()) 
app.use(cors())


connectToDB().then(() => {

  registerAllRoutes()

  if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
  }
})
