import * as Koa from 'koa';
import * as Nunjucks from 'nunjucks';
import * as KoaStaticCache from 'koa-static-cache';
import { useControllers } from 'koa-controllers';

const app = new Koa()

app.use(KoaStaticCache('./static',{
  gzip: true,
  prefix: '/public'
}))

app.use( async (ctx, next) => {
    /* 
      *  在ctx对象下挂载一个 template属性,用于 存放模版引擎
      * 创建模版引擎实例对象
      * Nunjucks.Environment
    */
   ctx.template =  new Nunjucks.Environment(
     new Nunjucks.FileSystemLoader( __dirname + '/../views/'  )
   )

  //  ctx.template.render()

   await next()
} )
/* 
  * 第一个参数是当前应用 app 对象
  * 第二个参数hui自动加载通过第二个参数指定的文件,加载进来的文件就是控制器文件控制器文件的路径可以通过 Path-to-RegExp来声明
  * Path-to-RegExp 是基于 node 的类正则路径的表示方法
*/
useControllers(
  app,
  /* 
    * 控制器文件一定要设置成 .js (不是.ts)
    * 因为当前ts 文件 我们需要编译以后再交给 node 去执行的
    * 控制器虽然是 ts 写的,但是编译以后 会变成.js ,所以字符串中不能填 .ts而是要填写编译的控制文件 '.js'
    * *: 任意文件
    * ** : 任意目录
  */
  __dirname + '/controllers/**/*.js',
  {
    multipart: {
      /* 
        *  设置上传目录
      */
      dest: './ uploads',
      storage: 2,
      limits: {
        fileSize: 3000,
        files: 300
      }
    }
  }
);

app.listen(7777)