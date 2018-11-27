"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var Hello = /** @class */ (function () {
    function Hello() {
    }
    return Hello;
}());
exports.Hello = Hello;
/* 多行字符串 */
var content = "aaa\nbbb\nccc";
/* 字符串模板 */
var myname = "xdd";
var getName = function () {
    return "xdd";
};
console.log("hello " + myname);
console.log("hello " + getName());
console.log("<div>\n  <span>" + myname + "</span>\n  <span>" + getName() + "</span>\n  <div>bd</div>\n  </div>");
/* 自动拆分字符串 */
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myName = "zhang san";
var getAge = function () {
    return 18;
};
test(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Hello my name is ", ". I'm old is ", ""], ["Hello my name is ", ". I'm old is ", ""])), myName, getAge());
var myName1 = "li si";
/* myName1 = 13 */
var alisa = "xixi";
alisa = 16;
function Test(name) {
    return "";
}
Test("girl");
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var wangwu = new Person();
wangwu.name = "wangwu";
wangwu.age = 25;
var templateObject_1;
