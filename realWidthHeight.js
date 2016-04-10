window.realWidthHeight = function(){
    var _returnObj = {};
    var _realWidth = null;
    var _realHeight = null;
    if (window.devicePixelRatio !== undefined) {
        _ratio = window.devicePixelRatio;
        _returnObj.realWidth = window.innerWidth * _ratio;
        _returnObj.realHeight = window.innerHeight * _ratio;
    }else{
        _returnObj.realWidth = _realWidth;
        _returnObj.realHeight = _realHeight;
    }
    return _returnObj;
};