## List Data Type Widget
* Two cases
    - Use a select widget with Multiple attribute
    - Use a list of Checkbox

* Template for List of Checkbox
```html 
    <% var _items = (items)?(items):([]); %>
    <% var _values = (values)?(values):([]); %>
    <% if (_items.length) { %>
    <div class="list-group" <%= _control_id %>>
    <% for(var count=0;count<_items.length;count++) { %>
        <% var item = _items[count]; %>

        <% var _itemvals = item.split("|"); %>
        <% var item1 = (_itemvals && _itemvals[0])?(_itemvals[0]):(""); %>
        <% var item2 = (_itemvals && _itemvals[1])?(_itemvals[1]):(item1); %>
        <% var valindex = $.inArray(item1, _values); %>
        <% var checked = (valindex != -1 && _values[valindex] == item1)?("checked"):(""); %>

        <div class="<%= _class %>">
            <input type="checkbox" name="<%= _name %>" value="<%= item1 %>" <%= checked %>><span> <%= item2 %></span>
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
    type: "list",
    label: "Likes ?",
    name: "likes[]",
    control_id: "mylikes",
    items: ["01|Play", "02|Reading", "03|Game"],
    values: ["02", "03"]
}
```
