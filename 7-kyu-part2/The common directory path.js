/*
Description:
Return please the common directory path for specified array of full filenames.

Some details:

   ['/dream/images/image1.png', '/dream/images/image2.png']  => '/dream/images/'
   ['/http/assets/style.css', '/https/scripts/app.js',  'home/setting.conf'] => ''
   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
*/
function getCommonDirectoryPath(paths) {
  let arr = [];
  for (let i=0;i<Math.min(...paths.map(v=>v.length));i++){
   if (paths.every(v=>v[i]===paths[0][i])) arr.push(paths[0][i])
   else break
  }
  return arr.join``.replace(/\w+$/g,'')
}
