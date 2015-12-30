
## Date Widget 
```html
<%
var _position = (position)?(position):("top auto");
var _format = (format)?(format):("dd/mm/yyyy");
var _datewidget_id = (control_id)?(control_id0 + "_001"):("");
%>
<div class="<%= _class %> <%= _control_grid %>" id="<%= _datewidget_id %>" <%= _style %>> 
  <input name="<%= _name %>" type="text" class="form-control" value="<%= _value %>" <%= _placeholder %> <%= _control_id %>> 
  <span class="input-group-addon">
    <span class="glyphicon glyphicon-calendar"></span>
  </span> 
</div>
<script type="text/javascript">
$(document).ready(function(){
    $("<%= _datewidget_id %>").datepicker({
        format: "dd/mm/yyyy",
        todayBtn: true,
        orientation: "<%= _position %>",
        autoclose: true,
        todayHighlight: true,
        toggleActive: true
    });    
});
</script>
```

```javascript
var itemdata = {
    cont_grid: [12, 6, 4, 3],
    cont_class: "",
    cont_style: "",
    position: "auto top",
    format: "dd/mm/yyyy",
    name: "admdate",
    value: "12/10/2015",
    label: "Admission Date",
    label_class: "",
    label_grid: [],
    type: "date",
    rows: "",
    placeholder: "Admission Date dd/mm/yyyy",
    autocomplete: false,
    control_id: "admdateID",
    control_class: "",
    control_grid: [],
    style: "border:2px solid red;"
}


// Example
var itemdata = {
            type: "date",
            cont_grid: [12, 6, 4, 3],
            cont_style: "background: cyan;",
            label: "Admission Date",
            name: "admdate",
            control_id: "admdateID",
            style: "border:2px solid red;",
            placeholder: "01/05/2014",
            value: "05/08/1992"
        },

```
