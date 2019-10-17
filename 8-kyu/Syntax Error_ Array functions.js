/*
Description:
A dumb error I had that actually costed me 15 minutes.. since I cannot copy and paste my code, enjoy this contrived recreation of the problem.

After finding this error, I felt that I had to share it with the world..
*/
function Foo() {
    this.arrOfFuncs = [
        function(num) {
            return parseInt(num, 2);
        },
        function(num) {
            return parseInt(num, 8);
        }
    ];
}

Foo.prototype.convert = function(num, base) {
    return this.arrOfFuncs[base](num);
};
