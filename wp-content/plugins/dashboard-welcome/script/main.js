/**
 * Jquery for dashboard admin panel
 */
jQuery(document).ready(function ($) {
	/**
	 * editing native functions, 
	 * show welcome panel if it is uncheked after 40 seconds.
	 */
	if (!$('#wp_welcome_panel-hide').is(":checked")) {
		setTimeout(() => {
			$('#wp_welcome_panel-hide').click();
		}, 4000);
	}


	/**
	 * Grab form data
	 */

	$("#wd_feedback_btn").on("click", function (e) {
		e.preventDefault();

		// only run function when there is actually feedback
		// let feedback_btn = document.getElementById('#wd_feedback_btn');
		let feedback_message = document.getElementById('wd_feedback');
		let reappear = document.querySelector('.reappear');

		if (feedback_message.value !== '') {
			console.log(feedback_message.value);
		} else {
			reappear.classList.add('display_on');
		}
	});

	/**
	 * remove feedback message on keypress
	 */

	$('#wd_feedback').on('keypress', function(){
		let reappear = document.querySelector('.reappear');
		reappear.classList.remove('display_on');
	})
});