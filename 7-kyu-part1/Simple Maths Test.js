let prime=function (value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
function numberProperty(value){

return [prime(value),value%2==0,value%10==0]


};
