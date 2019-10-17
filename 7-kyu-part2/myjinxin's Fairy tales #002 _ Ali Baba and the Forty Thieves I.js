/*
escription:
myjinxin's Fairy tales series #002:
Ali Baba and the Forty Thieves I

Story
In a town in Persia there dwelt two brothers, one named Cassim, the other Ali Baba. Ali Baba is a poor man , he had to maintain his wife and children by cutting wood in a neighboring forest and selling it in the town.

One day, when Ali Baba was in the forest, he saw a troop of men on horseback, coming toward him in a cloud of dust. He was afraid they were robbers, and climbed into a tree for safety. When they came up to him and dismounted, he counted forty of them. They unbridled their horses and tied them to trees.

The finest man among them, whom Ali Baba took to be their captain, went a little way among some bushes, and said, "Open, Sesame!" so plainly that Ali Baba heard him.

A door opened in the rocks, and having made the troop go in, he followed them, and the door shut again of itself. They stayed some time inside, and Ali Baba, fearing they might come out and catch him, was forced to sit patiently in the tree. At last the door opened again, and the Forty Thieves came out. As the Captain went in last he came out first, and made them all pass by him; he then closed the door, saying, "Shut, Sesame!"

Every man bridled his horse and mounted, the Captain put himself at their head, and they returned as they came.

Then Ali Baba climbed down and went to the door concealed among the bushes, and trying to shout, "Open, Sesame!" and it flew open. The Alibaba found here is the place where the robbers collect their treasures. He took out a lot of treasures.

Using the words, "Shut, Sesame!" he closed the door and went home. Because he knew that if he did not close the door, the robbers would soon find someone to take away their treasures, and he would be killed.

Descrption
Below, you will see a forgetful Ali Baba. He can only remember the name of a plant in the words of the robber. But... Millet? Maize? Soybean? Damn! He needs to try again and again...

Please predict the fate of Ali Baba:

If he opens the door and closes the door successfully:

 ["Open, Millet!","Open, Maize!","Open, Soybean!",
 "Oh, Damn! I'm going to smash you into pieces!",
 "Open, Sesame!","God bless! A lot of treasures!",
 "Why do I have only two hands?","Shut, Maize!",
 "Shut, Soybean!","Please shut! Dear Mr. door!",
 "Shut, Sesame!","Haha, I'm so smart!"]
Return the forecast result:

Ali Baba got a lot of treasures and he lived a rich life.

If he opens the door successfully but he did not closes the door:

 ["Open, Millet!","Open, Maize!","Open, Soybean!",
 "Oh, Damn! I'm going to smash you into pieces!",
 "Open, Sesame!","God bless! A lot of treasures!", 
 "Why do I have only two hands?","Shut, Maize!",
 "Shut, Soybean!","Please shut! Dear Mr. door!"]
Return the forecast result:

Ali Baba got a lot of treasure and he was finally killed by the robbers.

If he did not open the door successfully:

 ["Open, Millet!","Open, Maize!","Open, Soybean!",
 "Oh, Damn! I'm going to smash you into pieces!",
 "Open, Millet!","Open, Maize!","Open, Soybean!",
 "Oh, Damn! I'm going to smash you into pieces!"]
Return the forecast result:

Ali Baba didn't get the treasure and he was still a poor man.

Task
Complete function aliBaba that accepts 1 arguments trying. Returns the result in accordance with the rules above.

Note: You can assume that the "Open, Sesame!" and "Shut, Sesame!" will not appear many times. If "Shut, Sesame!" is in front of the "Open, Sesame!", "Shut, Sesame!" is invalid. Please don't care about the semantics of other strings.


*/
function aliBaba(trying){
  let arr = trying.filter(v=>v==="Open, Sesame!"||v==="Shut, Sesame!");
  if (!arr.length) return "Ali Baba didn't get the treasure and he was still a poor man."
  if (arr[0]==="Open, Sesame!"&&arr[1]==="Shut, Sesame!") return "Ali Baba got a lot of treasures and he lived a rich life."
  if (arr[arr.length-1]==="Open, Sesame!") return "Ali Baba got a lot of treasure and he was finally killed by the robbers."
  if (arr[arr.length-1]==="Shut, Sesame!") return `Ali Baba didn't get the treasure and he was still a poor man.`
}
