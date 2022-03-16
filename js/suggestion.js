var ourCustomModal = `<!-- The modal -->
<div
class="modal fade"
id="error_warning"
tabindex="-1"
role="dialog"
aria-labelledby="modalLabelSmall"
aria-hidden="true">
<div class="modal-dialog modal-sm">
    <div class="modal-content">

        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title text-center cma_default" id="modalLabelSmall"><span><i class="fa fa-exclamation-triangle"></i></span>Warning</h4>
        </div>

        <div class="modal-body">
           <p class="cma_default" id="modalDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>

    </div>
</div>
</div>`;
var apt_modal = `<div class="container">
<!-- Trigger the modal with a button -->
<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#apt-modal">Open Modal</button>

<!-- Modal -->
<div class="modal fade" id="apt-modal" role="dialog">
  <div class="modal-dialog modal-sm">
  
    <!-- Modal content-->
    <div class="modal-content">
        <div class="modal-header atp_modal_header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title text-center cma_warning" id="modalLabelSmall"><span><i class="fa fa-exclamation-triangle"></i></span>Warning</h4>
        </div>
        <div class="modal-body">
            <p class="atp-box apt_descripton">The address you entered was found but more information is needed (such as an apartment, suite, or box number) to match to a specific address.</p>
            <br>
            <div class="form-group apt_info">
                <div class="col-12">
                    <select
                        id="apt-type"
                        name="apt-type"
                        class="form-control border apt-type required form-control_atp"
                        data-error="Please select Apt Type">
                        <option value="" selected="">Type Of Apartment</option>
                        <option value="APT">Apt</option>
                        <option value="UNIT">Unit</option>
                        <option value="SUITE">Suite</option>
                        <option value="BOX">Box</option>
                    </select>
                </div>
                <br>
                <div class="col-12">
                    <input
                        type="text"
                        class="form-control border apt-number required form-control_atp"
                        name="apt-number"
                        id="apt-number"
                        placeholder="XXX"
                        data-error="Please provide Apt Number">
                </div>
            </div>

        </div>
        <div class="modal-footer apt_footer">
            <button id="apt-button" type="button" class="btn btn-default btn_warning_ok" data-dismiss="modal" targetted-class="">OK</button>
        </div>
    </div>
    
  </div>
</div>
</div>`;
var set_zip_suggestion_after = function (className=[]){
    //<ul id="old_zip_code_ul" class="suggestion" style="display: none;"></ul>
    suggestion_ul = '<ul id="customId" class="className suggestion datasik_suggestion_list" style="display: none;"></ul>';
    for(i=0;i<className.length; i++){
        ul = suggestion_ul.replace('className', className[i]+"_ul").replace('customId', className[i]+"_ul");
        $("."+className[i]).after(ul);
    }
}
var set_street_suggestion_after = function (className=[]){
    //<ul id="old_zip_code_ul" class="suggestion" style="display: none;"></ul>
    suggestion_ul = `<!-- <div class="old-street-validation sign-left display_none">
                        <i class="fa fa-times"></i>
                    </div>-->
                    <div class="className-validation sign-right display_none">
                                                                            <i class="fa fa-check"></i>
                                                                        </div> 
                    <ul id="customId" class="className street datasik_suggestion_list" style="display:none;">
                        <li class="street-result">
                            RUSH CENTER, KS</li>
                        <li class="street-result">RUSH CENTER, Ks</li>
                    </ul>`;
    for(i=0;i<className.length; i++){
        ul = suggestion_ul.replace('className', className[i]+"_ul").replace('customId', className[i]+"_ul");
        $("."+className[i]).after(ul);
    }
}
stateJson = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}
var apiUrl = "https://addressapi.org/";
var apt_type = [
    "apt", "bldg",
    "fl", "ste",
    "unit", "rm",
    "dept", "apartment",
    "building", "floor",
    "suite", "unit",
    "room", "depertment",
    "box", "spc", "space",
    "lot", "trlr", "trailer",
    "basement", "bsmt", "hanger",
    "hngr", "lobby", "lbby",
    "front", "frnt",
    "stop"
];

var street_info_double_check = false;
var is_selected_suggestion = false;

