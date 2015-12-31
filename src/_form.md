## Form Schema 
* Flow
    - Define an CSS Path for `form_container` DIV Node
    - Main Form Schema 
        * Properties 
        * `action="/somepath/somenode"`
        * `method="somemethod"` 
        * `charset="utf-8"`
```html 
<%
var _form_id = (id)?(id):("");
var _form_key = (form_key)?(form_key):("myForm");
var _form_action = (action)?(action):("/");
var _form_method = (method)?(method):("GET");
var _form_label = (caption)?(caption):("");
var _form_style = (style)?(' style="'+ style +'" '):("");
var _schema = (schema && $.isArray(schema))?(schema):([]);
%>
<form action="<%= _form_action %>" method="<%= _form_method %>" id="<%= _form_id %>" <%= _form_style %> accept-charset="utf-8">
<fieldset><legend><%= _form_label %> 
<div class="btn-group" style="float: right;">
<div data-formlib-key="<%= _form_key %>" onclick="$(this).trigger(\`formlib:clean\`);" class="btn btn-primary btn-sm formlib_load_clean"><span class="glyphicon glyphicon-refresh"></span> Clean</div>
<div data-formlib-key="<%= _form_key %>" onclick="$(this).trigger(\`formlib:load\`);" class="btn btn-info btn-sm formlib_load_saved"><span class="glyphicon glyphicon-open"></span> Load</div>
<div data-formlib-key="<%= _form_key %>" onclick="$(this).trigger(\`formlib:save\`);" class="btn btn-warning btn-sm formlib_save_current"><span class="glyphicon glyphicon-save"></span> Save</div>
</div>
</legend></fieldset>
</form>
```

```javascript
// schema
var form = {
    action: "/apis/testing",
    method: "POST",
    caption: "Testing Simple Html Form",
    id: 'mygenform',
    style: "border:2px solid red;",
    schema: [
    ]
}
```


```javascript
function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='';

var _form_id = (id)?(id):("");
var _form_key = (form_key)?(form_key):("myForm");
var _form_action = (action)?(action):("/");
var _form_method = (method)?(method):("GET");
var _form_label = (caption)?(caption):("");
var _schema = (schema && $.isArray(schema))?(schema):([]);

__p+='<form action="'+
((__t=( _form_action ))==null?'':__t)+
'" method="'+
((__t=( _form_method ))==null?'':__t)+
'" id="'+
((__t=( _form_id ))==null?'':__t)+
'" accept-charset="utf-8"><fieldset><legend>'+
((__t=( _form_label ))==null?'':__t)+
' \n<div class="btn-group" style="float: right;"><div data-formlib-key="'+
((__t=( _form_key ))==null?'':__t)+
'" onclick="$(this).trigger(`formlib:clean`);" class="btn btn-primary btn-sm formlib_load_clean"><span class="glyphicon glyphicon-refresh"></span> Clean</div><div data-formlib-key="'+
((__t=( _form_key ))==null?'':__t)+
'" onclick="$(this).trigger(`formlib:load`);" class="btn btn-info btn-sm formlib_load_saved"><span class="glyphicon glyphicon-open"></span> Load</div><div data-formlib-key="'+
((__t=( _form_key ))==null?'':__t)+
'" onclick="$(this).trigger(`formlib:save`);" class="btn btn-warning btn-sm formlib_save_current"><span class="glyphicon glyphicon-save"></span> Save</div></div>\n</legend></fieldset>\n</form>';
}
return __p;
}

```
