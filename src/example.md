#### Examples
```javascript
// Generate a text Input Box
var i = new GenerateForm();
i.clean();
var itemdata = {
    cont_grid: [4,6],
    cont_class: "well",
    cont_style: "border:2px solid red;",
    label: "Name",
    label_grid: [2],
    control_grid: [4, 6, 6, 6],
    type: "text",
    name: "name", 
    value: "Demo",
    style: "background:cyan;",
    rows: 5,
    autocomplete: false,
    placeholder: "Please, Enter Your Name"
};
i.config(itemdata);
j = i.generate();
console.log(j);
$(form_container).append(j);
```

```javascript
// Generate a List of Input Example
var i = new GenerateForm();
i.clean();
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
i.config(itemdata);
j = i.generate();
console.log(j);
$(form_container).append(j);
```

```javascript
// Using Set Widget
var i = new GenerateForm();
i.clean();
var itemdata = {
    cont_grid: [4,6],
    cont_class: "well",
    cont_style: "",
    type: "set",
    label: "Gender ?",
    name: "gender",
    control_id: "mygender",
    items: ["01|Male", "02|Female", "03|Other"],
    value: "02"
}
i.config(itemdata);
j = i.generate();
console.log(j);
$(form_container).append(j);
```


```javascript
// Using Photo Widget
var i = new GenerateForm();
i.clean();
var itemdata = {
    cont_grid: [4,6],
    cont_class: "",
    cont_style: "",
    type: "photo",
    label: "Select Photo",
    name: "mypic",
    control_id: "myPhoto",
    img_default: "/_assets/img/elect001.png",
    img_alt: "My Photo",
    img_style: "",
    img_id: "myphotoid",
}
i.config(itemdata);
j = i.generate();
console.log(j);
$(form_container).append(j);
// Register Event to display photo as User change any though file input widget
$("#myPhoto").change(function(ev){ i.displayPhoto(ev, "#myphotoid"); })

```

