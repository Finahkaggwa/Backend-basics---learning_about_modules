export default function findItemsOver (List, threshold){
    var result = [];
   for(var i=0; i<List.length; i++){
     if(List[i].qty > threshold){result.push(List[i])}
   }
     return result
   }