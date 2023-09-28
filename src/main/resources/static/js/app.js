apiBlueprint=(function(){

    var selectedAuthor = null;
    var blueprintData = [];

	return {
		setSelectedAuthor:function(authname){
		    selectedAuthor = authname;
		},
		getSelectedAuthor:function(callback){
			callback(
				selectedAuthor
			);
		},
	}

})();