var form_info = {
    old_zip : {
        id:".old_zip_code",
        value: ""
    },
    old_city:{
        id: ".old_city",
        value: ""
    },
    old_state:{
        id: ".old_state",
        value: ""
    },
    old_street:{
        id: ".old_street_address",
        value: "",
        attr:{
            name:"data-search",
            value: "true"
        }
    },
    new_zip:{
        id: ".new_zip_code",
        value: ""
    },
    new_city:{
        id: ".new_city",
        value: ""
    },
    new_state:{
        id: ".new_state",
        value: ""
    },
    new_street:{
        id: ".new_street_address",
        value: "",
        attr:{
            name:"data-search",
            value: "true"
        }
    }
}

var othre_related_info = {
    old:{
        zip_suggestion_ul:{
            id:"#old_zip_code_ul",
            value: "",
        },
        street_suggestion_ul:{
            id:"#old_street_address_ul",
            value: "",
        },
        street_addres_li_under_ul:{
            id:"#old_street_address_ul li",
            value:"",
        },
        zip_code_suggesstion_li_under_ul:{
            id:"#old_zip_code_ul li",
            value:""
        }
    },
    new:{
        zip_suggestion_ul:{
            id:"#new_zip_code_ul",
            value: "",
        },
        street_suggestion_ul:{
            id:"#new_street_address_ul",
            value: "",
        },
        street_addres_li_under_ul:{
            id:"#new_street_address_ul li",
            value:"",
        },
        zip_code_suggesstion_li_under_ul:{
            id:"#new_zip_code_ul li",
            value:""
        }
    },
    modal:{
        id:'#error_warning',
        error:{
           remove_class:'cma_warning',
           add_class:'cma_default', 
        },
        warning:{
            remove_class:'cma_default',
            add_class:'cma_warning', 
        },
        title:{
            id:'#modalLabelSmall',
            warningHtml:'<i class="fa fa-exclamation-triangle"></i></span>Warning</h4>',
            errorHtml:'<i class="fa fa-exclamation-triangle"></i></span>Address Error</h4>'
        },
        description:{
            id:"#modalDescription",
        }
    },
    icon:{
        errorIcon :{
            html: '<i class="fa fa-times"></i>',
            parentClass :'sign-left',
        },
        correctIcon:{
            html:'<i class="fa fa-check"></i>',
            parentClass: 'sign-right',
        },
        oldStreetValidatorClass:'.old_street_address_ul-validation',
        newStreetValidatorClass:'.new_street_address_ul-validation',
    }
}

function update_value_for_all(){

    for(var element in form_info){
        form_info[element].value = $(form_info[element].id).val();
        if(typeof form_info[element].attr !== 'undefined'){
            form_info[element].attr.value = $(form_info[element].id).attr(form_info[element].attr.name);
        }
    }
}

function update_form_info(){
    for(var element in form_info){
        $(form_info[element].id).on('blur change click dblclick error focus focusin focusout hover keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup resize scroll select submit', function(){
            update_value_for_all();
        });
    }
}

$(function(){
    update_form_info();
    $("body").on('scroll', function(){
        update_value_for_all();
    });
});

function getZipCode(zip_id){
    value = $(zip_id).val();
    if(value.length == 5){
        data = {
            status: true,
            id: zip_id,
            value: value
        }
        
        return data;
    }

    return {status:false};
}

function get_data_from_server(url, endPoint="", data={}, onSuccess, onError){
    var request = $.ajax({
        url:url+endPoint,
        method: "GET",
        data:data,
        dataType: "json"
    });

    request.done(onSuccess);
    request.fail(onError);
}

var verify_street_address_with_usps = function(street, city, state, zip, verify_endpoint, succes, error){
    verify_data = {
        zip:zip,
        city:city,
        state:state,
        street:street
    }
    verify_endpoint = "street-address/verify/"
    get_data_from_server(apiUrl, verify_endpoint, verify_data, succes, error);
}

