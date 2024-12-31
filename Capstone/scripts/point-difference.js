document.addEventListener("DOMContentLoaded", function () {
    // Define file paths for each table
    const files = {
        table1: "Points_Comparsion_NWSL_2024_Original.csv",
        table2: "Points_Comparsion_NWSL_2024_Allyson_Schlegel.csv",
        table3: "Points_Comparsion_NWSL_2024_Ashley_Sanchez.csv",
        table4: "Points_Comparsion_NWSL_2024_Asisat_Oshoala.csv",
        table5: "Points_Comparsion_NWSL_2024_Barbra_Banda.csv",
        table6: "Points_Comparsion_NWSL_2024_Croix_Bethune.csv",
        table7: "Points_Comparsion_NWSL_2024_Débora_Cristiane_de_Oliveira.csv",
        table8: "Points_Comparsion_NWSL_2024_Ella_Stevens.csv",
        table9: "Points_Comparsion_NWSL_2024_Esther_González.csv",
        table10: "Points_Comparsion_NWSL_2024_Mallory_Swanson.csv",
        table11: "Points_Comparsion_NWSL_2024_Marta.csv",
        table12: "Points_Comparsion_NWSL_2024_Olivia_Moultrie.csv",
        table13: "Points_Comparsion_NWSL_2024_Racheal_Kundananj.csv",
        table14: "Points_Comparsion_NWSL_2024_Sophia_Smith.csv",
        table15: "Points_Comparsion_NWSL_2024_Temwa_Chawinga.csv",
        table16: "Points_Comparsion_NWSL_2024_Trinity_Rodman.csv",
        table17: "Points_Comparsion_NWSL_2024_Tyler_Lussi.csv",
        table18: "Points_Comparsion_NWSL_2024_Vanessa_DiBernardo.csv",
        table19: "Points_Comparsion_NWSL_2024_Yazmeen_Ryan.csv",
    };

    // Sentences corresponding to each table
    const sentences = {
        table1: "This is the Original Rank Result.",
        table2: "Without Allyson Schlegel, Chicago Red Stars will drop 3 rank",
        table3: "Without Ashley Sanchez, North Carolina Courage will drop 2 rank.",
        table4: "Without Asisat Oshoala, Bay FC will drop 2 rank.",
        table5: "Without Barbra Banda, Orlando Pride will drop 3 rank",
        table6: "Without Croix Bethune, Washington Spirit will drop 2 rank.",
        table7: "Without Débora, Kansas City Current won't changed",
        table8: "Without Ella Stevens' ranking, NJ/NY Gothan FC will drop 2 rank.",
        table9: "Without Esther González, NJ/NY Gothan FC will drop 2 rank.",
        table10: "Without Mallory Swanson, Chicago Red Stars will drop 5 rank.",
        table11: "Without Marta's performance,  Orlando Pride will drop 3 rank.",
        table12: "Without Olivia Moultrie's performance, Portland Thorns FC won't changed.",
        table13: "Without Racheal Kundananj's performance, Bay FC will drop 1 rank.",
        table14: "Without Sophia Smith, Portland Thorns FC will drop 6 rank.",
        table15: "Without Temwa Chawinga, Kansas City Current will drop 1 rank.",
        table16: "Without Trinity Rodman Washington Spirit will drop 2 rank.",
        table17: "Even without Tyler Lussi, North Carolina Courage won't changed.",
        table18: "Even without Vanessa DiBernardo, Kansas City Current won't changed.",
        table19: "Without Yazmeen Ryan, NJ/NY Gothan FC will drop 1 rank."
    };

    // Event listener for table selection dropdown
    d3.select("#table-selector").on("change", function () {
        const selectedKey = d3.select(this).property("value");
        const sentence = sentences[selectedKey];
        const tableContainer = d3.select("#ranking-table");

        // Update sentence
        if (sentence) {
            tableContainer.html(`<p>${sentence}</p>`);
        } else {
            console.error("Sentence not found for selected option:", selectedKey);
        }

        // Load corresponding file
        const selectedFile = files[selectedKey];
        if (selectedFile) {
            loadCSV(selectedFile, (data) => {
                updateTable(data, false); // Pass `false` for subsequent updates
            });
        } else {
            console.error("Selected file key not found:", selectedKey);
        }
    });

    // Initial Load: Show the sentence for the first option
    const initialSentence = sentences["table1"];
    d3.select("#ranking-table").html(`<p>${initialSentence}</p>`);

    let previousData = [];

    // Helper function to load a CSV file
    function loadCSV(filePath, callback) {
        d3.csv(filePath)
            .then((data) => {
                prepareData(data);
                callback(data);
            })
            .catch((error) => {
                console.error(`Error loading CSV from ${filePath}:`, error);
            });
    }

    // Initial load: Load the first table
    loadCSV(files.table1, (data) => {
        updateTable(data, true); // Pass `true` for the initial load
    });

    // Function to prepare and clean data
    function prepareData(data) {
        data.forEach((d) => {
            d.Rank = parseInt(String(d.Rank).trim(), 10); // Parse and clean rank
            d.P = +d.P;
            d.W = +d.W;
            d.D = +d.D;
            d.L = +d.L;
            d.PTS = +d.PTS;
        });
    }

    // Function to update the ranking table
    function updateTable(data, initialLoad) {
        // Sort by Rank as a number
        data.sort((a, b) => a.Rank - b.Rank);

        const table = d3.select("#ranking-table");

        // Create table structure if it doesn't exist
        if (table.select("thead").empty()) {
            table.append("thead")
                .append("tr")
                .selectAll("th")
                .data(["Rank", "", "Team", "P", "W", "D", "L", "PTS"])
                .enter()
                .append("th")
                .text((d) => d);

            table.append("tbody");
        }

        const tbody = table.select("tbody");

        // Clear all rows before binding new data
        tbody.selectAll("tr").remove();

        // Bind data to rows using index as the key to enforce order
        const rows = tbody.selectAll("tr").data(data, (d, i) => i);

        // Handle entering rows
        const newRows = rows.enter()
            .append("tr");

        newRows.selectAll("td")
            .data((row) => [
                row.Rank,
                row.Image
                    ? `<img src="${row.Image}" alt="${row.Team} Logo" style="height: 20px; width: 20px;">`
                    : "",
                row.Team,
                row.P,
                row.W,
                row.D,
                row.L,
                row.PTS,
            ])
            .enter()
            .append("td")
            .html((value) => value);

        // Merge existing rows with new data
        const mergedRows = rows.merge(newRows);

        // Update cell contents
        mergedRows.selectAll("td")
            .data((row) => [
                row.Rank,
                row.Image
                    ? `<img src="${row.Image}" alt="${row.Team} Logo" style="height: 20px; width: 20px;">`
                    : "",
                row.Team,
                row.P,
                row.W,
                row.D,
                row.L,
                row.PTS,
            ])
            .join(
                (enter) => enter.append("td").html((d) => d),
                (update) => update.html((d) => d)
            );

        // Highlight rows that changed
        mergedRows.each(function (row) {
            const currentRow = d3.select(this);

            const prev = previousData.find((d) => d.Team === row.Team);
            if (!initialLoad && (!prev || JSON.stringify(prev) !== JSON.stringify(row))) {
                currentRow.selectAll("td")
                    .style("color", "#e9a1ff")
                    .transition()
                    .duration(2000)
                    .style("color", "white");
            }
        });

        // Save current data for the next update
        previousData = [...data];
    }
});
