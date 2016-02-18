define(function(require, exports, module) {
    // 引入jQuery
    var $ = require('jquery');
    /**
     * [Spinning 作为工厂方法的一个模型]
     * @param {[String]} eventType [所对应的操作类型]
     * @param {[String/Array]} selector  [选择器所对应的字符串 必须包含主要动作发起元素]
     */
    function Spinning(eventType, selector) {
        this.eventType = eventType;
        this.selector = selector;
    }

    module.exports = Spinning;

    // 作业采取工厂模式
    // 易于扩展，并可以实现部分可以隐藏
    // 
    // 绑定对应的事件  就像生产鞋子或者衣服之类
    Spinning.prototype.bind = function() {
        switch (this.eventType) {
            case 'hoverSelf':
                this.hoverSelf();
                break;
            case 'hoverShow':
                this.hoverShow();
                break;
            case 'focusAndBlur':
                this.focusAndBlur();
                break;
            case 'clickShow':
                this.clickShow();
                break;
            case 'classModify':
                this.classModify();
                break;
        }
    };

    // hover自身时显示
    Spinning.prototype.hoverSelf = function() {
        var me = this;
        $(me.selector).hover(function() {
            $(this).show();
        }, function() {
            $(me.selector).hide();
        });
    };

    // 一个元素hover时显示另一个元素
    Spinning.prototype.hoverShow = function() {
        var me = this;
        $(me.selector[0]).hover(function() {
            $(me.selector[1]).show();
        }, function() {
            $(me.selector[1]).hide();
        });
    };

    // 输入获取焦点和失去焦点时的变化
    Spinning.prototype.focusAndBlur = function() {
        var me = this;
        $(me.selector[0]).focus(function() {
            $(me.selector[1]).css("border", "1px solid #38f");
        });
        $(me.selector[0]).blur(function() {
            $(me.selector[1]).css("border", "1px solid #b6b6b6");
        });
    };

    // 音乐栏点击更换背景颜色
    Spinning.prototype.clickShow = function() {
        var me = this;
        $(me.selector).click(function() {
            $(this).css("background", "#38f");
            $(this).siblings().css("background", "#fff");
        });
    };

    // 点击导航栏更换所对应的条目
    Spinning.prototype.classModify = function() {
        var me = this;
        $(me.selector[0]).click(function() {
            $(this).addClass(me.selector[1]);
            $(this).siblings().removeClass(me.selector[1]);
            var index = $(this).index($(this).parent().children());
            if (index === -1) {
                $(me.selector[2]).addClass("hidden");
                $(me.selector[3]).removeClass("hidden");
            } else {
                $(me.selector[2]).removeClass("hidden");
                $(me.selector[3]).addClass("hidden");
            }
        });
    };

    // ready时间的执行
    $(function() {
        $('#txtspn').css("border", "1px solid #38f");
        $('body').height($(window).height());
        $('#more-pro').height($(window).height());
    });
});