var onOldZipCodeFetchingSuccess = function(data){
    
    if(data.status == "ok"){
        list = ""
        data.data.forEach(element => {
            list += '<li zipdata='+btoa(JSON.stringify(element))+' class="result">'+element.ZipCode+' <span class="secondary-text">&nbsp;- '+element.City +', '+element.StateCode+'</span></li>'
            $(othre_related_info.old.zip_suggestion_ul.id).html(list);
        });
        $(othre_related_info.old.zip_suggestion_ul.id).css("display", "block");
    }

    $(othre_related_info.old.zip_code_suggesstion_li_under_ul.id).click(function(){
        zipData = $(this).attr("zipdata");
        zipInfoObject = JSON.parse(atob(zipData));
        $(form_info.old_city.id).val(zipInfoObject.City);
        $(form_info.old_state.id).val(zipInfoObject.StateCode);
        $(othre_related_info.old.zip_suggestion_ul.id).css("display", "none");
        $(form_info.old_state.id).css(
            'color',
            $(this).val() === ''
                ? '#999'
                : '#555'
        );
    });
}

var onNewZipCodeFetchingSuccess = function(data){
    
    if(data.status == "ok"){
        list = ""
        data.data.forEach(element => {
            list += '<li zipdata='+btoa(JSON.stringify(element))+' class="result">'+element.ZipCode+' <span class="secondary-text">&nbsp;- '+element.City +', '+element.StateCode+'</span></li>';
            
        });
        $(othre_related_info.new.zip_suggestion_ul.id).html(list);
        $(othre_related_info.new.zip_suggestion_ul.id).css("display", "block");
    }

    $(othre_related_info.new.zip_code_suggesstion_li_under_ul.id).click(function(){
        zipData = $(this).attr("zipdata");
        zipInfoObject = JSON.parse(atob(zipData));
        $(form_info.new_city.id).val(zipInfoObject.City);
        $(form_info.new_state.id).val(zipInfoObject.StateCode);
        $(othre_related_info.new.zip_suggestion_ul.id).css("display", "none");
        $(form_info.new_state.id).css(
            'color',
            $(this).val() === ''
                ? '#999'
                : '#555'
        );
    });
}

var onOldZipCodeFetchingError = function(xhr, msg){
    // console.log(msg);
}

var onNewZipCodeFetchingError = function(xhr, msg){
    // console.log(msg);
}

var onOldStreetFetchingSuccess = function(data){
    if(data.status == 'ok'){
        list ="";
        data.data.forEach(element=>{
            list += '<li class="street-result" streetdata="'+element.toUpperCase()+'"> '+element.toUpperCase()+'</li>'
        });
        if(data.data.length <=0){
            $(othre_related_info.old.street_suggestion_ul.id).css("display", "none");
            return false;
        }
        $(othre_related_info.old.street_suggestion_ul.id).html(list);
        $(othre_related_info.old.street_suggestion_ul.id).css("display", "block");
    }

    $(othre_related_info.old.street_addres_li_under_ul.id).click(function(){
        is_selected_suggestion = true;
        selected_street_value = $(othre_related_info.old.street_addres_li_under_ul.id).attr("streetdata");
        $(othre_related_info.old.street_suggestion_ul.id).css("display", "none");
        form_info.old_street.value = selected_street_value;
        $(form_info.old_street.id).val(form_info.old_street.value);
        $(form_info.old_street.id).attr(form_info.old_street.attr.name, "false");
        setTimeout(trigger_old_address_validator(), 200);
    });
}

var onOldStreetFetchingError = function(xhr, msg){
    // console.log("errror: "+msg);
}

var onNewStreetFetchingSuccess = function(data){
    if(data.status == 'ok'){
        list ="";
        data.data.forEach(element=>{
            list += '<li class="street-result" streetdata="'+element.toUpperCase()+'"> '+element.toUpperCase()+'</li>'
        });
        if(data.data.length <=0){
            $(othre_related_info.new.street_suggestion_ul.id).css("display", "none");
            return false;
        }
        $(othre_related_info.new.street_suggestion_ul.id).html(list);
        $(othre_related_info.new.street_suggestion_ul.id).css("display", "block");
    }

    $(othre_related_info.new.street_addres_li_under_ul.id).click(function(){
        is_selected_suggestion = true;
        selected_street_value = $(othre_related_info.new.street_addres_li_under_ul.id).attr("streetdata");
        $(othre_related_info.new.street_suggestion_ul.id).css("display", "none");
        form_info.new_street.value = selected_street_value;
        $(form_info.new_street.id).val(form_info.new_street.value);
        $(form_info.new_street.id).attr(form_info.new_street.attr.name, "false");
        setTimeout(trigger_new_address_validator(),200);
    });
}

