function puts(content)
{
    console.log (content)
}


//变量
var msg = "hello js"
puts (msg)

//常量
const cons = 100
puts (cons)
//TypeError: Assignment to constant variable.
//cons = 111

/*************数据类型*************/
//数值类型:包括整数和浮点数
var a1 = 11
var b1 = 11.2
var c1 = 2e3
puts (a1+","+b1+","+c1)

//布尔类型
var a2 = false
var b2 = true
puts(a2+","+b2)

//字符串
var str = '1234 abd'
puts (str)


//对象
var date = new Date()
puts(date)

//数组
var arr = new Array(3)
puts (arr)
puts (arr.length) //3

//json
var json = {123:234,"abc":'yes'}
puts(json) //{ '123': 234, abc: 'yes' }

/*************类型转换*************/
//转为数字
var num1 = parseInt("123xxx")
var num2 = parseInt("xx123.1")
puts (num1+","+num2) //123,NaN

//转为字符串
var str1 = new Date().toString()
var str2 = 123.123.toString()
//TypeError: Cannot read property 'toString' of undefined
//var str3 = undefined.toString();
puts (str1+","+str2)//Sun Jun 19 2016 12:10:13 GMT+0800 (CST),123.123


//3种强制类型转换
var bb1 = Boolean("123") //true
var bb2 = Boolean("") //false
var bb3 = Boolean(null) //false
var bb4 = Boolean(0) //false
var bb5 = Boolean(1) //true
var bb6 = Boolean(-1) //true
var bb7 = Boolean(undefined) //false
puts (bb1+","+bb2+","+bb3+","+bb4+","+bb5+","+bb6+","+bb7)

// 转换为
var num1 = Number("123")
var num2 = Number("")
var num3 = Number(null)
var num4 = Number("1.2")
var num5 = Number("1.2.2") //NaN
var num6 = Number(new Date())
var num7 = Number(undefined) //NaN
puts (num1+","+num2+","+num3+","+num4+","+num5+","+num6+","+num7)

/*************运算符*************/
var a = 3
var b = "3"
var c = 3
puts (a==b)
puts (a===b) //===必须是2个相同的类型
puts (a===c)

a === c ? puts ("yes") : puts ("no")
arr = []
puts (arr instanceof Array)

/*************变量作用域*************/

var t1 = 10
function foo_v(param)
{

    if(param > 0) //九三这个不执行，tt也会被初始化为undefined（这叫"变量提升"） 而不会报 //ReferenceError
    {
        var tt = 10
    }

    puts ("t1 = " + t1 + "; tt = " + tt)
}
foo_v(-1)
foo_v(1)


/*
function foo1(param)
{

    if(param > 0)
    {
        var tt = 10
    }

    puts ("t1 = " + t1 + "; tt = " + tt+"; no one"+noone) //ReferenceError: noone is not defined
}
foo1(-1)
 */


/*************闭包*************/
/*
*闭包是包含"自由变量"的"代码块"
*/

var c1 = 1
function foo2(param)
{
    c2 = 2
    function foo3(param1)
    {
        return c1+c2+param+param1;
    }
    return foo3
}

func1 = foo2(3)
puts(func1)
puts(func1(4))//10

c1=2
puts(func1(4))//11


/*
*变量的解构赋值
*/
//for循环 对象的属性遍历
var o = {
    name:"andy",
    age:20,
    city:"Beijing"
}

for(var key in o)
{
    console.log(key+":"+o[key])
}

//数组的属性是其索引
var arr = ["a","b"]
for(var i in arr)
{
    console.log(i+":"+arr[i])
}

var m = new Map()


//ES6中 Array Map Set 都是 iterable的
//可以用for of来遍历

var a = ["a","b"]
var s = new Set(['A',"B"])
var m = new Map([["AA",1],["BB",1]])
for(var x of a)
{
  puts(x)
}

for(var x of s)
{
  puts(x)
}

for(var x of m)
{
  puts(x)
}

//for(var)

//forEach

a.forEach(function(e,index,array){
   puts(e+":"+index+":"+JSON.stringify(array))
});

s.forEach(function(e,se,set){ //set没有索引所以 e和se都一样
    puts(e+":"+se+":"+JSON.stringify(set))
});

m.forEach(function(v,k,map){
    puts(k+":"+v+":"+JSON.stringify(map))
});



//函数
function abs(x)
{
    if(x>=0) return x
    else return -x
}

//js中函数也是一个对象,abs可以看做一个指向对象的变量
var abs = function(x)
{
    if(x>=0) return x
    else return -x
}

