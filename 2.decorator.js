"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 类装饰器
var a;
(function (a) {
    /**
     * @param target 目标类
     */
    function enhancer(target) {
        target.prototype.name = 'zhangsan';
        target.prototype.doSomething = function () {
            console.log('doSomething');
        };
    }
    var Student = /** @class */ (function () {
        function Student() {
        }
        Student = __decorate([
            enhancer,
            __metadata("design:paramtypes", [])
        ], Student);
        return Student;
    }());
    var stu = new Student();
    console.log(stu.name);
    stu.doSomething();
})(a || (a = {}));
console.log('--------- 属性、方法装饰器 ----------');
// 属性、方法装饰器
var b;
(function (b) {
    /**
     * 属性装饰器
     * @param target 目标类
     * @param propertyKey 属性名称
     */
    function upperCase(target, propertyKey) {
        var value = target[propertyKey];
        var getter = function () {
            return value;
        };
        var setter = function (newValue) {
            value = newValue.toUpperCase();
        };
        if (delete target[propertyKey]) {
            Object.defineProperty(target, propertyKey, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    }
    /**
     * 方法装饰器
     * @param target 目标类
     * @param property 方法名称
     * @param descriptor 方法描述符
     */
    function toNumber(target, property, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (item) { return parseFloat(item); });
            return method.apply(this, args);
        };
    }
    var Student = /** @class */ (function () {
        function Student() {
            // 类属性装饰器
            this.name = 'zhangsan';
        }
        Student.prototype.getName = function () {
            console.log(this.name);
        };
        // 类方法装饰器
        Student.prototype.sum = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return args.reduce(function (accu, item) { return accu + item; }, 0);
        };
        __decorate([
            upperCase,
            __metadata("design:type", String)
        ], Student.prototype, "name", void 0);
        __decorate([
            toNumber,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], Student.prototype, "sum", null);
        return Student;
    }());
    var stu = new Student();
    stu.name = 'zhangsan';
    stu.getName();
    console.log(stu.sum('1', '2', '3'));
})(b || (b = {}));
console.log('--------- 参数装饰器 ----------');
var c;
(function (c) {
    /**
     * 参数装饰器
     * @param target 目标类
     * @param methodName  方法名称
     * @param paramsIndex  参数下标
     */
    function addAge(target, methodName, paramsIndex) {
        target.age = 10;
    }
    var Student = /** @class */ (function () {
        function Student() {
        }
        Student.prototype.login = function (username, password) {
            console.log(this.age, username, password);
        };
        __decorate([
            __param(1, addAge),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", void 0)
        ], Student.prototype, "login", null);
        return Student;
    }());
    var stu = new Student();
    stu.login('zhangsan', '123456');
})(c || (c = {}));
