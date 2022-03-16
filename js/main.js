












var prices=new Array();prices["Fallback Rebill"]="0.0";prices["Dynamic Price Max"]="0.0";prices["Fallback Charge 2"]="19.5";prices["Refund Fee"]="44.5";prices["Easy Guide"]="0.0";prices["Fallback Charge 3"]="9.5";prices["Fallback Charge 1"]="29.5";prices["Processing Fee"]="44.5";prices["Partial Refund"]="40.5";prices["Dynamic Price Avg"]="0.0";prices["Full Easy Guide"]="44.5";
var robot_id         = "null";
var family           = "moving";
var DELAY_3D         = 7;
var _AIM_            = "null";
var _GLOBAL_SESSION_ = new Array();
var SMARTDATA        = null;
var galileo          = false;
_GLOBAL_SESSION_["uri"] = "/index.html?null";_GLOBAL_SESSION_["edw_json_data"] = "{\"edw_id\":\"f79ee6ef-82ab-48d3-8606-b4ea987f97c2\",\"dropped_events\":\",,hit\",\"empty\":\"true\"}";
function getSession(k)
{
   return _GLOBAL_SESSION_[k];
}
var is3d = false;
var curNoDate;

var landLink    = "/index.html";
var popcount    = 0;
var leaveSite   =  true;
var user_ip     = "144.48.111.150";
var user_id     = "null";
var user_agent  = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36";
var transam     = "null";
var coverdell   =  null;
var forwarding_service = "null";


var __SPLASHZIP   = "null";
var __SPLASHSTATE = "null";
var quiz_points   = "null";
var quiz_response = "null";
var upsellYN      = "null";
var paymentTrans  =  false;



var _PAYMENT          = new Array();
var _PROFILE          = new Array();
var domainName        = "address-change.org" + ":443";
var restaurant_coupon = "null";



var utm_source    =  "null";
var utm_campaign  =  "null";
var utm_content   =  "null";
var utm_term      =  "null";



var poll = new Array();





