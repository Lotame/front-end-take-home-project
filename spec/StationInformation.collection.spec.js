import StationInformationCollection from "../src/StationInformation.collection.js";

describe("StationInformation.collection", function() {
    it("should process",function(){
                this.collection = new StationInformationCollection(
                  {
                    data: {
                      stations: [
                        {
                          name: "Union",
                          station_id: 1
                        },
                        {
                          name: "Penn",
                          station_id: 2
                        }
                      ]
                    }
                  },
                  {
                    parse: true
                  }
                );

        expect(this.collection.models.length).toBe(2);
    })

})