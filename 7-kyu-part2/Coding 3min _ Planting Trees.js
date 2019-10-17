/*
Description:
Coding 3min : Planting Trees

This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

#Task:
There is a rectangular land and we need to plant trees on the edges of that land.

I will give you three parameters:

width and length, two integers > 1 that represents the land's width and length;

gaps, an integer >= 0, that is the distance between two trees.

Return how many trees have to be planted, if you can't achieve a symmetrical layout(see Example 3) then return 0.

#Example:

    Example1:
    width=3, length=3, gaps=1       o - o
    we can plant 4 trees            -   -
    sc(3,3,1)=4                     o - o

    Example2:
    width=3, length=3, gaps=3       o - -
    we can plant 2 trees            -   -
    sc(3,3,3)=2                     - - o

    Example3:
    width=3, length=3, gaps=2       o - -
    if we plant 2 trees, some       x   o
    gaps of two trees will >2       x x x

    if we plant 3 trees, some       o - -
    gaps of two trees will <2       x   o
    so we can not finish it         o - -
    sc(3,3,2)=0                         

    Example4:
    width=7, length=7, gaps=3       o - - - o - -
    we can plant 6 trees            -           -
    sc(3,3,3)=6                     -           o
                                    -           -
                                    o           -
                                    -           -
                                    - - o - - - o

    some corner case:

    Example5:
    width=3, length=3, gaps=0       o o o
    we can plant 8 trees            o   o
    sc(3,3,0)=8                     o o o

    Example6:
    width=3, length=3, gaps=10      o 1 2
    in this case, the max gaps      1   3
    of two trees is 3               2 3 o
    gaps=10 can not finished
    so sc(3,3,10)=0
*/
function sc(width,length,gaps){
   const perimeter = width + width + length + length - 4;
  if (perimeter%(gaps+1) !== 0) {
    return 0;
  } else {
    return perimeter/(gaps+1);
  }
}
