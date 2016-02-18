define(function(require) {
    var Spinning = require('./spinning');

    // 设置自身的hover事件
    var hoverSelf = new Spinning('hoverSelf', '.hover-self');
    hoverSelf.bind();

    //设置框的hover时间
    var setHover = new Spinning('hoverShow', ["#set-top", "#find-setting"]);
    setHover.bind();

    // 产品框的hover事件
    var proHover = new Spinning('hoverShow', [".nav-production", "#more-pro"]);
    proHover.bind();

    //用户框的hover事件
    var userHover = new Spinning('hoverShow', ["#nav-user", "#user-setting"]);
    userHover.bind();

    //天气框的hover事件
    var weatherHover = new Spinning('hoverShow', ["#weather-wrapper", "#s_mod_setweather"]);
    weatherHover.bind();

    // 输入框获得焦点 输入框失去焦点
    var txtFocus = new Spinning('focusAndBlur', ["#txt", "#txtspn"]);
    txtFocus.bind();

    // 音乐导航条的点击事件
    var musicClick = new Spinning('clickShow', ".bd-fmjs-ccpnl a");
    musicClick.bind();

    //左侧导航选择条目的对应类的添加或者删除
    var leftNav = new Spinning('classModify', ["#love-items li", "current", "#main-pro-first", "#main-pro-second"]);
    leftNav.bind();

    // 导航中选择条目的对应类的添加或者删除
    var mainNav = new Spinning('classModify', [".classfy a", "nav-current", 
    	"#nav-item-first", "#nav-item-second"]);
    mainNav.bind();
});
