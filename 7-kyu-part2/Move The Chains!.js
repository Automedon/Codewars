/*
This simple kata is based around the down system in American football. The team that is in possession of the ball (offense) has four downs (or you think of it as attempts, tries or plays) to gain ten yards. If the offense gains at least ten yards in those four downs or fewer, the team receives another set of four downs. This is also known as 'First down'. If the offense does not gain ten yards in those four downs, they give the ball to the other team. This is also known as 'Turnover on downs'.

You will be given three integers. The down, the distance needed to gain a 'first down' and the yards gained on the play. The result will be one of three things:

'First down' meaning that the yards gained on the play exceed the distance needed to gain the new set of downs. Example: Down = 3, Distance = 5, Yards Gained = 15, Result = 'First down'

'Turnover on downs' meaning that the down is 4, and the yards gained on the play do NOT exceed the distance needed to gain the new set of downs. Example: Down = 4, Distance = 5, Yards Gained = 0, Result = 'Turnover on downs'

The new down and distance. If the down is not 4, and the yard gained does NOT exceed the distance, then return the next down and new distance needed to gain a first down. Example: Down = 1, Distance = 10, Yards Gained = 5, Result = '2nd and 5'

* The distance can be greater than 10 and yards gained can be negative! *

For more information about this part of American football (not to be confused with Canadian football rules), visit this wikipedia entry: https://en.wikipedia.org/wiki/Down_(gridiron_football)
*/
function chains(down, distance, yardsGained) {
    if (yardsGained >= distance) return 'First down';
    if (down === 4) return 'Turnover on downs';
    return `${['2nd','3rd','4th'][down - 1]} and ${distance-yardsGained}`;
}
