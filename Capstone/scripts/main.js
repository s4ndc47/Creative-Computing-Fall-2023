d3.csv("NWSL_Attendance_2016_2023.csv").then(function(data) {

    data.forEach(function(d) {
        d.Attendance = parseInt(d.Attendance.replace(/,/g, ''), 10);
    });

    const svg = d3.select("svg");
    const tooltip = d3.select(".tooltip");

    // Set up the dimensions for the rectangles and the grid
    const rectWidth = 50;
    const rectHeight = 25;
    const rectPadding = 10;
    const rectsPerRow = 12;
    const rowPadding = 5;

    

    // Calculate the total width and height of the SVG needed
    const totalWidth = rectsPerRow * (rectWidth + rectPadding);
    const totalHeight = Math.ceil(data.length / rectsPerRow) * (rectHeight + rowPadding);
    svg.attr("width", totalWidth)
       .attr("height", totalHeight); // Set the SVG dimensions

    // Define a quantized color scale for attendance
    const colorScale = d3.scaleQuantize()
                         .domain([428, 34130])
                         .range(["#f4effc", "#e4d7f8", "#d6c1f4", "#c7acf0", "#b996ec", "#ab80e8", "#9c6be4", "#8e55e0"]);

    svg.selectAll("rect")
       .data(data)
       .enter()
       .append("rect")
       .attr("x", (d, i) => (i % rectsPerRow) * (rectWidth + rectPadding))
       .attr("y", (d, i) => Math.floor(i / rectsPerRow) * (rectHeight + rowPadding))
       .attr("width", rectWidth)
       .attr("height", rectHeight)
       .attr("fill", d => {
        // If Attendance is null or not a number, color it white
        return (d.Attendance === null || isNaN(d.Attendance)) ? 'white' : colorScale(d.Attendance)})
        .on("mouseover", (event, d) => {
            tooltip.style("display", "block")
                   .style("left", (event.pageX + 10) + "px")
                   .style("top", (event.pageY + 10) + "px")
                   .html(`${d.Date}<br>Attendance: ${isNaN(d.Attendance) ? 'Closed-door' : d.Attendance}<br><strong>${d.Home}</strong> v.s. <strong>${d.Away}</strong><br>${d.Venue}`);
        })        
       .on("mouseout", () => {
            tooltip.style("display", "none");
       });
}).catch(error => {
    console.error('Error loading the CSV:', error);
});
