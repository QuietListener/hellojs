function puts(content)
{
  console.log (content)
}

/**
 * 1.promise 是一个容器，保存着未来才会结束的事件，有三种状态，pending(正在进行)，fulfilled(结束),rejected(已失败),只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态
 *
 * 2.一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected
 *
 * 3.Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
 */


/**
 * promise 接受一个"函数"作为参数，这个函数有两个参数(都是函数)，resolve和reject，他们都是由javascript引擎提供。
 * resolve在状态从pending到fulfiled变化后只需，reject在状态从pending变化到rejected时候调用
 * @type {Promise}
 *

 const promise = new Promise(function(resolve, reject) {
  // ... some code

  if ( 异步操作成功){
    resolve(value);
  } else {
    reject(error);
  }
  });

*/

/***
 * promise 生成以后用then 指定 resolved 和 rejected时候的回调函数
 */

// const testPromise = function(id)
// {
//   const promise = new Promise(function(resolve,reject){
//     if(id>0)
//     {
//       setTimeout(()=>{
//         resolve("大于0");
//         console.log("继续执行"); //这一句会执行。resolve和reject并不会终结函数的执行
//       },2000);
//     }
//     else
//     {
//       setTimeout(()=>{reject(new Error("小于0"))},2000);
//     }
//
//   });
//
//   return promise;
// }
//
//
// testPromise(100).then((val)=>{
//   puts(val);
// }).catch(e=>{
//   console.log(e);
// });
//
// testPromise(-100).then((val)=>{
//   puts(val);
// }).catch(e=>{
//   console.log(e);
// });
//
//
//
// //promise嵌套
// const p1 = new Promise(function(resolve,reject){
//   setTimeout(()=>{
//     puts("等了3000秒了")
//     reject("new error failed");},3000);
// })
//
// const p2 = new Promise(function(resolve,reject){
//   setTimeout(()=>{
//     puts("等了1000秒?")
//     resolve(p1);//如果p1的状态是pending就阻塞在这里。
//   },1000);
// });
//
// p2.then(result=>console.log(result))
//   .catch(error=>console.error(error))



const PromiseMaker = function (name,time,rej=false){

    return new Promise(function(resolve,reject){
      setTimeout(()=>{
        puts(`${name}:等${time}秒`);
        if(rej == true)
        {
          reject(new Error(`error ${name}`))
        }
        else{
          return resolve(name);
        }},time);
    })
}




var pp1 = PromiseMaker("pp1",1000)
var pp2 = PromiseMaker("pp2",3000)
var pp3 = PromiseMaker("pp3",1000)
var pp4 = PromiseMaker("pp4",100,true); //会失败

Promise.all([pp1,pp2,pp3,pp4]).then(value=>{
  console.log(value) //全部都是resolved状态时候才调用try
}).catch(e=>{
  console.log(e); //只要有一个是rejectd立即调用rejected;
})