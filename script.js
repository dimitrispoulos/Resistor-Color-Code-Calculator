/*
    Resistor Color Code Calculator - JavaScript
    Author: Dimitrios Poulos
    Description: Handles SVG preview updates, band visibility and resistance calculation logic.
*/



/* Color Mapping */
var band_colors =
{
    "0":"#222222", "1":"#8B4513", "2":"#cc2200",
    "3":"#ff6600", "4":"#ccaa00", "5":"#2d8c2d",
    "6":"#1a5fb5", "7":"#7a4fbe", "8":"#888888",
    "9":"#e0e0e0",

    "10":"#8B4513", "100":"#cc2200", "1000":"#ff6600",
    "10000":"#ccaa00", "100000":"#2d8c2d", "1000000":"#1a5fb5",
    "10000000":"#7a4fbe", "100000000":"#888888", "1000000000":"#e0e0e0",
    "0.1":"#d4af37", "0.01":"#c0c0c0"
};




// Function that updates the fill color of each SVG band based on the current dropdown selections. Also shows/hides bands 4, 5, 6 based on the number of bands.
function update_svg()
{
    var bands_number = parseInt(document.getElementById("bands_number").value);

    // Updates the first 3 bands (always visible) if selected.
    if(document.getElementById("band1").value != "")
    {
        document.getElementById("svg_band1").setAttribute("fill", band_colors[document.getElementById("band1").value]);
        document.getElementById("band1").style.borderColor = band_colors[document.getElementById("band1").value];
    }
    if(document.getElementById("band2").value != "")
    {
        document.getElementById("svg_band2").setAttribute("fill", band_colors[document.getElementById("band2").value]);
        document.getElementById("band2").style.borderColor = band_colors[document.getElementById("band2").value];
    }
    if(document.getElementById("band3").value != "")
    {
        document.getElementById("svg_band3").setAttribute("fill", band_colors[document.getElementById("band3").value]);
        document.getElementById("band3").style.borderColor = band_colors[document.getElementById("band3").value];
    }

    // Resets optional SVG bands to hidden.
    document.getElementById("svg_band4").style.display = "none";
    document.getElementById("svg_band5").style.display = "none";
    document.getElementById("svg_band6").style.display = "none";

    // Paints and displays optional bands based on user's choices.
    if(bands_number == 4)
    {
        document.getElementById("svg_band4").style.display = "block";
        if(document.getElementById("band4").value != "")
        {
            document.getElementById("svg_band4").setAttribute("fill", band_colors[document.getElementById("band4").value]);
            document.getElementById("band4").style.borderColor = band_colors[document.getElementById("band4").value];
        }

    }
    else if(bands_number == 5)
    {
        document.getElementById("svg_band4").style.display = "block";
        if(document.getElementById("band4").value != "")
        {
            document.getElementById("svg_band4").setAttribute("fill", band_colors[document.getElementById("band4").value]);
            document.getElementById("band4").style.borderColor = band_colors[document.getElementById("band4").value];
        }
        document.getElementById("svg_band5").style.display = "block";
        if(document.getElementById("band5").value != "")
        {
            document.getElementById("svg_band5").setAttribute("fill", band_colors[document.getElementById("band5").value]);
            document.getElementById("band5").style.borderColor = band_colors[document.getElementById("band5").value];
        }
    }
    else if(bands_number == 6)
    {
        document.getElementById("svg_band4").style.display = "block";
        if(document.getElementById("band4").value != "")
        {
            document.getElementById("svg_band4").setAttribute("fill", band_colors[document.getElementById("band4").value]);
            document.getElementById("band4").style.borderColor = band_colors[document.getElementById("band4").value];
        }
        document.getElementById("svg_band5").style.display = "block";
        if(document.getElementById("band5").value != "")
        {
            document.getElementById("svg_band5").setAttribute("fill", band_colors[document.getElementById("band5").value]);
            document.getElementById("band5").style.borderColor = band_colors[document.getElementById("band5").value];
        }
        document.getElementById("svg_band6").style.display = "block";
        if(document.getElementById("band6").value != "")
        {
            document.getElementById("svg_band6").setAttribute("fill", band_colors[document.getElementById("band6").value]);
            document.getElementById("band6").style.borderColor = band_colors[document.getElementById("band6").value];
        }
    }
    
}





