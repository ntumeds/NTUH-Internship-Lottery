//.ArraySort(array)
/* Sort an array
 */
ArraySort = function(array, sortFunc){
      var tmp = [];
      var aSorted=[];
      var oSorted={};

      for (var k in array) {
        if (array.hasOwnProperty(k)) 
            tmp.push({key: k, value: array[k]});
      }

      tmp.sort(function(o1, o2) {
            return sortFunc(o1.value, o2.value);
      });
      
      if(Object.prototype.toString.call(array) === '[object Array]'){
          $.each(tmp, function(index, value){
              aSorted.push(value.value);
          });
          return aSorted;                     
      }

      if(Object.prototype.toString.call(array) === '[object Object]'){
          $.each(tmp, function(index, value){
              oSorted[value.key]=value.value;
          });                     
          return oSorted;
      } 

};

jQuery.isjQuery = function( obj ){
	return obj && obj.hasOwnProperty && obj instanceof jQuery;
};

function setToclipboard(valToSet) {
	if (window.clipboardData && clipboardData.setData) { 
		clipboardData.setData("Text", valToSet); 
	}
}

function strpad(i,l,s) {
	var o = i.toString();
	if (!s) { s = '0'; }
	while (o.length < l) {
		o = s + o;
	}
	return o;
}

function require(script) {
    $.ajax({
        url: script,
        dataType: "script",
        async: false,
        success: function () {
            // loaded
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}

//require("./scripts/RandomLibrary.js");

var RandBetterEngine = RandomLibrary.Alea();
function RandBetter(range) {
	if (range) return RandBetterEngine.uint32() % range;
	return RandBetterEngine.uint32();
}
function RandSetSeed(seed) {
	RandBetterEngine = RandomLibrary.Alea(seed);
}