var onNewStreetFetchingError = function(xhr, msg){
    // console.log("errror: "+msg);
}

var onOldStreetValidationSuccess = function(response){
    $(form_info.old_street.id).attr(form_info.old_street.attr.name, "false")
    form_info.old_street.attr.value = "false";
    $(form_info.old_street.id).val(response.full_address);
    selected_old_street_sddress = response.full_address;
    parts_of_address = selected_old_street_sddress.toLowerCase().split(" ");
    is_there_apt = false;
    for(i=3; i<parts_of_address.length; i++){
        if((apt_type.indexOf(parts_of_address[i]) != -1) ){
            is_there_apt = true;
            
        }
    }
    if((is_there_apt === false) && ($(form_info.old_street.id).attr('double-checked') == "false")){
        var detected_address_id = form_info.old_street.id;
        $("#apt-button").attr("targetted-class", "old_street_address");
        var current_apt_modal_heading = $('.cma_warning').text();
        var current_apt_modal_description =  $('.apt_descripton').text();
        $('.cma_warning').text("Double Checking Your Old Addresss");
        $('.apt_descripton').text("Do you have apt/suite/unit or any other more info related to this address?");
        $('.apt_info').addClass('display_none');
        answer_button = `<div class="form-group double_check_answer">
                            <div class="col-sm-12 text-center">
                            <button id="apt-answer-yes" type="button" class="btn btn-default" onclick="" targetted-class="">Yes</button>
                            <button id="apt-answer-no" type="button" class="btn btn-default" data-dismiss="modal" targetted-class="">No</Button>
                            </div>

                        </div>`;
        if($('.double_check_answer').length < 1){
            $('.apt_info').before(answer_button);
        }
        
        $('#apt-modal').modal({
            show: true
        });
        street_info_double_check = true;
        $('#apt-answer-yes').click(function(){
            $(this).addClass('btn-success');
            $(form_info.new_street.id).attr('double-checked', 'false')
            $('.apt_info').removeClass('display_none');
        });
        $('#apt-answer-no').click(function(){
            
            $('.cma_warning').text(current_apt_modal_heading);
            $('.apt_descripton').text(current_apt_modal_description);
            $('.apt_info').removeClass('display_none');
            $('#apt-modal').modal("hide");
            $(form_info.new_street.id).attr('double-checked', 'true')
            $('.double_check_answer').remove();
        });
        
        
    }
    $(othre_related_info.icon.oldStreetValidatorClass).html(othre_related_info.icon.correctIcon.html);
    $(othre_related_info.icon.oldStreetValidatorClass).addClass(othre_related_info.icon.correctIcon.parentClass);
    $(othre_related_info.icon.oldStreetValidatorClass).removeClass(othre_related_info.icon.errorIcon.parentClass+" display_none");

}

var onOldStreetValidationError = function(xhr, msg){
    $(form_info.old_street.id).attr('is-validated', 'false');
    $(othre_related_info.icon.oldStreetValidatorClass).html(othre_related_info.icon.errorIcon.html);
    $(othre_related_info.icon.oldStreetValidatorClass).addClass(othre_related_info.icon.errorIcon.parentClass);
    $(othre_related_info.icon.oldStreetValidatorClass).removeClass(othre_related_info.icon.correctIcon.parentClass+" display_none");
    if (xhr.responseJSON.status == "warning"){
        $(form_info.old_street.id).val(xhr.responseJSON.Address);
        $(othre_related_info.modal.title.id).html(othre_related_info.modal.title.warningHtml);
        $(othre_related_info.modal.title.id).addClass(othre_related_info.modal.warning.add_class).removeClass(othre_related_info.modal.warning.remove_class);
        $(othre_related_info.modal.description.id).addClass(othre_related_info.modal.warning.add_class).removeClass(othre_related_info.modal.warning.remove_class);
        $(othre_related_info.modal.description.id).text(xhr.responseJSON.Description);
        $("#apt-button").attr("targetted-class", "old_street_address");
        $('#apt-modal').modal({
            show: true
        });
        // alert(xhr.responseJSON.Description);
    }else{
        response = xhr.responseJSON;
        $(othre_related_info.modal.title.id).html(othre_related_info.modal.title.errorHtml);
        $(othre_related_info.modal.title.id).addClass(othre_related_info.modal.error.add_class).removeClass(othre_related_info.modal.error.remove_class);
        $(othre_related_info.modal.description.id).addClass(othre_related_info.modal.error.add_class).removeClass(othre_related_info.modal.error.remove_class);
        $(othre_related_info.modal.description.id).text(response.Description);
        $(form_info.old_street.id).attr(form_info.old_street.attr.name, "true");
        form_info.old_street.attr.value =$(form_info.old_street.id).attr(form_info.old_street.attr.name);
        $(othre_related_info.modal.description.id).val("The address you entered not found in USPS system");
        $('#error_warning').modal({
            show: true
        });
    }
}

