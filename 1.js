"use strict";
// class Person {
//   name: string
//   age: number
//   constructor (name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
//   getName (): string {
//     return this.name
//   }
//   setName (newName: string) {
//     this.name = newName
//   }
// }
// class Student extends Person {
//   stuNum: number
//   constructor (name: string, age: number, stuNum: number) {
//     super(name, age)
//     this.stuNum = stuNum
//   }
// }
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
// enum Gender {
//   MALE,
//   FEMALE
// }
var a;
(function (a) {
    function enhance(target) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1(age, name, id) {
                var _this = _super.call(this, age, name) || this;
                _this.id = '';
                _this.id = id;
                return _this;
            }
            return class_1;
        }(target));
    }
    function tarenhance(target) {
        return /** @class */ (function (_super) {
            __extends(class_2, _super);
            function class_2(age, name, tar) {
                var _this = _super.call(this, age, name) || this;
                _this.id = '';
                _this.id = tar;
                return _this;
            }
            return class_2;
        }(target));
    }
    var Person = /** @class */ (function () {
        function Person(age, name) {
            this.age = 10;
            this.name = '';
            this.id = '';
            this.name = name;
            this.age = age;
        }
        return Person;
    }());
    var NewStudent = enhance(Person);
    var NewTar = tarenhance(Person);
    var p = new NewStudent(10, 'hon hong', 'test');
    var t = new NewTar(10, 'hon hong', '公安局');
    console.log(p);
    console.log(t);
})(a || (a = {}));
var stu;
stu = 'zhangsan';
console.log(stu.length);
stu = 12;
stu.toFixed(2);
var obj = {};
function getObj(val1, val2) {
    if (typeof val1 === 'string' && typeof val2 === 'string') {
        console.log(val1, val2);
    }
    else if (typeof val1 === 'number' && typeof val2 === 'number') {
        console.log(val1, val2);
    }
    else {
        // 无法达到的结果
        console.log(val1, val2);
    }
}
var Father = /** @class */ (function () {
    function Father(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    Father.prototype.getName = function () {
        return this.name;
    };
    Father.prototype.setName = function (name) {
        this.name = name;
    };
    return Father;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age, money) {
        return _super.call(this, name, age, money) || this;
    }
    Child.prototype.desc = function () {
        console.log(this.name + " " + this.age + " " + this.money);
    };
    return Child;
}(Father));
