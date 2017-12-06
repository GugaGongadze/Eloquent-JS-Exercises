var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
  ];

if (typeof module != "undefined" && module.exports)
    module.exports = MOUNTAINS;

function buildTable(data) {
    var table = document.createElement('table');
    var headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    var headerRowTexts = Object.keys(data[0]);

    for (var headerRowText in headerRowTexts) {
        var heading = document.createElement('th');
        var headingText = document.createTextNode(headerRowTexts[headerRowText]);
        heading.appendChild(headingText);
        headerRow.appendChild(heading);
    }

    for (var i = 0; i < data.length; i++) {
        var tableRow = document.createElement('tr');
        table.appendChild(tableRow);
        for (var value in data[i]) {
            var tableCell = document.createElement('td');
            tableRow.appendChild(tableCell);
            var tableCellText = document.createTextNode(data[i][value]);
            if (typeof data[i][value] == 'number')
                tableCell.style.textAlign = 'right';
            tableCell.appendChild(tableCellText);
        }
    }
    return table;
}

document.body.appendChild(buildTable(MOUNTAINS));