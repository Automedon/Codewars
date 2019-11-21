/*
Description:
You are standing on top of an amazing Himalayan mountain. The view is absolutely breathtaking! you want to take a picture on your phone, but... your memory is full again! ok, time to sort through your shuffled photos and make some space...

Given a gallery of photos, write a function to sort through your pictures. You get a random hard disk drive full of pics, you must return an array with the 5 most recent ones PLUS the next one (same year and number following the one of the last).

You will always get at least a photo and all pics will be in the format YYYY.imgN

Examples:

sortPhotos["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"]) ==["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]
sortPhotos["2016.img1"]) ==["2016.img1","2016.img2"]
*/
function sortPhotos(pics){
  let a = pics.map(v=>v.split`.`).sort((a,b)=>a[0].localeCompare(b[0])||a[1].split``.filter(v=>/[0-9]/.test(v)).join``*1-(b[1].split``.filter(v=>/[0-9]/.test(v)).join``)*1).map(v=>v.join`.`)
  let last =  a.slice().reverse()[0]
  last=last.replace(/\d+$/,v=>v*1+1)
  a.push(last)
  return a.slice(-6)
};
