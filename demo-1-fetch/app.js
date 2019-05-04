const Koa = require('koa');
const json = require('koa-json');
const path = require('path');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = require('./routes/index');

app.use(json());
app.use(bodyParser());
app.use(require('koa-static')(__dirname));

//配置模版引擎
render(app, {
	root: path.join(__dirname, 'views'),
	layout: 'layouts/layout',
	viewExt: 'html',
	cache: false,
	debug: false
});



//配置路由模块，注意一定要在后面，因为后面有些配置一定要在路由之前才起作用，所以直接塞到后面就没错了
app.use(router.routes()).use(router.allowedMethods());

//监听端口
app.listen(3001, async () => {
	console.log("Server is running at http://127.0.0.1:3001")
})
