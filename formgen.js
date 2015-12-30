/*
* Developer: shishtpal
* Start: 28/12/2015
* End: __/__/____
* Built with L0ve

Name: Form Components Generator
Version: 1.0.0

*/


var GenerateForm = function(formContainerCSSPath)
{
	// reference to Container, Where we want to render our HTML Form 
	this.parent = $(formContainerCSSPath);

	// Main Form Properties (Should not be changes for Single form)
	this.form_key = "myform"; // used to store newly rendered Form into LocalStorage..
	this.action = "";
	this.method = "";
	this.caption = "";
	this.id = "";
	this.schema = [];
	// jQuery Object Reference to Form Widget
	this.form = ""

	// For Photo Upload widget
    this.knowntypes = ["image/png", "image/jpg", "image/jpeg"];
    this.max_size  = 500000;  /* 20 KB */

}

GenerateForm.prototype = {
	/* reset all properties */
	clean: function() {
		// Properties ..
		this.label = "";
		this.label_class = "";
		this.label_grid = [];
		this.control_grid = [];
		this.cont_grid = [];
		this.cont_class = "";
		this.cont_style = "";
		this.control_class = "";
		this.control_id = "";
		this.type = "";
		this.name = "";
		this.value = "";
		this.style = "";
		this.rows = "";
		this.autocomplete = "";
		this.placeholder = "";
		this.multiple = "";
		this.items = [];
		this.values = []; // used for list widget
		// photo widget options
	    this.img_default= "";
	    this.img_alt= "";
	    this.img_style= "";
	    this.img_id= "";
	    // Date widget
	    this.position = "";
		this.format = "";
	},
    /*
    * Want to Change Some Default Configuration Options 
    * Lets Inject Some Variables into this Class
    */
    config: function(object) {
        var self = this;
        $.each(object, function(key, value){
            self[key] = value;
        });
        return true;
    },

    /* photo widget */
    displayPhoto: function(ev, img_css_path) {
    	console.log(ev);
	    ev.preventDefault();
	    var _this = $(ev.currentTarget);
	    var _selectedPic = _this[0].files[0];
	    var _img_type = _selectedPic['type'];
	    var _img_size = _selectedPic['size'];

	    if ($.inArray(_img_type, this.knowntypes) < 0 ) {
	      alert("You can Upload Only JPG or PNG Images.");
	    } else if (_img_size > this.max_size) {
	      /* Image Size is more */
	      alert("You can Upload Image of Max Size 20KB.");
	    } else {
	      /*yes! You can Upload This File ---
	      * Live Preview of Selected Image ..
	      */
	      var filereader = new FileReader();
	      filereader.onload = function(ev) {
	        console.log("* - Loading User Sign Photo on Client Side ..");
	        $(img_css_path).attr("src", ev.target.result);
	      }
	      filereader.readAsDataURL(_selectedPic);
    	}
    },

    activateCallender: function() {
		$('#datetimepickerid1').datepicker({
		    format: "dd/mm/yyyy",
		    todayBtn: true,
		    orientation: "top auto",
		    autoclose: true,
		    todayHighlight: true,
		    toggleActive: true
		});
		return this;
    },

	generateGridClass: function(gridArray) {
		var _class="";
		var screens = ["col-xs-", "col-md-", "col-sm-", "col-lg-"]; 
		for(var count=0;count<gridArray.length;count++){ 
		_class += screens[count] + gridArray[count] + " "; 
		}
		return _class;
	},

	genMainForm: function() {
		var obj = this;
		var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
		with(obj||{}){
		__p+='';
		var _form_id = (id)?(id):("");
		var _form_style = (style)?(style):("");
		var _form_action = (action)?(action):("/");
		var _form_method = (method)?(method):("GET");
		var _form_label = (caption)?(caption):("");
		var _schema = (schema && $.isArray(schema))?(schema):([]);

		__p+='<form action="'+((__t=( _form_action ))==null?'':__t)+'" method="'+((__t=( _form_method ))==null?'':__t)+'" id="'+((__t=( _form_id ))==null?'':__t)+'" style="'+((__t=( _form_style ))==null?'':__t)+'" accept-charset="utf-8"><fieldset><legend>'+((__t=( _form_label ))==null?'':__t)+'</legend></fieldset></form>';		}
		return __p;
	},

	injectMainForm: function() {
		// Inject Form to Parent Container
		this.parent.append(this.genMainForm());
		// Update Form ID
		this.form = $("#" + this.id + " > fieldset");
		return this;
	},

    /* Underscore - pre-compiled Template */
    generate: function() {
    	var obj = this;
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='';
 

var _cont_grid = (cont_grid)?(this.generateGridClass(cont_grid)):("");
var _cont_class = (cont_class)?(cont_class):("");
var _cont_style = (cont_style)?(' style="' + cont_style + '" '):("");
var _label = (label)?(label):("__LABEL__");
var _label_class = (label_class)?(label_class):("");
var _type = (type)?(type):("__TYPE__");
var _name = (name)?(name):("__NAME__");
var _value = (value)?(value):("");
var _style = (style)?(' style="' + style + '" '):("");
var _placeholder = (placeholder)?(' placeholder="' + placeholder + '" '):("");
var _label_grid = (label_grid)?( this.generateGridClass(label_grid) ):("");
var _control_grid = (control_grid)?( this.generateGridClass(control_grid) ):("");
var _control_class = (control_class)?(control_class):("");
var _control_id = (control_id)?(' id="' + control_id + '" '):("");
var _control_id0 = (control_id)?("#" + control_id):("");

var _class=_control_class;
if (_type=="text") { 
_class += " form-control text";
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


__p+='\n\n';
 if (_type != "heading") { 
__p+='\n<div class="form-group '+
((__t=( _cont_class ))==null?'':__t)+
' '+
((__t=( _cont_grid ))==null?'':__t)+
'" '+
((__t=( _cont_style ))==null?'':__t)+
'>\n\n';
 // Label should not be displayed when working with "hidden", "photo", "clearfix" and "submit" data Types 
__p+='\n';
 if (_type != "hidden" && _type != "photo" && _type != "clearfix"&& _type != "submit") { 
__p+='\n    <label for="'+
((__t=( _name ))==null?'':__t)+
'" class="control-label '+
((__t=( _label_class ))==null?'':__t)+
' '+
((__t=( _label_grid ))==null?'':__t)+
'">'+
((__t=( _label ))==null?'':__t)+
'</label>\n';
 } 
__p+='\n\n';
 // When Type of Component => "text", "file", "radio", "checkbox" 
__p+='\n';
 if (_type == "text" || _type == "file" || _type == "radio" || _type == "checkbox") { 
__p+='\n    ';
 var _autocomplete = (autocomplete)?(' autocomplete="on" '):(' autocomplete="off" '); 
__p+='\n    <input type="'+
((__t=( _type ))==null?'':__t)+
'" class="'+
((__t=( _class ))==null?'':__t)+
' '+
((__t=( _control_grid ))==null?'':__t)+
'" '+
((__t=( _control_id ))==null?'':__t)+
' name="'+
((__t=( _name ))==null?'':__t)+
'" value="'+
((__t=( _value ))==null?'':__t)+
'" '+
((__t=( _placeholder ))==null?'':__t)+
' '+
((__t=( _autocomplete ))==null?'':__t)+
' '+
((__t=( _style ))==null?'':__t)+
'>\n\n';
 // Textarea widget 
__p+='\n';
 } else if (_type == "textarea") { 
__p+='\n    ';
 var _rows = (rows)?(' rows="' + rows + '" '):(' rows="5" '); 
__p+='\n    <textarea class="'+
((__t=( _class ))==null?'':__t)+
' '+
((__t=( _control_grid ))==null?'':__t)+
'" name="'+
((__t=( _name ))==null?'':__t)+
'" '+
((__t=( _control_id ))==null?'':__t)+
' '+
((__t=( _rows ))==null?'':__t)+
' '+
((__t=( _placeholder ))==null?'':__t)+
' '+
((__t=( _style ))==null?'':__t)+
'>'+
((__t=( _value ))==null?'':__t)+
'</textarea>\n\n';
 // select Widget 
__p+='\n';
 } else if (_type == "select") { 
__p+='\n    ';
 var _multiple = (multiple)?('multiple="true"'):(""); 
__p+='\n    ';
 var _items = (items)?(items):([]); 
__p+='\n\n    <select name="'+
((__t=( _name ))==null?'':__t)+
'" class="'+
((__t=( _class ))==null?'':__t)+
' '+
((__t=( _control_grid ))==null?'':__t)+
'" '+
((__t=( _control_id ))==null?'':__t)+
' '+
((__t=( _style ))==null?'':__t)+
' '+
((__t=( _multiple ))==null?'':__t)+
'>\n    ';
 for(var count=0;count<_items.length;count++) { 
__p+='\n    ';
 var item = _items[count]; 
__p+='\n    ';
 if (item[0] == "_" && item != "_") { 
__p+='\n    ';
 var _item = item.substr(1); 
__p+='\n        <optgroup label="'+
((__t=( _item ))==null?'':__t)+
'">\n    ';
 } else if (item == "_") { 
__p+='\n        </optgroup>\n    ';
 } else { 
__p+='\n    ';
 var _itemvals = item.split("|");
__p+='\n    ';
 var item1 = (_itemvals && _itemvals[0])?(_itemvals[0]):("");
__p+='\n    ';
 var item2 = (_itemvals && _itemvals[1])?(_itemvals[1]):(item1);
__p+='\n    ';
 var selected = (value && item1 && value == item1)?("selected"):(""); 
__p+='\n        <option value="'+
((__t=( item1 ))==null?'':__t)+
'" '+
((__t=( selected ))==null?'':__t)+
'>'+
((__t=( item2 ))==null?'':__t)+
'</option>\n    ';
  } 
__p+='\n    ';
 } 
__p+='\n    </select>\n\n';
 // List widget 
__p+='\n';
 } else if (_type == "list") { 
__p+='\n    ';
 var _items = (items)?(items):([]); 
__p+='\n    ';
 var _values = (values)?(values):([]); 
__p+='\n    ';
 if (_items.length != 0) { 
__p+='\n    <div class="list-group" '+
((__t=( _control_id ))==null?'':__t)+
'>\n    ';
 for(var count=0;count<_items.length;count++) { 
__p+='\n        ';
 var item = _items[count]; 
__p+='\n\n        ';
 var _itemvals = item.split("|"); 
__p+='\n        ';
 var item1 = (_itemvals && _itemvals[0])?(_itemvals[0]):(""); 
__p+='\n        ';
 var item2 = (_itemvals && _itemvals[1])?(_itemvals[1]):(item1); 
__p+='\n        ';
 var valindex = $.inArray(item1, _values); 
__p+='\n        ';
 var checked = (valindex != -1 && _values[valindex] == item1)?("checked"):(""); 
__p+='\n\n        <div class="'+
((__t=( _class ))==null?'':__t)+
'">\n            <input type="checkbox" name="'+
((__t=( _name ))==null?'':__t)+
'" value="'+
((__t=( item1 ))==null?'':__t)+
'" '+
((__t=( checked ))==null?'':__t)+
'><span> '+
((__t=( item2 ))==null?'':__t)+
'</span>\n        </div>\n    ';
   } 
__p+='\n    </div>\n    ';
 } 
__p+='\n\n';
 // Set Widget 
__p+='\n';
 } else if (_type == "set") { 
__p+='\n    ';
 var _items = (items)?(items):([]); 
__p+='\n    ';
 if (_items.length) { 
__p+='\n    <div class="list-group" '+
((__t=( _control_id ))==null?'':__t)+
'>\n    ';
 for(var count=0;count<_items.length;count++) { 
__p+='\n        ';
 var item = _items[count]; 
__p+='\n\n        ';
 var _itemvals = item.split("|"); 
__p+='\n        ';
 var item1 = (_itemvals && _itemvals[0])?(_itemvals[0]):(""); 
__p+='\n        ';
 var item2 = (_itemvals && _itemvals[1])?(_itemvals[1]):(item1); 
__p+='\n        ';
 var checked = (_value == item1)?("checked"):(""); 
__p+='\n\n        <div class="'+
((__t=( _class ))==null?'':__t)+
'">\n            <input type="radio" name="'+
((__t=( _name ))==null?'':__t)+
'" value="'+
((__t=( item1 ))==null?'':__t)+
'" '+
((__t=( checked ))==null?'':__t)+
'><span> '+
((__t=( item2 ))==null?'':__t)+
'</span>\n        </div>\n    ';
   } 
__p+='\n    </div>\n    ';
 } 
__p+='\n\n';
 // photo Widget 
__p+='\n';
 } else if (_type == "photo") { 
__p+='\n    ';

    var _img_id = (img_id)?(' id="' + img_id + '" '):("");
    var _img_id0 = (img_id)?("#" + img_id):("");
    var _img_alt = (img_alt)?(' alt="' + img_alt + '" '):("");
    var _img_style = (img_style)?(' style="' + img_style + '" '):("");
    var _img_default = (img_default)?(' src="' + img_default + '" '):("");
    
__p+='\n    <div class="thumbnail">\n        <img class="img-thumbnail" '+
((__t=( _img_id ))==null?'':__t)+
' '+
((__t=( _img_default ))==null?'':__t)+
' data-src="holder.js/300x300" '+
((__t=( _img_alt ))==null?'':__t)+
' '+
((__t=( _img_style ))==null?'':__t)+
'>\n        <div class="caption '+
((__t=( _control_grid ))==null?'':__t)+
'">\n            <input name="'+
((__t=( _name ))==null?'':__t)+
'" type="file" class="'+
((__t=( _class ))==null?'':__t)+
'" '+
((__t=( _control_id ))==null?'':__t)+
' '+
((__t=( _style ))==null?'':__t)+
'>\n            <h4>'+
((__t=( _label ))==null?'':__t)+
' <span class="badge btn-primary '+
((__t=( _label_class ))==null?'':__t)+
' '+
((__t=( _label_grid ))==null?'':__t)+
'"></span></h4>\n        </div>\n    </div>\n    <script type="text/javascript">\n    $(document).ready(function(){\n        $("'+
((__t=( _control_id0 ))==null?'':__t)+
'").change(function(ev){\n            console.log(ev);\n            ev.preventDefault();\n            var knowntypes = ["image/png", "image/jpg", "image/jpeg"];\n            var max_size  = 500000;  /* 500 KB */\n            var _this = $(ev.currentTarget);\n            var _selectedPic = _this[0].files[0];\n            var _img_type = _selectedPic[\'type\'];\n            var _img_size = _selectedPic[\'size\'];\n\n            if ($.inArray(_img_type, knowntypes) < 0 ) {\n              alert("You can Upload Only JPG or PNG Images.");\n            } else if (_img_size > max_size) {\n              /* Image Size is more */\n              alert("You can Upload Image of Max Size 500KB.");\n            } else {\n              /*yes! You can Upload This File ---\n              - Live Preview of Selected Image ..\n              */\n              var filereader = new FileReader();\n              filereader.onload = function(ev) {\n                console.log("* - Loading User Sign Photo on Client Side ..");\n                $("'+
((__t=( _img_id0 ))==null?'':__t)+
'").attr("src", ev.target.result);\n              }\n              filereader.readAsDataURL(_selectedPic);\n            }\n        });\n    });\n    </script>\n\n';
 // Clearfix Widget 
__p+='\n';
 } else if (_type == "clearfix") { 
__p+='\n    <div class="clearfix '+
((__t=( _class ))==null?'':__t)+
'"></div>\n\n';
 // Date Widget - Standalone Component - Depends on Bootstrap_datepicker Library 
__p+='\n';
 } else if (_type == "date") { 
__p+='\n    ';

    var _position = (position)?(position):("top auto");
    var _format = (format)?(format):("dd/mm/yyyy");
    var _datewidget_id = (control_id)?(control_id + "_001"):("");
    
__p+='\n    <div class="'+
((__t=( _class ))==null?'':__t)+
' '+
((__t=( _control_grid ))==null?'':__t)+
'" id="'+
((__t=( _datewidget_id ))==null?'':__t)+
'" '+
((__t=( _style ))==null?'':__t)+
'> \n      <input name="'+
((__t=( _name ))==null?'':__t)+
'" type="text" class="form-control" value="'+
((__t=( _value ))==null?'':__t)+
'" '+
((__t=( _placeholder ))==null?'':__t)+
' '+
((__t=( _control_id ))==null?'':__t)+
'> \n      <span class="input-group-addon">\n        <span class="glyphicon glyphicon-calendar"></span>\n      </span> \n    </div>\n    <script type="text/javascript">\n    $(document).ready(function(){\n        $(\'#\' + "'+
((__t=( _datewidget_id ))==null?'':__t)+
'").datepicker({\n            format: "dd/mm/yyyy",\n            todayBtn: true,\n            orientation: "'+
((__t=( _position ))==null?'':__t)+
'",\n            autoclose: true,\n            todayHighlight: true,\n            toggleActive: true\n        });    \n    });\n    </script>\n\n';
 // Submit Button 
__p+='\n';
 } else if (_type == "submit") { 
 	    var _value = (value != "")?(value):("Submit");
__p+='\n    <input class="'+
((__t=( _class ))==null?'':__t)+
'" type="submit" name="'+
((__t=( _name ))==null?'':__t)+
'" '+
((__t=( _control_id ))==null?'':__t)+
' value="'+
((__t=( _value ))==null?'':__t)+
'" '+
((__t=( _style ))==null?'':__t)+
'>\n';
  } 
__p+='\n</div>\n\n';
 // Heading Widget 
__p+='\n';
 } else if (_type == "heading") { 
__p+='\n<div class="'+
((__t=( _label_class ))==null?'':__t)+
' '+
((__t=( _cont_grid ))==null?'':__t)+
'" '+
((__t=( _control_id ))==null?'':__t)+
' '+
((__t=( _style ))==null?'':__t)+
'>'+
((__t=( _label ))==null?'':__t)+
'</div>\n';
 } 
__p+='\n';
}
return __p;
	},

	/* Inject Form Components */
	injectFormComp: function() {
		var self = this;
		for(var count=0;count<this.schema.length;count++) {
			var schemaChild = this.schema[count];
			this.clean();
			this.config(schemaChild);
			this.form.append(this.generate());
		}
		// Store Rendered Form to Localstorage ..
		localStorage.setItem(this.form_key, this.parent.html());
		return this;
	},

	/* Inject Form Components as New one */
	injectFormCompAsNew: function() {
		var self = this;
		// Store Rendered Form to Localstorage ..
		if (localStorage.isClean != undefined && localStorage.isClean == 'true') {
			// No need to process
			console.log("* -  Loading Form from LocalStorage");
			this.parent.append(localStorage[this.form_key + "_asnew"]);
		} else {
			console.log("* - Injecting Main Form");
			this.injectMainForm();
			for(var count=0;count<this.schema.length;count++) {
				var schemaChild = this.schema[count];
				// Remove value for Input Box and values for List Widget ...
				schemaChild.value = "";
				schemaChild.values = [];
				// init Component Properties 
				this.clean();
				this.config(schemaChild);
				this.form.append(this.generate());
			}

			localStorage.setItem("isClean", "true");
			// re-render Form
			localStorage.setItem(this.form_key+"_asnew", this.parent.html());
		}
		return this;
	}


}