var onNewStreetValidationSuccess = function(response){
    $(form_info.new_street.id).attr(form_info.new_street.attr.name, "false")
    form_info.new_street.attr.value = "false";
    $(form_info.new_street.id).val(response.full_address);
    selected_new_street_sddress = response.full_address;
    parts_of_address = selected_old_street_sddress.toLowerCase().split(" ");
    is_there_apt = false;
    for(i=3; i<parts_of_address.length; i++){
        if((apt_type.indexOf(parts_of_address[i]) != -1) ){
            is_there_apt = true;
            
        }
    }
    if((is_there_apt === false) && ($(form_info.old_street.id).attr('double-checked') == "false")){
        var detected_address_id = form_info.old_street.id;
        $("#apt-button").attr("targetted-class", "new_street_address");
        var current_apt_modal_heading = $('.cma_warning').text();
        var current_apt_modal_description =  $('.apt_descripton').text();
        $('.cma_warning').text("Double Checking Your New Addresss");
        $('.apt_descripton').text("Do you have apt/suite/unit or any other more info related to this address?");
        $('.apt_info').addClass('display_none');
        answer_button = `<div class="form-group double_check_answer">
                            <div class="col-sm-12 text-center">
                            <button id="apt-answer-yes" type="button" class="btn btn-default" onclick="" targetted-class="">Yes</button>
                            <button id="apt-answer-no" type="button" class="btn btn-default" data-dismiss="modal" targetted-class="">No</Button>
                            </div>

                        </div>`;
        
        if($('.double_check_answer').length < 1){
            $('.apt_info').before(answer_button);
        }
        
        
        $('#apt-modal').modal({
            show: true
        });
        street_info_double_check = true;
        $('#apt-answer-yes').click(function(){
            $(this).addClass('btn-success');
            $(form_info.new_street.id).attr('double-checked', 'false')
            $('.apt_info').removeClass('display_none');
        });
        $('#apt-answer-no').click(function(){
            $('.double_check_answer').remove();
            $('.cma_warning').text(current_apt_modal_heading);
            $('.apt_descripton').text(current_apt_modal_description);
            $('.apt_info').removeClass('display_none');
            $('#apt-modal').modal("hide");
            $(form_info.new_street.id).attr('double-checked', 'true')
        });
        
        
    }
    $(othre_related_info.icon.newStreetValidatorClass).html(othre_related_info.icon.correctIcon.html);
    $(othre_related_info.icon.newStreetValidatorClass).addClass(othre_related_info.icon.correctIcon.parentClass);
    $(othre_related_info.icon.newStreetValidatorClass).removeClass(othre_related_info.icon.errorIcon.parentClass+" display_none");

}

