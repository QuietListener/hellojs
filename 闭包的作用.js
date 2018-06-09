function puts(content)
{
  console.log (content)
}

//能够访问自由变量的代码块
function init() {
  var name = "Mozilla"; // name 是一个被 init 创建的局部变量//自由变量
  function displayName() { // displayName() 是内部函数,一个闭包
    puts(name); // 使用了父函数中声明的变量
  }
  displayName();
}
init();

/**
 * 闭包很有用，因为它允许将函数与其所操作的某些数据（环境）关联起来。这显然类似于面向对象编程。在面向对象编程中，对象允许我们将某些数据（对象的属性）与一个或者多个方法相关联。
 */


//自动生成函数
function makeResizer(size)
{
  return function()
  {
    document.body.style.size = size+"px";
  }
}

var resizer12 = makeResizer(12)
var resizer14 = makeResizer(14)

//当点击后重新设置字体大小
//document.getElementById('size-12').onclick = resizer12;
//document.getElementById('size-12').onclick = resizer14;


//模拟私有方法

var Counter =  function(){

  //私有变量
  var privateCounter = 0;

  //私有函数
  function changeBy(val)
  {
    privateCounter+=val;
  }

  //返回一
  return {
      increment:function()
      {
        changeBy(1);
      },

      descrement:function()
      {
        changeBy(-1);
      },
      value:function()
      {
        return privateCounter;
      }

  }
}

var c1 = Counter();
var c2 = Counter();

puts(c1.value())
c1.increment();
puts(c1.value())

puts(c2.value())
c2.descrement();
puts(c2.value())

