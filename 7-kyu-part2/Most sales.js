/*
Description:
You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
return the three product names with the highest revenue (amount * price).

Note: if multiple products have the same revenue, order them according to their original positions in the input list.
*/
function top3(products, amounts, prices) {
  let arr = []
  for (let i=0;i<products.length;i++){
    arr.push({
      product:products[i],
      sum:amounts[i]*prices[i]
    })
  }
  return arr.sort((a,b)=>b.sum-a.sum||products.indexOf(a.product)-products.indexOf(b.product)).slice(0,3).map(v=>v.product)
}
