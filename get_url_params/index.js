//todo get current window url
function getCurrentUrl(){
    let url_window = window.location.href;
    return url_window;
}
//todo get 1 param window url
function getAParamsUrl(key){
    let url_window = window.location.href;
    let url = new URL(url_window);
    let param = url.searchParams.get(key);
    return param != null ? param : ''
    //out put: true: params : false: ''
}
//todo get all params array object
function getObjParamsUrl(){
    let url_window = window.location.href;
    let arrayKey = [], arrayValue = [];
    let postionParams = parseInt(url_window.indexOf("?"));
    let getParams = url_window.substring(postionParams);
    let stringValue = getParams.replace('?','');
    let slug = Array.from(stringValue.split('&'));
    slug.forEach(function (items,index){
        let key = items.split('=').shift();
        let value = items.split('=').pop();
        arrayKey.push(key);
        arrayValue.push(value);
    })
    let result = Object.assign.apply({}, arrayKey.map( (v, i) => ( {[v]: arrayValue[i]} ) ) );
    return result;
}
