import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

const NAME_FIELD = 'customer__c.Name';
const LOCATION_LATITUDE_FIELD = 'customer__c.Location__Latitude__s';
const LOCATION_LONGITUDE_FIELD = 'customer__c.Location__Longitude__s';
const customerFields = [
	NAME_FIELD,
	LOCATION_LATITUDE_FIELD,
	LOCATION_LONGITUDE_FIELD
];
export default class CustomerLocation extends LightningElement {
  @api recordId;
  name;
  mapMarkers = [];
  @wire(getRecord, { recordId: '$recordId', fields: customerFields })
  loadCustomer({ error, data }) {
    if (error) {
     
    } else if (data) {
     
      this.name =  getFieldValue(data, NAME_FIELD);
      const Latitude = getFieldValue(data, LOCATION_LATITUDE_FIELD);
      const Longitude = getFieldValue(data, LOCATION_LONGITUDE_FIELD);
     
      this.mapMarkers = [{
        location: { Latitude, Longitude },
        title: this.name,
        description: `Coords: ${Latitude}, ${Longitude}`
      }];
    }
  }
  get cardTitle() {
    return (this.name) ? `${this.name}'s location` : 'Customer location';
  }
}