var dLinks     = new Array();
var dNames     = new Array();
var dStamps    = new Array();
var dChecks    = new Array();
var login_name = "";
$(document).ready(function()
{
   emailTest();
   if( robot_id!="null" )
   {
      try { $("#robot_mode").show(); } catch(e) {}
      console.log( "robot #" + robot_id );
      $("#ssn").prop('readonly', true);
      $("#address_1,#address_2").dblclick(    function(){ googleMaps($(this));               });
      $("#address_1,#address_2").contextmenu( function(){ googleMaps($(this)); return false; });
      $("#card_number").contextmenu(function(){           goolgeMaps();        return false; });
   }
   $("input.form-control").change( function(){
     // $(this).val( initCapW($(this).val()) );
   });
   
   function showLoginStuff(show)
   {
      if(show)
      {
         $("#login" ).hide();
         $("#logout").show();
         $("#profile").show();
      }
      else
      {
         $("#login" ).show();
         $("#logout").hide();
         $("#profile").hide();
      }
   }
   
         showLoginStuff(false);
         
   
   $(".datepicker").blur(function() {
      var v = $(this).val();
      var d = new Date(v);
      var p = mmddyyyy(d);
      if( p.indexOf("NaN")==-1 || v=="" )
      {
         if( v!="" )
            $(this).val( p );
         $(this).removeClass( "error" );
      }
      else
      {
         $(this).focus().val( "Invalid Date" ).addClass( "error" );
         curNoDate = $(this);
         setTimeout( "clearNoDate();", "2000" );
      }
   });
   jQuery('.datepicker').bind('keyup',function(evt){
       if( !(evt.which==35 || evt.which==36 || evt.which==37 || evt.which==39 || evt.which==46 || evt.which==8) )
       {
          curNoDate = $(this);
          
          var strokes = $(this).val().length;
          if(strokes === 2 || strokes === 5)
          {
              var thisVal = $(this).val();
              thisVal += '/';
              $(this).val(thisVal);
          }
          setTimeout( "cleadDt()", 1 );
       }
   });
   
   $("#address_1").change( function() {
      $(this).val( $(this).val().replace("suite", "#") );
      $(this).val( $(this).val().replace("# ",    "#") );
      $(this).val( $(this).val().replace(" #",    "#") );
      var v  = $(this).val();
      var sp = v.split( "#" );
      if( sp.length==2 )
      {
         sp[0] = $.trim(sp[0]);
         sp[1] = $.trim(sp[1]);
         while( sp[0].charAt(sp[0].length-1)==',' )
            sp[0] = sp[0].substr( 0, sp[0].length - 1 );
         
         $("#address_1").val(       sp[0] );
         $("#suite_1"  ).val( "#" + sp[1] );
      }
   });



   $("#email").change( function() { correctEmail($(this));} );
   $("#card_number").change(function(){
      $(this).val( extractNumberJunk($(this).val()) );
   });
   



   try { $('.profile_id').html(""); _PROFILE["id"]=""; $('.profile_first_name').html(""); _PROFILE["first_name"]=""; $('.profile_middle_name').html(""); _PROFILE["middle_name"]=""; $('.profile_last_name').html(""); _PROFILE["last_name"]=""; $('.profile_prefix').html(""); _PROFILE["prefix"]=""; $('.profile_suffix').html(""); _PROFILE["suffix"]=""; $('.profile_date_of_birth').html(""); _PROFILE["date_of_birth"]=""; $('.profile_gender').html(""); _PROFILE["gender"]=""; $('.profile_marital_status').html(""); _PROFILE["marital_status"]=""; $('.profile_address_1').html(""); _PROFILE["address_1"]=""; $('.profile_suite_1').html(""); _PROFILE["suite_1"]=""; $('.profile_city_1').html(""); _PROFILE["city_1"]=""; $('.profile_state_1').html(""); _PROFILE["state_1"]=""; $('.profile_zip_1').html(""); _PROFILE["zip_1"]=""; $('.profile_phone_1').html(""); _PROFILE["phone_1"]=""; $('.profile_phone_2').html(""); _PROFILE["phone_2"]=""; $('.profile_email').html(""); _PROFILE["email"]=""; $('.profile_address_2').html(""); _PROFILE["address_2"]=""; $('.profile_suite_2').html(""); _PROFILE["suite_2"]=""; $('.profile_city_2').html(""); _PROFILE["city_2"]=""; $('.profile_state_2').html(""); _PROFILE["state_2"]=""; $('.profile_usps_forward').html(""); _PROFILE["usps_forward"]=""; $('.profile_moving_type').html(""); _PROFILE["moving_type"]=""; $('.profile_moving_time').html(""); _PROFILE["moving_time"]=""; $('.profile_zip_2').html(""); _PROFILE["zip_2"]="";     } catch(e) {}
   try {  } catch(e) {}

   var hrf = document.location.href;

   if(hrf.indexOf("/billing.html") >= 0) $("#billingForm").prepend("<input type='hidden' name='billingUuid' id='billingUuid' value='4115e222-b915-4d15-bfc2-cd0e10597178' />");

   if( hrf.indexOf("/adv-billing.html")!=-1 )
      track("adv_billing");
   if( hrf.indexOf("/new_billing.html")!=-1 )
      $("#billingForm").prepend("<select class='form-control' name='gateway'><option value='nmi'>NMI</option><option value='splash'>SPLASH</option><option value='psi'>PSI</option><option value='dlocal'>DLOCAL</option></select>");
   if( hrf.indexOf("refund.html")!=-1 )
   {
      $("#button_section").click(function(){
         if ($.trim($("#first_name").val())    == "" ) {$("#first_name").css("border","1px solid red").focus();return false;}    else {$("#first_name").css("border","");}
         if ($.trim($("#last_name").val())     == "" ) {$("#last_name").css("border","1px solid red").focus();return false;}     else {$("#last_name").css("border","");}
         if ($.trim($("#email").val())         == "" ) {$("#email").css("border","1px solid red").focus();return false;}         else {$("#email").css("border","");}
         if ($.trim($("#reason").val())        == "" ) {$("#reason").css("border","1px solid red").focus();return false;}        else {$("#reason").css("border","");}
         
         $("#button_section").hide();
         $("#spin_section").show();
      });
   }
   else
   if( hrf.indexOf("/notice.html") != -1 )
   {
      track("notice");
   }
   else
   if( (hrf.indexOf("/dmv-locations.html")!=-1) || (hrf.indexOf("/licensing-centre-locations.html")!=-1) )
   {
      $("#submit").click( function(e){
         var zipcode = $("#zip").val();
         $("#dmvmap").attr("src","https://www.google.com/maps/embed/v1/search?key=AIzaSyD2NwPuc-TW-O0KOm1_FK8E9yMwknD2XH4&q=dmv+" + zipcode + "+United States-AAA");
      });
      
      //--- linking enter press with send button
      $(document).keypress(function(event){
         var keycode = (event.keyCode ? event.keyCode : event.which);
         if(keycode == '13')
         {
            $('#submit').click();   
         }
      });
   }
   else
   if( hrf.indexOf("/poll") != -1 )
   {
      $.ajax({ "url":"/ajax/trackPoll.jsp" });
   }
   else
   if( hrf.indexOf("/searchresults") != -1 )
   {
      var urlParams = parseParamsFromUrl();
      var kw = encodeURIComponent(urlParams['q']);
      $('#q').val	(urlParams['q']);
      $('#result').text('Displaying results for: ' + urlParams['q']);
      $.get('/search.jsp?q=' + kw, function(html)
      {
         $('#searchresults').html(html);
         paginate();
      });
   }
   else
   if( hrf.indexOf("/refund.html") != -1 )
   {
      $( "#__ID" ).val( hrf.split("?")[1] );
   }


   //--- colorbox
   $(document).bind('cbox_open', function () {     $('html').css({ overflow: 'hidden' }); }).bind('cbox_closed', function () {     $('html').css({ overflow: 'auto' }); });  



   //--- templied fields such as {state} {url[]}
   href = document.location.href.split("?")[0].split( "/" ).reverse();
   if( $(".templified").length > 0 )
   {
      lowState       =  $(".low-state");
      capState       =  $(".cap-state");
      initCapState   =  $(".init-cap-state");
      _state = href[0].replace( ".html", "" );
      
      if( lowState.length > 0 )     lowState.html(      _state.toLowerCase()   );
      if( capState.length > 0 )     capState.html(      _state.toUpperCase()   );
      if( initCapState.length > 0 ) initCapState.html(  initCap(_state )   );
      
      for( i=2; i<4; i++ )
      {
         initCapUrl   = $(".init-cap-url-" +  i);
         capUrl       = $(".cap-url-"      +  i);
         lowUrl       = $(".low-url-"      +  i);
         ndxVal       = href[i-1];
         if( lowUrl.length       > 0 ) lowUrl.html(      ndxVal.toLowerCase() );
         if( capUrl.length       > 0 ) capUrl.html(      ndxVal.toUpperCase() );
         if( initCapUrl.length   > 0 ) initCapUrl.html(  initCap(ndxVal) );
      }
   }


   if( document.location.href.indexOf("tmp.html")!=-1 )
   {
      $("#first_name").val( _PROFILE["first_name"] );
   }

   
   
   if( document.location.href.indexOf("billing.html")!=-1 || document.location.href.indexOf("billing3d.html")!=-1 )
   {
      $("body").append( "<img class='imgmain' src='/img/billing.png'>" );
      



      $("#card_number").change( function() {
         $("#processError").html( "" );
         $("#processError").fadeOut();
         if( $(this).val().charAt(0) == "3" )
         {
            $("#processError").html( "<img src='/img/error.png' width='25' align='left' id='errx'>American Express not accepted. Please try another card." );
            $("#processError").fadeIn();
         }
      });
      
      /*--------------------*/
      /*--- Billing page ---*/
      /*--------------------*/
      track( "billing" );
      try
      {
         var _stateService = _PROFILE["_FORM_"].split( "/" );
         var _state        = _stateService[2].split(".")[0];
         if( _state=="" || _state=="main" )
            _state = toStateName( _PROFILE["state_1"] ).toLowerCase();
         $("#s_state").val( _state );
         $("#s_service").val( _stateService[1] );
         $("#state").val( _state );
      }
      catch(e)
      {
      }

      
      if( SMARTDATA!=null )
      {
         _PROFILE["phone_1"]     =  SMARTDATA.mobile_number;
         _PROFILE["email"]       =  SMARTDATA.email;
         _PROFILE["first_name"]  =  SMARTDATA.first_name;
         _PROFILE["last_name"]   =  SMARTDATA.last_name;
         _PROFILE["address_1"]   =  SMARTDATA.street_address;
         _PROFILE["city_1"]      =  SMARTDATA.city;
         _PROFILE["state_1"]     =  SMARTDATA.state;
         _PROFILE["zip_1"]       =  SMARTDATA.zip;
         $("#billingForm").append( "<input type='hidden' name='smartpath' value='Y'>" );
         setTimeout( "populateSmart()", 100 );
      }

      $("#item").val(       "Full Easy Guide"            );
      $("#phone").val(      _PROFILE["phone_1"]    );
      $("#email").val(      _PROFILE["email"]      );

      $("#first_name").val( _PROFILE["first_name"] );
      $("#last_name").val(  _PROFILE["last_name"]  );
      $("#address").val(    _PROFILE["address_1"]  );
      $("#city").val(       _PROFILE["city_1"]     );
      $("#zip").val(        _PROFILE["zip_1"]      );
      if( SMARTDATA!=null )
      {
         $("#s_state"  ).val( _PROFILE["state_1"] );
         if( family=="drivers" )
         {
            $("#s_service").val( SMARTDATA.drivers_service );
            $("#s_state"  ).val( SMARTDATA.state           );
         }
      }
      
      $(".profile_first_name").html( _PROFILE["first_name"]  );
      $(".profile_last_name" ).html( _PROFILE["last_name"]   );
      $(".profile_phone_1"   ).html( _PROFILE["phone_1"]     );
      $(".profile_email"     ).html( _PROFILE["email"]       );
      $(".profile_address_1" ).html( _PROFILE["address_1"]   );
      $(".profile_city_1"    ).html( _PROFILE["city_1"]      );
      $(".profile_zip_1"     ).html( _PROFILE["zip_1"]       );
   }
});


function populateSmart()
{
   for( k in  SMARTDATA  )
   {
      try
      {
         document.frm[k].value = SMARTDATA[k];
      }
      catch(e)
      {
      }
   }
}

function itemCart( icon, item, desc, cumulate )
{
   if( $("#price").val()=="" )
      $("#price").val("0");
   var _tot       =  eval( $("#displayPrice").text() );
   var _payTot    =  eval( $("#price").val()         );
   var pricepoints=new Array();pricepoints["Fallback Charge 2"]="19.5";pricepoints["Refund Fee"]="44.5";pricepoints["Fallback Charge 3"]="9.5";pricepoints["Fallback Charge 1"]="29.5";pricepoints["Processing Fee"]="44.5";pricepoints["Partial Refund"]="40.5";pricepoints["Full Easy Guide"]="44.5";
   if( document.location.href.indexOf("billing.html") ==-1 )
      return;
   var _h = "";
   
  
   splt_desc = desc.split("|"); 
   _h += "<div id='item'><table width='100%' border=0><tr>";
   _h +=    "<td style='vertical-align:middle;' width='20'><img src='https://s3.amazonaws.com/address-change.org/img/"+icon+".jpg' style='margin-right:10px;'></td>";
   _h +=    "<td style='vertical-align:middle;'>";
   _h +=    splt_desc[0];

   if( splt_desc.length > 1 )
      _h += "<div style='font-size:10px; color:gray;'>"+splt_desc[1]+"</div>"

   _h +=    "</td>";
   _h +=    "<td width='20' class='cartprice' style='vertical-align:middle; text-align:right; padding-right:10px;'>";
   if( typeof pricepoints[item]=== "undefined" )
      _h += "Free";
   else
      _h += "$"+pricepoints[item];
   _h += "</td>";
   _h += "</tr></table></div>";
   
   

   $("#items").append( _h );
   if( !isNaN(pricepoints[item]) )
      _tot += eval( pricepoints[item] );
   if( cumulate )
      _payTot += eval( pricepoints[item] );
   $("#displayPrice").text( parseFloat(_tot).toFixed(2) );
   $("#price").val(_payTot);
   $("#split").val( "null" );
}

