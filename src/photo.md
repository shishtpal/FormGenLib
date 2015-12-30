### Photo Widget 
```html
<%
var _img_id = (img_id)?(' id="' + img_id + '" '):("");
var _img_id0 = (img_id)?("#" + img_id):("");
var _img_alt = (img_alt)?(' alt="' + img_alt + '" '):("");
var _img_style = (img_style)?(' style="' + img_style + '" '):("");
var _img_default = (img_default)?(' src="' + img_default + '" '):("");
%>
<div class="thumbnail">
    <img class="img-thumbnail" <%= _img_id %> <%= _img_default %> data-src="holder.js/300x300" <%= _img_alt %> <%= _img_style %>>
    <div class="caption <%= _control_grid %>">
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
          * Live Preview of Selected Image ..
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
```

```javascript
var itemdata =    {
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
    },

```
