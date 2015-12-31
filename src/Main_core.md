* Layout 1
```html 
// Underscore Template 
<% 
var generateGridClass = function(gridArray) {
var _class="";
var screens = ["col-xs-", "col-sm-", "col-md-", "col-lg-"]; 
for(var count=0;count<gridArray.length;count++){ 
_class += screens[count] + gridArray[count] + " "; 
}
return _class;
}
%>

<% 

var _cont_grid = (cont_grid)?(this.generateGridClass(cont_grid)):("");
var _cont_class = (cont_class)?(cont_class):("");
var _cont_style = (cont_style)?(' style="' + cont_style + '" '):("");
var _label = (label)?(label):("__LABEL__");
var _label_class = (label_class)?(label_class):("");
var _type = (type)?(type):("__TYPE__");
var _name = (name)?(name):("__NAME__");
var _title = (title)?(' title="'+title+'" '):("");
var _value = (value)?(' value="'+value+'" '):("");
var _value0 = (value)?(value):("");
var _style = (style)?(' style="'+style+'" '):("");
var _placeholder = (placeholder)?(' placeholder="' + placeholder + '" '):("");
var _label_grid = (label_grid)?( this.generateGridClass(label_grid) ):("");
var _control_grid = (control_grid)?( this.generateGridClass(control_grid) ):("");
var _control_class = (control_class)?(control_class):("");
var _control_id = (control_id)?(' id="'+control_id+'" '):("");
var _control_id0 = (control_id)?("#"+control_id):("");

var _class=_control_class;
if (_type=="text") { 
_class += " form-control text";
} else if (_type =="general") {
_class+=" ";
} else if (_type =="file") {
_class+=" form-control file";
} else if (_type == "checkbox") {
_class+=" checkbox";
} else if (_type=="radio") {
_class+=" radio";
} else if (_type == "textarea") {
_class+=" form-control textarea";
} else if (_type == "select") {
_class+=" form-control";
} else if (_type == "list") {
_class+= " list-group-item";
} else if (_type == "set") {
_class+= " list-group-item";
} else if (_type == "photo") {
_class+= " form-control file";
} else if (_type == "date") {
_class+= " input-group date";
} else if (_type == "submit") {
_class+=" btn ";
}

%>

<% if (_type != "heading") { %>
<div class="form-group <%= _cont_class %> <%= _cont_grid %>" <%= _cont_style %>>

<% // Label should not be displayed when working with "hidden", "photo", "clearfix" and "submit" data Types %>
<% if (_type != "hidden" && _type != "photo" && _type != "clearfix"&& _type != "submit") { %>
    <label for="<%= _name %>" class="control-label <%= _label_class + _label_grid %>"> <%= _label %></label>
<% } %>

<% // When Type of Component => "text", "file", "radio", "checkbox" %>
<% if (_type == "text" || _type == "file" || _type == "radio" || _type == "checkbox") { %>
    <% 
    var _autocomplete = (autocomplete)?(' autocomplete="on" '):(' autocomplete="off" ');
    if (_type == "text") {
        var _onchange = (onchange)?(' onchange="' + onchange + '" '):(' onchange="this.setAttribute(\`data-value\`, this.value);" onload="this.value=this.getAttribute(\`data-value\`);" '); 
    } else if (_type == "radio") {
        var _onchange = (onchange)?(' onchange="' + onchange + '" '):(' onchange="this.setAttribute(\`data-value\`, this.checked);" onload="var _val=this.getAttribute(\`data-value\`);this.checked=(_val && _val == \`true\`)?(true):(false);" '); 
    } else if (_type == "checkbox") {
        var _onchange = (onchange)?(' onchange="' + onchange + '" '):(' onchange="this.setAttribute(\`data-value\`, this.checked);" onload="var _val=this.getAttribute(\`data-value\`);this.checked=(_val && _val == \`true\`)?(true):(false);" '); 
    } else {
        var _onchange = (onchange)?(' onchange="' + onchange + '" '):(''); 
    }

    %>
    <input type="<%= _type %>" class="<%= _class %> <%= _control_grid %>" <%= _control_id + _onchange %> <%= _title %> name="<%= _name %>" <%= _value + _placeholder + _autocomplete + _style %>>

<% // General Control - When You need a Custom Type Input Control %>
<% } else if (_type == "general") { %>
    <% 
    var _type_name = (type_name)?(' type="' + type_name + '" '):(' type="text" ');
    var _autocomplete = (autocomplete)?(' autocomplete="on" '):(' autocomplete="off" ');
    %>
    <input type="<%= _type_name %>" class="<%= _class %> <%= _control_grid %>" <%= _control_id %> <%= _title %> name="<%= _name %>" <%= _value + _placeholder + _autocomplete + _style %>>

<% } else if (_type == "password") { %>
    <% var _autocomplete = (autocomplete)?(' autocomplete="on" '):(' autocomplete="off" '); %>
    <input type="password" class="<%= _class %> <%= _control_grid %>" <%= _control_id %> <%= _title %> name="<%= _name %>" <%= _value + _placeholder + _autocomplete + _style %>>

<% // Textarea widget %>
<% } else if (_type == "textarea") { %>
    <% 
    var _rows = (rows)?(' rows="' + rows + '" '):(' rows="5" '); 
    var _onchange = (onchange)?(' onchange="' + onchange + '" '):(' onchange="this.setAttribute(\`data-value\`, this.value);" onload="this.value=this.getAttribute(\`data-value\`);" '); 
    %>
    <textarea class="<%= _class %> <%= _control_grid %>" name="<%= _name %>" <%= _control_id + _title + _rows + _placeholder + _style + _onchange %>><%= _value %></textarea>

<% // select Widget %>
<% } else if (_type == "select") { %>
    <% 
    var _multiple = (multiple)?('multiple="true"'):("");
    var _items = (items)?(items):([]);
    var _onchange = (onchange)?(' onchange="' + onchange + '" '):(' onchange="this.setAttribute(\`data-value\`, this.value);" onload="this.value=this.getAttribute(\`data-value\`);" ');
    %>

    <select name="<%= _name %>" class="<%= _class %> <%= _control_grid %>" <%= _onchange %> <%= _title %> <%= _control_id %> <%= _style %> <%= _multiple %>>
    <% 
    for(var count=0;count<_items.length;count++) {
        var item = _items[count];
        if (item[0] == "_" && item != "_") {
        var _item = item.substr(1); 
    %>
        <optgroup label="<%= _item %>">
    <% } else if (item == "_") { %>
        </optgroup>
    <% 
    } else { 
    var _itemvals = item.split("|");
    var item1 = (_itemvals && _itemvals[0])?(_itemvals[0]):("");
    var item2 = (_itemvals && _itemvals[1])?(_itemvals[1]):(item1);
    var selected = (value && item1 && value == item1)?("selected"):(""); 
    %>
        <option value="<%= item1 %>" <%= selected %>><%= item2 %></option>
    <%  } %>
    <% } %>
    </select>

<% // List widget %>
<% } else if (_type == "list") { %>
    <% var _items = (items)?(items):([]); %>
    <% var _values = (values)?(values):([]); %>
    <% if (_items.length != 0) { %>
    <div class="list-group" <%= _control_id %> <%= _title %>>
    <% 
    for(var count=0;count<_items.length;count++) {
        var item = _items[count];
        var _itemvals = item.split("|");
        var item1 = (_itemvals && _itemvals[0])?(_itemvals[0]):("");
        var item2 = (_itemvals && _itemvals[1])?(_itemvals[1]):(item1);
        var valindex = $.inArray(item1, _values);
        var checked = (valindex != -1 && _values[valindex] == item1)?("checked"):("");
        var _onchange = (onchange)?(' onchange="' + onchange + '" '):(' onchange="this.setAttribute(\`data-value\`, this.checked);" onload="var _val=this.getAttribute(\`data-value\`);this.checked=(_val && _val == \`true\`)?(true):(false);" ');
    %>

        <div class="<%= _class %>">
            <input type="checkbox" name="<%= _name %>" value="<%= item1 %>" <%= _onchange %> <%= checked %>><span> <%= item2 %></span>
        </div>
    <%   } %>
    </div>
    <% } %>

<% // Set Widget %>
<% } else if (_type == "set") { %>
    <% var _items = (items)?(items):([]); %>
    <% if (_items.length) { %>
    <div class="list-group" <%= _control_id %> <%= _title %>>
    <% 
    for(var count=0;count<_items.length;count++) {
        var item = _items[count];
        var _itemvals = item.split("|");
        var item1 = (_itemvals && _itemvals[0])?(_itemvals[0]):("");
        var item2 = (_itemvals && _itemvals[1])?(_itemvals[1]):(item1);
        var checked = (_value == item1)?("checked"):("");
        var _onchange = (onchange)?(' onchange="' + onchange + '" '):(' onchange="this.setAttribute(\`data-value\`, this.checked);" onload="var _val=this.getAttribute(\`data-value\`);this.checked=(_val && _val == \`true\`)?(true):(false);" ');
    %>

        <div class="<%= _class %>">
            <input type="radio" name="<%= _name %>" value="<%= item1 %>" <%= _onchange %> <%= checked %>><span> <%= item2 %></span>
        </div>
    <%   } %>
    </div>
    <% } %>

<% // photo Widget %>
<% } else if (_type == "photo") { %>
    <%
    var _img_id = (img_id)?(' id="' + img_id + '" '):("");
    var _img_id0 = (img_id)?("#" + img_id):("");
    var _img_alt = (img_alt)?(' alt="' + img_alt + '" '):("");
    var _img_style = (img_style)?(' style="' + img_style + '" '):("");
    var _img_default = (img_default)?(' src="' + img_default + '" '):("");
    %>
    <div class="thumbnail">
        <img class="img-thumbnail" <%= _img_id %> <%= _img_default %> data-src="holder.js/300x300" <%= _img_alt %> <%= _img_style %>>
        <div class="caption <%= _control_grid %>" <%= _title %>>
            <input name="<%= _name %>" type="file" class="<%= _class %>" <%= _control_id %> <%= _style %>>
            <h4><%= _label %> <span class="badge btn-primary <%= _label_class %> <%= _label_grid %>"></span></h4>
        </div>
    </div>
    <script type="text/javascript">
    $(document).ready(function(){
        $("<%= _control_id0 %>").change(function(ev){
            console.log(ev);
            ev.preventDefault();
            var knowntypes = ["image/png", "image/jpg", "image/jpeg"];
            var max_size  = 500000;  /* 500 KB */
            var _this = $(ev.currentTarget);
            var _selectedPic = _this[0].files[0];
            var _img_type = _selectedPic['type'];
            var _img_size = _selectedPic['size'];

            if ($.inArray(_img_type, knowntypes) < 0 ) {
              alert("You can Upload Only JPG or PNG Images.");
            } else if (_img_size > max_size) {
              /* Image Size is more */
              alert("You can Upload Image of Max Size 500KB.");
            } else {
              /*yes! You can Upload This File ---
              - Live Preview of Selected Image ..
              */
              var filereader = new FileReader();
              filereader.onload = function(ev) {
                console.log("* - Loading User Sign Photo on Client Side ..");
                $("<%= _img_id0 %>").attr("src", ev.target.result);
              }
              filereader.readAsDataURL(_selectedPic);
            }
        });
    });
    </script>

<% // Clearfix Widget %>
<% } else if (_type == "clearfix") { %>
    <div class="clearfix <%= _class %>"></div>

<% // Date Widget - Standalone Component - Depends on Bootstrap_datepicker Library %>
<% } else if (_type == "date") { %>
    <%
    var _position = (position)?(position):("top auto");
    var _format = (format)?(format):("dd/mm/yyyy");
    var _datewidget_id = (control_id)?(control_id + "_001"):("");
    %>
    <% var _onchange = (onchange)?(' onchange="' + onchange + '" '):(' onchange="this.setAttribute(\`data-value\`, this.value);" onload="this.value=this.getAttribute(\`data-value\`);" '); %>
    <div class="<%= _class %> <%= _control_grid %>" id="<%= _datewidget_id %>" <%= _style %>> 
      <input name="<%= _name %>" type="text" class="form-control" <%= _value %> <%= _onchange %> <%= _title %> <%= _placeholder %> <%= _control_id %>> 
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-calendar"></span>
      </span> 
    </div>
    <script type="text/javascript">
    $(document).ready(function(){
        $('#' + "<%= _datewidget_id %>").datepicker({
            format: "dd/mm/yyyy",
            todayBtn: true,
            orientation: "<%= _position %>",
            autoclose: true,
            todayHighlight: true,
            toggleActive: true
        });    
    });
    </script>

<% // Submit Button %>
<% } else if (_type == "submit") { %>
    <% var _value = (value)?(value):("Submit"); %>
    <input class="<%= _class %>" type="submit" name="<%= _name %>"  <%= _title %> <%= _control_id %> <%= _value %> <%= _style %>>
<%  } %>
</div>

<% // Heading Widget %>
<% } else if (_type == "heading") { %>
<div class="<%= _label_class %> <%= _cont_grid %>"  <%= _title %> <%= _control_id %> <%= _style %>><%= _label %></div>
<% } %>



```
