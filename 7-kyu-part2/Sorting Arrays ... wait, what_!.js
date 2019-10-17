/*
Description:
Sorting an array of positive integers
Background
You are a(n) novice/average/senior/professional/world-class (choose one) Computer Scientist and Web Developer who specialises in Javascript (choose the language of your choice). One day, while you were away, your naughty little brother fiddles with your computer and somehow manages to disable the sort() method for arrays!

Task
Being the developer that you are, you decide to fix the sort() method so that it works for any array consisting of only positive integers. You may use any algorithm you wish.

Extension
If you wish, you could also fix the sort() method for arrays such that it also works on String arrays (sorting them into alphabetical order) but please note that it is not required and will not be tested.
*/
Array.prototype.sort = function(){
    const arr=this.slice();
    for (let i=0; i<arr.length;i++){
        for (let j=0; j<arr.length;j++){
            if (arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
