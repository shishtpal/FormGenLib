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
var _form_action = (action)?(action):("/");
var _form_method = (method)?(method):("GET");
var _form_label = (caption)?(caption):("");
var _schema = (schema && $.isArray(schema))?(schema):([]);
%>
<form action="<%= _form_action %>" method="<%= _form_method %>" id="<%= _form_id %>" accept-charset="utf-8">
<fieldset><legend><%= _form_label %></legend></fieldset>
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
var _form_action = (action)?(action):("/");
var _form_method = (method)?(method):("GET");
var _form_label = (caption)?(caption):("");
var _schema = (schema && $.isArray(schema))?(schema):([]);

__p+='\n<form action="'+
((__t=( _form_action ))==null?'':__t)+
'" method="'+
((__t=( _form_method ))==null?'':__t)+
'" accept-charset="utf-8"><fieldset><legend>'+
((__t=( _form_label ))==null?'':__t)+
'</legend></fieldset></form>';
}
return __p;
}

```
