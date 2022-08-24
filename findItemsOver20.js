export default function findItemsOver20 (List){
    var result = [];
   for(var i=0; i<List.length; i++){
     if(List[i].qty > 20){result.push(List[i])}
   }
     return result
   }
   