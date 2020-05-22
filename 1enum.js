"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["GIRL"] = 0] = "GIRL";
    Gender[Gender["BOY"] = 1] = "BOY";
})(Gender || (Gender = {}));
console.log("\u5F20\u4E09\u662F\u4E2A" + Gender[1]);
var Week;
(function (Week) {
    Week[Week["MONDAY"] = 1] = "MONDAY";
    Week[Week["TUESDAY"] = 2] = "TUESDAY";
    Week[Week["WEDNESDAY"] = 3] = "WEDNESDAY";
})(Week || (Week = {}));
console.log("Today is " + Week[2]);
var myColors = [3 /* Red */, 4 /* Yellow */, 5 /* Blue */];
console.log(myColors);
// const enum Color {Red, Yellow, Blue = "blue".length};
