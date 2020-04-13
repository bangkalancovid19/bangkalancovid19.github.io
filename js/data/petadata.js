fetch("https://madcovid-webhook.herokuapp.com/data")
  .then((resp) => resp.json())
  .then(function(data) {
    document.getElementById("dateUpdate").innerHTML = data.lastupdate;
    document.getElementById("dateUpdate1").innerHTML = data.lastupdate;
    document.getElementById("dateUpdate2").innerHTML = data.lastupdate;
    document.getElementById("sumber1").href = "https://"+data.resource;
    document.getElementById("sumber2").href = "https://"+data.resource;
    document.getElementById("sumber3").href = "https://"+data.resource;

    // console.log(data.kecamatan.arosbaya.odp);
    setTableData(data);
    setChart(data.total);
    setBarChart(data);
  });

function setTableData(data) {
  var kec = Object.keys(data.kecamatan);
  document.getElementById("odp").innerHTML = data.total.odp+" Orang";
  document.getElementById("pdp").innerHTML = +data.total.pdp+" Orang";
  document.getElementById("positif").innerHTML = data.total.positif+" Orang";

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

function setBarChart(data) {
  kec = data.kecamatan;
  CanvasJS.addColorSet("customColorSet1",
                  [
                  "#ffd95a",
                  "#f9a825",
                  "#e64a19",
                  ]);

  var chart = new CanvasJS.Chart("chartContainerBar", {
  	animationEnabled: true,
    colorSet:  "customColorSet1",
  	exportEnabled: true,
  	title:{
  		text: ""
  	},
  	axisY: {
  		title: "Total",
  		titleFontColor: "#4F81BC",
  		lineColor: "#4F81BC",
  		labelFontColor: "#4F81BC",
  		tickColor: "#4F81BC"
  	},
  	toolTip: {
  		shared: true
  	},
  	legend: {
  		cursor:"pointer",
  		itemclick: toggleDataSeries
  	},
  	data: [{
      type: "column",
      name: "ODP",
      legendText: "ODP",
      showInLegend: true,
      dataPoints:[
        { label: "Arosbaya", y: parseInt(kec.arosbaya.odp) },
        { label: "Bangkalan", y: parseInt(kec.bangkalan.odp) },
        { label: "Blega", y: parseInt(kec.blega.odp) },
        { label: "Burneh", y: parseInt(kec.burneh.odp) },
        { label: "Galis", y: parseInt(kec.galis.odp) },
        { label: "Geger", y: parseInt(kec.geger.odp) },
        { label: "Kamal", y: parseInt(kec.kamal.odp) },
        { label: "Klampis", y: parseInt(kec.klampis.odp) },
        { label: "Kokop", y: parseInt(kec.kokop.odp) },
        { label: "Konang", y: parseInt(kec.konang.odp) },
        { label: "Kwanyar", y: parseInt(kec.kwanyar.odp) },
        { label: "Labang", y: parseInt(kec.labang.odp) },
        { label: "Modung", y: parseInt(kec.modung.odp) },
        { label: "Sepulu", y: parseInt(kec.sepuluh.odp) },
        { label: "Socah", y: parseInt(kec.socah.odp) },
        { label: "Tanah Merah", y: parseInt(kec.tanah_merah.odp) },
        { label: "Tanjung Bumi", y: parseInt(kec.tanjung_bumi.odp) },
        { label: "Tragah", y: parseInt(kec.tragah.odp) }
      ]
    },
    {	type: "column",
  		name: "PDP",
  		legendText: "PDP",
  		showInLegend: true,
  		dataPoints:[
  			{ label: "Arosbaya", y: parseInt(kec.arosbaya.pdp) },
  			{ label: "Bangkalan", y: parseInt(kec.bangkalan.pdp) },
  			{ label: "Blega", y: parseInt(kec.blega.pdp) },
  			{ label: "Burneh", y: parseInt(kec.burneh.pdp) },
  			{ label: "Galis", y: parseInt(kec.galis.pdp) },
        { label: "Geger", y: parseInt(kec.geger.pdp) },
  			{ label: "Kamal", y: parseInt(kec.kamal.pdp) },
  			{ label: "Klampis", y: parseInt(kec.klampis.pdp) },
  			{ label: "Kokop", y: parseInt(kec.kokop.pdp) },
  			{ label: "Konang", y: parseInt(kec.konang.pdp) },
        { label: "Kwanyar", y: parseInt(kec.kwanyar.pdp) },
  			{ label: "Labang", y: parseInt(kec.labang.pdp) },
  			{ label: "Modung", y: parseInt(kec.modung.pdp) },
  			{ label: "Sepulu", y: parseInt(kec.sepuluh.pdp) },
        { label: "Socah", y: parseInt(kec.socah.pdp) },
        { label: "Tanah Merah", y: parseInt(kec.tanah_merah.pdp) },
  			{ label: "Tanjung Bumi", y: parseInt(kec.tanjung_bumi.pdp) },
  			{ label: "Tragah", y: parseInt(kec.tragah.pdp) }
  		]
  	},
    { type: "column",
  		name: "POSITIF",
  		legendText: "POSITIF",
  		showInLegend: true,
  		dataPoints:[
  			{ label: "Arosbaya", y: parseInt(kec.arosbaya.positif) },
  			{ label: "Bangkalan", y: parseInt(kec.bangkalan.positif) },
  			{ label: "Blega", y: parseInt(kec.blega.positif) },
  			{ label: "Burneh", y: parseInt(kec.burneh.positif) },
  			{ label: "Galis", y: parseInt(kec.galis.positif) },
        { label: "Geger", y: parseInt(kec.geger.positif) },
  			{ label: "Kamal", y: parseInt(kec.kamal.positif) },
  			{ label: "Klampis", y: parseInt(kec.klampis.positif) },
  			{ label: "Kokop", y: parseInt(kec.kokop.positif) },
  			{ label: "Konang", y: parseInt(kec.konang.positif) },
        { label: "Kwanyar", y: parseInt(kec.kwanyar.positif) },
  			{ label: "Labang", y: parseInt(kec.labang.positif) },
  			{ label: "Modung", y: parseInt(kec.modung.positif) },
  			{ label: "Sepulu", y: parseInt(kec.sepuluh.positif) },
        { label: "Socah", y: parseInt(kec.socah.positif) },
        { label: "Tanah Merah", y: parseInt(kec.tanah_merah.positif) },
  			{ label: "Tanjung Bumi", y: parseInt(kec.tanjung_bumi.positif) },
  			{ label: "Tragah", y: parseInt(kec.tragah.positif) }
  		]
  	}]
  });
  chart.render();
}

function toggleDataSeries(e) {
  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
    e.dataSeries.visible = false;
  }
  else {
    e.dataSeries.visible = true;
  }
  chart.render();
}
