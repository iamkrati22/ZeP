// All the code in this module is
// enclosed in closure
(function(exports) {

	// Helper function
	
    function executeOnClick(){
	// Function to be exposed
	var myElem = document.getElementByID('submit');
    myElem.onclick = function createObj2() {
        var username = document.getElementById("username");
        var password = document.getElementById("password");
        const obj = [{"username " : `${username}`,
                    "password" : `${password}`}];
        console.log(obj);
        return obj;
    }
    }
	// Export the function to exports
	// In node.js this will be exports
	// the module.exports
	// In browser this will be function in
	// the global object sharedModule
	exports.executeOnClick = executeOnClick;
	
})(typeof exports === 'undefined'?
			this['sharedModule']={}: exports);
