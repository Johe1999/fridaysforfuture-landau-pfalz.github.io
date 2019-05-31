$(document).ready(function() {
    $.ajax({
        url: "https://fff-api.dmho.de/v1/scrape/groups"
    }).then(function(data) {
       $('#next-strike-ld').prepend(data);
    });
});