import {getStatistics} from './utils.js';

export default class {
  constructor(name) {
	  this.name = name,
	  this.type = 0,
	  this.coordinates = {},
	  this.times = {},
	  this.durations = {},
	  this.distances = {},
	  //contains speeds, heart rates, altitudes, cadences, temperatures,...
	  this.parameters = {},
	  this.intervals = {}
  }
  
  /**
   * Calculate durations
   */
  calculateDurations(){
		if(session.times()){
			var data = [];
			session.times.data.forEach(function(elt,index,array){
				data.push(new Date(elt)-new Date(array[0]));
	    	});
		}
		
		var durations = {name:"Durations"};
		durations.data=data;
		durations.statistics=getStatistics(data);
		session.durations=durations;
	}
}
