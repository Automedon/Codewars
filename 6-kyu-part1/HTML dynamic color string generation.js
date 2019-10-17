/*
Description:
Generate a valid randomly generated rgb color string. Assume all of them have 6 digits always.

Valid Output
#ffffff
#25a403
#000001
Non-Valid Output
#fff
#aaa
#zzzzz
cafebabe
#a567567676576756A7
*/
var generateColor = function() {
  let str = "abcdef";
  let num = "0123456789";
  const gen = (() => ~~(Math.random() * 3))();
  if (gen === 0) {
    return `#${str[~~(Math.random() * str.length)]}${
      str[~~(Math.random() * str.length)]
    }${str[~~(Math.random() * str.length)]}${
      str[~~(Math.random() * str.length)]
    }${str[~~(Math.random() * str.length)]}${
      str[~~(Math.random() * str.length)]
    }${str[~~(Math.random() * str.length)]}`;
  }
  if (gen === 1) {
    return `#${num[~~(Math.random() * num.length)]}${
      num[~~(Math.random() * num.length)]
    }${num[~~(Math.random() * num.length)]}${
      num[~~(Math.random() * num.length)]
    }${num[~~(Math.random() * num.length)]}${
      num[~~(Math.random() * num.length)]
    }`;
  }
  return `#${str[~~(Math.random() * str.length)]}${
    num[~~(Math.random() * num.length)]
  }${str[~~(Math.random() * str.length)]}${
    num[~~(Math.random() * num.length)]
  }${str[~~(Math.random() * str.length)]}${
    num[~~(Math.random() * num.length)]
  }`;
};