function closeColorBox()
{
   parent.$.fn.colorbox.close();
}

function setDownload( key )
{
   console.log( "setDownload=" + key );
   u = "k=" + key;
   $.ajax({ type: "POST", url: "/dwn", data: u, async: false });
}

function redirect( u )
{
   try
   {
      parent.document.location.replace(u);
   }
   catch( e )
   {
   }   
}

function initCap(str)
{
   s = str.toLowerCase().replace(/\b[a-z]/g, function(letter){ return letter.toUpperCase(); });
   return s.replace(/-/g, " ");
}

function initCapW(str)
{
   return $.trim( str.charAt(0).toUpperCase() + str.slice(1) );
}




function isoDate(str)
{
   dt = new Date(str);
   _m = dt.getUTCMonth() + 1;
   _d = dt.getUTCDate();
   _y = dt.getUTCFullYear();
   return "" + _y + "-" + (_m<10?"0":"") + _m + "-" + (_d<10?"0":"") + _d;
}

function mmddyyyy( dt )
{
   var m = dt.getMonth() + 1;
   var y = dt.getFullYear();
   var d = dt.getDate();
   return "" + (m<10?"0":"") + m + "/" + (d<10?"0":"") + d + "/" + y;
}

function getParam( p )
{
   var hrf = document.location.href;
   var u   = (hrf+"?n").split( "?" )[1].split("&");
   for( var _i=0; _i<u.length; _i++ )
   {
      pair = u[_i].split( "=" );
      if( pair[0]==p )
         return pair[1];
   }
   return "";
}

function isStateSource()
{
   var utm_source = getParam("utm_source").split("_");
   //return ( utm_source[0].length==2 && utm_source[0].toUpperCase()==utm_source[0] && utm_source[1].toLowerCase()=="Drivers" );
   return ( utm_source[0].length==2 && utm_source[1].toLowerCase()=="drivers" );
}


function OLD_getParam( p )
{
   var u = (document.location.href+"?n").split( "?" )[1].split("&");
   for( var _i=0; _i<u.length; _i++ )
   {
      pair = u[_i].split( "=" );
      if( pair[0]==p )
         return pair[1];
   }
   return "";
}

function getUrl( ndx )
{
   u = document.location.href.replace("http://","").replace("https://","").split("?")[0].split( "/" );
   return u[ndx];
}

function getState()
{
   u = document.location.href.split("?")[0].split( "/" );
   return u[u.length-1].split(".")[0];
}

function getPage()
{
   return getState();
}

function homePageRadio()
{
   $("#step1 input:radio").change(function(){
      $("#step1 :radio ").parent(".checkBox").removeClass("checked");
      $("#step1 :radio:checked").parent(".checkBox").addClass("checked");
      $("#step1 :radio:checked").blur();
   });
}

function go2CheckList()
{
   document.location.replace( "/checklist" + sessionData["_FORM_"] );
}



var reverseState = new Array();
reverseState["maranhao"] = "MA";reverseState["rio-grande-do-sul"] = "RS";reverseState["florida"] = "FL";reverseState["manitoba"] = "MB";reverseState["new-york"] = "NY";reverseState["arkansas"] = "AR";reverseState["nebraska"] = "NE";reverseState["sergipe"] = "SE";reverseState["ohio"] = "OH";reverseState["texas"] = "TX";reverseState["ceara"] = "CE";reverseState["missouri"] = "MO";reverseState["north-carolina"] = "NC";reverseState["santa-catarina"] = "SC";reverseState["georgia"] = "GA";reverseState["rhode-island"] = "RI";reverseState["puerto-rico"] = "PR";reverseState["ontario"] = "ON";reverseState["alaska"] = "AK";reverseState["tocantins"] = "TO";reverseState["delaware"] = "DE";reverseState["massachusetts"] = "MA";reverseState["northwest-territories"] = "NT";reverseState["rio-de-janeiro"] = "RJ";reverseState["nova-scotia"] = "NS";reverseState["california"] = "CA";reverseState["oklahoma"] = "OK";reverseState["west-virginia"] = "WV";reverseState["alabama"] = "AL";reverseState["mato-grosso"] = "MT";reverseState["louisiana"] = "LA";reverseState["goias"] = "GO";reverseState["kansas"] = "KS";reverseState["pennsylvania"] = "PA";reverseState["utah"] = "UT";reverseState["yukon"] = "YT";reverseState["minnesota"] = "MN";reverseState["parana"] = "PR";reverseState["oregon"] = "OR";reverseState["virginia"] = "VA";reverseState["paraiba"] = "PB";reverseState["washington"] = "WA";reverseState["sao-paulo"] = "SP";reverseState["alagoas"] = "AL";reverseState["iowa"] = "IA";reverseState["north-dakota"] = "ND";reverseState["south-carolina"] = "SC";reverseState["arizona"] = "AZ";reverseState["maryland"] = "MD";reverseState["piaui"] = "PI";reverseState["prince-edward-island"] = "PE";reverseState["illinois"] = "IL";reverseState["nunavut"] = "NU";reverseState["rio-grande-do-norte"] = "RN";reverseState["para"] = "PA";reverseState["tennessee"] = "TN";reverseState["pernambuco"] = "PE";reverseState["saskatchewan"] = "SK";reverseState["distrito-federal"] = "DF";reverseState["montana"] = "MT";reverseState["idaho"] = "ID";reverseState["kentucky"] = "KY";reverseState["wisconsin"] = "WI";reverseState["maine"] = "ME";reverseState["nevada"] = "NV";reverseState["new-jersey"] = "NJ";reverseState["south-dakota"] = "SD";reverseState["hawaii"] = "HI";reverseState["michigan"] = "MI";reverseState["connecticut"] = "CT";reverseState["quebec"] = "QC";reverseState["alberta"] = "AB";reverseState["colorado"] = "CO";reverseState["wyoming"] = "WY";reverseState["rondonia"] = "RO";reverseState["district-of-columbia"] = "DC";reverseState["amapa"] = "AP";reverseState["mato-grosso-do-sul"] = "MS";reverseState["bahia"] = "BA";reverseState["minas-gerais"] = "MG";reverseState["roraima"] = "RR";reverseState["newfoundland"] = "NL";reverseState["espirito-santo"] = "ES";reverseState["acre"] = "AC";reverseState["new-mexico"] = "NM";reverseState["vermont"] = "VT";reverseState["new-brunswick"] = "NB";reverseState["mississippi"] = "MS";reverseState["new-hampshire"] = "NH";reverseState["amazonas"] = "AM";reverseState["british-columbia"] = "BC";reverseState["indiana"] = "IN";
function getStateCode()
{
   return reverseState[getState()];
}



//---- used for search only
function parseParamsFromUrl()
{
   var params  = new Array( );
   var parts   = window.location.search.substr(1).split('\x26');
   for( var i=0; i<parts.length; i++ )
   {
      var keyValuePair   = parts[i].split('=');
      var key            = decodeURIComponent(keyValuePair[0]);
      params[key]        = keyValuePair[1] ?decodeURIComponent(keyValuePair[1].replace(/\+/g, ' ')):keyValuePair[1];
   }
   return params;
}
pageIndex = 1;   
function paginate()
{
   var $ul = $('ul.pagination');
   $ul.children().remove();
   for( i=pageIndex * 10 - 9; i<=pageIndex * 10; i++ )
   {
      $ul.append('<li>'+i+'</li>');
   }
   $ul.find('li').click(function() {
      $ul.find('li').removeClass("currentPage");
      var no = $(this).text();
      if( no > 10 )
      {
         no = no - (pageIndex - 1) * 10;
	      var exp = 'li:nth-child(' +  no  + ')';
	      $ul.find('li:nth-child(' +  no  + ')').addClass("currentPage"); 
      }
      else
	      $ul.find('li:nth-child(' + no + ')').addClass("currentPage");
      var urlParams  = parseParamsFromUrl();
      var kw         = encodeURIComponent(urlParams['q']);
      $.get('/search.jsp?q=' + kw + '&qi=' + ((no * 10) +1), function(html)
      { 
         $('#searchresults').html(html);
      });
   });
   $ul.append('<li id="next">Next ></li>');
   $ul.find('li:first').addClass("currentPage");
   $ul.find('#next').click(function(){
      pageIndex++;
      paginate();
      var $ul = $('ul.pagination');
      $ul.find('li:first').click();
   });
}


