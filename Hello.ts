export class Hello {

}

/* 多行字符串 */
var content = `aaa
bbb
ccc`

/* 字符串模板 */
var myname = "xdd"

var getName = function () {
  return "xdd"
}

console.log(`hello ${myname}`)
console.log(`hello ${getName()}`)

console.log(`<div>
  <span>${myname}</span>
  <span>${getName()}</span>
  <div>bd</div>
  </div>`)

/* 自动拆分字符串 */
function test (template, name, age) {
  console.log(template)
  console.log(name)
  console.log(age)
}

var myName = "zhang san"

var getAge = function () {
  return 18
}

test`Hello my name is ${myName}. I'm old is ${getAge()}`

var myName1: string = "li si"
/* myName1 = 13 */

var alisa: any = "xixi"
alisa = 16

function Test(name: string): string {
	return ""
}
Test("girl")

/* 声明自定义类型 */
class Person {
  name: string
  age: number
}

var wangwu: Person = new Person()
wangwu.name = "wangwu"
wangwu.age = 25

function Test2(a: string, b: string ,c: string = "jojo") {
  console.log(a)
  console.log(b)
  console.log(c)
}
Test2("hh","jj","dddddd")
Test2("hh","jj")