puts(abs(-1))//1

//js允许纯如人一个参数而不影响调用 属于"变量的解构赋值"
puts(abs(-10,11,"test"))//10
puts(abs()) //NaN



//对参数进行检查
function abs1(x)
{
    if (typeof x !== "number")
    {
        throw "Not a number"
    }

    if(x>=0) return x
    else return -x
}

/*
puts(abs1("afadsf"))
/Users/Admin/WebstormProjects/HelloJs/Hello.js:229
throw "Not a number"
^
Not a number
*/

//获取所有参数 arguments
function foo(x)
{
    puts(x)
    for(var a of arguments)
    {
        puts (a)
    }
}

foo(1,2,3,4)

//多个参数 ES6引入
function foo(a,b,...rest)
{
    puts(a)
    puts(b)
    puts(rest)
}

foo(1)
/**
 1
 undefined
 */
foo(1,2)
/*
 1
 2
 []
 */
foo(1,2,3,4)
/*
 1
 2
 [ 3, 4 ]
 */

//-----变量作用域 es5只有两种作用域:"函数作用域"和"全局作用域" ES6添加了"块作用域"--let指令来----

var global_vvv = "111"
//局部变量
function f1()
{
    puts("global_vvv:"+global_vvv)//global_vvv:undefined
    var global_vvv = 0;
    puts("global_vvv:"+global_vvv) //global_vvv:0
}
f1();
puts("global_vvv:"+global_vvv) //global_vvv:111

//全局变量 在最外层定义的函数
var glob_v = "glob_v"
puts(glob_v)  //glob_v



//变量提升
//js会扫描所有变量，并将所有变量提升到变量顶部("变量提升")，所以 var x = "hello " + y 不会报错，但是会提升申明但是不会提升赋值
function foo1(){
    var x = "hello " + y
    puts(x)
    var y = "Junjun"
}

/*
 相当于
function foo1(){
    var y = undefined
    var x = "hello " + y
    puts(x)
    var y = "Junjun"
}
*/

//名字空间
//全局变量绑定到window上,如果定义了相同的全局变量就会造成冲突,像Jquery 和 YUI都是这么做的
var MYApp={}
MYApp.name ="myapp"
MYApp.version = "1.2"
MYApp.foo = function()
{
    puts (MYApp.name)
}

MYApp.foo()


/*
   局部作用域
   js变量作用域实际是函数内部的（函数作用域） 在for循环中是无法定义具有局部作用域的变量
   使用let可以局部作用域（块作用域）
 */

function f3()
{
    var sum = 0
    for(var j = 0 ; j < 100; j++)
    {
        sum+=j;
    }

    j+=100 //还可以用i
    puts (j+"i")
}
f3()

//
//function f31()
//{
//    var sum = 0
//    for(let j = 0 ; j < 100; j++)
//    {
//        sum+=j
//    }
//
//    j+=100 //j+=100 //ReferenceError: j is not defined
//
//    puts (j+" ")
//}
//f31() //ReferenceError: j is not defined

//常量
const PI = 3.14


/**
 * 方法
 */

//js中定义一个对象
var xiaoming = {
    name:"xiaoming",
    birth:1990,
    age:function(){
        let y = new Date().getFullYear();
        return y - this.birth;  //this是一个特殊变量,指向当前的对象
    }
}
puts ("xiaoming age = " + xiaoming.age()) //xiaoming age = 26

function _age(){
    let y = new Date().getFullYear();
    return y - this.birth;  //this是一个特殊变量,指向当前的对象
}
//js中定义一个对象
var xiaoming = {
    name:"xiaoming",
    birth:1990,
    age:_age
}
puts ("xiaoming age = " + xiaoming.age()) //xiaoming age = 26

//xiaoming age = NaN 如果直接调用的话this指向全局对象，如果在strict模式下指向undefined
puts ("xiaoming age = " + _age()) //xiaoming age = NaN

//必须使用obj.fun来调用才行
var fage = xiaoming.age
puts("xiaoming age = " + fage() ) //xiaoming age = NaN




//js中定义一个对象
var xiaoming = {
    name:"xiaoming",
    birth:1990,
    age:function() {
        function get_age()
        {
            let y = new Date().getFullYear();
            return y - this.birth;  //this是一个特殊变量,指向当前的对象
        }
       return get_age
    }
}

//函数中顶一个的函数，this指向undefined
puts ("xiaoming age = " + xiaoming.age()())//xiaoming age = NaN

