/*
Description:
Help a fruit packer sort out the bad apples.

There are 7 varieties of apples, all packaged as pairs and stacked in a fruit box. Some of the apples are spoiled. The fruit packer will have to make sure the spoiled apples are either removed from the fruit box or replaced. Below is the breakdown:

Apple varieties are represented with numbers, 1 to 7

A fruit package is represented with a 2 element array [4,3]

A fruit package with one bad apple, or a bad package, is represented with [2,0] or [0,2]

A fruit package with two bad apples, or a rotten package, is represented with [0,0]

A fruit box is represented with:

[ [ 1, 3 ],
  [ 7, 6 ],
  [ 7, 2 ],
  [ 1, 3 ],
  [ 0, 2 ],
  [ 4, 5 ],
  [ 0, 3 ],
  [ 7, 6 ] ]
Write a program to clear the fruit box off bad apples.

The INPUT will be a fruit box represented with a 2D array: [[1,3],[7,6],[7,2],[1,3],[0,2],[4,5],[0,3],[7,6]]

The OUTPUT should be the fruit box void of bad apples: [[1,3],[7,6],[7,2],[1,3],[2,3],[4,5],[7,6]]

Conditions to be met:

1.A bad package should have the bad apple replaced if there is another bad package with a good apple to spare. Else, the bad package should be discarded.

2.The order of the packages in the fruit box should be preserved. Repackaging happens from the top of the fruit box index = 0 to the bottom nth index. Also note how fruits in a package are ordered when repacking. Example shown in INPUT/OUPUT above.

3.Rotten packages should be discarded.

4.There can be packages with the same variety of apples, e.g [1,1], this is not a problem.
*/
function badApples(input) {
  	let final=[]
	for(let i =0;i<input.length;i++){
		if(input[i][0]!=0&&input[i][1]!=0){
			final.push(input[i])
		}
		else if(input[i][0]!=0||input[i][1]!=0){
			for(let j= i+1;j<input.length;j++){
				if(input[j][0]!=0 && input[j][1]!=0){
				}
				else if(input[j][0]!=0 || input[j][1]!=0 ){
					let newArray = input[i].concat(input[j])
        
					final.push(newArray.filter(num=>num>0))
					input[j]=[0,0] 
					break
				}			
			}
		}
	}
	return final
}
