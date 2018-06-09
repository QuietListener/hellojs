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
 */
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});


/***
 * promise 生成以后用then 指定 resolved 和 rejected时候的回调函数
 */
