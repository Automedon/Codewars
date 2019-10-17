/*
Description:
Happy Holidays fellow Code Warriors!
The holidays are just around the corner. You know what that means...Holiday Shopping! I was planning on buying all you Code Warriors a gift, but I don't know which order to buy them! I have a small shopping list that I'm constantly adding to, and all of the items have a certain priority. What if I use a priority queue?

Holiday Shopping Priority Queue
Priority queues are similar to queues, but they add a priority to each data entry, so items with higher priorities (lower integer values) are processed first.

While I'm running around buying the gifts, I need you to write a few methods for the HolidayPriorityQueue class to help me out. The class needs two methods: addGift and buyGift. For this Kata, all priorities will be unique, so no need to worry about equal priorities.

Method descriptions:
addGift (or enqueue) adds a gift to the priority queue. This method should accept one object (or hash in ruby), which has two properties: gift - the name of the gift, and priority - the priority of the gift, and should return the new length of the queue. All gifts will be in this form.

buyGift (or dequeue) removes the gift with the highest priority from the priority queue, and returns the gifts name (value of the gift property). If the queue is empty, return the empty string ''

Examples:
Javascript/CoffeeScript
var giftList = new HolidayPriorityQueue();
giftList.addGift( { gift: 'Water gun', priority: 1} );// => returns 1
giftList.addGift( { gift: 'Toy truck', priority: 4 } );// => returns 2
giftList.addGift( { gift: 'Roller Skates', priority: 3 } );// => returns 3

giftList.buyGift();// => returns 'Water gun'
giftList.buyGift();// => returns 'Roller Skates'
giftList.buyGift();// => returns 'Toy truck'
Ruby
gift_list = HolidayPriorityQueue.new
gift_list.addGift( { 'gift' => 'Water gun', 'priority' => 1 } )// => returns 1
gift_list.addGift( { 'gift' => 'Toy truck', 'priority' => 4 } )// => returns 2
gift_list.addGift( { 'gift' => 'Roller Skates', 'priority' => 3} )// => returns 3

gift_list.buyGift()// => returns 'Water gun'
gift_list.buyGift()// => returns 'Roller Skates'
gift_list.buyGift()// => returns 'Toy truck'
Resources for priority queues:
http://en.wikipedia.org/wiki/Priority_queue
*/
function HolidayPriorityQueue(){
  this.arr=[]; 
}

HolidayPriorityQueue.prototype.addGift = function(gift){
  this.arr.push(gift)
  return this.arr.length
}

HolidayPriorityQueue.prototype.buyGift = function(){
  this.arr=this.arr.sort((a,b)=>a.priority-b.priority)
  return this.arr.length?this.arr.shift().gift:''
}
