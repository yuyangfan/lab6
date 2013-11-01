//signup.js 
// add your JavaScript code to this file

$(function() {
	
	$('label').addClass('required');
	var select = $('select[name="state"]');
        var option;
        var idx;
        var state;

        for(idx = 0; idx < usStates.length; ++idx) {
            state = usStates[idx];
            option = $(document.createElement('option'));
            option.attr('value', state.abbreviation);
            option.html(state.name);
            select.append(option);
        }


	$('.signup-form').submit(function(){
		//select a descendant input element with the name "addr-1"
	    var signupForm = $(this);
	    var addr1Input = signupForm.find('input[name="addr-1"]');
	    var addr1Value = addr1Input.val();
	    
	    if (addr1Value.length > 0) {
	    	var zipInput = signupForm.find('input[name="zip"]');
	    	var zipValue = zipInput.val();
	    	if(zipValue.length === 0 {
	    		alert("Zip must be provided if an address is provided!");
	    		return false;
	    	}else{
	    		return true;
	    	}
	    }else {
	    	alert("Address must be provided!");
	    	return false;
	    }
	});

	 $('.cancel-signup').click(function(){
	 	$('.cancel-signup-modal').modal();
	 });

	 $('.btn-abandon').click(function(){
	 	window.location = 'http://www.google.com';
	 });
});