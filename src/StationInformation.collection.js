import Backbone from "backbone_es6";

const StationInformation = Backbone.Collection.extend({


  model: Backbone.Model.extend({
    idAttribute: 'station_id'
  }),

  url: function() {
    return "https://gbfs.capitalbikeshare.com/gbfs/en/station_information.json";
  },

  parse: function(response) {
    if (response && response.data) {
      return response.data.stations;
    }
  }
});
export default StationInformation;