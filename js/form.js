function setDate(t) {
    objId = t.id.substr(4), mainObj = $("#" + objId), mObj = $("#_mm_" + objId), dObj = $("#_dd_" + objId), yObj = $("#_yy_" + objId), m = mObj.val(), d = dObj.val(), y = yObj.val(), full = m + "/" + d + "/" + y, "//" == full && (full = ""), mainObj.val(full)
}

function focusField(t, e, a) {
    var i = t;
    try {
        "DOB" == e || "DATE" == e ? i = $("#_mm_" + a) : "HEIGHT" == e && (i = $("#_feet_" + a)), i.focus(), i.select()
    } catch (t) {}
}

function setErrMsg(t, e) {
    var a = $("#_msg_" + t);
    a.html(e), fadeErr(a), o = $("#" + t), focusField(o, o.attr("field"), t)
}

function fadeErr(t) {
    $("#" + t.attr("id").replace("_msg_", "label_")).addClass("errorlabel"), t.addClass("err_on"), t.fadeIn(1e3, function() {
        t.fadeOut(500, function() {
            t.fadeIn(1e3)
        })
    })
}

function emailCheck(t) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(t)
}

function dateCheck(t) {
    var e = new Date(t),
        a = t.split("/");
    return parseInt(a[0]) === e.getMonth() + 1 && parseInt(a[2]) === e.getFullYear()
}

function isValidText(t) {
    if ("" == t) return !1;
    return /[^a-zA-Z\.\- ]/g.test(t)
}

function containsVowels(t) {
    var e = "euioay";
    for (i = 0; i < e.length; i++)
        if (-1 != t.indexOf("" + e.charAt(i))) return !0;
    return !1
}

function isNumeric(t) {
    if ("" == t) return !0;
    return !/[\D]/g.test(t)
}

function titleField() {
    $(":input[title]").each(function() {
        var t = $(this);
        "" === t.val() && (t.val(t.attr("title")), t.css("color", "silver")), t.focus(function() {
            t.val() === t.attr("title") && (t.val(""), t.css("color", "black"))
        }), t.blur(function() {
            "" === t.val() && (t.val(t.attr("title")), t.css("color", "silver"))
        })
    })
}

function checkFixEmail() {
    if (!emailCheck(document.frm.fixEmail.value)) return alert("Invalid Email"), document.frm.fixEmail.focus(), document.frm.fixEmail.select(), !1;
    if (!emailCheck(document.frm.fixConfirmEmail.value)) return alert("Invalid Email"), document.frm.fixConfirmEmail.focus(), document.frm.fixConfirmEmail.select(), !1;
    if (document.frm.fixEmail.value != document.frm.fixConfirmEmail.value) return alert("Email not matching confirmation"), document.frm.fixEmail.focus(), document.frm.fixEmail.select(), !1;
    $("#fixemail").colorbox.close();
    try {
        $("#email").html(document.frm.fixConfirmEmail.value)
    } catch (t) {}
    return !0
}
function popForm2() {
   try {
       for (var v in _PROFILE) {
           if (v.charAt(0) != "_") {
               console.log(v + "=" + _PROFILE[v]);
               $("#" + v).val(_PROFILE[v]);
           }
       }
       $("#email_confirm").val($("#email").val());
       if (_PROFILE["prefix"] == "Mr.")
           $("#male").attr('checked', true);
       else
           $("#female").attr('checked', true);
       dt = _PROFILE["usps_forward"].split("/");
       dt[0] = (dt[0].length == 1 ? "0" : "") + dt[0];
       dt[1] = (dt[1].length == 1 ? "0" : "") + dt[1];
       $("#_mm_usps_forward").val(dt[0]);
       $("#_dd_usps_forward").val(dt[1]);
       $("#_yy_usps_forward").val(dt[2]);
       $("#" + _PROFILE["moving_type"].toLowerCase()).attr('checked', true);
   } catch (e) {}
}
function popForm() {
    try {
        for (var t in _PROFILE) "state_1" == t && "" == _PROFILE[t] || ("_" != t.charAt(0) && $("#" + t).val(_PROFILE[t]), "date_of_birth" == t && (_dob = _PROFILE[t].split("/"), $("#_mm_date_of_birth").val(_dob[0]), $("#_dd_date_of_birth").val(_dob[1]), $("#_yy_date_of_birth").val(_dob[2])))
    } catch (t) {}
    try{
      popForm2();
      console.log(".END.");
    } catch (t) {}
}
$(document).ready(function() {
    uSplit = document.location.href.split("/").reverse();
    try {
        $("#_FORM_").val("/" + uSplit[1] + "/" + uSplit[0].split("?")[0])
    } catch (t) {}
    u = document.location.href.split("/"), u = stateLookup(u[u.length - 1].split(".")[0]), "undefined" == typeof u && (u = "");
    try {
        "" != u && $("#state").val(u)
    } catch (t) {}
    try {
        "" != u && $("#state_1").val(u), $("#state_1").change()
    } catch (t) {}
    try {
        "" != u && $("#state_2").val(u)
    } catch (t) {}
    $(":input").change(function() {
        $(this).val($.trim($(this).val()))
    }), $("[field=PHONE]").blur(function() {
        var t = $(this),
            e = t.val().replace(/[^\d]+/g, "");
        10 == e.length ? t.val(e.replace(/(\d{3})(\d{3})(\d{4,})/g, "$1-$2-$3")) : t.val(e)
    }), $("[field=NUMBER]").keypress(function(t) {
        return !0
    }).blur(function() {
        if ($(this).val() != $(this).attr("placeholder")) {
            var t = $(this);
            t.val(t.val().replace(/[^\d]/g, ""))
        }
    }), popForm()
});