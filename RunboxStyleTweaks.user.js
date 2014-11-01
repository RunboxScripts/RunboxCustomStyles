// ==UserScript==
// @name        Runbox Style Tweaks
// @namespace   https://github.com/RunboxScripts
// @description Style customizations for Runbox Webmail
// @downloadURL https://raw.githubusercontent.com/RunboxScripts/RunboxStyleTweaks/master/RunboxStyleTweaks.user.js
// @updateURL   https://raw.githubusercontent.com/RunboxScripts/RunboxStyleTweaks/master/RunboxStyleTweaks.meta.js
// @match       https://runbox.com/*
// @version     1.0
// @run-at      document-start
// @grant       GM_addStyle
// ==/UserScript==
GM_addStyle(
    "body, table { color:#0A0A0A; font-family:sans-serif; font-size:13px; } \
    .body { color:inherit; } \
    div.mailrow_head, div.contactrow_head, div.submenu { height:22px; } \
    div.submenu.menu_top_left { padding-bottom:1.4em; } \
    .messageContent { padding-top:1em; } \
    .form, .formfield { font-family:inherit; color:inherit; } \
    .btn { font-family:inherit; } \
    .menumain a { font-size:1em; } "
);
