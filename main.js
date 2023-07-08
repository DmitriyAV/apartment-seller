const sources = $('#templateForResult').html();
const templates = Handlebars.compile(sources);


const renderApts = function (apartments) {
    $("#results").empty()
    $("#templateForResult").html()
    const newHTMLs = templates(apartments);
    $('#results').append(newHTMLs);
}

$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

renderApts(apartments) //renders apartments when page loads