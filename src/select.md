* Select Tag - Layout 1
```html 

<% var multiple = (multiple)?('multiple="true"'):(""); %>
<% var items = (items)?(items):([]); %>

<label for="<%= label %>" class="control-label <%= _label_grid %>"><%= label %></label>
<select name="<%= name %>" class="form-control <%= _control_grid %>" <%= _style %> <%= multiple %>>
<% for(var count=0;count<items.length;count++) { %>
<% var item = items[count]; %>
<% if (item[0] == "_" && item != "_") { %>
<% var _item = item.substr(1); %>
<optgroup label="<%= _item %>">
<% } else if (item == "_") { %>
</optgroup>
<% } else { %>
<% var _items = item.split("|");%>
<% var item1 = (_items && _items[0])?(_items[0]):("");%>
<% var item2 = (_items && _items[1])?(_items[1]):(item1);%>
<% var selected = (value && item1 && value == item1)?("selected"):(""); %>
<option value="<%= item1 %>" <%= selected %>><%= item2 %></option>
<%} %>
<% } %>
</select>

```

* Source - Select Tag - Layout 1
```javascript 
function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){__p+='';var label = (label)?(label):("__LABEL__");var name = (name)?(name):("__NAME__");var value = (value)?(value):("");var multiple = (multiple)?('multiple="true"'):("");var items = (items)?(items):([]);__p+='\n<label for="'+((__t=( label ))==null?'':__t)+'" class="control-label">'+((__t=( label ))==null?'':__t)+'</label>\n<select name="'+((__t=( name ))==null?'':__t)+'" class="form-control" '+((__t=( multiple ))==null?'':__t)+'>\n'; for(var count=0;count<items.length;count++) { __p+='\n';var item = items[count]; __p+='\n';if (item[0] == "_" && item != "_") { __p+='\n';var _item = item.substr(1); __p+='\n<optgroup label="'+((__t=( _item ))==null?'':__t)+'">\n'; } else if (item == "_") { __p+='\n</optgroup>\n'; } else { __p+='\n'; var _items = item.split("|");__p+='\n'; var item1 = (_items && _items[0])?(_items[0]):("");__p+='\n'; var item2 = (_items && _items[1])?(_items[1]):(item1);__p+='\n'; var selected = (value && item1 && value == item1)?("selected"):(""); __p+='\n<option value="'+((__t=( item1 ))==null?'':__t)+'" '+((__t=( selected ))==null?'':__t)+'>'+((__t=( item2 ))==null?'':__t)+'</option>\n';} __p+='\n'; } __p+='\n</select>';}
return __p;
}

```

* Schema - Select Tag - Layout 1
```javascript
var itemdata = {
    label: "Gender",
    name: "gender",
    multiple: true,
    value: "m",
    type: "select",
    items: [
        "m|Male",
        "f|Female",
        "_Other",
        "o|other",
        "n|dont know",
        "_"
    ]
};

```


