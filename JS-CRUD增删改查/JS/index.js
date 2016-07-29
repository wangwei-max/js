/**
 * Created by max on 16/7/29.
 */

//插入
//1.write

//document.write('hello word');
//document.write('<img src="img/img_03.jpg">');
//document.write('<input type = "color">');

//2.write
var btn = document.createElement('button');
btn.innerHTML = '百度一下';
btn.style.border = '1px solid #ddd';
btn.style.width = '100px';
btn.style.height = '100px';
btn.style.display = 'inline-block';
//把btn加入到body
var dives = document.getElementsByClassName('text');
//dives.appendChild(btn);
//把btn加入到body
//document.body.appendChild(btn);

//删除
//删除1
var img = document.getElementsByClassName('img')[0];
//img.parentNode.removeChild(img);

//2
//btn.remove();

////修改
btn.innerHTML = '111111';

//修改链接
var a = document.getElementsByClassName('a')[0];
a.innerHTML = '京东';
a.href = 'http://www.jd.com';
//开启新窗口
a.target = '_blank';

//查询
//console.log(document.body.children)
function find(findword){
    for(var i = 0;i < findword.length;i++){
        console.log(findword[i]);
    }
}
//
//find(document.body.children);

find(dives);