google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Effort', 'Amount given'],
        ['Monthly Profit', 64],
        ['', 36],
    ]);

    var options = {
        legend: 'none',
        pieSliceText: 'none',
        pieHole: 0.8,
        legend: 'none',
        slices: {
            0: {
                color: '#00B074'
            },
            1: {
                enableInteractivity: false,
                color: '#cccccc'

            }
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
    chart.draw(data, options);
}