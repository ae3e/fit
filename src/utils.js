/**
 * Calculate statistics on a vector data
 * @param values {[Float]} Values
 * @return {Object} the converted value with unit
 */
export function getStatistics(values){
	var stats = {};
	if(values && values.length>0){
		stats.min = Math.min.apply(null,values.filter(function(elt){
			return elt!=null;
		}));
		stats.max = Math.max.apply(null,values.filter(function(elt){
			return elt!=null;
		}));
		stats.sum = values.reduce(function(a, b) { return a + b });
		stats.mean = stats.sum / values.length;
	}

	return stats;
}

/**
 * Calculate SMA on a vector data
 * @param n {Integer} number of values
 * @return {Object} the converted values
 */
export function getSMA(values, n){
	
	var sma = [];
	sma.push(values[0]);
	for(var i=1;i<values.length;i++){
		var value;
		if(i<n){
			value = values.slice(0,i+1).reduce(function(a, b) { return a + b })/values.slice(0,i+1).length;
		}else{
			value = values.slice(i+1-n,i+1).reduce(function(a, b) { return a + b })/n;
			//console.log(values.toString()+" "+values.slice(i+1-n,i+1).length)+"\n";
		}
		sma.push(value);
	}

	return sma;
}