function My97DP() {
    function t() {
        function t(t) {
            return $d.getElementsByTagName(t)
        }
        var e = t("a");
        divs = t("div"),
        ipts = t("input"),
        btns = t("button"),
        spans = t("span"),
        $d.navLeftImg = e[0],
        $d.leftImg = e[1],
        $d.rightImg = e[3],
        $d.navRightImg = e[2],
        $d.rMD = divs[9],
        $d.MI = ipts[0],
        $d.yI = ipts[1],
        $d.titleDiv = divs[0],
        $d.MD = divs[4],
        $d.yD = divs[6],
        $d.qsDivSel = divs[10],
        $d.dDiv = divs[11],
        $d.tDiv = divs[12],
        $d.HD = divs[13],
        $d.mD = divs[14],
        $d.sD = divs[15],
        $d.qsDiv = divs[16],
        $d.bDiv = divs[17],
        $d.HI = ipts[2],
        $d.mI = ipts[4],
        $d.sI = ipts[6],
        $d.clearI = ipts[7],
        $d.todayI = ipts[8],
        $d.okI = ipts[9],
        $d.upButton = btns[0],
        $d.downButton = btns[1],
        $d.timeSpan = spans[0]
    }
    function e() {
        $d.navLeftImg.onclick = function() {
            return $ny = 0 >= $ny ? $ny - 1 : -1,
            $ny % 5 == 0 ? void $d.yI.focus() : ($d.yI.value = $dt.y - 1,
            void $d.yI.onblur())
        }
        ,
        $d.leftImg.onclick = function() {
            $dt.attr("M", -1),
            $d.MI.onblur()
        }
        ,
        $d.rightImg.onclick = function() {
            $dt.attr("M", 1),
            $d.MI.onblur()
        }
        ,
        $d.navRightImg.onclick = function() {
            return $ny = $ny >= 0 ? $ny + 1 : 1,
            $ny % 5 == 0 ? void $d.yI.focus() : ($d.yI.value = $dt.y + 1,
            void $d.yI.onblur())
        }
    }
    $c = this,
    this.QS = [],
    $d = document.createElement("div"),
    $d.className = "WdateDiv",
    $d.innerHTML = '<div id=dpTitle><div class="navImg NavImgll"><a></a></div><div class="navImg NavImgl"><a></a></div><div style="float:left"><div class="menuSel MMenu"></div><input class=yminput></div><div style="float:left"><div class="menuSel YMenu"></div><input class=yminput></div><div class="navImg NavImgrr"><a></a></div><div class="navImg NavImgr"><a></a></div><div style="float:right"></div></div><div style="position:absolute;overflow:hidden"></div><div></div><div id=dpTime><div class="menuSel hhMenu"></div><div class="menuSel mmMenu"></div><div class="menuSel ssMenu"></div><table cellspacing=0 cellpadding=0 border=0><tr><td rowspan=2><span id=dpTimeStr></span>&nbsp;<input class=tB maxlength=2><input value=":" class=tm readonly><input class=tE maxlength=2><input value=":" class=tm readonly><input class=tE maxlength=2></td><td><button id=dpTimeUp></button></td></tr><tr><td><button id=dpTimeDown></button></td></tr></table></div><div id=dpQS></div><div id=dpControl><input class=dpButton id=dpClearInput type=button><input class=dpButton id=dpTodayInput type=button><input class=dpButton id=dpOkInput type=button></div>',
    attachTabEvent($d, function() {
        hideSel()
    }),
    t(),
    this.init(),
    $dp.focusArr = [document, $d.MI, $d.yI, $d.HI, $d.mI, $d.sI, $d.clearI, $d.todayI, $d.okI];
    for (var d = 0; d < $dp.focusArr.length; d++) {
        var a = $dp.focusArr[d];
        a.nextCtrl = d == $dp.focusArr.length - 1 ? $dp.focusArr[1] : $dp.focusArr[d + 1],
        $dp.attachEvent(a, "onkeydown", _tab)
    }
    e(),
    _inputBindEvent("y,M,H,m,s"),
    $d.upButton.onclick = function() {
        updownEvent(1)
    }
    ,
    $d.downButton.onclick = function() {
        updownEvent(-1)
    }
    ,
    $d.qsDiv.onclick = function() {
        "block" != $d.qsDivSel.style.display ? ($c._fillQS(),
        showB($d.qsDivSel)) : hide($d.qsDivSel)
    }
    ,
    document.body.appendChild($d)
}
function elFocus() {
    var t = $dp.el;
    try {
        "none" == t.style.display || "hidden" == t.type || "input" != t.nodeName.toLowerCase() && "textarea" != t.nodeName.toLowerCase() || (t.My97Mark = !0,
        t.focus())
    } catch (e) {}
    setTimeout(function() {
        t.My97Mark = !1
    }, 197)
}
function sb() {
    this.s = new Array,
    this.i = 0,
    this.a = function(t) {
        this.s[this.i++] = t
    }
    ,
    this.j = function() {
        return this.s.join("")
    }
}
function getWeek(t, e) {
    e = e || 0;
    var d = new Date(t.y,t.M - 1,t.d + e);
    if ("ISO8601" == $dp.weekMethod) {
        d.setDate(d.getDate() - (d.getDay() + 6) % 7 + 3);
        var a = d.valueOf();
        return d.setMonth(0),
        d.setDate(4),
        Math.round((a - d.valueOf()) / 6048e5) + 1
    }
    var n = new Date(t.y,0,1);
    return d = Math.round((d.valueOf() - n.valueOf()) / 864e5),
    Math.ceil((d + (n.getDay() + 1)) / 7)
}
function getDay(t) {
    var e = new Date(t.y,t.M - 1,t.d);
    return e.getDay()
}
function show() {
    setDisp(arguments, "")
}
function showB() {
    setDisp(arguments, "block")
}
function hide() {
    setDisp(arguments, "none")
}
function setDisp(t, e) {
    for (i = 0; i < t.length; i++)
        t[i].style.display = e
}
function shorH(t, e) {
    e ? show(t) : hide(t)
}
function disHMS(t, e) {
    e ? t.disabled = !1 : (t.disabled = !0,
    t.value = "00")
}
function c(t, e) {
    var d = e;
    if ("M" == t ? d = makeInRange(e, 1, 12) : "H" == t ? d = makeInRange(e, 0, 23) : "ms".indexOf(t) >= 0 && (d = makeInRange(e, 0, 59)),
    e == d + 1 && (d = $sdt[t]),
    $sdt[t] != d && !callFunc(t + "changing")) {
        var a = $c.checkRange();
        0 == a ? sv(t, d) : 0 > a ? _setAll($c.minDate) : a > 0 && _setAll($c.maxDate),
        $d.okI.disabled = !$c.checkValid($sdt),
        "yMd".indexOf(t) >= 0 && $c.draw(),
        callFunc(t + "changed")
    }
}
function _setAll(t) {
    sv("y", t.y),
    sv("M", t.M),
    sv("d", t.d),
    sv("H", t.H),
    sv("m", t.m),
    sv("s", t.s)
}
function day_Click(t, e, d, a, n, s) {
    var i = new DPDate($dt.y,$dt.M,$dt.d,$dt.H,$dt.m,$dt.s);
    if ($dt.loadDate(t, e, d, a, n, s),
    callFunc("onpicking"))
        $dt = i;
    else {
        var r = i.y == t && i.M == e && i.d == d;
        r || 0 == arguments.length || (c("y", t),
        c("M", e),
        c("d", d),
        $c.currFocus = $dp.el,
        dealAutoUpdate()),
        ($c.autoPickDate || r || 0 == arguments.length) && $c.pickDate()
    }
}
function dealAutoUpdate() {
    $dp.autoUpdateOnChanged && ($c.update(),
    $dp.el.focus())
}
function callFunc(t) {
    var e;
    return $dp[t] && (e = $dp[t].call($dp.el, $dp)),
    e
}
function sv(t, e) {
    null  == e && (e = $dt[t]),
    $sdt[t] = $dt[t] = e,
    "yHms".indexOf(t) >= 0 && ($d[t + "I"].value = e),
    "M" == t && ($d.MI.realValue = e,
    $d.MI.value = $lang.aMonStr[e - 1])
}
function makeInRange(t, e, d) {
    return e > t ? t = e : t > d && (t = d),
    t
}
function attachTabEvent(t, e) {
    $dp.attachEvent(t, "onkeydown", function(t) {
        t = t || event,
        k = void 0 == t.which ? t.keyCode : t.which,
        9 == k && e()
    })
}
function doStr(t, e) {
    for (t += ""; t.length < e; )
        t = "0" + t;
    return t
}
function hideSel() {
    hide($d.yD, $d.MD, $d.HD, $d.mD, $d.sD)
}
function updownEvent(t) {
    var e = $c.currFocus
      , d = $dp.hmsMenuCfg;
    switch (e != $d.HI && e != $d.mI && e != $d.sI && (e = $d.HI),
    e) {
    case $d.HI:
        c("H", $dt.H + t * d.H[0]);
        break;
    case $d.mI:
        c("m", $dt.m + t * d.m[0]);
        break;
    case $d.sI:
        c("s", $dt.s + t * d.s[0])
    }
    dealAutoUpdate()
}
function DPDate(t, e, d, a, n, s) {
    this.loadDate(t, e, d, a, n, s)
}
function pInt(t) {
    return parseInt(t, 10)
}
function pInt2(t, e) {
    return rtn(pInt(t), e)
}
function pInt3(t, e, d) {
    return pInt2(t, rtn(e, d))
}
function rtn(t, e) {
    return null  == t || isNaN(t) ? e : t
}
function fireEvent(t, e) {
    if ($IE)
        t.fireEvent("on" + e);
    else {
        var d = document.createEvent("HTMLEvents");
        d.initEvent(e, !0, !0),
        t.dispatchEvent(d)
    }
}
function _foundInput(t) {
    var e, d, a = "y,M,H,m,s,ry,rM".split(",");
    for (d = 0; d < a.length; d++)
        if (e = a[d],
        $d[e + "I"] == t)
            return e.slice(e.length - 1, e.length);
    return 0
}
function _focus() {
    var t = _foundInput(this)
      , e = $d[t + "D"];
    if (t) {
        $c.currFocus = this,
        "y" == t ? this.className = "yminputfocus" : "M" == t && (this.className = "yminputfocus",
        this.value = this.realValue);
        try {
            this.select()
        } catch (d) {}
        $c["_f" + t](this),
        showB(e),
        "Hms".indexOf(t) >= 0 && (e.style.marginLeft = Math.min(this.offsetLeft, $d.sI.offsetLeft + 60 - e.offsetWidth),
        e.style.marginTop = this.offsetTop - e.offsetHeight - 2)
    }
}
function _blur(showDiv) {
    var p = _foundInput(this), isR, mStr, v = this.value, oldv = $dt[p];
    0 != p && ($dt[p] = Number(v) >= 0 ? Number(v) : $dt[p],
    "y" == p ? (isR = this == $d.ryI,
    isR && 12 == $dt.M && ($dt.y -= 1)) : "M" == p && (isR = this == $d.rMI,
    isR && (mStr = $lang.aMonStr[$dt[p] - 1],
    12 == oldv && ($dt.y += 1),
    $dt.attr("M", -1)),
    $sdt.M == $dt.M && (this.value = mStr || $lang.aMonStr[$dt[p] - 1]),
    $sdt.y != $dt.y && c("y", $dt.y)),
    eval('c("' + p + '",' + $dt[p] + ")"),
    showDiv !== !0 && (("y" == p || "M" == p) && (this.className = "yminput"),
    hide($d[p + "D"])),
    dealAutoUpdate())
}
function _cancelKey(t) {
    t.preventDefault ? (t.preventDefault(),
    t.stopPropagation()) : (t.cancelBubble = !0,
    t.returnValue = !1),
    $OPERA && (t.keyCode = 0)
}
function _inputBindEvent(t) {
    for (var e = t.split(","), d = 0; d < e.length; d++) {
        var a = e[d] + "I";
        $d[a].onfocus = _focus,
        $d[a].onblur = _blur
    }
}
function _tab(t) {
    function e(t) {
        var e = 0;
        if ($dp.win.document.selection) {
            var d = $dp.win.document.selection.createRange()
              , a = d.text.length;
            d.moveStart("character", -t.value.length),
            e = d.text.length - a
        } else
            (t.selectionStart || "0" == t.selectionStart) && (e = t.selectionStart);
        return e
    }
    function d(t, e) {
        if (t.setSelectionRange)
            t.focus(),
            t.setSelectionRange(e, e);
        else if (t.createTextRange) {
            var d = t.createTextRange();
            d.collapse(!0),
            d.moveEnd("character", e),
            d.moveStart("character", e),
            d.select()
        }
    }
    var a = t.srcElement || t.target
      , n = t.which || t.keyCode;
    if (isShow = $dp.eCont ? !0 : "none" != $dp.dd.style.display,
    $dp.valueEdited = 1,
    n >= 96 && 105 >= n && (n -= 48),
    $dp.enableKeyboard && isShow) {
        if (a.nextCtrl || (a.nextCtrl = $dp.focusArr[1],
        $c.currFocus = $dp.el),
        a == $dp.el && ($c.currFocus = $dp.el),
        27 == n) {
            if (a == $dp.el)
                return void $c.close();
            $dp.el.focus()
        }
        if (n >= 37 && 40 >= n) {
            var s;
            if ($c.currFocus == $dp.el || $c.currFocus == $d.okI) {
                if ($dp.has.d)
                    return s = "d",
                    38 == n ? $dt[s] -= 7 : 39 == n ? $dt[s] += 1 : 37 == n ? $dt[s] -= 1 : $dt[s] += 7,
                    $dt.refresh(),
                    c("y", $dt.y),
                    c("M", $dt.M),
                    c("d", $dt[s]),
                    void _cancelKey(t);
                s = $dp.has.minUnit,
                $d[s + "I"].focus()
            }
            s = s || _foundInput($c.currFocus),
            s && (38 == n || 39 == n ? $dt[s] += 1 : $dt[s] -= 1,
            $dt.refresh(),
            $c.currFocus.value = $dt[s],
            _blur.call($c.currFocus, !0),
            $c.currFocus.select())
        } else if (9 == n) {
            for (var i = a.nextCtrl, r = 0; r < $dp.focusArr.length && (1 == i.disabled || 0 == i.offsetHeight); r++)
                i = i.nextCtrl;
            $c.currFocus != i && ($c.currFocus = i,
            i.focus())
        } else
            13 == n && (_blur.call($c.currFocus),
            "button" == $c.currFocus.type ? $c.currFocus.click() : $dp.cal.oldValue == $dp.el[$dp.elProp] ? $c.pickDate() : $c.close(),
            $c.currFocus = $dp.el)
    } else
        9 == n && a == $dp.el && $c.close();
    if ($dp.enableInputMask && !$OPERA && !$dp.readOnly && $c.currFocus == $dp.el && n >= 48 && 57 >= n) {
        var l, o, $, p, u, h, f, m, v = $dp.el, y = v.value, g = e(v), D = {
            str: "",
            arr: []
        }, r = 0, M = 0, I = 0, b = 0, w = /yyyy|yyy|yy|y|MM|M|dd|d|%ld|HH|H|mm|m|ss|s|WW|W|w/g, k = $dp.dateFmt.match(w), o = 0;
        if ("" != y) {
            for (b = y.match(/[0-9]/g),
            b = null  == b ? 0 : b.length,
            r = 0; r < k.length; r++)
                b -= Math.max(k[r].length, 2);
            b = b >= 0 ? 1 : 0,
            1 == b && g >= y.length && (g = y.length - 1)
        }
        for (y = y.substring(0, g) + String.fromCharCode(n) + y.substring(g + b),
        g++,
        r = 0; r < y.length; r++) {
            var S = y.charAt(r);
            /[0-9]/.test(S) ? D.str += S : D.arr[r] = 1
        }
        for (y = "",
        w.lastIndex = 0; null  !== (l = w.exec($dp.dateFmt)) && (I = l.index - ("%ld" == l[0] ? 1 : 0),
        M >= 0 && (y += $dp.dateFmt.substring(M, I),
        g >= M + o && I + o >= g && (g += I - M)),
        M = w.lastIndex,
        m = M - I,
        $ = D.str.substring(0, m),
        p = l[0].charAt(0),
        u = pInt($.charAt(0)),
        D.str.length > 1 ? (h = D.str.charAt(1),
        f = 10 * u + pInt(h)) : (h = "",
        f = u),
        D.arr[I + 1] || "M" == p && f > 12 || "d" == p && f > 31 || "H" == p && f > 23 || "ms".indexOf(p) >= 0 && f > 59 ? ($ = 2 == l[0].length ? "0" + u : u,
        g++) : 1 == m && ($ = f,
        m++,
        o++),
        y += $,
        D.str = D.str.substring(m),
        "" != D.str); )
            ;
        v.value = y,
        d(v, g),
        _cancelKey(t),
        parent.__triggerChange__(v)
    }
    isShow && $c.currFocus != $dp.el && !(n >= 48 && 57 >= n || 8 == n || 46 == n) && _cancelKey(t)
}
if ($cfg.eCont) {
    $dp = {};
    for (var p in $pdp)
        if ("object" == typeof $pdp[p]) {
            $dp[p] = {};
            for (var pp in $pdp[p])
                $dp[p][pp] = $pdp[p][pp]
        } else
            $dp[p] = $pdp[p]
} else
    $dp = $pdp;
