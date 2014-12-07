// ==UserScript==
// @name        Runbox Style Tweaks
// @namespace   https://github.com/RunboxScripts
// @description Style customizations for Runbox Webmail
// @downloadURL https://raw.githubusercontent.com/RunboxScripts/RunboxStyleTweaks/master/RunboxStyleTweaks.user.js
// @updateURL   https://raw.githubusercontent.com/RunboxScripts/RunboxStyleTweaks/master/RunboxStyleTweaks.meta.js
// @match       https://runbox.com/*
// @version     1.2
// @run-at      document-start
// @grant       GM_addStyle
// ==/UserScript==
GM_addStyle(
    "body, table { color:#0A0A0A; font-family:sans-serif; font-size:13px; } \
    .body { color:inherit; font-size:inherit; line-height:normal;} \
    table { line-height:normal; } \
    div.mailrow_head, div.contactrow_head, div.submenu { height:22px; } \
    td.body.messageContent { border-top: 1px dotted #8C8C8C; padding-top:4px; } \
    .form, .formfield { color:inherit; font-family:inherit; font-size:inherit; line-height:normal; } \
    .btn { font-family:inherit; } \
    .submenu #unread { margin-left:0px !important } \
    .menumain a { font-size:1em; } \
    #compose { margin:0 auto; height:unset; width:unset; } \
    #compose #editor { height:458px} \
    td.bgLight img { width:0px !important; }"
);
