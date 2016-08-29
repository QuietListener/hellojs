function puts(content)
{
    console.log (content)
}

/*
* 创建对象 原型
*/

var arr = [1,2,3]
puts(arr)

/*
原型链
 arr ----> Array.prototype ----> Object.prototype ----> null
*/

/*
* 创建对象
*/

//够着函数创建对象
function Student(name){
    this.name = name;
    this.hello = function(){
        puts("hello "+this.name)
    }
}


var s1 =  new Student("junjun")
var s2 = new Student("xiaolan")
s1.hello()
s2.hello()

//说明s1的hello和s2的hello不是一个hello
puts ("s1.hello == s2.hello : " + (s1.hello == s2.hello))
puts (s1.__proto__)
puts (s2.__proto__)
puts (s1.constructor ===Student.prototype.constructor)
puts (Student.prototype.constructor == Student)

Object.getPrototypeOf(s1) === Student.prototype
puts (Object.getPrototypeOf(s1))
puts(s1 instanceof  Student)

//够着函数创建对象
function Student1(name){
    this.name = name;
}

Student1.prototype.hello = function () {
    puts("hello "+this.name)
}
var s11 =  new Student1("junjun1")
var s21 = new Student1("xiaolan1")

puts ("s11.hello === s21.hello : " + (s11.hello === s21.hello))

//继承 原型链实现继承

function PrimaryStudent(name,grade)
{
    Student.call(this,name);
    this.grade = grade;
}
//定义一个空函数来做为桥接
function F(){};
F.prototype = Student.prototype;
PrimaryStudent.prototype = new F()
PrimaryStudent.prototype.constructor = PrimaryStudent;

//定义新方法
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
}

var s3  = new PrimaryStudent("huai",123);
puts(s3.getGrade())
s3.hello();

puts("s3 instanceof Student " + (s3 instanceof Student))
puts("s3 instanceof PrimaryStudent " + (s3 instanceof PrimaryStudent))

//class ES6
class Student3{
    constructor(name)
    {
        this.name = name;
    }

    hello(){
        puts("hello "+this.name)
    }

    static test_func (param){
        return param + 222;
    }
}

s4 = new Student3("xiaolan")
s4.hello()

//继承

class PrimaryStudent1 extends Student3
{
    constructor(name,grade)
    {
        super(name);
        this.grade = grade;
    }

    getGrade()
    {
        return this.grade
    }


    static test_func (param){
        puts(super.test_func(param));
        return param + 111;
    }
}

var ps1 = new PrimaryStudent1("ps",321)
ps1.hello()
puts(ps1.getGrade())

//PrimaryStudent1.test_var = 321;
puts (PrimaryStudent1.test_func(321))
