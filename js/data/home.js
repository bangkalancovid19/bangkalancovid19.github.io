fetch("https://madcovid-webhook.herokuapp.com/data")
  .then((resp) => resp.json())
  .then(function(data) {
    document.getElementById("dateUpdate").innerHTML = data.lastupdate;
    document.getElementById("sumber").href = "https://"+data.resource;
    setTableData(data);
    setChart(data.total);
  });

function setTableData(data) {
  var kec = Object.keys(data.kecamatan);
  document.getElementById("odp").innerHTML = "ODP : "+data.total.odp+" Orang";
  document.getElementById("pdp").innerHTML = "PDP : "+data.total.pdp+" Orang";
  document.getElementById("positif").innerHTML = "POSITIF : "+data.total.positif+" Orang";
  document.getElementById("sembuh").innerHTML = "SEMBUH : "+data.total.sembuh+" Orang";
  document.getElementById("meninggal").innerHTML = "MENINGGAL : "+data.total.meninggal+" Orang";

  var table = document.createElement('table');
  table.setAttribute('class', 'table table-hover');

  var tableHeader = document.createElement("thead");
  table.appendChild(tableHeader);
  tableHeaderRow = document.createElement("tr");
  tableHeader.appendChild(tableHeaderRow);

  var headers=['KECAMATAN','ODP','PDP','POSITIF','SEMBUH','MENINGGAL'];

  for(i=0;i<headers.length;i++){
    var tableHeader = document.createElement("th");
    tableHeaderRow.appendChild(tableHeader);
    tableHeader.innerHTML = headers[i];
  }
  var tableBody = document.createElement("tbody");
  table.appendChild(tableBody);

  for( var i = 0; i < Object.keys(data.kecamatan).length; i++ ) {
    var child = data.kecamatan[Object.keys(data.kecamatan)[i]];
    var row = tableBody.insertRow();
    row.insertCell().appendChild(document.createTextNode(kec[i].replace("_"," ").toUpperCase()));
    row.insertCell().appendChild(document.createTextNode(child.odp));
    row.insertCell().appendChild(document.createTextNode(child.pdp));
    row.insertCell().appendChild(document.createTextNode(child.positif));
    row.insertCell().appendChild(document.createTextNode(child.sembuh));
    row.insertCell().appendChild(document.createTextNode(child.meninggal));
  }

  document.getElementById('tabeldata').appendChild(table);
}

function setChart(data) {
  CanvasJS.addColorSet("customColorSet1",
                  [
                  "#ffd95a",
                  "#f9a825",
                  "#e64a19",
                  ]);

  var chart = new CanvasJS.Chart("chartContainer", {
  	exportFileName: "Data Graphic Covid19 Bangkalan",
    colorSet:  "customColorSet1",
  	exportEnabled: true,
  	animationEnabled: true,
  	title:{
  		text: ""
  	},
  	legend:{
  		cursor: "pointer",
  		itemclick: explodePie
  	},
  	data: [{
  		type: "pie",
  		showInLegend: true,
      toolTipContent: "<b>{name}</b>: {y} Orang",
      indexLabel: "{name} - {y} Orang",
      dataPoints: [
        { y: data.pdp, name: "PDP",  exploded: true },
        { y: data.odp, name: "ODP" },
        { y: data.positif, name: "CONFIRM", exploded: true  }
      ]
  	}]
  });
  chart.render();
}

function explodePie (e) {
  if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
  } else {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
  }
  e.chart.render();

}
