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
var class1;
(function (class1) {
    // 基础类
    var Greeter = /** @class */ (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    }());
    var greeter = new Greeter("world");
})(class1 || (class1 = {}));
console.log('--------- 类的继承 --------');
var class2;
(function (class2) {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.getName = function () {
            return this.name;
        };
        Person.prototype.setName = function (name) {
            this.name = name;
        };
        return Person;
    }());
    // 子类继承
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, no) {
            var _this = _super.call(this, name, age) || this;
            _this.no = no;
            return _this;
        }
        Student.prototype.getNo = function () {
            return this.no;
        };
        return Student;
    }(Person));
    var s1 = new Student('zhangsan', 10, 1);
    console.log(s1.getName());
})(class2 || (class2 = {}));
console.log('-------- 修饰符 --------');
var class3;
(function (class3) {
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
            //Property 'money' is private and only accessible within class 'Father'.
            console.log(this.name + " " + this.age + " " + this.money);
        };
        return Child;
    }(Father));
    var p = new Child('zhangsan', 10, 100);
    // Property 'age' is protected and only accessible within class 'Father' and its subclasses
    console.log(p.age);
})(class3 || (class3 = {}));
console.log('-------- 存取器 --------');
var class4;
(function (class4) {
    var passcode = "secret passcode";
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        Object.defineProperty(Employee.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            // 需满足条件方可重置_fullName
            set: function (newName) {
                if (passcode && passcode == "secret passcode") {
                    this._fullName = newName;
                }
                else {
                    console.log("Error: Unauthorized update of employee!");
                }
            },
            enumerable: true,
            configurable: true
        });
        return Employee;
    }());
    var employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        alert(employee.fullName);
    }
})(class4 || (class4 = {}));
