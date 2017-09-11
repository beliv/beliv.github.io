var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-foreground', {
    videoId: 'gKq-8-k3z-Q', // YouTube Video ID
    playerVars: {
      autoplay: 1,        // Auto-play the video on load
      controls: 0,        // Show pause/play buttons in player
      showinfo: 0,        // Hide the video title
      modestbranding: 1,  // Hide the Youtube Logo
      loop: 1,            // Run the video in a loop
      fs: 0,              // Hide the full screen button
      cc_load_policy: 0, // Hide closed captions
      iv_load_policy: 3,  // Hide the Video Annotations
      autohide: 0,         // Hide video controls when playing
      playlist: 'dUpyhoDv26U'
    },
    events: {
      onReady: function(e) {
        e.target.mute();
      }
    }
  });
}


$(document).ready(function(e) {
  $('.sound').on('click', function(){
    $('#video-foreground').toggleClass('mute');
    $('.volume-icon').toggleClass('fa-volume-up', 'fa-volume-off');
    if($('#video-foreground').hasClass('mute')){
      player.mute();
    } else {
      player.unMute();
    }
  });
});

//
// $( document ).ready(function( $ ) {
// 	// variable to hold request
// 	var request;
// 	// bind to the submit event of our form
// 	$("#formulier-vergaderaantallen").submit(function(event){
// 		// abort any pending request
// 		if (request) {
// 			request.abort();
// 		}
// 		// setup some local variables
// 		var $form = $(this);
// 		// let's select and cache all the fields
// 		var $inputs = $form.find("input, select, button, textarea");
// 		// serialize the data in the form
// 		var serializedData = $form.serialize();
//
// 		// let's disable the inputs for the duration of the ajax request
// 		// Note: we disable elements AFTER the form data has been serialized.
// 		// Disabled form elements will not be serialized.
// 		$inputs.prop("disabled", true);
// 		$('#result').text('Sending data...');
//
// 		// fire off the request to /form.php
// 		request = $.ajax({
// 			url: "https://script.google.com/macros/s/AKfycbx1Qf5v8faZTPSUgv07ee-bL3OKuVUYD4REpWN53X7S88Xh8lfO/exec",
// 			type: "post",
// 			data: serializedData
// 		});
//
// 		// callback handler that will be called on success
// 		request.done(function (response, textStatus, jqXHR){
// 			// log a message to the console
// 			$('#result').html('<a href="https://docs.google.com/spreadsheets/d/1wB58j0ahcBC-LW4mlDx20aCMhPS6zyMPGJWzBTVEmF4/edit?usp=sharing" target="_blank">Success - see Google Sheet</a>');
// 			console.log("Hooray, it worked!");
// 		});
//
// 		// callback handler that will be called on failure
// 		request.fail(function (jqXHR, textStatus, errorThrown){
// 			// log the error to the console
// 			console.error(
// 				"The following error occured: "+
// 				textStatus, errorThrown
// 			);
// 		});
//
// 		// callback handler that will be called regardless
// 		// if the request failed or succeeded
// 		request.always(function () {
// 			// reenable the inputs
// 			$inputs.prop("disabled", false);
// 		});
//
// 		// prevent default posting of form
// 		event.preventDefault();
// 	});
// });