function popWall( url, w, h )
{
   if( url.indexOf("addQ.")!=-1 )
   {
      var q = url.replace( "addQ.", "" );
      $.ajax( {"url":"/ajax/addQ.jsp?trg="+q} );
   }
   else
   {
      popupWindow = window.open(url,"",'height='+h+',width='+w+',resizable=yes,scrollbars=yes,toolbar=no,location=no')
      popupWindow.focus();
   }
}

function checkSurvey( oneYes )
{
   if( oneYes )
   {
      r = false;
      $('input:radio:checked').each(function(){
         if( (""+$(this).attr("onclick")) != "undefined")
         {
            r = true;
            return;
         }
      });
      return r;
   }
   else
      return ($('input:radio:checked').length*2 == $('input:radio').length);
}

function trackDown( typ, lnk )
{
}

function track( typ )
{
   $.ajax({ "url":"/ajax/track.jsp?type="+typ });
}


function getCreditCardType( accountNumber )
{
   if( /^5[1-5]/.test(accountNumber) )   return "mastercard";
   if( /^4/.test(accountNumber) )        return "visa";
   if( /^3[47]/.test(accountNumber) )    return "amex";
   return "other";
}

function isAmex( accountNumber )
{
   return (getCreditCardType(accountNumber)=="amex");
}
function isOther( accountNumber )
{
   if( accountNumber=="1234567890123456" )
      return false;
   return (getCreditCardType(accountNumber)=="other");
}


function cvv()
{
   $.colorbox({iframe:true, innerWidth:"280", innerHeight:"200", href:"/cvv.jsp", "close":"Close",  overlayClose: false});
}

function afterPost( cnt )
{
   $("#err_section").html( cnt );
   $("#err_section").show();

   $("#spin_section").hide();
   $("#button_section").show();
}

function extractNumberJunk( val )
{
   _v = "";
   for( var n=0; n<val.length; n++ )
   {
      if( val.charAt(n)==" " )
         continue;
      try
      {
         evl = eval( val.charAt(n) );
         _v += val.charAt(n);
      }
      catch(e)
      {
      }
   }
   return _v;
}


function correctEmail( o )
{
   trg  = o.val().toLowerCase().replace("www.", "");
   splt = trg.split( "@" );
   if( splt.length!=2 )
      return;
   trg = trg.replace( "..",    "." );
   trg = trg.replace( ".ccom",  ".com" );
   trg = trg.replace( ".comm",  ".com" );
   trg = trg.replace( ".coomm", ".com" );

   trg = trg.replace( ".cox",   ".com" );
   trg = trg.replace( ".xom",   ".com" );
   trg = trg.replace( ".cim",   ".com" );
   trg = trg.replace( ".con",   ".com" );
   
   trg = trg.replace( ".on",    ".com" );
   trg = trg.replace( ".cm",    ".com" );
   trg = trg.replace( ".nt",    ".net" );
   trg = trg.replace( ".co",    ".com" );

   
   trg = trg.replace( "gmial",  "gmail" );
   trg = trg.replace( "gamil",  "gmail" );
   trg = trg.replace( "gmil",   "gmail" );
   trg = trg.replace( "gmal",   "gmail" );
   
   if( splt.length == 2 )
   {
      splt = trg.split( "@" );
      dot  = splt[1].split(".")[1];
      dot  = dot==".co"?".com":dot;
      dot  = dot==".ne"?".net":dot;
      
      if( splt[1].indexOf("yaho")!=-1 )   splt[1] = "yahoo." + dot;
      else
      if( splt[1].indexOf("hotm")!=-1 )   splt[1] = "hotmail." + dot;
      else
      if( splt[1].indexOf("comca")!=-1 )  splt[1] = "comcast.net";
      else
      if( splt[1].indexOf("gma")!=-1 )    splt[1] = "gmail.com";
      else
      if( splt[1].indexOf("aol")!=-1 )    splt[1] = "aol.com";
      
   }
   rtn = splt[0] + "@" + splt[1];
   rtn = rtn.replace( ".comm", ".com" );
   rtn = rtn.replace( ".cpm",  ".com" );
   rtn = rtn.replace( ".undefined", ".com" );


   o.val( rtn );
}

var statesUS = new Array();
var statesCA = new Array();
statesUS[0]="alabama"; statesUS[1]="alaska"; statesUS[2]="arizona"; statesUS[3]="arkansas"; statesUS[4]="california"; statesUS[5]="colorado"; statesUS[6]="connecticut"; statesUS[7]="delaware"; statesUS[8]="district-of-columbia"; statesUS[9]="florida"; statesUS[10]="georgia"; statesUS[11]="hawaii"; statesUS[12]="idaho"; statesUS[13]="illinois"; statesUS[14]="indiana"; statesUS[15]="iowa"; statesUS[16]="kansas"; statesUS[17]="kentucky"; statesUS[18]="louisiana"; statesUS[19]="maine"; statesUS[20]="maryland"; statesUS[21]="massachusetts"; statesUS[22]="michigan"; statesUS[23]="minnesota"; statesUS[24]="mississippi"; statesUS[25]="missouri"; statesUS[26]="montana"; statesUS[27]="nebraska"; statesUS[28]="nevada"; statesUS[29]="new-hampshire"; statesUS[30]="new-jersey"; statesUS[31]="new-mexico"; statesUS[32]="new-york"; statesUS[33]="north-carolina"; statesUS[34]="north-dakota"; statesUS[35]="ohio"; statesUS[36]="oklahoma"; statesUS[37]="oregon"; statesUS[38]="pennsylvania"; statesUS[39]="puerto-rico"; statesUS[40]="rhode-island"; statesUS[41]="south-carolina"; statesUS[42]="south-dakota"; statesUS[43]="tennessee"; statesUS[44]="texas"; statesUS[45]="utah"; statesUS[46]="virginia"; statesUS[47]="vermont"; statesUS[48]="washington"; statesUS[49]="west-virginia"; statesUS[50]="wisconsin"; statesUS[51]="wyoming"; statesCA[0]="alberta"; statesCA[1]="british-columbia"; statesCA[2]="manitoba"; statesCA[3]="new-brunswick"; statesCA[4]="newfoundland"; statesCA[5]="nova-scotia"; statesCA[6]="northwest-territories"; statesCA[7]="nunavut"; statesCA[8]="ontario"; statesCA[9]="prince-edward-island"; statesCA[10]="quebec"; statesCA[11]="saskatchewan"; statesCA[12]="yukon"; 


function errorPop( ttl, cnt, width, height, callback, isCancel )
{
   html = "";
   html += "<div id='cboxMsg'>";
   html +=     "<div>";
   html +=        "<div style='text-align:center; background:#334872; color:#ffffff; font-size:30px; font-weight:bold; padding:10px;'>" + ttl + "</div>";
   html +=        "<div>"+cnt+"</div>";
   html +=        "<div>&nbsp;</div>";
   html +=     "</div>";
   html +=     "<div style='text-align:center; padding-top:10px;'>";
   html +=        "<span style='font-weight:bold; color:#FFFFFF; background-color:#43AB44; border:1px solid #000000; padding:10px 25px;' onClick='{closeColorBox(); "+callback+"();}'>OK</span>";
   if( isCancel )
   {
      html +=     "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      html +=     "<span style='font-weight:bold; color:#FFFFFF; background-color:#43AB44; border:1px solid #000000; padding:10px 25px;' onClick='closeColorBox();'>CANCEL</span>";
   }
   html +=     "</div>";
   html += "</div>";
   $.colorbox({html:html, width:width, height:height, onLoad:function() { $('#cboxClose').remove(); }});
}

