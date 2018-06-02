/*jslint devel: true */
function calculateBMI() {
    'use strict';
    var weightTxt, heightTxt, bmiTxt, upperLimit, lowerLimit;
    weightTxt = parseFloat(document.getElementById('weightTxt').value);
    heightTxt = parseFloat(document.getElementById('heightTxt').value);
    bmiTxt = parseFloat(weightTxt / (heightTxt * heightTxt));
    lowerLimit = 18.5 * (heightTxt * heightTxt);
    upperLimit = 25 * (heightTxt * heightTxt);
    if (bmiTxt < 18.5) {
        alert("Warning!! You are underweight!!");
        document.getElementById('currentBMI').innerHTML = bmiTxt;
        document.getElementById('targetWeight').innerHTML = "Greater than " + lowerLimit.toPrecision(2);
    } else if (bmiTxt >= 18.5 && bmiTxt < 25) {
        alert("Congratulations, you are healthy!!");
        document.getElementById('currentBMI').innerHTML = bmiTxt;
        document.getElementById('targetWeight').innerHTML = "Between " + lowerLimit.toPrecision(2) + " and " + upperLimit.toPrecision(2) + ".";
    } else if (bmiTxt >= 25 && bmiTxt < 30) {
        alert("Warning!! You are overweight!!");
        document.getElementById('currentBMI').innerHTML = bmiTxt;
        document.getElementById('targetWeight').innerHTML = "Less than " + upperLimit.toPrecision(2);
    } else if (bmiTxt >= 30) {
        alert("Warning!! You are obese!!");
        document.getElementById('currentBMI').innerHTML = bmiTxt;
        document.getElementById('targetWeight').innerHTML = "Less than " + upperLimit.toPrecision(2);
    }
    document.getElementById('targetWeight').innerHTML.style.color = "green";
}

function resetValues() {
    'use strict';
    document.getElementById('weightTxt').value = '';
    document.getElementById('heightTxt').value = '';
    document.getElementById('currentBMI').innerHTML = '';
    document.getElementById('targetWeight').innerHTML = '';
}
