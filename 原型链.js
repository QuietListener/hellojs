function puts(content)
{
  console.log (content)
}

//原型链
function Shape(name)
{
  this.name = name;
}

Shape.prototype = {
  constructor:Shape, //当new时候调用
  reName:function()
  {
    return this.name + " ++"
  }
}

Shape.lalala = function()
{
  return "lalala"
}

var s = new Shape("S1");
puts(s.name)
puts(s.prototype)
puts(s.__proto__ == Shape.prototype) //true
puts(s.reName())


function Circle(name)
{
  Shape.call(this,name)
  this.raduis_size = 10;
}

//只有函数有prototype
Circle.prototype={
  constructor:Circle,
  radius:function()
  {
    return "radius"
  },
  __proto__:Shape.prototype
}

var c = new Circle("C1")

puts(c.radius())
puts(c.reName())

//puts (Circle.lalala())


//原型链
//Circle.prototype.__prop__=> Shape.prototype
//Shape.prototype.__prop__=>Object.prototype

//c.__prop__ == Circle.prototype
//c.__prop__.__prop__ ---> Shape.prototype
//c.__prop__.__prop__.__prop__ ---> Object.prototype

//原型链
var c1 = c.__proto__ === Circle.prototype
var c2 = c.__proto__.__proto__ === Shape.prototype
var c3 = c.__proto__.__proto__.__proto__ === Object.prototype
var c4 = c.__proto__.__proto__ === s.__proto__
var c5 = c.__proto__ === Shape.prototype


puts(`c1 = ${c1} c2 = ${c2} c3 = ${c3} c4 = ${c4} c5 = ${c5}`)
//c1 = true c2 = true c3 = true c4 = true c5 = false

puts(s.hasOwnProperty("name"))
puts(s.hasOwnProperty("raduis_size"))
puts(c.hasOwnProperty("name"))
puts(c.hasOwnProperty("raduis_size"))