"use strict";
/**
 * interface
 */
/**
 * 接口继承
 */
var abc;
(function (abc) {
    // 类实现接口
    var Person = /** @class */ (function () {
        function Person() {
        }
        // 实现的接口预定义的方法需满足类型检测
        Person.prototype.speak = function () {
            console.log('Person');
        };
        Person.prototype.speakChinese = function (language) {
            console.log(language);
        };
        // 可以继续拓展自己的属性方法
        Person.prototype.speakEnglish = function () {
            console.log('speakEnglish');
        };
        return Person;
    }());
    var p = new Person();
    p.speakEnglish();
})(abc || (abc = {}));
var abc1;
(function (abc1) {
    // 一个类只能继承一个父类，却能实现多个接口
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.speak = function () {
            throw new Error("Method not implemented.");
        };
        Person.prototype.eat = function () {
            throw new Error("Method not implemented.");
        };
        return Person;
    }());
})(abc1 || (abc1 = {}));
var props = {
    name: 'lin',
    age: 12,
    home: 'sd'
};
var det = function (price) {
    return price;
};
var arr = ['1', '3', '3'];
/**
 * 类索引: 对接口进行约束
 * 1、约束类的实例
 * 2、约束类的构造函数
 */
// 约束类的实例
var g;
(function (g) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.speak = function () {
            throw new Error("Method not implemented.");
        };
        return Dog;
    }());
})(g || (g = {}));
// 约束类的构造函数
var h;
(function (h) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    // demo
    function createAnimal(clazz, name) {
        return new clazz(name);
    }
    var animal = createAnimal(Animal, 'dog');
    console.log(animal.name);
})(h || (h = {}));
