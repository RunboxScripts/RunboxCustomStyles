# Runbox Custom Styles

CSS customizations for Runbox.com Webmail.

* Increased font size
* Font is now "sans-serif" instead of Verdana (Runbox will use the sans-serif font you have set in your web browser)
* Adjust typography and layout
* Tweak the padding of some elements
* Center the compose window

Requires the Runbox Aero Theme to be active in your account: https://runbox.com/mail/options

## Installation
Install the following userstyle via Stylish: https://userstyles.org/help/stylish

```css
/* Runbox Styles
 *
 * Custom Styling for Runbox Webmail
 *
 */

@namespace url(http://www.w3.org/1999/xhtml);

@-moz-document domain("runbox.com") {
  * {font-family:sans-serif !important;font-size:13px !important;line-height:normal !important;}
  div.menumain li a {font-family:sans-serif !important;}
  div.submenu {padding:7px 0px 0px;}
  #menuMark ul.sub {margin:0px 0px 0px -12px !important;}
  a.foldernew {font-family:sans-serif !important;font-weight:bold !important;}
  div.mailrow_head {padding:6px 5px 3px !important;}
  div.mailsubject span.new, a.headactive span.mailsubject {font-weight:bold !important;}
  td.messageContent {padding-top:13px !important;}
  #compose {margin:0 auto !important;width:unset !important;}
  #compose #editor {height:418px !important;}
  /* Remove the following line for non-Firefox browsers */
  .select2-container .select2-choice span {line-height:2em !important}
}
```

## Support

[Open an issue](https://github.com/RunboxScripts/RunboxCustomStyles/issues) or email us: runboxscripts@runbox.com

Feel free to:

* Report bugs and problems
* Ask any questions
* Make any suggestions