var addrValues = "";
function checkAddress( typ, titre, businessField, divMsg )
{
   return true;
}
function none()
{
}

function setAddress()
{
   arr = addrValues.split( "\n" );
   for( var i=0; i<arr.length; i++ )
   {
      pairs = arr[i].split( "\t" );
      try { document.frm[pairs[0]].value = pairs[1]; } catch(e) {}
   }
}

function checkBillingForm()
{
   var _hrf = document.location.href;
   var okPay = true;
   $("select:visible, input[type=text]:visible, input[type=tel]:visible").each(function() {
      isSearch = ($(this).attr("search")=="Y");
      if( !isSearch )
      {
         if( $(this).val() == "" )
         {
            $(this).css( "borderColor", "red" );
            okPay = false;
         }
         else
         {
            $(this).css( "borderColor", "" );
         }
      }
   });
   if( okPay )
   {
      $("#submitLoad").show();
      $("#billingSubmit").hide();
      document.frm.submit();
      return true;
   }
   return false;
}



function sCode(stateName)
{
   var s = new Array();
   s['alabama'] = 'AL'; s['alaska'] = 'AK'; s['arizona'] = 'AZ'; s['arkansas'] = 'AR'; s['california'] = 'CA'; s['colorado'] = 'CO'; s['connecticut'] = 'CT'; s['delaware'] = 'DE'; s['florida'] = 'FL'; s['georgia'] = 'GA'; s['hawaii'] = 'HI'; s['idaho'] = 'ID'; s['illinois'] = 'IL'; s['indiana'] = 'IN'; s['iowa'] = 'IA'; s['kansas'] = 'KS'; s['kentucky'] = 'KY'; s['louisiana'] = 'LA'; s['maine'] = 'ME'; s['maryland'] = 'MD'; s['massachusetts'] = 'MA'; s['michigan'] = 'MI'; s['minnesota'] = 'MN'; s['mississippi'] = 'MS'; s['missouri'] = 'MO'; s['montana'] = 'MT'; s['nebraska'] = 'NE'; s['nevada'] = 'NV'; s['new-hampshire'] = 'NH'; s['new-jersey'] = 'NJ'; s['new-mexico'] = 'NM'; s['new-york'] = 'NY'; s['north-carolina'] = 'NC'; s['north-dakota'] = 'ND'; s['ohio'] = 'OH'; s['oklahoma'] = 'OK'; s['oregon'] = 'OR'; s['pennsylvania'] = 'PA'; s['puerto-rico'] = 'PR';s['rhode-island'] = 'RI'; s['south-carolina'] = 'SC'; s['south-dakota'] = 'SD'; s['tennessee'] = 'TN'; s['texas'] = 'TX'; s['utah'] = 'UT'; s['vermont'] = 'VT'; s['virginia'] = 'VA'; s['washington'] = 'WA'; s['west-virginia'] = 'WV'; s['wisconsin'] = 'WI'; s['wyoming'] = 'WY';
   return s[stateName.toString()];
}

function toStateName(abbr) 
{
   var s = new Array();
   s["AL"] = "Alabama";s["AK"] = "Alaska";s["AZ"] = "Arizona";s["AR"] = "Arkansas";s["CA"] = "California";s["CO"] = "Colorado";s["CT"] = "Connecticut";s["DE"] = "Delaware";s["DC"] = "District of Columbia";s["FL"] = "Florida";s["GA"] = "Georgia";s["HI"] = "Hawaii";s["ID"] = "Idaho";s["IL"] = "Illinois";s["IN"] = "Indiana";s["IA"] = "Iowa";s["KS"] = "Kansas";s["KY"] = "Kentucky";s["LA"] = "Louisiana";s["ME"] = "Maine";s["MD"] = "Maryland";s["MA"] = "Massachusetts";s["MI"] = "Michigan";s["MN"] = "Minnesota";s["MS"] = "Mississippi";s["MO"] = "Missouri";s["MT"] = "Montana";s["NE"] = "Nebraska";s["NV"] = "Nevada";s["NH"] = "New Hampshire";s["NJ"] = "New Jersey";s["NM"] = "New Mexico";s["NY"] = "New York";s["NC"] = "North Carolina";s["ND"] = "North Dakota";s["OH"] = "Ohio";s["OK"] = "Oklahoma";s["OR"] = "Oregon";s["PA"] = "Pennsylvania";s["PR"] = "Puerto Rico";s["RI"] = "Rhode Island";s["SC"] = "South Carolina";s["SD"] = "South Dakota";s["TN"] = "Tennessee";s["TX"] = "Texas";s["UT"] = "Utah";s["VA"] = "Virginia";s["VT"] = "Vermont";s["WA"] = "Washington";s["WV"] = "West Virginia";s["WI"] = "Wisconsin";s["WY"] = "Wyoming";
   return s[abbr.toString()];
}
function toStateHyphen(abbr)
{
   var s = new Array();
   s["AL"] = "alabama";s["AK"] = "alaska";s["AZ"] = "arizona";s["AR"] = "arkansas";s["CA"] = "california";s["CO"] = "colorado";s["CT"] = "connecticut";s["DE"] = "delaware";s["DC"] = "district-of-columbia";s["FL"] = "florida";s["GA"] = "georgia";s["HI"] = "hawaii";s["ID"] = "idaho";s["IL"] = "illinois";s["IN"] = "indiana";s["IA"] = "iowa";s["KS"] = "kansas";s["KY"] = "kentucky";s["LA"] = "louisiana";s["ME"] = "maine";s["MD"] = "maryland";s["MA"] = "massachusetts";s["MI"] = "michigan";s["MN"] = "minnesota";s["MS"] = "mississippi";s["MO"] = "missouri";s["MT"] = "montana";s["NE"] = "nebraska";s["NV"] = "nevada";s["NH"] = "new-hampshire";s["NJ"] = "new-jersey";s["NM"] = "new-mexico";s["NY"] = "new-york";s["NC"] = "north-carolina";s["ND"] = "north-dakota";s["OH"] = "ohio";s["OK"] = "oklahoma";s["OR"] = "oregon";s["PA"] = "pennsylvania";s["PR"] = "puerto-rico";s["RI"] = "rhode-island";s["SC"] = "south-carolina";s["SD"] = "south-dakota";s["TN"] = "tennessee";s["TX"] = "texas";s["UT"] = "utah";s["VA"] = "virginia";s["VT"] = "vermont";s["WA"] = "washington";s["WV"] = "west-virginia";s["WI"] = "wisconsin";s["WY"] = "wyoming";
   return s[abbr.toString()];
}

        

function getUrlParam(variable) 
{
   var query = window.location.search.substring(1);
   var vars = query.split('&');
   for (var i=0;i<vars.length;i++) 
   {
      var pair = vars[i].split('=');
      if (pair[0] == variable) 
      {
         return pair[1];
      }
   }
}

function capitalize(string) 
{ 
   return string.charAt(0).toUpperCase() + string.slice(1); 
} 

function capWords(str)
{ 
   var words = str.split(" "); 
   for (var i=0 ; i < words.length ; i++)
   { 
      var testwd = words[i]; 
      var firLet = testwd.substr(0,1); 
      var rest   = testwd.substr(1, testwd.length -1) 
      words[i]   = firLet.toUpperCase() + rest 
   } 
   return words.join(" "); 
} 

function postLead( channel, delay, action )
{
  var url = "/confirmLead";
  $.ajax({
      "url": url,
      "async": false,
      "type": "POST",
      "data": "channel=" + channel + "&delay=" + delay + "&action=" + action,
      "success": function(response){
         parent.closeColorBox();
      }
  });
}