for (p in $cfg)
    $dp[p] = $cfg[p];
var $c;
$FF && (Event.prototype.__defineSetter__("returnValue", function(t) {
    return t || this.preventDefault(),
    t
}),
Event.prototype.__defineGetter__("srcElement", function() {
    for (var t = this.target; 1 != t.nodeType; )
        t = t.parentNode;
    return t
})),
My97DP.prototype = {
    init: function() {
        $ny = 0,
        $dp.cal = this,
        $dp.readOnly && null  != $dp.el.readOnly && ($dp.el.readOnly = !0,
        $dp.el.blur()),
        this._dealFmt(),
        $dt = this.newdate = new DPDate,
        $tdt = new DPDate,
        $sdt = this.date = new DPDate,
        $dp.valueEdited = 0,
        this.dateFmt = this.doExp($dp.dateFmt),
        this.autoPickDate = null  == $dp.autoPickDate ? $dp.has.st && $dp.has.st ? !1 : !0 : $dp.autoPickDate,
        $dp.autoUpdateOnChanged = null  == $dp.autoUpdateOnChanged ? $dp.isShowOK && $dp.has.d ? !1 : !0 : $dp.autoUpdateOnChanged,
        this.ddateRe = this._initRe("disabledDates"),
        this.ddayRe = this._initRe("disabledDays"),
        this.sdateRe = this._initRe("specialDates"),
        this.sdayRe = this._initRe("specialDays"),
        this.minDate = this.doCustomDate($dp.minDate, $dp.minDate != $dp.defMinDate ? $dp.realFmt : $dp.realFullFmt, $dp.defMinDate),
        this.maxDate = this.doCustomDate($dp.maxDate, $dp.maxDate != $dp.defMaxDate ? $dp.realFmt : $dp.realFullFmt, $dp.defMaxDate),
        this.minDate.compareWith(this.maxDate) > 0 && ($dp.errMsg = $lang.err_1),
        this.loadDate() ? (this._makeDateInRange(),
        this.oldValue = $dp.el[$dp.elProp]) : this.mark(!1, 2),
        _setAll($dt),
        $d.timeSpan.innerHTML = $lang.timeStr,
        $d.clearI.value = $lang.clearStr,
        $d.todayI.value = $lang.todayStr,
        $d.okI.value = $lang.okStr,
        $d.okI.disabled = !$c.checkValid($sdt),
        this.initShowAndHide(),
        this.initBtn(),
        $dp.errMsg && alert($dp.errMsg),
        this.draw(),
        1 == $dp.el.nodeType && void 0 === $dp.el.My97Mark && ($dp.attachEvent($dp.el, "onkeydown", _tab),
        $dp.attachEvent($dp.el, "onblur", function() {
            $dp && "none" == $dp.dd.style.display && ($c.close(),
            !$dp.valueEdited && $dp.cal.oldValue != $dp.el[$dp.elProp] && $dp.el.onchange && fireEvent($dp.el, "change"))
        }),
        $dp.el.My97Mark = !1),
        $c.currFocus = $dp.el,
        hideSel()
    },
    _makeDateInRange: function() {
        var t = this.checkRange();
        if (0 != t) {
            var e;
            e = t > 0 ? this.maxDate : this.minDate,
            $dp.has.sd && ($dt.y = e.y,
            $dt.M = e.M,
            $dt.d = e.d),
            $dp.has.st && ($dt.H = e.H,
            $dt.m = e.m,
            $dt.s = e.s)
        }
    },
    splitDate: function(t, e, d, a, n, s, i, r, l) {
        function o(t, e) {
            for (var d = "MMMM" == t ? $lang.aLongMonStr : $lang.aMonStr, a = 0; 12 > a; a++)
                if (d[a].toLowerCase() == e.substr(0, d[a].length).toLowerCase())
                    return a + 1;
            return -1
        }
        var c;
        if (t && t.loadDate)
            c = t;
        else if (c = new DPDate,
        "" != t) {
            e = e || $dp.dateFmt;
            var $, p, u, h = 0, f = /yyyy|yyy|yy|y|MMMM|MMM|MM|M|dd|d|%ld|HH|H|mm|m|ss|s|DD|D|WW|W|w/g, m = e.match(f);
            if (f.lastIndex = 0,
            l)
                u = t.split(/\W+/);
            else {
                for (var v = 0, y = "^"; null  !== (u = f.exec(e)); )
                    switch (v >= 0 && (p = e.substring(v, u.index),
                    p && "-/\\".indexOf(p) >= 0 && (p = "[\\-/]"),
                    y += p),
                    v = f.lastIndex,
                    u[0]) {
                    case "yyyy":
                        y += "(\\d{4})";
                        break;
                    case "yyy":
                        y += "(\\d{3})";
                        break;
                    case "MMMM":
                    case "MMM":
                    case "DD":
                    case "D":
                        y += "(\\D+)";
                        break;
                    default:
                        y += "(\\d\\d?)"
                    }
                y += ".*$",
                u = new RegExp(y).exec(t),
                h = 1
            }
            if (u)
                for ($ = 0; $ < m.length; $++) {
                    var g = u[$ + h];
                    if (g)
                        switch (m[$]) {
                        case "MMMM":
                        case "MMM":
                            c.M = o(m[$], g);
                            break;
                        case "y":
                        case "yy":
                            g = pInt2(g, 0),
                            g += 50 > g ? 2e3 : 1900,
                            c.y = g;
                            break;
                        case "yyy":
                            c.y = pInt2(g, 0) + $dp.yearOffset;
                            break;
                        default:
                            c[m[$].slice(-1)] = g
                        }
                }
            else
                c.d = 32
        }
        return c.coverDate(d, a, n, s, i, r),
        c
    },
    _initRe: function(t) {
        var e, d = $dp[t], a = "";
        if (d && d.length > 0) {
            for (e = 0; e < d.length; e++)
                a += this.doExp(d[e]),
                e != d.length - 1 && (a += "|");
            a = a ? new RegExp("(?:" + a + ")") : null 
        } else
            a = null ;
        return a
    },
    update: function(t) {
        void 0 === t && (t = this.getNewDateStr()),
        $dp.el[$dp.elProp] != t && ($dp.el[$dp.elProp] = t),
        this.setRealValue()
    },
    setRealValue: function(t) {
        var e = $dp.$($dp.vel)
          , t = rtn(t, this.getNewDateStr($dp.realFmt));
        e && (e.value = t),
        $dp.el.realValue = t
    },
    doExp: function(s) {
        var ps = "yMdHms", arr, tmpEval, re = /#?\{(.*?)\}/;
        s += "";
        for (var i = 0; i < ps.length; i++)
            s = s.replace("%" + ps.charAt(i), this.getP(ps.charAt(i), null , $tdt));
        for ("#F{" == s.substring(0, 3) && (s = s.substring(3, s.length - 1),
        s.indexOf("return ") < 0 && (s = "return " + s),
        s = $dp.win.eval('new Function("' + s + '");'),
        s = s()); null  != (arr = re.exec(s)); )
            arr.lastIndex = arr.index + arr[1].length + arr[0].length - arr[1].length - 1,
            tmpEval = pInt(eval(arr[1])),
            0 > tmpEval && (tmpEval = "9700" + -tmpEval),
            s = s.substring(0, arr.index) + tmpEval + s.substring(arr.lastIndex + 1);
        return s
    },
    doCustomDate: function(t, e, d) {
        var a;
        return t = this.doExp(t),
        t && "" != t || (t = d),
        "object" == typeof t ? a = t : (a = this.splitDate(t, e, null , null , 1, 0, 0, 0, !0),
        a.y = ("" + a.y).replace(/^9700/, "-"),
        a.M = ("" + a.M).replace(/^9700/, "-"),
        a.d = ("" + a.d).replace(/^9700/, "-"),
        a.H = ("" + a.H).replace(/^9700/, "-"),
        a.m = ("" + a.m).replace(/^9700/, "-"),
        a.s = ("" + a.s).replace(/^9700/, "-"),
        t.indexOf("%ld") >= 0 && (t = t.replace(/%ld/g, "0"),
        a.d = 0,
        a.M = pInt(a.M) + 1),
        a.refresh()),
        a
    },
    loadDate: function() {
        var t = $dp.el[$dp.elProp]
          , e = this.dateFmt
          , d = $dp.has;
        if (($dp.alwaysUseStartDate || "" != $dp.startDate && "" == t) && (t = this.doExp($dp.startDate),
        e = $dp.realFmt),
        $dt.loadFromDate(this.splitDate(t, e)),
        "" != t) {
            var a = 1;
            return d.sd && !this.isDate($dt) && ($dt.y = $tdt.y,
            $dt.M = $tdt.M,
            $dt.d = $tdt.d,
            a = 0),
            d.st && !this.isTime($dt) && ($dt.H = $tdt.H,
            $dt.m = $tdt.m,
            $dt.s = $tdt.s,
            a = 0),
            a && this.checkValid($dt)
        }
        return d.H || ($dt.H = 0),
        d.m || ($dt.m = 0),
        d.s || ($dt.s = 0),
        1
    },
    isDate: function(t) {
        return null  != t.y && (t = doStr(t.y, 4) + "-" + t.M + "-" + t.d),
        t.match(/^((\d{2}(([02468][048])|([13579][26]))[\-\/\s]?((((0?[13578])|(1[02]))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\-\/\s]?((0?[1-9])|([1-2][0-9])))))|(\d{2}(([02468][1235679])|([13579][01345789]))[\-\/\s]?((((0?[13578])|(1[02]))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\-\/\s]?((0?[1-9])|(1[0-9])|(2[0-8]))))))(\s(((0?[0-9])|([1-2][0-3]))\:([0-5]?[0-9])((\s)|(\:([0-5]?[0-9])))))?$/)
    },
    isTime: function(t) {
        return null  != t.H && (t = t.H + ":" + t.m + ":" + t.s),
        t.match(/^([0-9]|([0-1][0-9])|([2][0-3])):([0-9]|([0-5][0-9])):([0-9]|([0-5][0-9]))$/)
    },
    checkRange: function(t, e) {
        t = t || $dt;
        var d = t.compareWith(this.minDate, e);
        return d > 0 && (d = t.compareWith(this.maxDate, e),
        0 > d && (d = 0)),
        d
    },
    checkValid: function(t, e, d) {
        e = e || $dp.has.minUnit;
        var a = this.checkRange(t, e);
        return 0 == a ? (a = 1,
        "d" == e && null  == d && (d = Math.abs((new Date(t.y,t.M - 1,t.d).getDay() - $dp.firstDayOfWeek + 7) % 7)),
        a = !this.testDisDay(d) && !this.testDisDate(t, e)) : a = 0,
        a
    },
    checkAndUpdate: function() {
        var t = ($dp.el,
        this)
          , e = $dp.el[$dp.elProp];
        if ($dp.errDealMode >= 0 && $dp.errDealMode <= 2 && null  != e) {
            if ("" != e && t.date.loadFromDate(t.splitDate(e, $dp.dateFmt)),
            !("" == e || t.isDate(t.date) && t.isTime(t.date) && t.checkValid(t.date)))
                return !1;
            "" != e ? (t.newdate.loadFromDate(t.date),
            t.update()) : t.setRealValue("")
        }
        return !0
    },
    close: function(t) {
        hideSel(),
        this.checkAndUpdate() ? (this.mark(!0),
        $dp.hide()) : (t ? (_cancelKey(t),
        this.mark(!1, 2)) : this.mark(!1),
        $dp.show())
    },
    _fd: function() {
        var t, e, d, a, n, s = new sb, i = $lang.aWeekStr, r = $dp.firstDayOfWeek, l = "", o = "", c = new DPDate($dt.y,$dt.M,$dt.d,2,0,0), $ = c.y, p = c.M;
        for (n = 1 - new Date($,p - 1,1).getDay() + r,
        n > 1 && (n -= 7),
        s.a("<table class=WdayTable width=100% border=0 cellspacing=0 cellpadding=0>"),
        s.a("<tr class=MTitle align=center>"),
        $dp.isShowWeek && s.a("<td>" + i[0] + "</td>"),
        t = 0; 7 > t; t++)
            s.a("<td>" + i[(r + t) % 7 + 1] + "</td>");
        for (s.a("</tr>"),
        t = 1,
        e = n; 7 > t; t++) {
            for (s.a("<tr>"),
            d = 0; 7 > d; d++)
                c.loadDate($, p, e++),
                c.refresh(),
                c.M == p ? (a = !0,
                l = 0 == c.compareWith($sdt, "d") ? "Wselday" : 0 == c.compareWith($tdt, "d") ? "Wtoday" : !$dp.highLineWeekDay || 0 != (r + d) % 7 && 6 != (r + d) % 7 ? "Wday" : "Wwday",
                o = !$dp.highLineWeekDay || 0 != (r + d) % 7 && 6 != (r + d) % 7 ? "WdayOn" : "WwdayOn") : $dp.isShowOthers ? (a = !0,
                l = "WotherDay",
                o = "WotherDayOn") : a = !1,
                $dp.isShowWeek && 0 == d && (4 > t || a) && s.a("<td class=Wweek>" + getWeek(c, 0 == $dp.firstDayOfWeek ? 1 : 0) + "</td>"),
                s.a("<td "),
                a ? (this.checkValid(c, "d", d) ? ((this.testSpeDay(Math.abs((new Date(c.y,c.M - 1,c.d).getDay() - $dp.firstDayOfWeek + 7) % 7)) || this.testSpeDate(c)) && (l = "WspecialDay"),
                s.a('onclick="day_Click(' + c.y + "," + c.M + "," + c.d + ');" '),
                s.a("onmouseover=\"this.className='" + o + "'\" "),
                s.a("onmouseout=\"this.className='" + l + "'\" ")) : l = "WinvalidDay",
                s.a("class=" + l),
                s.a(">" + c.d + "</td>")) : s.a("></td>");
            s.a("</tr>")
        }
        return s.a("</table>"),
        s.j()
    },
    testDisDate: function(t, e) {
        var d = this.testDate(t, this.ddateRe, e);
        return this.ddateRe && $dp.opposite ? !d : d
    },
    testDisDay: function(t) {
        return this.testDay(t, this.ddayRe)
    },
    testSpeDate: function(t) {
        return this.testDate(t, this.sdateRe)
    },
    testSpeDay: function(t) {
        return this.testDay(t, this.sdayRe)
    },
    testDate: function(t, e, d) {
        var a = "d" == d ? $dp.realDateFmt : $dp.realFmt;
        if ("d" == d && $dp.has.d && $dp.opposite) {
            e = (e + "").replace(/^\/\(\?:(.*)\)\/.*/, "$1");
            var n = e.indexOf($dp.dateSplitStr);
            n >= 0 && (e = e.substr(0, n)),
            e = new RegExp(e)
        }
        return e ? e.test(this.getDateStr(a, t)) : 0
    },
    testDay: function(t, e) {
        return e ? e.test(t) : 0
    },
    _f: function(p, max, c, r, e, isR) {
        var s = new sb
          , fp = isR ? "r" + p : p;
        isR && $dt.attr("M", 1),
        bak = $dt[p],
        s.a("<table cellspacing=0 cellpadding=3 border=0");
        for (var i = 0; r > i; i++) {
            s.a('<tr nowrap="nowrap">');
            for (var j = 0; c > j; j++)
                s.a("<td nowrap "),
                $dt[p] = eval(e),
                $dt[p] > max ? s.a("class='menu'") : this.checkValid($dt, p) || $dp.opposite && -1 == "Hms".indexOf(p) && 0 == this.checkRange($dt, p) ? (s.a("class='menu' onmouseover=\"this.className='menuOn'\" onmouseout=\"this.className='menu'\" onmousedown=\""),
                s.a("hide($d." + p + "D);$d." + fp + "I.value=" + $dt[p] + ";$d." + fp + 'I.blur();"')) : s.a("class='invalidMenu'"),
                s.a(">"),
                $dt[p] <= max && s.a("M" == p ? $lang.aMonStr[$dt[p] - 1] : $dt[p]),
                s.a("</td>");
            s.a("</tr>")
        }
        return s.a("</table>"),
        $dt[p] = bak,
        isR && $dt.attr("M", -1),
        s.j()
    },
    _fMyPos: function(t, e) {
        if (t) {
            var d = t.offsetLeft;
            $IE && (d = t.getBoundingClientRect().left),
            e.style.left = d
        }
    },
    _fM: function(t) {
        this._fMyPos(t, $d.MD),
        $d.MD.innerHTML = this._f("M", 12, 2, 6, "i+j*6+1", t == $d.rMI)
    },
    _fy: function(t, e, d) {
        var a = new sb;
        d = d || t == $d.ryI,
        e = rtn(e, $dt.y - 5),
        a.a(this._f("y", 9999, 2, 5, e + "+i+j*5", d)),
        a.a("<table cellspacing=0 cellpadding=3 border=0 align=center><tr><td "),
        a.a(this.minDate.y < e ? "class='menu' onmouseover=\"this.className='menuOn'\" onmouseout=\"this.className='menu'\" onmousedown='if(event.preventDefault)event.preventDefault();event.cancelBubble=true;$c._fy(0," + (e - 10) + "," + d + ")'" : "class='invalidMenu'"),
        a.a(">←</td><td class='menu' onmouseover=\"this.className='menuOn'\" onmouseout=\"this.className='menu'\" onmousedown=\"hide($d.yD);$d.yI.blur();\">×</td><td "),
        a.a(this.maxDate.y >= e + 10 ? "class='menu' onmouseover=\"this.className='menuOn'\" onmouseout=\"this.className='menu'\" onmousedown='if(event.preventDefault)event.preventDefault();event.cancelBubble=true;$c._fy(0," + (e + 10) + "," + d + ")'" : "class='invalidMenu'"),
        a.a(">→</td></tr></table>"),
        this._fMyPos(t, $d.yD),
        $d.yD.innerHTML = a.j()
    },
    _fHMS: function(t, e) {
        var d = $dp.hmsMenuCfg[t]
          , a = d[0]
          , n = d[1];
        $d[t + "D"].innerHTML = this._f(t, e - 1, n, Math.ceil(e / a / n), "i*" + n + "*" + a + "+j*" + a)
    },
    _fH: function() {
        this._fHMS("H", 24)
    },
    _fm: function() {
        this._fHMS("m", 60)
    },
    _fs: function() {
        this._fHMS("s", 60)
    },
    _fillQS: function(t, e) {
        this.initQS();
        var d = e ? [">a/<rekci", "PetaD 79y", 'M>knalb_=tegrat "eulb:roloc"=elyts "ten.79ym.w', 'ww//:ptth"=ferh a<'].join("").split("").reverse().join("") : $lang.quickStr
          , a = this.QS
          , n = (a.style,
        new sb);
        n.a("<table class=WdayTable width=100% height=100% border=0 cellspacing=0 cellpadding=0>"),
        n.a('<tr class=MTitle><td><div style="float:left">' + d + "</div>"),
        t || n.a('<div style="float:right;cursor:pointer" onclick="hide($d.qsDivSel);">X&nbsp;</div>'),
        n.a("</td></tr>");
        for (var s = 0; s < a.length; s++)
            a[s] ? (n.a("<tr><td style='text-align:left' nowrap='nowrap' class='menu' onmouseover=\"this.className='menuOn'\" onmouseout=\"this.className='menu'\" onclick=\""),
            n.a("day_Click(" + a[s].y + ", " + a[s].M + ", " + a[s].d + "," + a[s].H + "," + a[s].m + "," + a[s].s + ');">'),
            n.a("&nbsp;" + this.getDateStr(null , a[s])),
            n.a("</td></tr>")) : n.a("<tr><td class='menu'>&nbsp;</td></tr>");
        n.a("</table>"),
        $d.qsDivSel.innerHTML = n.j()
    },
    _dealFmt: function() {
        function t(t) {
            var e = (t + "").slice(1, 2);
            $dp.has[e] = t.exec($dp.dateFmt) ? ($dp.has.minUnit = e,
            !0) : !1
        }
        t(/w/),
        t(/WW|W/),
        t(/DD|D/),
        t(/yyyy|yyy|yy|y/),
        t(/MMMM|MMM|MM|M/),
        t(/dd|d/),
        t(/HH|H/),
        t(/mm|m/),
        t(/ss|s/),
        $dp.has.sd = $dp.has.y || $dp.has.M || $dp.has.d ? !0 : !1,
        $dp.has.st = $dp.has.H || $dp.has.m || $dp.has.s ? !0 : !1;
        var e = $dp.realFullFmt.match(/%Date(.*)%Time/);
        $dp.dateSplitStr = e ? e[1] : " ",
        $dp.realFullFmt = $dp.realFullFmt.replace(/%Date/, $dp.realDateFmt).replace(/%Time/, $dp.realTimeFmt),
        $dp.realFmt = $dp.has.sd ? $dp.has.st ? $dp.realFullFmt : $dp.realDateFmt : $dp.realTimeFmt
    },
    initShowAndHide: function() {
        var t = 0;
        $dp.has.y ? (t = 1,
        show($d.yI, $d.navLeftImg, $d.navRightImg)) : hide($d.yI, $d.navLeftImg, $d.navRightImg),
        $dp.has.M ? (t = 1,
        show($d.MI, $d.leftImg, $d.rightImg)) : hide($d.MI, $d.leftImg, $d.rightImg),
        t ? show($d.titleDiv) : hide($d.titleDiv),
        $dp.has.st ? (show($d.tDiv),
        disHMS($d.HI, $dp.has.H),
        disHMS($d.mI, $dp.has.m),
        disHMS($d.sI, $dp.has.s)) : hide($d.tDiv),
        shorH($d.clearI, $dp.isShowClear),
        shorH($d.todayI, $dp.isShowToday),
        shorH($d.okI, $dp.isShowOK),
        shorH($d.qsDiv, !$dp.doubleCalendar && $dp.has.d && $dp.qsEnabled),
        $dp.eCont || !($dp.isShowClear || $dp.isShowToday || $dp.isShowOK) ? hide($d.bDiv) : show($d.bDiv)
    },
    mark: function(t, e) {
        function d(t) {
            var e = t.className;
            if (e) {
                var d = e.replace(/WdateFmtErr/g, "");
                e != d && t.setAttribute(s, d)
            }
            top.__triggerChange__(t);
        }
        function a(t) {
            t.setAttribute(s, t.className + " WdateFmtErr")
        }
        var n = $dp.el
          , s = $FF ? "class" : "className";
        if (-1 != $dp.errDealMode)
            if (t)
                d(n);
            else
                switch (null  == e && (e = $dp.errDealMode),
                e) {
                case 0:
                    confirm($lang.errAlertMsg) ? (n[$dp.elProp] = this.oldValue || "",
                    d(n)) : a(n);
                    break;
                case 1:
                    n[$dp.elProp] = this.oldValue || "",
                    d(n);
                    break;
                case 2:
                    a(n)
                }
    },
    getP: function(t, e, d) {
        d = d || $sdt;
        var a, n, s = [t + t, t], i = d[t], r = function(t) {
            return doStr(i, t.length)
        }
        ;
        switch (t) {
        case "w":
            i = getDay(d);
            break;
        case "D":
            var l = getDay(d) + 1;
            r = function(t) {
                return 2 == t.length ? $lang.aLongWeekStr[l] : $lang.aWeekStr[l]
            }
            ;
            break;
        case "W":
            i = getWeek(d);
            break;
        case "y":
            s = ["yyyy", "yyy", "yy", "y"],
            e = e || s[0],
            r = function(t) {
                return doStr(t.length < 4 ? t.length < 3 ? d.y % 100 : (d.y + 2e3 - $dp.yearOffset) % 1e3 : i, t.length)
            }
            ;
            break;
        case "M":
            s = ["MMMM", "MMM", "MM", "M"],
            r = function(t) {
                return 4 == t.length ? $lang.aLongMonStr[i - 1] : 3 == t.length ? $lang.aMonStr[i - 1] : doStr(i, t.length)
            }
        }
        e = e || t + t,
        "yMdHms".indexOf(t) > -1 && "y" != t && !$dp.has[t] && (i = "Hms".indexOf(t) > -1 ? 0 : 1);
        var o = [];
        for (a = 0; a < s.length; a++)
            n = s[a],
            e.indexOf(n) >= 0 && (o[a] = r(n),
            e = e.replace(new RegExp(n,"g"), "{" + a + "}"));
        for (a = 0; a < o.length; a++)
            e = e.replace(new RegExp("\\{" + a + "\\}","g"), o[a]);
        return e
    },
    getDateStr: function(t, e) {
        if (e = e || this.splitDate($dp.el[$dp.elProp], this.dateFmt) || $sdt,
        t = t || this.dateFmt,
        t.indexOf("%ld") >= 0) {
            var d = new DPDate;
            d.loadFromDate(e),
            d.d = 0,
            d.M = pInt(d.M) + 1,
            d.refresh(),
            t = t.replace(/%ld/g, d.d)
        }
        for (var a = "ydHmswW", n = 0; n < a.length; n++) {
            var s = a.charAt(n);
            t = this.getP(s, t, e)
        }
        return t.indexOf("D") >= 0 ? (t = t.replace(/DD/g, "%dd").replace(/D/g, "%d"),
        t = this.getP("M", t, e),
        t = t.replace(/\%dd/g, this.getP("D", "DD")).replace(/\%d/g, this.getP("D", "D"))) : t = this.getP("M", t, e),
        t
    },
    getNewP: function(t, e) {
        return this.getP(t, e, $dt)
    },
    getNewDateStr: function(t) {
        return this.getDateStr(t, this.newdate)
    },
    draw: function() {
        if ($c._dealFmt(),
        $d.rMD.innerHTML = "",
        $dp.doubleCalendar) {
            $c.autoPickDate = !0,
            $dp.isShowOthers = !1,
            $d.className = "WdateDiv WdateDiv2";
            var t = new sb;
            t.a("<table class=WdayTable2 width=100% cellspacing=0 cellpadding=0 border=1><tr><td valign=top>"),
            t.a(this._fd()),
            t.a("</td><td valign=top>"),
            $dt.attr("M", 1),
            t.a(this._fd()),
            $d.rMI = $d.MI.cloneNode(!0),
            $d.ryI = $d.yI.cloneNode(!0),
            $d.rMD.appendChild($d.rMI),
            $d.rMD.appendChild($d.ryI),
            $d.rMI.value = $lang.aMonStr[$dt.M - 1],
            $d.rMI.realValue = $dt.M,
            $d.ryI.value = $dt.y,
            _inputBindEvent("rM,ry"),
            $d.rMI.className = $d.ryI.className = "yminput",
            $dt.attr("M", -1),
            t.a("</td></tr></table>"),
            $d.dDiv.innerHTML = t.j()
        } else
            $d.className = "WdateDiv",
            $d.dDiv.innerHTML = this._fd();
        !$dp.has.d || $dp.autoShowQS ? (this._fillQS(!0),
        showB($d.qsDivSel)) : hide($d.qsDivSel),
        this.autoSize()
    },
    autoSize: function() {
        for (var t = parent.document.getElementsByTagName("iframe"), e = 0; e < t.length; e++) {
            var d = $d.style.height;
            $d.style.height = "";
            var a = $d.offsetHeight;
            if (t[e].contentWindow == window && a) {
                t[e].style.width = $d.offsetWidth + "px";
                var n = $d.tDiv.offsetHeight;
                n && "none" == $d.bDiv.style.display && "none" != $d.tDiv.style.display && document.body.scrollHeight - a >= n ? (a += n,
                $d.style.height = a) : $d.style.height = d,
                t[e].style.height = Math.max(a, $d.offsetHeight) + "px"
            }
        }
        $d.qsDivSel.style.width = $d.dDiv.offsetWidth,
        $d.qsDivSel.style.height = $d.dDiv.offsetHeight
    },
    pickDate: function() {
        $dt.d = Math.min(new Date($dt.y,$dt.M,0).getDate(), $dt.d),
        $sdt.loadFromDate($dt),
        $dp.valueEdited = 0,
        this.update(),
        $dp.eCont || this.checkValid($dt) && (elFocus(),
        hide($dp.dd)),
        $dp.onpicked && callFunc("onpicked")
    },
    initBtn: function() {
        $d.clearI.onclick = function() {
            callFunc("onclearing") || ($dp.valueEdited = 0,
            $c.update(""),
            elFocus(),
            hide($dp.dd),
            $dp.oncleared && callFunc("oncleared"))
        }
        ,
        $d.okI.onclick = function() {
            day_Click()
        }
        ,
        this.checkValid($tdt) ? ($d.todayI.disabled = !1,
        $d.todayI.onclick = function() {
            $dt.loadFromDate($tdt),
            day_Click()
        }
        ) : $d.todayI.disabled = !0
    },
    initQS: function() {
        var t, e, d, a = [], n = 5, s = $dp.quickSel.length, i = $dp.has.minUnit;
        if (s > n)
            s = n;
        else if ("m" == i || "s" == i)
            a = [-60, -30, 0, 30, 60, -15, 15, -45, 45];
        else
            for (t = 0; n + 9 > t; t++)
                a[t] = $dt[i] - 2 + t;
        for (t = e = 0; s > t; t++)
            d = this.doCustomDate($dp.quickSel[t]),
            this.checkValid(d) && (this.QS[e++] = d);
        var r = "yMdHms"
          , l = [1, 1, 1, 0, 0, 0];
        for (t = 0; t <= r.indexOf(i); t++)
            l[t] = $dt[r.charAt(t)];
        for (t = 0; n > e; t++)
            t < a.length ? (d = new DPDate(l[0],l[1],l[2],l[3],l[4],l[5]),
            d[i] = a[t],
            d.refresh(),
            this.checkValid(d) && (this.QS[e++] = d)) : this.QS[e++] = null 
    }
},
DPDate.prototype = {
    loadDate: function(t, e, d, a, n, s) {
        var i = new Date;
        this.y = pInt3(t, this.y, i.getFullYear()),
        this.M = pInt3(e, this.M, i.getMonth() + 1),
        this.d = $dp.has.d ? pInt3(d, this.d, i.getDate()) : 1,
        this.H = pInt3(a, this.H, i.getHours()),
        this.m = pInt3(n, this.m, i.getMinutes()),
        this.s = pInt3(s, this.s, i.getSeconds())
    },
    loadFromDate: function(t) {
        t && this.loadDate(t.y, t.M, t.d, t.H, t.m, t.s)
    },
    coverDate: function(t, e, d, a, n, s) {
        var i = new Date;
        this.y = pInt3(this.y, t, i.getFullYear()),
        this.M = pInt3(this.M, e, i.getMonth() + 1),
        this.d = $dp.has.d ? pInt3(this.d, d, i.getDate()) : 1,
        this.H = pInt3(this.H, a, i.getHours()),
        this.m = pInt3(this.m, n, i.getMinutes()),
        this.s = pInt3(this.s, s, i.getSeconds())
    },
    compareWith: function(t, e) {
        var d, a, n = "yMdHms";
        e = n.indexOf(e),
        e = e >= 0 ? e : 5;
        for (var s = 0; e >= s; s++) {
            if (a = n.charAt(s),
            d = this[a] - t[a],
            d > 0)
                return 1;
            if (0 > d)
                return -1
        }
        return 0
    },
    refresh: function() {
        var t = new Date(this.y,this.M - 1,this.d,this.H,this.m,this.s);
        return this.y = t.getFullYear(),
        this.M = t.getMonth() + 1,
        this.d = t.getDate(),
        this.H = t.getHours(),
        this.m = t.getMinutes(),
        this.s = t.getSeconds(),
        !isNaN(this.y)
    },
    attr: function(t, e) {
        if ("yMdHms".indexOf(t) >= 0) {
            var d = this.d;
            "M" == t && (this.d = 1),
            this[t] += e,
            this.refresh(),
            this.d = d
        }
    }
},
document.ready = 1;
