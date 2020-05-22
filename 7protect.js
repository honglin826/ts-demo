"use strict";
/**
 * 类型保护
 */
/**
 * null 保护
 */
function getFirstLetter(s) {
    //第一种方式是加上null判断
    if (s == null) {
        return '';
    }
    //第二种处理是增加一个或的处理
    s = s || '';
    return s.charAt(0);
}
//它并不能处理一些复杂的判断，需要加非空断言操作符
function getFirstLetter2(s) {
    function log() {
        console.log(s.trim());
    }
    s = s || '';
    log();
    return s.charAt(0);
}
function getNumber(x) {
    if ("swing" in x) {
        return x.swing;
    }
    return x.leg;
}
