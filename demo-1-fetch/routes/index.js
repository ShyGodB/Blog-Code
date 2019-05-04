const KoaRouter = require('koa-router');
const router = new KoaRouter();


router.get("/", async (ctx) => { //路由
    await ctx.render('index');  //
});

router.post("/index", async (ctx) => { //路由
    const username = ctx.request.body.username;
    ctx.body = {msg: username};
});


module.exports = router;
