import * as Koa from 'koa';

const app = new Koa();
const port = process.env.PORT || 3000;

app.use(async (ctx) => {
  ctx.body = 'hello world';
});

app.listen(port);
