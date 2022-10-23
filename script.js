

function addTime () {
    var name = document.getElementById("name_input").value;
    var split1 = (Number(document.getElementById("mile1min").value)*60)+Number(document.getElementById("mile1sec").value);
    var split2 = (Number(document.getElementById("mile2min").value)*60)+Number(document.getElementById("mile2sec").value) - split1;
    var split3 = (Number(document.getElementById("mile3min").value)*60)+Number(document.getElementById("mile3sec").value) - split2 - split1;

    function secondsToMinutes (split) {
        return Math.floor(split/60)+" minutes "+split%60 + " seconds"
    }

    console.log(name);
    console.log(secondsToMinutes(split1));
    console.log(secondsToMinutes(split2));
    console.log(secondsToMinutes(split3));

    // Find a <table> element with id="myTable":
    var table = document.getElementById("table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = name;
    cell2.innerHTML = secondsToMinutes(split1);
    cell3.innerHTML = secondsToMinutes(split2);
    cell4.innerHTML = secondsToMinutes(split3);

    document.getElementById("name_input").value = "";
    document.getElementById("mile1min").value = "";
    document.getElementById("mile1sec").value = "";
    document.getElementById("mile2min").value = "";
    document.getElementById("mile2sec").value = "";
    document.getElementById("mile3min").value = "";
    document.getElementById("mile3sec").value = "";
}