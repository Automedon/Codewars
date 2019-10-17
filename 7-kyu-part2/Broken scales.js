/*
Description:
Your friend (jeweler) came to you with a problem. His scales, which he uses to measure the weight of jewelry, was broken, because he brought down the calibration. But, luckily your friend, the scales have a calibration function. The essence of the function is that on the scale you need to put a certain amount of weight, so that the scales could take this weight as a basis and restore the working state. Unfortunately your friend does not have things with exact weight, but there are coins with a known weight.

Your task is to write a function calibrate that takes three parameters:
weight:the weight which is required for calibration;
penny:the weight of the first avaliable coin;
quarter:the weight of the second avaliable coin;

Function must return a string with two numbers separated by comma, e.g. "a,b" where the first number is the maximum number of penny coins which satisfies condition a*penny + b*quarter = weight

Input data is always defined and correct (weight, penny, quarter > 0). In case if there is no existing combinations, you should return empty string. Good luck!
*/
let calibrate = (weight, penny, quarter) => {
  for (let i=0;i<1000;i++){
      for (let j=0;j<1000;j++){
        if ((penny*j).toFixed(1)*1+(quarter*i).toFixed(1)*1===weight) return `${j},${i}`
      }
    }
  return ''
}