//解决上面的问题可以这样 使用闭包
var xiaoming = {
    name:"xiaoming",
    birth:1990,
    age:function() {

        var _this = this;
        function get_age()
        {
            let y = new Date().getFullYear();
            return y - _this.birth;  //this是一个特殊变量,指向当前的对象
        }
        return get_age
    }
}
puts ("xiaoming age = " + xiaoming.age()())//xiaoming age = 26


/*
  调用方法的对象可以看做一个方法执行的上下文~ this就指向这个上下文。
  js中可以使用applay或者call来指定this对象
*/


function swim(who)
{
    puts("I  and "+ who + " are swimming in "+this.where)
}

var pool = {
    where:"pool"
}
var river = {
    where:"river"
}

//这里面的pool和river就是上下文，this指定的。
swim.apply(pool,["junjun"]) //I  and junjun are swimming in pool
swim.call(pool,"junjun") //I  and junjun are swimming in pool
swim.apply(river,["junjun"]) //I  and junjun are swimming in pool
swim.call(river,"junjun") //I  and junjun are swimming in pool

//aplay 和 call的区别就是 后面的参数 是用数组还是 可变参数


/**
 * js中函数也是对象。
 * 高阶函数 可以接受别的函数作为参数的函数 f(a,b,f1)
 *
 */

var arr = [1,2,3,4,5]
var arr1 = arr.map(function(x){
   return x*x
})
puts(arr1)
var arrs = arr.map(String)
puts(arrs)


var arrsum = arr.reduce(function(x,y){puts(`${x},${y}\r\n`);return x+y});
puts(arrsum)

var arrsnum = arr.reduce(function(x,y){
    return x*10+y
});

puts(arrsnum) //12345


//filter
var farr1 = arr.filter(function(x){
    if(x%2 ==0)
    {
        return true;
    }
    return false;
})

puts(farr1)//[ 2, 4 ]

//sort
var sarr = arr.sort(function(x,y){
    if(x < y) return 1
    else if (x > y) return -1
    else return 0
})

puts (sarr) //[ 5, 4, 3, 2, 1 ]


/*
 闭包执行惰性计算
*/

function lazy_sum(arr)
{
    var sum  = function(){
        return arr.reduce(function(x,y){return x+y})
    }
    return sum;
}

var f = lazy_sum(arr)
puts(f)   //[Function]
puts(f()) //15


/**
 * 闭包是使得一个函数带有状态
 */

function create_counter(initial)
{
    var x = initial || 0;

    return {
        inc:function (){
            x+=1;
            return x;
       }
    }
}

puts("\r\ninc1")
c1 = create_counter(10)
puts (c1.inc())
puts (c1.inc())

//箭头函数ES6才支持
var fx = x=>x*x
puts (fx(2)) //4

//等价于
var fx = function(x){
    return x*x;
}

//上面一条表达式连return和{}都省略了，如果有多行就不能省略
var fx1 = x=>{
    if (x > 0)
       return x*x
    return x;
}
puts(fx1(12)) //144

//箭头函数跟匿名函数很像,但是this一直指向obj的 下面的代码是work的
var xiaoming = {
    name:"xiaoming",
    birth:1990,
    age:function() {

        var get_age = ()=>
        {
            let y = new Date().getFullYear();
            return y - this.birth;  //this是一个特殊变量,指向当前的对象
        }
        return get_age
    }
}
puts ("xiaoming age = " + xiaoming.age()())//xiaoming age = 26

puts("###+++++")
/**
 * 生成器 多次返回的函数 ES6
*/

function* counter(max)
{
    var i = 0;
    for( i = 0; i < max; i++)
    {
        yield i; //返回
    }

    return i; //表示done
}

var c1 = counter(2)
puts(c1.next())
puts(c1.next())
puts(c1.next())

var c2 = counter(2)
for(var i of c2) //使用for of 不用拍段done
  puts(i)

/*
 不要使用new Number()、new Boolean()、new String()创建包装对象；

 用parseInt()或parseFloat()来转换任意类型到number；

 用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；

 通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；

 typeof操作符可以判断出number、boolean、string、function和undefined；

 判断Array要使用Array.isArray(arr)；

 判断null请使用myVar === null；

 判断某个全局变量是否存在用typeof window.myVar === 'undefined'；

 函数内部判断某个变量是否存在用typeof myVar === 'undefined'。


 123..toString(); // '123', 注意是两个点！
 (123).toString(); // '123'
 */