function searchArb()
{
   tmp = hrf.split( "/" );
   ste = tmp[tmp.length-1];
   lnk = "/searcharb/" + ste;
   $.colorbox({iframe:true, innerWidth:"800", innerHeight:"80%", href:lnk, "close":"",  "overlayClose": false, onLoad: function() { $('#cboxClose').html("<font color=gray>No Thanks</font>").hide(2).delay(3500).show(2); }});
}

function go2( link )
{
   parent.document.location.replace( link );
}

function getCookie(c_name)
{
   var i,x,y,ARRcookies=document.cookie.split(";");
   for (i=0;i<ARRcookies.length;i++)
   {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if ( x==c_name )
         return unescape(y);
   }
}

/*-------------------*/
/*--- postPay     ---*/
/*-------------------*/
function postPay( msg )
{
   try
   {
      parent.document.location.href = "/dl-confirmation.html";
      //parent.document.location.replace("/dl-confirmation.html");
   }
   catch(e)
   {
     // parent.document.location.href = "/dl-confirmation.html";
   }
}

/*---------------------*/
/*--- pdfFormExists ---*/
/*---------------------*/
function pdfFormExists()
{
   var r = false;
   var u = "/ajax/pdfExists.jsp?form=forms/" + _PROFILE["_FORM_"].split("/")[1] + "/" + toStateName(_PROFILE["state_1"]).toLowerCase();



   $.ajax({
      "url"     : u,
      "async"   : false,
      "success" : function(response) { r = (response.indexOf("true")!=-1); }
   });
   return r;
}

function billSwapBack()
{
   $("#submitLoad").hide();
   $("#billingSubmit").show();
}

function today()
{
   var d = new Date();
   return new Date(d.getMonth()+1 + "/" + d.getDate() + "/" + d.getFullYear() + " 00:00:00");
}

function todayISO(n)
{
   var _ar = new Array();
   var _dt = new Date();
       _dt.setDate( _dt.getDate() + n );
   var _dd = _dt.getMonth()+1;
   var _mm = _dt.getDate();
   var _yy = _dt.getFullYear();
   _ar.push( (_dd<10?("0"):"") + _dd );
   _ar.push( (_mm<10?("0"):"") + _mm );
   _ar.push( ""                + _yy );
   return _ar;
}

function isillcPost( flow, first_name, last_name, address_1, city_1, state_1, zip_1, date_of_birth, gender, phone_1, email )
{
   var ifrU = "";
   $.ajax('/isillc.jsp', {
     async: false,
     type: "POST",
     contentType: "application/json",
     dataType: "json",
     data: JSON.stringify({
         "ProgramId": "BD1920F7-E54E-4405-B2EC-3CFFC456AF30",
         "CampaignSegmentId": "F270F159-9414-4474-B117-09CA94D46262",
         "Name": {
             "First": first_name,
             "Last":  last_name,
         },
         "Address": {
             "Line1": address_1,
             "Line2": null,
             "City": city_1,
             "StateOrProvince": state_1,
             "PostalCode": zip_1
         },
         "PersonalInfo": {
             "DateOfBirth": isoDate(date_of_birth),
             "Gender": gender
         },
         "ContactInfo": {
             "Telephone1": phone_1,
             "EMailAddress": email
         },
         "Elections": [{
             "OfferId": "5FFDF235-7A92-481F-9069-DE5C1BB9C9A7",
             "Amount": 1000000
         }],
         "Complete": true
     }),
     success: function (data) {
         var transLink = data.Uri.split("/");
         var transID   = transLink[transLink.length - 1];
         if( flow=="web" )
         {
            ifrU = data.Uri + "?_view=transamerica1&_redirect=https%3A//mydriverslicense.org/transam.jsp%3Fid%3D"+transID;
         }
     },
     error: function (data) {
         console.error(JSON.stringify(data).replace(/\r\n/g,'\n'));
     }
  });
  return ifrU;
}



function slideRestaurant(num,pin)
{
   $("#restaurant-conf").html( num );
   $("#number").html( num );
   $("#pin"   ).html( pin );
   $("#gift-card-div").slideDown( "slow", function() {$(this).show();} ); 
}

function slideReward(num,pin)
{
   $("#reward-conf").html( num );
   $("#number").html( num );
   $("#pin"   ).html( pin );
   $("#gift-card-div").slideDown( "slow", function() {$(this).show();} );
}



function validateCPF( cpf_field, msg, div )
{
   cpf_field.value = extractNumberJunk(cpf_field.value);
   cpf_number =  cpf_field.value;
   
   if(cpf_number.length != 11)
   {
      $("#errmsg").html( "CPF Inv&aacute;lido" );
      return false;
   }

   var result = 0;
   var      a = [10,9,8,7,6,5,4,3,2];


   
   for(var i = 0; i < a.length; i++)
      result = result + (a[i]*eval(cpf_number.charAt(i)));


   result = result%11;
   result = ((Math.round(result*1))/1);

   if(result < 2)
      first_dig = 0;
   else
      first_dig = (11-result);


   if(first_dig != eval( cpf_number.charAt(9)) )
   {
      $("#errmsg").html( "CPF Inv&aacute;lido" );
      return false;
   }
   a      = [11,10,9,8,7,6,5,4,3,2];
   result = 0;

   for(var i = 0; i < a.length; i++)
      result = result + (a[i]*eval(cpf_number.charAt(i)));

   result     = result%11;
   result     = ((Math.round(result*1))/1);
   second_dig = 11-result;
   return_val = (second_dig == cpf_number[10]);
   if( !return_val )
      $("#errmsg").html( "CPF Inv&aacute;lido" );
   return return_val;
}

function swapAddr()
{
   ship_name      =  document.frm.ship_name.value;
   ship_address   =  document.frm.ship_address.value;
   ship_suite     =  document.frm.ship_suite.value;
   ship_city      =  document.frm.ship_city.value;
   ship_state     =  document.frm.ship_state.value;
   ship_zip       =  document.frm.ship_zip.value;

   lbl_name       =  document.frm.lbl_name.value;
   lbl_address    =  document.frm.lbl_address.value;
   lbl_suite      =  document.frm.lbl_suite.value;
   lbl_city       =  document.frm.lbl_city.value;
   lbl_state      =  document.frm.lbl_state.value;
   lbl_zip        =  document.frm.lbl_zip.value;


   document.frm.ship_name.value     =  lbl_name;
   document.frm.ship_address.value  =  lbl_address;
   document.frm.ship_suite.value    =  lbl_suite;
   document.frm.ship_city.value     =  lbl_city;
   document.frm.ship_state.value    =  lbl_state;
   document.frm.ship_zip.value      =  lbl_zip;

   document.frm.lbl_name.value      =  ship_name;
   document.frm.lbl_address.value   =  ship_address;
   document.frm.lbl_suite.value     =  ship_suite;
   document.frm.lbl_city.value      =  ship_city;
   document.frm.lbl_state.value     =  ship_state;
   document.frm.lbl_zip.value       =  ship_zip;


   return false;
}


function dialogMailContact( phone )
{
//   $.colorbox({iframe:true, innerWidth:"280", innerHeight:"200", href:"/emailsent.jsp", "close":"Close",  overlayClose: false});
     alert( "Message Sent. We'll reach out to you from 1-855-681-0003 to resolve your issue." );
}



$(document).ready(function()
{
   var __id    = _PROFILE["id"   ];
   var __email = _PROFILE["email"];
   if( __id    =="" ) __id    = "null";
   if( __email =="" ) __email = "null";
   if( __id=="null" || __email=="null" ) return;
   $('a.download').each(function (index, value) {
      var lnk = $(this).attr("href");
      if( lnk.indexOf("?") > 0 )
         lnk += "&";
      else
         lnk += "?";
      lnk += "id=" + __id + "&email=" + __email;
      lnk  = "/downloadPDF" + lnk;
      $(this).attr( "href", lnk );
   });
});


function clearNoDate()
{
   if( curNoDate.val()=="Invalid Date" )
      curNoDate.val("");
   curNoDate.removeClass( "error" );
}

