/*
Description:
If you deposit $100 each year into a bank account with yearly 1% interest rate, how many years will it take you to accumulate minimum $5000? What if the interest is 3% instead?

This is the question you will answer in this kata for the interest rates 1, 2, 3, 4, 5 and 6% given a yearly deposit amount and target amount.

It works like this:

The user inputs a fixed amount they wish to deposit each year and a minimum retirement target
The function calculates how many years it will take to reach the retirement target using various yearly fixed interest rates: 1, 2, 3, 4, 5, 6 %
All deposits happen on 1. January and all interests are deposited 31st December
You will create a function which takes paramters (yearly_deposit) and (min_target_balance) that returns a dictionairy of (interest rate, years to save) pairs.

For javascript return an object where the key is string and value is int.

See example:

def calculate_retirement(yearly_deposit, min_target_balance):
    '''
    @param yearly_deposit (int) yearly deposit amount
    @param min_target_balance (int) minimum target balance
    @return dictionary of (interest rate (int), years to save (int)) pair
    '''
    pass


calculate_retirement(100, 300) => {1: 3, 2: 3, 3: 3, 4: 3, 5: 3, 6: 3}

# This tells us that at interest rate 1% it takes 3 years,
# at interest rate 2% it takes 3 years...etc

# 2 % interest rate explained:
# Year 1: 1.jan 100 deposited into account
# Year 1: 31.dec interest payment (100 * 1.02) = 102 (new balance)
# Year 2: 1.jan 100 deposited into account, 202 (new balance)
# Year 2: 31.dec interest payment 202 * 1.02 = 206.04 (new balance)
# Year 3: 1.jan 100 deposited into account, 306.04 (new balance)
# Year 3: 31.dec interest payment 306.04 * 1.02 = 312.1608 (new balance)

# Minimum target was 300 which was reached during 3rd year,
# the answer is 3 for interest rate 2%

calculate_retirement(100, 700) => {1: 7, 2: 7, 3: 7, 4: 7, 5: 6, 6: 6}

calculate_retirement(100, 1000) => {1: 10, 2: 10, 3: 9, 4: 9, 5: 8, 6: 8}

calculate_retirement(100, 10000) => {1: 70, 2: 55, 3: 47, 4: 41, 5: 36, 6: 33}
Info:

No silly test cases will be used such as: negative/0 deposit amount, negative/0 target balance, astronomical input sizes.
*/
function calculateRetirement(deposit, targetBalance) {
 var result = {};
 for (var i= 1; i<7; i++) {
    var year=1,
     value = deposit*(1+i/100);
    while (value < targetBalance) {
       value += deposit;
       value *=(1+i/100);
       year ++;
    }
    result[i] = year;
  }
 return result
}
