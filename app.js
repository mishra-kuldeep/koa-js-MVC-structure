const Koa = require('koa');
const KoaRouter = require('koa-router');
const fs = require('fs');
const path = require('path');
const database = require('./src/config/database');
const dotenv = require('dotenv');
dotenv.config();

const app = new Koa();
const router = new KoaRouter();

// Including route path here
const routesPath = path.join(__dirname, 'src', 'routes');

// Middleware for logging requests
app.use(async (ctx, next) => {
    const fullUrl = `${ctx.protocol}://${ctx.host}${ctx.originalUrl}`;
    console.log(fullUrl);
    await next();
});

// Including route files here
fs.readdirSync(routesPath).forEach(file => {
    if (file.endsWith('.js')) {
        const route = require(path.join(routesPath, file));
        router.use(route.routes()); // Register routes on the router instance
        router.use(route.allowedMethods()); // Register allowed methods
    }
});

// Use the router with the app
app.use(router.routes());
app.use(router.allowedMethods());

database();
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
