import { LightningElement, api, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
const Loc = [ 'Customer__c.Location__Latitude__s', 'Customer__c.Location__Longitude__s' ];
export default class CustomerLocation extends LightningElement 
{
	@api recordId;
	@track mapMarkers = [];
	@wire(getRecord, { recordId: '$recordId', Loc })
	loadCustomer({ data }) 
	{
			const Latd = data.Loc.Location__Latitude__s.value;
			const Longd = data.Loc.Location__Longitude__s.value;
			this.mapMarkers = [{
				location: { Latd, Longd },
				description: `Coords: ${Latitude}, ${Longitude}`
			}];
		
	}
	
}