
function getParam(paramName) {
  /**
   * TODO:get URL parameter
   * URL:test.com?id=1
   * parameter：paramName URL parameter
   * fuction:getParam("id")
   * return:"1"
   */
    paramValue = "", isFound = !1;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
    }
    return paramValue == "" && (paramValue = null), paramValue
}



function stringToVariable(string){
  /**
   * // TODO:
   */
   let _name = 'var commentString=' + string;
   eval(_name);
   return _name;
}





var container =  document.getElementsByClassName('container')[0];
// container.innerHTML += '<style>.container{text-align: center;float: left;padding:0;}.container:after{display: block;content: "";font-size: 0;width: 0;height: 0;clear: both;}li{list-style:none;}</style>'
var comment =  document.getElementsByClassName('comment')[0];
var left = document.getElementById('left');
var right = document.getElementById('right');
var id = parseInt(getParam("id")) - 1;
console.log();
if(config[id][0]=="v"){
  container.innerHTML += '<video controls><source src="videos/'+config[id][1]+'" type="video/mp4">sorry,your browser can not support video tag.</video>';
  left.href = "live photos.html?id="+((id==0)?config.length:id);
  right.href = "live photos.html?id="+((id == config.length-1)?1:id+2);
  comment.innerHTML += eval(config[id][1].split(".")[0]);
}else {
  container.innerHTML += '<div class="htmleaf-container">	<section id="exemple" class="container"><div class="wrap small-width"><div id="try"></div><ul id="box-container">';
  for(var i=1;i<=config[id][2];i++){
    container.innerHTML += '<li class="box"><a href="photos/'+config[id][1]+'/'+i+'.JPG" class="swipebox" title="Red Republic"><img src="photos/'+config[id][1]+'/'+i+'.JPG""></a></li>'
  }
  container.innerHTML += '</ul></div></section></div>'
  left.href = "live photos.html?id="+((id==0)?config.length:id);
  right.href = "live photos.html?id="+((id == config.length-1)?1:id+2);
  comment.innerHTML += eval(config[id][1])
}
