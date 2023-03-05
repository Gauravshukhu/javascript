function loadScript(src, callback) {
	var script = document.createElement("script");
	script.src = src;
	script.onload = function() {
		console.log("Loaded with SRC: " + src)
		callback(null, src);
	}
	script.onerror = function() {
		console.log("Script loaded with SRC:" + src);
		callback(new error("src got some error"))

	}

	document.body.appendChild(script);
}

function hello(src) {
	alert('hello my world' + src);
}


//pyramid of dom
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello)
function hello(error, src) {
	if (error) {
		console.log(error)
		sendEmergencyMessageToCeo();
		return
	}
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello)
function hello(error, src) {
	if (error) {
		console.log(error)
		sendEmergencyMessageToCeo();
		return
	}
}
      loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello)
                   function hello(error, src) {
	                  if (error) {
		            console.log(error)
		                   sendEmergencyMessageToCeo();
		                                  return
	}

}
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello)
                                   function hello(error, src) {
	                                         if (error) {
		                                     console.log(error)
		                                                  sendEmergencyMessageToCeo();
		                                                       return
	}
}
                           loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello)
                                                  function hello(error, src) {
	                                                       if (error) {
		                                                        console.log(error)
		                                                                sendEmergencyMessageToCeo();
		                                                                                       return
	}
}