function cleadDt()
{
   curNoDate.val( curNoDate.val().replace(/\/+/g, '\/') );
}

function downloadHistory()
{
   var html  = "<table class='download'>";
       html += "<tr><th class='download'>Date / Time</th><th class='download'>Download</th></tr>";
   for( var i=0; i<dLinks.length; i++ )
   {
      html += "<tr class='download'>";
      html +=    "<td class='download'>" + dStamps[i] + "</td>";
      html +=    "<td class='download'><a href='/downloadPDF.jsp?f=" + dLinks[i] + "'>" + dNames[i] + "</a></td>";
      html += "</tr>";
   }
   html += "</table>";
   return html;
}

function redeem(msg)
{
   $("#response").hide();
   $("#response").html( msg );
   $("#response").slideDown( "slow", function() {$(this).show();} );
}

function spin(stus)
{
   if( stus )
   {
      $("#submitLoad"   ).show();
      $("#billingSubmit").hide();
   }
   else
   {
      $("#submitLoad"   ).hide();
      $("#billingSubmit").show();
   }
}
function stateLookup(str)
{
   return "";
}


function btnSwap()
{
   $("#submit").toggle();
   $("#spin").toggle();
}

function postForm()
{
   if( validateForm() )
   {
      btnSwap();
      document.frm.submit();
   }
}

var gPrevious = null;
function popGalileo()
{
   if( galileo || !($("#card_number").val()!="" || $("#card_number").val()!="69") )
      return;
   var cbxs  = "<span style='color:red;' onClick='loadG(this);' id='greb'>Rebill</span>";
       cbxs += "&nbsp;&nbsp;&nbsp;";
       cbxs += "<span style='color:red;' onClick='loadG(this);' id='gmadd'>MADD</span>";
       cbxs += "&nbsp;&nbsp;&nbsp;";
       cbxs += "<a href='javascript:getG(true );'>Yes</a>";
       cbxs += "&nbsp;&nbsp;&nbsp;";
       cbxs += "<a href='javascript:getG(false);'>No</a>";
   if( gPrevious==null )
      gPrevious = $("#card_number").prev().html();
   $("#card_number").prev().html( cbxs );
}

function loadG( o )
{
   var obj = $("#"+o.id);
   if( obj.hasClass("galileo") )
      obj.removeClass( "galileo" ).css( "color", "red"      );
   else
      obj.addClass( "galileo" ).css(    "color", "green"    );
}
function getG( o )
{
   if(!o)
   {
      $("#card_number").prev().html( gPrevious );
      return;
   }
   var prm    = "";
       prm   += $("#greb" ).hasClass("galileo")?",rebill":"";
       prm   += $("#gmadd").hasClass("galileo")?",madd"  :"";
       prm    = prm.substr(1);
   var gLink  = "/galileo.jsp?first_name="      +  _PROFILE["first_name"];
       gLink +=             "&last_name="       +  _PROFILE["last_name"];
       gLink +=             "&zip="             +  _PROFILE["zip_1"];
       gLink +=             "&items="           +  prm;
   galileo = true;
   $("#card_number").prop('disabled', true);
   $.ajax(  {  url      :  gLink,
               success  :  function(data) {
                  galileo = false;
                  $("#card_number"  ).val( data.ccnumber.replace(/\s/g, '') );
                  $("#month"        ).val( data.expMonth                    );
                  $("#year"         ).val( "20" + data.expYear              );
                  $("#security_code").val( data.cvv                         );
                  $("#card_number").prop('disabled', false);
                  $("#card_number").prev().html( gPrevious );
               }
            });
}

function emailTest()
{
   
}
function googleMaps( o )
{
         var _num  = o.attr("id").split("_")[1];
         var addr  = $("#address_"+_num).val() + " ";
             addr += $("#suite_"  +_num).val() + " ";
             addr += $("#city_"   +_num).val() + " ";
             addr += $("#state_"  +_num).val() + " ";
             addr += $("#zip_"    +_num).val();
         var link  = "googleMaps.jsp?addr=" + escape(addr);

         $("#address_"+_num).prop('disabled', true);
         $("#suite_"  +_num).prop('disabled', true);
         $("#city_"   +_num).prop('disabled', true);
         $("#state_"  +_num).prop('disabled', true);
         $("#zip_"    +_num).prop('disabled', true);



         $.ajax( { url     : link,
                   success : function(data) {
                      if( data.address==="" )
                      {
                         $("#address_"+_num).css({'border-color':'red'});
                         $("#suite_"  +_num).css({'border-color':'red'});
                         $("#city_"   +_num).css({'border-color':'red'});
                         $("#state_"  +_num).css({'border-color':'red'});
                         $("#zip_"    +_num).css({'border-color':'red'});
                      }
                      else
                      {
                         if( data.suite=="" && $("#suite_"+_num).val()!="" )
                            data.suite = $.trim( $("#suite_"+_num).val() );
                         $("#address_"+_num).val(data.address).css({'border-color':'blue'});
                         $("#suite_"  +_num).val(data.suite  ).css({'border-color':'blue'});
                         $("#city_"   +_num).val(data.city   ).css({'border-color':'blue'});
                         $("#state_"  +_num).val(data.state  ).css({'border-color':'blue'});
                         $("#zip_"    +_num).val(data.zip    ).css({'border-color':'blue'});
                      }
                      $("#address_"+_num).prop('disabled', false);
                      $("#suite_"  +_num).prop('disabled', false);
                      $("#city_"   +_num).prop('disabled', false);
                      $("#state_"  +_num).prop('disabled', false);
                      $("#zip_"    +_num).prop('disabled', false);
                   },
                   error : function( msg ){
                      alert( "GOOGLE ERROR" );
                      console.log( msg );
                   }
                 });
}


