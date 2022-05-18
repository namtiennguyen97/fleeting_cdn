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
//todo get all current url params and convert to object
//todo get custom url params and convert to object
function getObjParamsUrl(url_para='', show_alert = false){
    let arrayKey = [], arrayValue = [];
    if(url_para){
        if(!url_para.includes("?") || url_para.split("?").length - 1 > 1){
            show_alert ? console.log('Alert: Your url is isvalid or lack of params') : '';
            return false;
        }
        let postionParams = parseInt(url_para.indexOf("?")),
            getParams = url_para.substring(postionParams),
            stringValue = getParams.replace('?',''),
            slug = Array.from(stringValue.split('&'))
        ;
        slug.forEach(function (items,index){
            let key = items.split('=').shift(), value = items.split('=').pop();
            arrayKey.push(key) ; arrayValue.push(value);
        })
        return Object.assign.apply({}, arrayKey.map( (v, i) => ( {[v]: arrayValue[i]} ) ) );
    }

    let url_window = window.location.href;
    let postionParams = parseInt(url_window.indexOf("?")),
        getParams = url_window.substring(postionParams),
        stringValue = getParams.replace('?',''),
        slug = Array.from(stringValue.split('&'))
    ;
    slug.forEach(function (items,index){
        let key = items.split('=').shift(), value = items.split('=').pop();
        arrayKey.push(key) ; arrayValue.push(value);
    })
    return Object.assign.apply({}, arrayKey.map( (v, i) => ( {[v]: arrayValue[i]} ) ) );
}
