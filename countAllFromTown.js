export default function countAllFromTown(regNo, regNoStart) {
    var List = regNo.split(',');
    var counterForTown = 0;
      for(var i=0; i<List.length; i++) {
    var newList = List[i].trim();
      if(newList.startsWith(regNoStart)) {
         counterForTown++;
      } 
     }
      return counterForTown
     }