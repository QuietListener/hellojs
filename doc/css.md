## CSS 是什么？
CSS (层叠样式表)
## CSS用来干什么?
前文提到过, CSS 是用来指定文档如何展示给用户的一门语言——如网页的样式、布局、等等。

## CSS 语法
 选择器(selector)开头，后面跟大括号{}，属性(property):值(value); 的 声明(declarations)。每个声明都指定了我们所选择元素的一个属性，之后跟一个我们想赋给这个属性的值。

```css
 h1 {
    color: red;
    font-size: 5em;
}
p {
    color: black;
}
```


#### 使用类名
1. 使用类名
```css
.special {
  color: orange;
  font-weight: bold;
}

```

2. 指定元素和类名
```css
li.special {
  color: orange;
  font-weight: bold;
}

li.special,
span.special {
  color: orange;
  font-weight: bold;
}
```
#### 根据元素在文档中的位置确定样式
1. 选择器将选择<li>内部的任何<em>元素（<li>的后代）
```css
li em {
      font-weight: bold;
}
```

2. 选择h1同级并且在h1之后的元素p
```css
h1 + p {
  font-size: 200%;
}

```

#### 根据状态确定样式
```css
a:link {
  color: pink;
}

//访问过的
a:visited {
  color: green;
}

//悬停状态
a:hover {
  text-decoration: none;
}
```

#### 组合使用
1. 下面的代码为以下元素建立样式：在<body>之内，紧接在<h1>后面的<p>元素的内部，类名为 special。
```css
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```