// Function that modifies the dropdown menus shown to the user based on the selected number of bands.
function update_bands()
{
    var bands_number = parseInt(document.getElementById("bands_number").value);

    // Hides all optional band rows.
    document.getElementById("band4_list").style.display = "none";
    document.getElementById("band5_list").style.display = "none";
    document.getElementById("band6_list").style.display = "none";

    if(bands_number == 3)
    {
        // Band 3 acts as Multiplier in 3-band resistor.
        document.getElementById("band3_label").textContent = "3rd Band (Multiplier):";
        document.getElementById("band3").innerHTML = `
        <option value="" disabled selected>-</option>
        <option value="1">Black (x1Ω)</option>
        <option value="10">Brown (x10Ω)</option>
        <option value="100">Red (x100Ω)</option>
        <option value="1000">Orange (x1KΩ)</option>
        <option value="10000">Yellow (x10KΩ)</option>
        <option value="100000">Green (x100KΩ)</option>
        <option value="1000000">Blue (x1MΩ)</option>
        <option value="0.1">Gold (x0.1Ω)</option>
        <option value="0.01">Silver (x0.01Ω)</option>
        `;
    }
    else if(bands_number == 4)
    {
        // Band 3 acts as Multiplier and band 4 as Tolerance in 4-band resistor.
        document.getElementById("band3_label").textContent = "3rd Band (Multiplier):";
        document.getElementById("band3").innerHTML = `
        <option value="" disabled selected>-</option>
        <option value="1">Black (x1Ω)</option>
        <option value="10">Brown (x10Ω)</option>
        <option value="100">Red (x100Ω)</option>
        <option value="1000">Orange (x1KΩ)</option>
        <option value="10000">Yellow (x10KΩ)</option>
        <option value="100000">Green (x100KΩ)</option>
        <option value="1000000">Blue (x1MΩ)</option>
        <option value="10000000">Violet (x10MΩ)</option>
        <option value="100000000">Gray (x100MΩ)</option>
        <option value="1000000000">White (x1GΩ)</option>
        <option value="0.1">Gold (x0.1Ω)</option>
        <option value="0.01">Silver (x0.01Ω)</option>
        `;

        document.getElementById("band4_label").textContent = "4th Band (Tolerance):";
        document.getElementById("band4").innerHTML = `
        <option value="" disabled selected>-</option>
        <option value="±1%">Brown (±1%)</option>
        <option value="±2%">Red (±2%)</option>
        <option value="±0.5%">Green (±0.5%)</option>
        <option value="±0.25%">Blue (±0.25%)</option>
        <option value="±0.1%">Violet (±0.1%)</option>
        <option value="±5%">Gold (±5%)</option>
        <option value="±10%">Silver (±10%)</option>
        `;
        document.getElementById("band4_list").style.display = "flex";
    }
    else if(bands_number == 5)
    {
        // Band 3 acts as 3rd digit, band 4 as Multiplier and band 5 as Tolerance in a 5-band resistor.
        document.getElementById("band3_label").textContent = "3rd Band (3rd Digit):";
        document.getElementById("band3").innerHTML = `
        <option value="" disabled selected>-</option>
        <option value="0">Black (0)</option>
        <option value="1">Brown (1)</option>
        <option value="2">Red (2)</option>
        <option value="3">Orange (3)</option>
        <option value="4">Yellow (4)</option>
        <option value="5">Green (5)</option>
        <option value="6">Blue (6)</option>
        <option value="7">Violet (7)</option>
        <option value="8">Gray (8)</option>
        <option value="9">White (9)</option>
        `;

        document.getElementById("band4_label").textContent = "4th Band (Multiplier):";
        document.getElementById("band4").innerHTML = `
        <option value="" disabled selected>-</option>
        <option value="1">Black (x1Ω)</option>
        <option value="10">Brown (x10Ω)</option>
        <option value="100">Red (x100Ω)</option>
        <option value="1000">Orange (x1KΩ)</option>
        <option value="10000">Yellow (x10KΩ)</option>
        <option value="100000">Green (x100KΩ)</option>
        <option value="1000000">Blue (x1MΩ)</option>
        <option value="0.1">Gold (x0.1Ω)</option>
        <option value="0.01">Silver (x0.01Ω)</option>
        `;
        document.getElementById("band4_list").style.display = "flex";
        document.getElementById("band5_list").style.display = "flex";
    }
    else if(bands_number == 6)
    {
        // Band 3 acts as 3rd digit, band 4 as Multiplier, band 5 as Tolerance and band 6 as Temperature Coefficient in a 6-band resistor.
        document.getElementById("band3_label").textContent = "3rd Band (3rd Digit):";
        document.getElementById("band3").innerHTML = `
        <option value="" disabled selected>-</option>
        <option value="0">Black (0)</option>
        <option value="1">Brown (1)</option>
        <option value="2">Red (2)</option>
        <option value="3">Orange (3)</option>
        <option value="4">Yellow (4)</option>
        <option value="5">Green (5)</option>
        <option value="6">Blue (6)</option>
        <option value="7">Violet (7)</option>
        <option value="8">Gray (8)</option>
        <option value="9">White (9)</option>
        `;

        document.getElementById("band4_label").textContent = "4th Band (Multiplier):";
        document.getElementById("band4").innerHTML = `
        <option value="" disabled selected>-</option>
        <option value="1">Black (x1Ω)</option>
        <option value="10">Brown (x10Ω)</option>
        <option value="100">Red (x100Ω)</option>
        <option value="1000">Orange (x1KΩ)</option>
        <option value="10000">Yellow (x10KΩ)</option>
        <option value="100000">Green (x100KΩ)</option>
        <option value="1000000">Blue (x1MΩ)</option>
        <option value="0.1">Gold (x0.1Ω)</option>
        <option value="0.01">Silver (x0.01Ω)</option>
        `;
        document.getElementById("band4_list").style.display = "flex";
        document.getElementById("band5_list").style.display = "flex";
        document.getElementById("band6_list").style.display = "flex";
    }
    
    update_svg();
}





