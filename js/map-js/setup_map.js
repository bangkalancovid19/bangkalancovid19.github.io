fetch("https://madcovid-webhook.herokuapp.com/data")
  .then((resp) => resp.json())
  .then(function(data) {
    setMap(data);
  });

var data;
function setMap(datax) {
  data = datax;
  $(function () {
      $(".mapcontainer").mapael({
          map: {
              // Set the name of the map to display
              name: "bangkalan",
              zoom: {
                  enabled: true
              },
              defaultArea: {
                  attrs: {
                      fill: "#f8f2e2",
                      stroke: "#ede2a5",
                      "stroke-width" : 3,
                      cursor: "pointer"
                  },
                  attrsHover: {
                      fill: "#ede2a5",
                      animDuration: 0
                  },
                  text: {
                      attrs: {
                          "font-size": 20,
                          fill : "#2e2e26",
                          "font-family": "'Roboto', sans-serif"
                      },
                      attrsHover: {
                          fill: "#ffffff",
                          animDuration: 0
                      },
                  },
                  eventHandlers: {
                      click: function (e, id, mapElem, textElem) {
                          var newData = {
                              'areas': {}
                          };
                          $(".mapcontainer").trigger('zoom', {area: id});
                      },
                  }
              }
          },
          areas: {
              "arosbaya": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("arosbaya")
                  },
                  text :{
                      content:"Arosbaya",
                  }
              },
              "bangkalan": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("bangkalan")
                  },
                  text :{
                      content:"Bangkalan",
                  }
              },
              "blega": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("blega")
                  },
                  text :{
                      content:"Blega",
                  }
              },
              "burneh": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("burneh")
                  },
                  text :{
                      content:"Burneh",
                  }
              },
              "galis": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("galis")
                  },
                  text :{
                      content:"Galis",
                  }
              },
              "geger": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("geger")
                  },
                  text :{
                      content:"Geger",
                  }
              },
              "kamal": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("kamal")
                  },
                  text :{
                      content:"Kamal",
                  }
              },
              "klampis": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("klampis")
                  },
                  text :{
                      content:"Klampis",
                  }
              },
              "kokop": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("kokop")
                  },
                  text :{
                      content:"Kokop",
                  }
              },
              "konang": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("konang")
                  },
                  text :{
                      content:"Konang",
                  }
              },
              "kwanyar": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("kwanyar")
                  },
                  text :{
                      content:"Kwanyar",
                  }
              },
              "labang": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("labang")
                  },
                  text :{
                      content:"Labang",
                  }
              },
              "modung": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("modung")
                  },
                  text :{
                      content:"Modung",
                  }
              },
              "sepuluh": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("sepuluh")
                  },
                  text :{
                      content:"Sepuluh",
                  }
              },
              "socah": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("socah")
                  },
                  text :{
                      content:"Socah",
                  }
              },
              "tanah_merah": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("tanah_merah")
                  },
                  text :{
                      content:"Tanah Merah",
                      attrs:{
                          "font-size":"18px"
                      }
                  }
              },
              "tanjung_bumi": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("tanjung_bumi")
                  },
                  text :{
                      content:"Tanjung Bumi",
                  }
              },
              "tragah": {
                  value: "2617939",
                  href: "#",
                  tooltip: {
                      content: popover("tragah")
                  },
                  text :{
                      content:"Tragah",
                  }
              },
          }

      });

      $('.mapcontainer').on('dbclick', function () {
          console.log("asdas");

      });
  });
}

function popover(name) {
    return '<div class="title">' + name.replace("_"," ").toUpperCase() + '</div>\
            <div class="odp"> <span class="icon"></span> ODP : '+data.kecamatan[name]['odp']+' </div>\
            <div class="pdp"> <span class="icon"></span> PDP : '+data.kecamatan[name]['pdp']+' </div>\
            <div class="positif"> <span class="icon"></span> POSITIF : '+data.kecamatan[name]['positif']+' </div>';

};
