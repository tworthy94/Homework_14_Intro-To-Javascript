// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var ufoTable = d3.select("#ufo-table");

// Begin filter button commands
var submit = d3.select("#filter-btn");
var clear = d3.select("#clear-btn");
var def = d3.select("#default-btn");

// Clear table button
clear.on("click", function () {
    // Refresh page to clear table
});

// Show all sightings button
def.on("click", function () {

    // Prevent refreshing
    d3.event.preventDefault();

    data.forEach(function (tableData) {
        console.log(tableData);
        var row = ufoTable.append("tr");
        Object.entries(tableData).forEach(function ([key, value]) {
            console.log(key, value);

            // Append table with filtered
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

// Filter table button
submit.on("click", function () {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Prevent refreshing
    d3.event.preventDefault();

    // Update table cells with D3
    data.forEach(function (tableData) {
        if (tableData.datetime == inputValue) {
            console.log(tableData);
            var row = ufoTable.append("tr");
            Object.entries(tableData).forEach(function ([key, value]) {
                console.log(key, value);

                // Append table with filtered
                var cell = row.append("td");
                cell.text(value);
            });
        }
    });
});