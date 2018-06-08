function puts(content)
{
    console.log (content)
}

/*Reflect 和 Proxy*/

/**
 * Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。
 */


/*
*
* var proxy = new Proxy(target, handler);
* new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。
*/
var obj = new Proxy({},{
    get:(target,key,receiver)=>{
      console.log(`getting ${key}!`);
      return Reflect.get(target,key,receiver)
    },

    set:(target,key,receiver)=>{
        console.log(`setting ${key}!`);
        return Reflect.set(target,key,receiver)
    }
})


obj.count = 1;
++obj.count


//如果handler没有设置任何拦截，那就等同于直接通向原对象。
var target={a:1}
var handler = {}
var proxy = new Proxy(target,handler);
proxy.a = 123;
puts(target.a)//123
puts(proxy.a)//123


var Proxy1 = new Proxy({}, {
  get: function(target, property) {
    return 35;
  }
});

class PTest extends Proxy1
{
    constructor()
    {
        super();
    }
}

var pt1 = new PTest();
puts(pt1.time)