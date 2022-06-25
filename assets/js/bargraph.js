google.charts.load("current", {
    packages: ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([

        ['Year', 'Price', {
            role: 'style'
        }],
        ["2001", 310000, 'fill-color: silver'],
        ["2002", 120000, 'fill-color: silver'],
        ["2004", 100000, 'fill-color: silver'],
        ["2003", 450000, 'fill-color: #00B074'],
        ["2001", 310000, 'fill-color: silver'],
        ["2002", 120000, 'fill-color: silver'],
        ["2004", 100000, 'fill-color: silver'],
        ["2004", 100000, 'fill-color: silver'],
        ["2004", 100000, 'fill-color: silver'],
        ['2005', 130000, 'fill-color: silver']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "none"
        },
        2
    ]);

    var options = {
        title: "",
        width: 400,
        height: 300,
        bar: {
            groupWidth: "95%"
        },
        legend: {
            position: "none"
        },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("bargraph"));
    chart.draw(view, options);
}