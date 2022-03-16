
var Frontpage=function()
{var exports={};function public_function()
{private_function();}
exports.public_function=public_function;function private_function()
{}
function init()
{}
exports.init=init;return exports;}
var frontpage=new Frontpage();frontpage.public_function();$(document).ready(function(){frontpage.init();});function track(typ)
{console.log("track:"+typ);$.ajax({"url":"/ajax/track.jsp?type="+typ});}