var onNewStreetValidationError = function(xhr, msg){
    $(form_info.old_street.id).attr('is-validated', 'false');
    $(othre_related_info.icon.newStreetValidatorClass).html(othre_related_info.icon.errorIcon.html);
    $(othre_related_info.icon.newStreetValidatorClass).addClass(othre_related_info.icon.errorIcon.parentClass);
    $(othre_related_info.icon.newStreetValidatorClass).removeClass(othre_related_info.icon.correctIcon.parentClass+" display_none");
    if (xhr.responseJSON.status == "warning"){
        $(form_info.new_street.id).val(xhr.responseJSON.Address);
        $(othre_related_info.modal.title.id).html(othre_related_info.modal.title.warningHtml);
        $(othre_related_info.modal.title.id).addClass(othre_related_info.modal.warning.add_class).removeClass(othre_related_info.modal.warning.remove_class);
        $(othre_related_info.modal.description.id).addClass(othre_related_info.modal.warning.add_class).removeClass(othre_related_info.modal.warning.remove_class);
        $(othre_related_info.modal.description.id).text(xhr.responseJSON.Description);
        $("#apt-button").attr("targetted-class", "new_street_address");
        $('#apt-modal').modal({
            show: true
        });
        // alert(xhr.responseJSON.Description);
    }else{
        response = xhr.responseJSON;
        $(othre_related_info.modal.title.id).html(othre_related_info.modal.title.errorHtml);
        $(othre_related_info.modal.title.id).addClass(othre_related_info.modal.error.add_class).removeClass(othre_related_info.modal.error.remove_class);
        $(othre_related_info.modal.description.id).addClass(othre_related_info.modal.error.add_class).removeClass(othre_related_info.modal.error.remove_class);
        $(othre_related_info.modal.description.id).text(response.Description);
        $(form_info.old_street.id).attr(form_info.old_street.attr.name, "true");
        form_info.old_street.attr.value =$(form_info.old_street.id).attr(form_info.old_street.attr.name);
        $(othre_related_info.modal.description.id).val("The address you entered not found in USPS system");
        $('#error_warning').modal({
            show: true
        });
    }
}

var get_street_address = function(city, state, zip, street, onSuccess, onError){
    street_array = street.split(" ");
    final_array = [];
    for(i=0;i<street_array.length;i++){
        if(street_array[i].length > 0){
            final_array.push(street_array[i]);
        }
    }
    street_address_for_query = final_array.join("+");
    street_data = {
        zip:zip,
        city:city,
        state:state,
        street:street_address_for_query
    }
    street_endpoint = "street-address/search/"
    
    get_data_from_server(apiUrl, street_endpoint,street_data, onSuccess, onError);
}

var selected_old_street_sddress = ''
var selected_new_street_sddress = ''

var trigger_old_street_address_suggestion = function(){
    old_street = form_info.old_street.value;
    old_zip_code = form_info.old_zip.value;
    old_city = form_info.old_city.value;
    old_state = form_info.old_state.value;
    // data_search = Boolean($(old_street_address_id).attr("data-search"));
    if((form_info.old_street.attr.value === "true") && (old_street.length >= 2) && (old_zip_code.length == 5) && (old_city.length > 3) && (old_state.length == 2)){
        get_street_address(old_city, old_state, old_zip_code, old_street, onOldStreetFetchingSuccess, onOldStreetFetchingError)
    }if((form_info.old_street.attr.value === "false") && (old_street.length >= 2) && (old_zip_code.length == 5) && (old_city.length > 3) && (old_state.length == 2) && (form_info.old_street.value.toLowerCase().indexOf(selected_old_street_sddress.toLowerCase()) === -1)){
        get_street_address(old_city, old_state, old_zip_code, old_street, onOldStreetFetchingSuccess, onOldStreetFetchingError)
    }else{
        $(othre_related_info.old.street_suggestion_ul.id).css("display", "none");
    }
}

var trigger_new_street_address_suggestion = function(){
    new_street = form_info.new_street.value;
    new_zip_code = form_info.new_zip.value;
    new_city = form_info.new_city.value;
    new_state = form_info.new_state.value;
    // data_search = Boolean($(old_street_address_id).attr("data-search"));
    if((form_info.new_street.attr.value === "true") && (new_street.length >= 2) && (new_zip_code.length == 5) && (new_city.length > 3) && (new_state.length == 2)){
        get_street_address(new_city, new_state, new_zip_code, new_street, onNewStreetFetchingSuccess, onNewStreetFetchingError)
    }if((form_info.new_street.attr.value === "false") && (new_street.length >= 2) && (new_zip_code.length == 5) && (new_city.length > 3) && (new_state.length == 2) && (form_info.new_street.value.toLowerCase().indexOf(selected_new_street_sddress.toLowerCase()) === -1)){
        get_street_address(new_city, new_state, new_zip_code, new_street, onNewStreetFetchingSuccess, onNewStreetFetchingError)
    }else{
        $(othre_related_info.new.street_suggestion_ul.id).css("display", "none");
    }
}