// Function that formats large resistance values into more readable KΩ (Kilo-ohms) and MΩ (Mega-ohms).
function format_resistance(resistance)
{
    if(resistance >= 1000000)
        return resistance/1000000 + " MΩ (" + resistance + " Ω)";
    else if(resistance >= 1000)
        return resistance/1000 + " KΩ (" + resistance + " Ω)";
    else
        return resistance + " Ω";
}





// Function that calculates the resistance.
function calculate_resistance()
{
    var bands_number = parseInt(document.getElementById("bands_number").value);

    // Validates that bands 1, 2, 3 are selected.
    if(document.getElementById("band1").value == "" || document.getElementById("band2").value == "" || document.getElementById("band3").value == "")
    {
        document.getElementById("resistance_results").textContent = "⚠ Please select all bands!";
        return;
    }
    // Validates that optional bands (based on bands_number) are selected.
    if(bands_number >= 4 && document.getElementById("band4").value == "")
    {
        document.getElementById("resistance_results").textContent = "⚠ Please select all bands!";
        return;
    }
    if(bands_number >= 5 && document.getElementById("band5").value == "")
    {
        document.getElementById("resistance_results").textContent = "⚠ Please select all bands!";
        return;
    }
    if(bands_number >= 6 && document.getElementById("band6").value == "")
    {
        document.getElementById("resistance_results").textContent = "⚠ Please select all bands!";
        return;
    }


    // Start of calculations.
    var digit1 = parseInt(document.getElementById("band1").value);
    var digit2 = parseInt(document.getElementById("band2").value);
    var multiplier, resistance;
            
    if(bands_number == 3)
    {
        // 3-Band Formula: ((digit1 * 10) + digit2) * multiplier.
        multiplier = parseFloat(document.getElementById("band3").value);
        resistance = ((digit1 * 10) + digit2) * multiplier;
        document.getElementById("resistance_results").textContent = format_resistance(resistance);
    }
    else if(bands_number == 4)
    {
        // 4-Band Formula: ((digit1 * 10) + digit2) * multiplier ± tolerance.
        multiplier = parseFloat(document.getElementById("band3").value);
        var tolerance = document.getElementById("band4").value;
                
        resistance = ((digit1 * 10) + digit2) * multiplier;
        document.getElementById("resistance_results").textContent = format_resistance(resistance) + " " + tolerance;
    }
    else if(bands_number == 5)
    {
        // 5-Band Formula: ((digit1 * 100) + (digit2 * 10) + digit3) * multiplier ± tolerance.
        var digit3 = parseInt(document.getElementById("band3").value);
        multiplier = parseFloat(document.getElementById("band4").value);
        var tolerance = document.getElementById("band5").value;
        resistance = ((digit1 * 100) + (digit2 * 10) + digit3) * multiplier;
        document.getElementById("resistance_results").textContent = format_resistance(resistance) + " " + tolerance;
    }
    else if(bands_number == 6)
    {
        // 6-Band Formula: ((digit1 * 100) + (digit2 * 10) + digit3) * multiplier ± tolerance, temp coef.
        var digit3 = parseInt(document.getElementById("band3").value);
        multiplier = parseFloat(document.getElementById("band4").value);
        var tolerance = document.getElementById("band5").value;
        var temp_coef = document.getElementById("band6").value;
        resistance = ((digit1 * 100) + (digit2 * 10) + digit3) * multiplier;
        document.getElementById("resistance_results").textContent = format_resistance(resistance) + " " + tolerance + " " + temp_coef;
    }

}