```javascript
var i = new GenerateForm("#form_container");
var form = {
    form_key: "thisForm",
    action: "/apis/testing",
    method: "POST",
    caption: "Testing Simple Html Form",
    id: "mygenform",
    style: "border:2px solid red;",
    schema: [
        {
            cont_grid: [12, 6,4,3],
            label: "First Name",
            name: "fname",
            type: "text",
            placeholder: "Please, Enter First Name.",
        },
        {
            cont_grid: [12, 6,4,3],
            label: "Last Name",
            name: "lname",
            type: "text",
            placeholder: "Please, Enter Last Name."
        },
        {
            cont_grid: [12,6,4,3],
            label: "Email",
            name: "email",
            type: "text",
            placeholder: "Please, Enter Email"
        },
        {
            cont_grid: [12,6,4,3],
            label: "Mobile No.",
            name: "mobileno",
            type: "text",
            placeholder: "Please, Enter Mobile No."
        },
        {
            cont_grid: [6],
            cont_class: "",
            cont_style: "border: 1px dashed red;",
            type: "list",
            label: "Likes ?",
            name: "likes[]",
            control_id: "mylikes",
            items: ["01|Play", "02|Reading", "03|Game", "04|Hello", "05|Simple"],
            values: ["02", "03"]
        },
        {
            cont_grid: [6],
            cont_class: "",
            cont_style: "border: 1px dashed cyan;",
            type: "set",
            label: "Gender ?",
            name: "gender",
            control_id: "mygender",
            items: ["01|Male", "02|Female", "03|Other"],
        },
        {
            cont_grid: [6, 6, 4],
            label: "Gender",
            name: "gender",
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
        },
        {
            cont_grid: [12, 6, 4],
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
        },
        {
            name: "Submit",
            value: "Click",
            control_id: "formsubmit",
            control_class: "btn-primary btn-block",
            style: "",
            type: "submit"
        }
    ]
};
i.config(form);
i.injectMainForm();
i.injectFormComp();
$("#myPhoto").change(function(ev){ i.displayPhoto(ev, "#myphotoid"); })
```