"use strict";
/**
 * 泛型：宽泛的、不具体的类型
 */
function createArray(length, value) {
    var result = [];
    for (var i = 0; i <= length; i++) {
        result[i] = value;
    }
    return result;
}
var f;
(function (f) {
    // 默认泛型number
    function createArray(length, value) {
        var result = [];
        for (var i = 0; i <= length; i++) {
            result[i] = value;
        }
        return result;
    }
    // console.log(createArray<number>(3, 10))
})(f || (f = {}));
/**
 * 类数组
 */
function sum() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var args = arguments;
    for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
/**
 * 泛型类
 */
var b;
(function (b) {
    var MyArray = /** @class */ (function () {
        function MyArray() {
            this.list = [];
        }
        MyArray.prototype.add = function (item) {
            this.list.push(item);
        };
        MyArray.prototype.getMax = function () {
            var _result = this.list[0];
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i] > _result) {
                    _result = this.list[i];
                }
            }
            return _result;
        };
        return MyArray;
    }());
    var myArray = new MyArray();
    myArray.add(1);
    myArray.add(29);
    // console.log(myArray.getMax())
})(b || (b = {}));
/**
 * 泛型接口
 */
var c;
(function (c) {
    var cal = function (a, b) {
        return a;
    };
    console.log(cal(2, 4));
})(c || (c = {}));
// 多个类型参数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var result = swap([1, 'a']);
function logger(val) {
    return val.length;
}
// console.log(logger([23,3,5]))
// 相当于
var Length = /** @class */ (function () {
    function Length() {
    }
    return Length;
}());
var len = new Length();
logger(len);
var cart = {
    lists: [{ id: 1, name: 'linlin' }]
};
var cart1 = { lists: [0] };
var cart2 = [9];
