import Backbone from "backbone_es6";
import "bootstrap";
import StationInformationCollection from "./StationInformation.collection.js";
import { html, render } from "lit-html";
import './Main.css'

const MainViewTemplate = collection => html`
  <h1 class="page-title mb-3">Capital Bike Share</h1>
  <div class="row">
    <div class="col">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="station_search"
          placeholder="Search..."
        />
      </div>
    </div>
  </div>
`;

const MainView = Backbone.View.extend({
  template: MainViewTemplate,

  initialize: function(options) {
    this.stationInformation = new StationInformationCollection();
  },

  events: {
    "input #station_search": "onSearchChange"
  },

  render: function() {
    let self = this;

    render(MainViewTemplate(this.stationInformation), self.el);
  },

  onSearchChange: function(e) {
    // TODO: Respond to search input
  }
});
export default MainView;
