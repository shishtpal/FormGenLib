# FormGenLib
Automatically Generate awesome looking HTML form using minimal JSON options (theme Bootstrap v3)

____
> DEMO 
https://shishtpal.github.io/formgenlib/

# formgen_v1.0 : Dynamically Generate HTML Forms
____

### Input Types 
general 
checkbox
file
hidden
radio
select
textarea
text 
password


### Special Types 
List (Allow You to send a list of values)
Set (Choose just one values for a given set of values)
Photo (Upload Photo Widget)
Clearfix
Date
Heading


## Form Layouts 
> Because we are using Underscore Templating Engine,
> So, We can use Global Functions inside Templates.
> And some properties are not defined than you can check for them
> with the help of `this` special object reference Object.



### Example
* This is sample Javascript code that Generate HTML form for First Time 
    - And save to localStorage
* Next, time Form will loaded from LocalStorage
* If You want it to re-render HTML Form 
    - Then set the value LocalStorage.isClean = "false"

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
            type: "heading",
            cont_grid: [12],
            label: "Simple Hello world",
            label_class: " text-center btn-warning btn-sm",
            style: "",
            control_id: "demoworld"
        },
        {
            cont_grid: [12, 6, 4, 3],
            type: "text",
            label: "Name",
            name: "name",
            placeholder: "Your Name ?"
        },
        {
            cont_grid: [12, 6, 4, 3],
            type: "text",
            label: "Email",
            name: "email",
            placeholder: "Your Email ?",
            autocomplete: true
        },
        {
            cont_grid: [12, 6, 4, 3],
            type: "text",
            label: "Mobile No.",
            name: "mobileno",
            placeholder: "Your Mobile no. ?"

        },
        {
            type: "date",
            cont_grid: [12, 6, 4, 3],
            cont_style: "",
            label: "Admission Date",
            name: "admdate",
            control_id: "admdateID",
            style: "",
            placeholder: "01/05/2014",
            value: "05/08/1992"
        },
        {
            type: "clearfix"
        },
        {
            cont_grid: [12, 6],
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
            cont_grid: [12,6],
            cont_class: "",
            cont_style: "",
            type: "list",
            label: "Likes ?",
            name: "likes[]",
            control_id: "mylikes",
            items: ["01|Play", "02|Reading", "03|Game"],
        },
        {
            name: "Click",
            value: "Submit",
            control_id: "formsubmit",
            control_class: "btn-primary btn-block",
            style: "",
            type: "submit"
        }
    ]
};
i.config(form);
i.injectFormCompAsNew();

```




# TODO
* How to know when some variable is `undefined`
* Create a List of all input types that we want to support
* Create Layout for Generated Form 
    * How to Use Grid within Generated Form 
* Create a Schema for Each input components
* There are Three ways to solve this problem 
    - Using First form layout defined by bootstrap_v3
    - Using Second form layout defined by bootstrap_v3
    - Define form layout and then inject form components into defiend grid positions
* So far, all we want to do is generate HTML Form ..

* `onchange` event handler to Momorize form State 
* Memorize form State
* Custom Form Handler Toolbar (to reload, to re-render, to save)

