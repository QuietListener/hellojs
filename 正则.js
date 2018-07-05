function puts(content)
{
    console.log (content)
}

/*
 \s : 空格
 \S : 非空格
 \d : 数字
 \D : 非数字
 \w : 字符 ( 字母 ，数字，下划线_ )
 \W : 非字符例子：是否有不是数字的字符
 */

var url = "https://ireading.baicizhan.com/react_reading/reading/article/96?from_package=default&timestamp=1530762394000&ts=1530762396000"
var re = /\w*\/article\/\w*/i;

var url1 = "https://ireading.baicizhan.c/mine/recordings?adsaf"
var re1 = /\w*\/recordings\w*/i

puts(re.test(url))
puts(re1.test(url1))