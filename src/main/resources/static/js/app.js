var app = (function(){

    var author = "";
    var blueprints = [];

    function setAuthorName(author) {
        author = author;
    }

	function updateBlueprintTable() {
        blueprints.map(function (blueprint) {
            var newRow = "<tr><td>" + blueprint.name + "</td><td>" + blueprint.points.length + "</td></tr>";
            $("#blueprint-table tbody").append(newRow);
        });
        var totalPoints = blueprints.reduce(function (accumulator, blueprint) {
            return accumulator + blueprint.points.length;
        }, 0);
        $("#total-points").text("Total user points: " + totalPoints);
    }

	function getBlueprintsByAuthor() {
        author = $("#author").val();
		$("#blueprint-table tbody").empty();
		$("#author-content").text(author + "'s blueprints: ");
        apimock.getBlueprintsByAuthor(author, function (data) {
            blueprints = data.map(function (blueprint) {
                return { name: blueprint.name, points: blueprint.points };
            });
            updateBlueprintTable(); 
        });
    }

	return {
	    getBlueprintsByAuthor: getBlueprintsByAuthor,
        setAuthorName: setAuthorName
	}
})();
