/*
Description:
You need to write a code that will return product ID from string representing URL for that product's page in your online shop.

All URLs are formatted similarly, first there is a domain exampleshop.com, then we have name of a product separated by dashes(-), then we have letter p indicating start of product ID, then an actual ID (no limit on length), and lastly 8-digit long representation of date when product got added followed by .html.It can look like this:

exampleshop.com/fancy-coffee-cup-p-90764-12052019.html >> productID is 90764

exampleshop.com/dry-water-just-add-water-to-get-water-p-147-24122017.html >> productID is 147

exampleshop.com/public-toilet-proximity-radar-p-942312798-01012020.html >> productID is 942312798

(NOTE: Product name can also contain letter p or digits)

Your code needs to return the Product ID as a string. All URLs will be valid product URLs and all will follow above structure.
*/
function getProductId(url){
  return url.split('-').reverse()[1]
}
