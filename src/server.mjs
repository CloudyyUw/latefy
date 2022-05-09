import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import { join } from 'path';
import log from './tools/log.mjs';
import Controller from "./controller/main.mjs"

dotenv.config();

const app = express();

app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.set('trust proxy', 1);
app.set('views', join(process.cwd(), 'front-end'));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(Controller)

app.listen(process.env.PORT || 8080, () => {
  log.log(`Online: Port ${process.env.PORT || 8080}`);
});