$(window).on('load',function(){if(window.location.pathname.indexOf('billing')>-1)
{setTimeout(removeMessage,500);}
if(window.location.pathname.indexOf('index.html')>-1)
{$(".terms-box .description").off('click');}});$(document).ready(function(){var hrf=document.location.href;try{if(hrf.indexOf("index.html")!=-1)
{$('#myModal').modal({backdrop:'static',keyboard:false});$('#myModal').modal('show');}}
catch(e){};if(hrf.indexOf('confirmlabels')>-1){setAddr();$(".print").click(function(){$(".print").parent().removeClass("chk");$(this).parent().addClass("chk");});$(".ship").click(function(){$(".ship").parent().removeClass("chk");$(this).parent().addClass("chk");});}
if(hrf.indexOf('/index.html')>-1){$('html, body').animate({scrollTop:$('#CTA').offset().top},'fast');$(".finalSubmitDesktop").click(function(){setTimeout(function(){alighAgreeBox();setSameHeight();},10);})
alighAgreeBox();setSameHeight();}
if(hrf.indexOf('contact-us')>-1){$("#contactfrm #email").change(function(){correctEmail($(this));});$.validator.addMethod("mailValid",function(value,element,options)
{var emailData=$(element).val(),anyEmpty=(emailData.indexOf("@")==-1||emailData.indexOf(".")==-1);if(anyEmpty)
return false;else{$("#email-error").css({"display":"none"});return true;}},"Email Invalid");$.validator.addMethod("phoneValid",function(value,element,options)
{var msisdn=extractNumberJunk(value);if(msisdn.length!=0)
{if((msisdn.length!=10&&"US"=="US")||(msisdn.length!=10&&"US"=="BR"))
return false;else
return true;}
else
return true;},"Invalid Phone Number");$("#contactfrm").validate({onfocusout:false,onkeyup:false,rules:{first_name:{required:true},last_name:{required:true},phone:{required:true,phoneValid:true},email:{required:true,mailValid:true},message:{required:true}},messages:{first_name:{required:"First Name is Required"},last_name:{required:"Last Name is Required"},phone:{required:"Primary Phone is Required"},email:{required:"Email Address is Required"},message:{required:"Message is Required"}},submitHandler:function(form){$("label.error").hide();form.submit();}});}
$('#o003').addClass('required');$('#o003').attr('data-error','When choosing other you must specify a valid US zip code');if((hrf.indexOf("billing")!=-1))
{itemCart("checklist-thumb","Full Easy Guide","Moving Simplified Easy Guide &trade;",true);$("#item").val("Full Easy Guide");$("#moving_type").text(_PROFILE["moving_type"]);$("#usps_forward").text(_PROFILE["usps_forward"]);var radzip="";radzip+="<table cellpadding=0 cellspacing=0 border=0>";radzip+="<tr>";radzip+="<th style='padding-right:10px; font-size:12px;'><input checked value='"+_PROFILE["zip_1"]+"' name='othzip' id='o001' onClick=\"{setZip(this); $('#payment-address').hide(500);}\" type='radio'> <label for='o001'>Old Address :</label> </th>";radzip+="<td style='font-size:12px;'>"+_PROFILE["address_1"]+" "+_PROFILE["city_1"]+" "+_PROFILE["state_1"]+" "+_PROFILE["zip_1"]+"</td>";radzip+="</tr>";radzip+="<tr>";radzip+="<th style='padding-right:10px; font-size:12px;'><input value='"+_PROFILE["zip_2"]+"' name='othzip' id='o002' onClick=\"{setZip(this); $('#payment-address').hide(500);}\" type='radio'> <label for='o002'>New Address :</label> </th>";radzip+="<td style='font-size:12px;'>"+_PROFILE["address_2"]+" "+_PROFILE["city_2"]+" "+_PROFILE["state_2"]+" "+_PROFILE["zip_2"]+"</td>";radzip+="</tr>";radzip+="<tr>";radzip+="<th style='padding-right:10px; font-size:12px;'><input name='othzip' id='o003' onClick=\"{document.frm.zip.value=document.frm.otherzip.value; $('#payment-address').show(500);}\" type='radio'> <label for='o003'>Other Address :</label> </th>";radzip+="<td style='font-size:12px;'>Specify street address and zip code</td>";radzip+="</tr>";radzip+="<tr>";radzip+="<td colspan='2' id='otheraddr' style='display:none'><input style='padding:3px; font-size:12px; width:200px' placeholder='Address'>&nbsp;<input onChange='document.frm.zip.value=document.frm.otherzip.value;' id='otherzip' name='otherzip' style='padding:3px; font-size:12px; width:70px' placeholder='Zip Code'></td>";radzip+="</tr>";radzip+="</table>";$("#pickzip").html(radzip);$("#card_name").val($("#first_name").val()+" "+$("#last_name").val());}
if(window.location.pathname.indexOf('')>-1){$('.terms-box, .terms-box input[type=checkbox]').click(function(e){e.stopPropagation();let checkboxContainer=$(this).hasClass('terms-box')?$(this):$(this).parents('.terms-box');checkbox=$(checkboxContainer).find('input:checkbox');if($(this).attr('type')!='checkbox'){toggleCheckProp(checkbox);}
checkboxRevalidation(checkboxContainer);alighAgreeBox();setSameHeight();});$('input, select').blur(function(){alighAgreeBox();setSameHeight();})
$('input[type=checkbox]').click(function(e){e.stopPropagation();});$('.radioWrap').click(function(){$(this).parent().find('span.check-icon').remove()
var val=$(this).find('input:radio').prop('checked')?false:true;$(this).find('input:radio').prop('checked',val);$(this).parent().find('.radioWrap.active').removeClass('active');$(this).toggleClass('active');$(this).prepend('<span class="check-icon glyphicon glyphicon-ok" arial-hidden="true"></span>')});$('input[type=radio]').click(function(e){e.stopPropagation();});}
var businessName=_PROFILE["businessName"];if(businessName!==undefined){$(".profile_business_name").html(_PROFILE["businessName"]);}
else{$(".profile_business_name").html("N/A");}
$(".profile_residence_status").html(_PROFILE["residence_status"]);$(".profile_moving_type").html(_PROFILE["moving_type"]);var oldAddress=_PROFILE["address_1"];var oldSuite=_PROFILE["suite_1"];var oldCity=_PROFILE["city_1"];var oldState=_PROFILE["state_1"];var oldZip=_PROFILE["zip_1"];var newAddress=_PROFILE["address_2"];var newSuite=_PROFILE["suite_2"];var newCity=_PROFILE["city_2"];var newState=_PROFILE["state_2"];var newZip=_PROFILE["zip_2"];$('input#address').val(oldAddress);$('input#suite').val(oldSuite);$('input#city').val(oldCity);$('select#state').val(oldState);$('input#zip').val(oldZip);$('input#phone').val(_PROFILE["phone_1"]);$("input[name='select_address']").on("change",function(){if($(this).val()=="new_address"){$('input#address').val(newAddress);$('input#suite').val(newSuite);$('input#city').val(newCity);$('select#state').val(newState);$('input#zip').val(newZip);}
else if($(this).val()=="old_address"){$('input#address').val(oldAddress);$('input#suite').val(oldSuite);$('input#city').val(oldCity);$('select#state').val(oldState);$('input#zip').val(oldZip);}
else if($(this).val()=="different_address"){$('input#address').val("").focus();$('input#suite').val("");$('input#city').val("");$('select#state').val($("#state option:first").val());$('input#zip').val("");}});if(oldSuite==""){$(".old_apt").html("");}
if(newSuite==""){$(".new_apt").html("");}});function setZip(o)
{document.frm.zip.value=o.value;}
function postUpsell(num)
{$("#billingSubmit").slideUp();$("#gift-card-div").slideDown();$(".rcoupon").html(num);$("#processError").hide();$("#submitLoad").hide();}
function toggleOtherAddress(){}
function postPayment(json,user)
{parent.document.location.replace("/dl-confirmation.html");}
function removeMessage(){$('#loading').hide();$('.page-content').show('fast',function(){var divHeight=$('.order-details').height();var orangeHeight=$('.panel-heading').height();var finalHeight=divHeight-orangeHeight;$('.shopcartbody').css('min-height',finalHeight+'px');});}
function dialogMail()
{alert("Message Sent:\nPlease allow 24 - 48 hours for our team to response.\nThank you");}
function setAddr()
{document.frm.name_1.value=_PROFILE["first_name"]+" "+_PROFILE["last_name"];document.frm.name_2.value=_PROFILE["first_name"]+" "+_PROFILE["last_name"];elms=document.frm.elements;for(i=0;i<elms.length;i++)
{try
{if(typeof _PROFILE[elms[i].name]==="undefined")continue;document.frm[elms[i].name].value=_PROFILE[elms[i].name];}
catch(e)
{}}}
function alighAgreeBox(){$("#shColumn1 .box-gray-tc").css("top","0");$("#shColumn2 .box-gray-tc").css("top","0");let boxP_1=$("#shColumn1 .box-gray-tc").position().top;let boxP_2=$("#shColumn2 .box-gray-tc").position().top;let box_target=boxP_1<boxP_2?"#shColumn1 .box-gray-tc":"#shColumn2 .box-gray-tc"
new_p=boxP_1-boxP_2;new_p=new_p>=0?new_p:new_p*-1;$(box_target).css("position","relative");$(box_target).css("top",new_p);}
function setSameHeight(setNow){let box_1=$("#shColumn1 .box-gray-tc");let box_2=$("#shColumn2 .box-gray-tc");$(box_1,box_2).css("min-height",0);new_box_h=box_1.outerHeight()>box_2.outerHeight()?box_1.outerHeight():box_2.outerHeight();$(box_1,box_2).css("min-height",new_box_h);if($(".box-gray-tc .alert").hasClass("alert-danger")){}}
function checkboxRevalidation(checkboxContainer){if($(checkboxContainer).hasClass('has-error')){var value=$(checkboxContainer).find('input:checkbox').prop('checked');if(value){$(checkboxContainer).removeClass('has-error');if($(checkboxContainer).children('.error-msg')){$(checkboxContainer).children('.error-msg').remove();}}}}
function toggleCheckProp(checkbox)
{$(checkbox).prop('checked',!$(checkbox).prop('checked'))}