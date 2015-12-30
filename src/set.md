## Set data Type widget 
* Two cases
    - Use a select widget
    - Use a list of radio box

* Template for List of Radio Input box
```html 
    <% var _items = (items)?(items):([]); %>
    <% if (_items.length) { %>
    <div class="list-group" <%= _control_id %>>
    <% for(var count=0;count<_items.length;count++) { %>
        <% var item = _items[count]; %>

        <% var _itemvals = item.split("|"); %>
        <% var item1 = (_itemvals && _itemvals[0])?(_itemvals[0]):(""); %>
        <% var item2 = (_itemvals && _itemvals[1])?(_itemvals[1]):(item1); %>
        <% var checked = (_value == item1)?("checked"):(""); %>

        <div class="<%= _class %>">
            <input type="radio" name="<%= _name %>" value="<%= item1 %>" <%= checked %>><span> <%= item2 %></span>
        </div>
    <%   } %>
    </div>
    <% } %>
```

```javascript
var itemdata = {
    cont_grid: [4,6],
    cont_class: "",
    cont_style: "",
    type: "set",
    label: "Like ?",
    name: "like",
    control_id: "mylikes",
    items: ["01|Play", "02|Reading", "03|Game"],
    value: "02"
}
```
