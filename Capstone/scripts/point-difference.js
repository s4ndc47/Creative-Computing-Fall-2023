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
        table2: "Allyson Schlegel's ranking information is shown here.",
        table3: "Ashley Sanchez's ranking details are now displayed.",
        table4: "Asisat Oshoala's performance metrics are presented.",
        table5: "Barbra Banda's results can be seen in this table.",
        table6: "Croix Bethune's data is loaded here.",
        table7: "Débora Cristiane de Oliveira's ranking is displayed.",
        table8: "Ella Stevens' ranking is shown in this table.",
        table9: "Esther González's performance metrics are presented.",
        table10: "Mallory Swanson's ranking details are now displayed.",
        table11: "Marta Vieira da Silva's performance metrics are loaded here.",
        table12: "Olivia Moultrie's data is displayed in this table.",
        table13: "Racheal Kundananj's performance metrics are presented.",
        table14: "Sophia Smith's ranking is displayed here.",
        table15: "Temwa Chawinga's ranking information is presented.",
        table16: "Trinity Rodman's performance data is shown here.",
        table17: "Tyler Lussi's ranking metrics are loaded here.",
        table18: "Vanessa DiBernardo's ranking data is displayed.",
        table19: "Yazmeen Ryan's performance details are presented here."
    };

    // Event listener for table selection dropdown
    d3.select("#table-selector").on("change", function () {
        const selectedKey = d3.select(this).property("value");

        // Update the ranking table container with the corresponding sentence
        const sentence = sentences[selectedKey];
        const tableContainer = d3.select("#ranking-table");

        if (sentence) {
            tableContainer.html(`<p>${sentence}</p>`); // Replace the table content with the sentence
        } else {
            console.error("Sentence not found for selected option:", selectedKey);
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

    // Event listener for table selection dropdown
    d3.select("#table-selector").on("change", function () {
        const selectedKey = d3.select(this).property("value");
        const selectedFile = files[selectedKey];
        if (selectedFile) {
            loadCSV(selectedFile, (data) => {
                updateTable(data, false); // Pass `false` for subsequent updates
            });
        } else {
            console.error("Selected file key not found:", selectedKey);
        }
    });

    function cleanRank(value) {
        return parseInt(value.replace(/[^\d]/g, ''), 10); // Remove non-numeric characters
    }
    
    function prepareData(data) {
        data.forEach((d) => {
            // Ensure d.Rank is a string before trimming and converting to number
            d.Rank = parseInt(String(d.Rank).trim(), 10); // Convert to string, trim, and parse as integer
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
