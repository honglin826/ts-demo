"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 接口兼容性
var a;
(function (a_1) {
    // 要判断目标类型`Person`是否能够兼容输入的源类型`Animal`
    function getName(animal) {
        return animal.name;
    }
    var p = {
        name: 'zhangsan',
        age: 10,
        gender: 0
    };
    getName(p);
    //只有在传参的时候两个变量之间才会进行兼容性的比较，赋值的时候并不会比较,会直接报错
    var a = {
        name: 'zhangsan',
        age: 10,
        gender: 0 // 直接报错
    };
})(a || (a = {}));
// 类的兼容性
var b;
(function (b_1) {
    /**
     * 类的兼容性
     * 目标类的属性只能多了可以，少了不可以
     */
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    // Bird 比Animal 属性多不可以
    var Bird = /** @class */ (function (_super) {
        __extends(Bird, _super);
        function Bird() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bird;
    }(Animal));
    var a;
    a = new Bird();
    var b;
    b = new Animal(); // 报错
    // 父子结构相同，可以
    var Tiger = /** @class */ (function (_super) {
        __extends(Tiger, _super);
        function Tiger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Tiger;
    }(Animal));
    var ani;
    ani = new Tiger();
    var bni;
    bni = new Animal();
})(b || (b = {}));
// 函数兼容性（参数）
var c;
(function (c_1) {
    var sum;
    function f1(a, b) {
        return a + b;
    }
    sum = f1;
    //可以省略一个参数
    function f2(a) {
        return a;
    }
    sum = f2;
    //可以省略二个参数
    function f3() {
        return 0;
    }
    sum = f3;
    //多一个参数可不行
    function f4(a, b, c) {
        return a + b + c;
    }
    sum = f4; // 报错
})(c || (c = {}));
// 函数兼容性 (返回值)
var d;
(function (d) {
    var getPerson;
    //返回值一样可以
    function g1() {
        return { name: 'zhangsan', age: 10 };
    }
    getPerson = g1;
    //返回值多一个属性也可以
    function g2() {
        return { name: 'zhangsan', age: 10, gender: 'male' };
    }
    getPerson = g2;
    //返回值少一个属性可不行
    function g3() {
        return { name: 'zhangsan' };
    }
    getPerson = g3;
    //因为有可能要调用返回值上的方法
    getPerson().age.toFixed();
})(d || (d = {}));
// 泛型的兼容性
var e;
(function (e) {
    var x;
    var y;
    x = y;
    var x1;
    var y1;
    x1 = y1; // 有具体的类型被使用到，报错
    var xx2;
    var yy2;
    xx2 = yy2;
})(e || (e = {}));
// 枚举兼容性
var f;
(function (f) {
    //数字可以赋给枚举
    var Colors;
    (function (Colors) {
        Colors[Colors["Red"] = 0] = "Red";
        Colors[Colors["Yellow"] = 1] = "Yellow";
    })(Colors || (Colors = {}));
    var c;
    c = Colors.Red;
    c = 1;
    c = '1';
    //枚举值可以赋给数字
    var n;
    n = 1;
    n = Colors.Red;
})(f || (f = {}));
