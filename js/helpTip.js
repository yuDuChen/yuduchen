/*
<script>
        $(function(){
            <!-- 页面初始化加载 -->
            var tips = new helpTips().init();
        })
    </script>
*/
//点击问号出现提示信息
//定义提示弹出框；
var helpTipsLayer;
//定义弹出框的默认设置；
function helpTips(t) {
    this.options = {},
        this.options.elem = ".j-help-tips", //与页面class相对应；
        this.options.type = 1,
        this.options.color = "#8db3d7",
        this.options.time = 0, //设置0是提示弹出框不会自动消失；可设置为其他数字，以毫秒为单位；
        this.options.titleEnd = "录入提示",
        this.options.width = "600px",
        this.options.height = "",
        this.options.imgWidth = "233",
        this.options.imgHeight = "375",
    "undefined" != typeof t && (this.options = $.extend({}, this.options, t)),
        this.elemObj = $(this.options.elem)
}
!
    function() {
        //点击页面任何一处可使提示弹出框消失；
        $(document).on("click", function(event){
            var e = event || window.event;
            var target = e.target || e.srcElement;
            var flag = $(target).hasClass("j-help-tips");
            if(helpTipsLayer && !flag){
                layer.close(helpTipsLayer);
            }
        })
    }(), helpTips.prototype = {
    constructor : helpTips,
    init : function() {
        this.bindEvent()
    },
    bindEvent : function() {
        var t = this;
        t.elemObj.on("click", function() {
            layer.close(helpTipsLayer);//点击其他任意的提示框按钮，则关闭上一个提示框。
            var i = $(this),
                o = i.data("tips");
            if ("undefined" != typeof o && "undefined" != typeof o.type && 1 == o.type) {
                "undefined" != typeof o && "undefined" != typeof o.txt ? helpTipsLayer = layer.tips(o.txt, i, {
                    tips : [ t.options.type, t.options.color ],
                    time : t.options.time
                }) : t.log()
            } else {
                if ("undefined" != typeof o.title && "undefined" != typeof o.txt && "undefined" != typeof o.img) {
                    var e = '<div class="m-popup-ct">',
                        n = '<h3 class="tt"><span class="txt_01">' + o.title + t.options.titleEnd + '</span></h3><div class="line_01"></div>',
                        s = "</div>",
                        l = '<ul class="u-explain-list">',
                        p = o.txt.split("|"),
                        a = p.length;
                    a > 0 && $.each(p, function(t, i) {
                        l += '<li><i class="f-mr5">' + (t + 1) + "</i>" + i + "</li>"
                    });
                    var r = /^[1-9][\d]{0,2}$/,
                        c = t.options.imgWidth,
                        d = t.options.imgHeight;
                    "undefined" != typeof o.w && "undefined" != typeof o.h && r.test(o.w) && r.test(o.h) && (c = o.w, d = o.h), l += '<li><i class="f-mr5">' + (a + 1) + "</i><img src=" + o.img + ' width="' + c + '" height="' + d + '"/></li>', l += "</ul>";
                    var h = e + n + l + s;
                    layer.open({
                        title : !1,
                        type : 1,
                        area : [ t.options.width, t.options.height ],
                        shadeClose : !0,
                        maxmin : !1,
                        move : !1,
                        scrollbar : !1,
                        content : h
                    })
                } else {
                    t.log()
                }
            }
        })
    },
    log : function() {
        console.log("请给定提示标题|文字|图片---来自[script.js]函数[helpTips]")
    }
};