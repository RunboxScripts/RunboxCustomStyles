# Runbox Custom Styles

CSS customizations for Runbox.com Webmail.

* Increased font size
* Default to the sans-serif font set in your browser instead of Verdana
* Adjust typography and layout
* Tweak the padding of some elements
* Center the compose window

Requires the Runbox Aero Theme to be active in your account: https://runbox.com/mail/options

## Installation

Install the following userstyle via Stylish: https://userstyles.org/help/stylish

### Chrome userstyle

```css
* { font-family: sans-serif !important; font-size: 13px !important; line-height: normal !important; }
div.menumain li a { font-family: sans-serif !important; }
div.submenu { padding: 7px 0px 0px; }
#menuMark ul.sub { margin: 0px 0px 0px -12px !important; }
a.foldernew { font-family: sans-serif !important; font-weight: bold !important; }
div.mailrow_head { padding: 7px 5px 1px !important; }
div.mailsubject span.new, a.headactive span.mailsubject { font-weight: bold !important; }
td.messageContent { padding-top: 13px !important; }
#compose { margin: 0 auto !important; width: auto !important; }
#compose #row_content td { padding-top: 4px !important; }
#compose #editor { height: 382px !important; }
.select2-container .select2-choice span, .select2-container .select2-choice div b { line-height: 2rem !important }
```

### Firefox userstyle

```css
/* Runbox Styles
 *
 * Custom Styling for Runbox Webmail
 *
 */

@-moz-document domain("runbox.com") {
    * { font-family: sans-serif !important; font-size: 13px !important; line-height: normal !important; }
    div.menumain li a { font-family: sans-serif !important; }
    div.submenu { padding: 7px 0px 0px; }
    #menuMark ul.sub { margin: 0px 0px 0px -12px !important; }
    a.foldernew { font-family: sans-serif !important; font-weight: bold !important; }
    div.mailrow_head { padding: 6px 5px 3px !important; }
    div.mailsubject span.new, a.headactive span.mailsubject { font-weight: bold !important; }
    td.messageContent { padding-top: 13px !important; }
    #compose { margin: 0 auto !important; width: auto !important; }
    #compose #row_content td { padding-top: 4px !important; }
    #compose #editor { height: 430px !important; }
    .select2-container .select2-choice span { line-height: 2rem !important }
    .select2-container .select2-choice div b { line-height: 1.9rem !important }
}
```

## Support

[Open an issue](https://github.com/RunboxScripts/RunboxCustomStyles/issues) or email us: runboxscripts@runbox.com

Feel free to:

* Report bugs and problems
* Ask any questions
* Make any suggestions
