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
      { y: 223, name: "ODP" },
      { y: 120, name: "PDP" },
      { y: 3, name: "CONFIRM", exploded: true  }
    ]
	}]
});
chart.render();


function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();

}

var chart = new CanvasJS.Chart("chartContainerBar", {
	animationEnabled: true,
  colorSet:  "customColorSet1",
	exportEnabled: true,
	title:{
		text: ""
	},
	axisY: {
		title: "Jumlah Orang",
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
			{ label: "Arosbaya", y: 45 },
			{ label: "Bangkalan", y: 32 },
			{ label: "Blega", y: 225 },
			{ label: "Burneh", y: 14 },
			{ label: "Galis", y: 56 },
      { label: "Geger", y: 54 },
			{ label: "Kamal", y: 21 },
			{ label: "Klampis", y: 184 },
			{ label: "Kokop", y: 12 },
			{ label: "Konang", y: 11 },
      { label: "Kwanyar", y: 22 },
			{ label: "Labang", y: 12 },
			{ label: "Modung", y: 22 },
			{ label: "Sepulu", y: 12 },
      { label: "Socah", y: 23 },
      { label: "Tanah Merah", y: 12 },
			{ label: "Tanjung Bumi", y: 15 },
			{ label: "Tragah", y: 16 }
		]
	},
	{
		type: "column",
		name: "PDP",
		legendText: "PDP",
		showInLegend: true,
    dataPoints:[
			{ label: "Arosbaya", y: 10 },
			{ label: "Bangkalan", y: 7 },
			{ label: "Blega", y: 54 },
			{ label: "Burneh", y: 5 },
			{ label: "Galis", y: 6 },
      { label: "Geger", y: 7 },
			{ label: "Kamal", y: 8 },
			{ label: "Klampis", y: 44 },
			{ label: "Kokop", y: 3 },
			{ label: "Konang", y: 1 },
      { label: "Kwanyar", y: 2 },
			{ label: "Labang", y: 3 },
			{ label: "Modung", y: 4 },
			{ label: "Sepulu", y: 1 },
      { label: "Socah", y: 3 },
      { label: "Tanah Merah", y: 5 },
			{ label: "Tanjung Bumi", y: 1 },
			{ label: "Tragah", y: 4 }
		]
	},
  {
    type: "column",
    name: "CONFIRM",
    legendText: "CONFIRM/POSITIF",
    showInLegend: true,
    dataPoints:[
			{ label: "Arosbaya", y: 0 },
			{ label: "Bangkalan", y: 0 },
			{ label: "Blega", y: 1 },
			{ label: "Burneh", y: 0 },
			{ label: "Galis", y: 0 },
      { label: "Geger", y: 0 },
			{ label: "Kamal", y: 0 },
			{ label: "Klampis", y: 0 },
			{ label: "Kokop", y: 0 },
			{ label: "Konang", y: 0 },
      { label: "Kwanyar", y: 0 },
			{ label: "Labang", y: 0 },
			{ label: "Modung", y: 0 },
			{ label: "Sepulu", y: 0 },
      { label: "Socah", y: 0 },
      { label: "Tanah Merah", y: 0 },
			{ label: "Tanjung Bumi", y: 0 },
			{ label: "Tragah", y: 0 }
		]
  }]
});
chart.render();

function toggleDataSeries(e) {
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chart.render();
}
