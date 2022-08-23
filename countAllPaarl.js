export default function countAllPaarl(stringPaarl){
    var fromPaarl =stringPaarl.split(',');
      var counter =0;
      for(var i=0; i<fromPaarl.length; i++){
        var list =fromPaarl[i].trim();
      if(list.startsWith('CJ')){counter++
      }
      } 
      return counter
    }