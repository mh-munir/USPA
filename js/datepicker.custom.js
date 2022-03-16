$(function(){

    $('#start_forwarding_date').datepicker({
        trigger:'#date_selector_1',
        autoHide:true,
    }).datepicker();
    $('#start_forwarding_date').click(function(){
        $('#date_selector_1').click();
    });

    $('#end_forwarding_date').datepicker({
        trigger:'#date_selector_2',
        autoHide:true,
    }).datepicker();

    $('#end_forwarding_date').click(function(){
        $('#date_selector_2').click();
    });
});