var trigger_old_address_validator = function(){
    
    $(form_info.old_street.id).attr("is-validated","true");
    verify_data = {
        zip:form_info.old_zip.value.trim(),
        city:form_info.old_city.value.trim(),
        state:form_info.old_state.value.trim(),
        street:form_info.old_street.value.trim()
    }
    verify_endpoint = "street-address/verify/"
    get_data_from_server(apiUrl, verify_endpoint, verify_data, onOldStreetValidationSuccess, onOldStreetValidationError);
}

var trigger_new_address_validator = function(){
    $(form_info.old_street.id).attr("is-validated","true");
    
    verify_data = {
        zip:form_info.new_zip.value.trim(),
        city:form_info.new_city.value.trim(),
        state:form_info.new_state.value.trim(),
        street:form_info.new_street.value.trim()
    }
    verify_endpoint = "street-address/verify/"
    get_data_from_server(apiUrl, verify_endpoint, verify_data, onNewStreetValidationSuccess, onNewStreetValidationError);
}
//script starting from here

$(function(){
    $('footer').after(apt_modal);
    $('footer').after(ourCustomModal);
    set_zip_suggestion_after([
        "old_zip_code",
        "new_zip_code"
    ]);
    set_street_suggestion_after([
        "old_street_address",
        "new_street_address"
    ]);
    //https://pe.usps.com/text/pub28/28apc_003.htm
    apt_types = {
        "APT":"APT NO.",
        "UNIT":"UNIT NO.",
        "STE":"SUITE NO.",
        "BOX":"BOX NO.",
        "FL":"FLOOR NO.",
        "BLDG":"BUILDING NO.",
        "DEPT":"DEPERTMENT NO.",
        "RM":"ROOM NO.",
        "SPC":"SPACE NO.",
        "TRLR":"TRAILER NO.",
        "BSMT":"BASEMENT NO.",
        "HNGR":"HANGER NO.",
        "LBBY":"LOBBY NO.",
        "LOT":"LOT NO.",
        "FRNT":"FRONT NO.",
        "PIER":"PIER NO.",
        "":"XXX"
    };
    apt_options = '<option value="" selected>TYPE OF APARTMENT</option>';
    for(var apt_value in apt_types){
        if(apt_types[apt_value] != "XXX"){
            apt_options += '<option value="'+apt_value+'">'+apt_types[apt_value]+'</option>';
        }
    }
    $(form_info.new_street.id).attr('data-search', 'true');
    $(form_info.old_street.id).attr('data-search', 'true');
    $(form_info.new_street.id).attr('double-checked', 'false');
    $(form_info.old_street.id).attr('double-checked', 'false');
    $("#apt-type").html(apt_options);

    $('#apt-number').prop('disabled', true);
    $('#apt-button').hide();
    $('#apt-number').keyup(function(){
        if($('#apt-number').val().trim().length > 0){
            $('#apt-button').show();
        }else{
            $('#apt-button').hide();
        }
    });
    $('#apt-type').change(function(){
        if($('#apt-type').val().trim().length < 2){
            $('#apt-number').prop('disabled', true);
        }else{
            $('#apt-number').prop('disabled', false);
        }
        apt_type = $(this).val();
        $('#apt-number').attr("placeholder", apt_types[apt_type]);
        color = apt_type == '' ? '#999 !important' : '#555 !important';
        $('#apt-type').attr('style', 'color:'+color+';');
    });
    $(form_info.old_zip.id).on('keyup',function(e){

        oldZipCodeInfo = getZipCode(form_info.old_zip.id);
        // console.log(oldZipCodeInfo);
        if(oldZipCodeInfo.status == true){
            // Data PUlling From Server
            apiEndPoint = "city-state-lookup/"+oldZipCodeInfo.value+"/";
            get_data_from_server(apiUrl, apiEndPoint, {}, onOldZipCodeFetchingSuccess, onOldZipCodeFetchingError);
        }else{
            $(othre_related_info.old.zip_suggestion_ul.id).css("display", "none");
        }
    });

    //Auto suggesstion city state by zip ended for old address
    options = '<option value="" selected="">State</option>'
    for (state in stateJson){
        options += '<option value="'+state+'">'+stateJson[state]+' ('+state+')</option>'
    }
    // Rendering state
    $(form_info.new_state.id).html(options);
    $(form_info.old_state.id).html(options);


    //Auto suggesstion city state by zip started for new address
    new_zip = "#zip_2";
    $(form_info.new_zip.id).keyup(function(){
        
        newZipCodeInfo = getZipCode(form_info.new_zip.id);
        if(newZipCodeInfo.status == true){
            apiEndPoint = "city-state-lookup/"+newZipCodeInfo.value+"/";
            get_data_from_server(apiUrl, apiEndPoint, {}, onNewZipCodeFetchingSuccess, onNewZipCodeFetchingError);
        }else{
            $(othre_related_info.new.zip_suggestion_ul.id).css("display", "none");
        }
    });

    //Auto suggesstion city state by zip ended for new address


    //Auto suggestion street address for old address
    
    $(form_info.old_street.id).keyup(function(){
        if(!$(othre_related_info.icon.oldStreetValidatorClass).hasClass("display_none")){
            $(othre_related_info.icon.oldStreetValidatorClass).addClass("display_none");
        }
        form_info.old_street.value = $(form_info.old_street.id).val();
        trigger_old_street_address_suggestion();
        $(form_info.old_street.id).attr('is-validated', 'false');
    });

    $(form_info.old_street.id).blur(function(){
        setTimeout(function afterThreeSeconds() {
            $(othre_related_info.old.street_suggestion_ul.id).css("display", "none");
          }, 300);
        if((form_info.old_street.attr.value === "false" || form_info.old_street.value.indexOf(selected_old_street_sddress) != -1) && (form_info.old_street.value.split(" ").length >= 3)){
            if($(form_info.old_street.id).attr('is-validated') == 'false'){
                setTimeout(function(){
                    if(is_selected_suggestion === true){
                        trigger_old_address_validator()
                    }
                }, 300);
                is_selected_suggestion === true;
            }
            
        }
    });

    // new street suggestion
    $(form_info.new_street.id).keyup(function(){
        if(!$(othre_related_info.icon.newStreetValidatorClass).hasClass("display_none")){
            $(othre_related_info.icon.newStreetValidatorClass).addClass("display_none");
        }
        form_info.new_street.value = $(form_info.new_street.id).val();
        trigger_new_street_address_suggestion();
        $(form_info.new_street.id).attr('is-validated', 'false');
        
    });

    $(form_info.new_street.id).blur(function(){
        setTimeout(function afterThreeSeconds() {
            $(othre_related_info.new.street_suggestion_ul.id).css("display", "none");
          }, 300);
        if((form_info.new_street.attr.value === "false" || form_info.old_street.value.indexOf(selected_old_street_sddress) != -1) && (form_info.new_street.value.split(" ").length >= 3)){
            
            if($(form_info.new_street.id).attr('is-validated') == 'false'){
                setTimeout(function(){
                    trigger_new_address_validator();
                }, 300);
            }
            
        }
    });

    $(form_info.new_zip.id).blur(function(){
        setTimeout(function afterThreeSeconds() {
            $(othre_related_info.new.zip_suggestion_ul.id).css("display", "none");
          }, 200);
    });
    $(form_info.old_zip.id).blur(function(){
        setTimeout(function afterThreeSeconds() {
            $(othre_related_info.old.zip_suggestion_ul.id).css("display", "none");
          }, 200);
    });

    $("#apt-button").click(function(){
        targeted_class = $("#apt-button").attr("targetted-class");
        apt_type_now = $('#apt-type').val().toUpperCase();
        apt_number_now = $('#apt-number').val().toUpperCase();
        street = $("."+targeted_class).val().toUpperCase();
        if(street.tirm().length > 6 && apt_type_now.tirm().length > 1 && apt_number_now.trim().length > 0){
            full_addres_now = street + " " + apt_type_now + " " + apt_number_now;
            if(targeted_class.indexOf("new") != -1){
                form_info.new_street.value = full_addres_now;
                trigger_new_address_validator();
            }else if(targeted_class.indexOf("old") != -1){
                form_info.old_street.value = full_addres_now;
                trigger_old_address_validator();
            }
        }
        
    });


});


