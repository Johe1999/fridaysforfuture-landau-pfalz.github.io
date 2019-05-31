$(document).ready(function() {
    $.ajax({
        url: "https://fff-api.dmho.de/v1/scrape/list2"
    }).then(function(data) {
        var msg = '<a href="https://fridaysforfuture.de/streiktermine/">Kein Streik geplant</a>';
        for (var entry of data["list"]) {
            if (entry["city"] == "Landau") {
              msg = entry["time"] + " (" + entry["place"] + ")";
            }
        }
       $('#next-strike-ld').prepend(msg);
    });
});