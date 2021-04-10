let qu;
function set_q(arr_t){
  var mini=1000;
  for (let i = 0; i < arr_t.length; i++) {
    mini=Math.min(mini , arr_t[i]);
  }
  return mini;
}
function FIFO(arrt,burt,n){
    qu=set_q(arrt);
    var thead='<table id ="ans_t" border="1">';
    var tbody='';
    var tfoot='</table>';
    tbody+='<tr>'
        tbody+='<th>Process NO.    </th>'
        tbody+='<th>Arrival Time   </th>'
        tbody+='<th>Burst Time     </th>'
        tbody+='<th>Completion Time</th>'
        tbody+='<th>TurnAround Time</th>'
        tbody+='<th>Waiting Time   </th>'
    tbody+='</tr>'
    let end='',
      objCollection = [],
      AT = [],
      BT = [],
      pNo,
      completion=[],
      turnaround=[],
      waiting=[];

  //Making an object to be sorted later.
  for(var x = 0; x < n; x++)
    objCollection.push({ A: arrt[x], B: burt[x] , C : (x+1)});

  //Sorting begins with its corresponding Arrival Time and Burst Time
  //No interchanging of partner happens
  objCollection.sort(function(a, b){
    return a.A - b.A;
  });


  for(var x = 0; x < objCollection.length; x++){
    //pushing to array AT and BT for later purposes.
    pNo=objCollection[x].C;
    AT.push(objCollection[x].A);
    BT.push(objCollection[x].B);

    //calling these functions and store the values
    completion.push(CT(parseInt(BT[x])));
    turnaround.push(TT(completion[x],AT[x]));
    waiting.push(WT(turnaround[x],BT[x]));

    //storing values in output string, AT and BT array are used.
    tbody+='<tr>';
        tbody+='<td> '+pNo+'</td>';
        tbody+='<td> '+(AT[x])+'</td>';
        tbody+='<td> '+(BT[x])+'</td>';
        tbody+='<td> '+(completion[x])+'</td>';
        tbody+='<td> '+(turnaround[x])+'</td>';
        tbody+='<td> '+(waiting[x])+'</td>';
    tbody+='</tr>';

    // //pushing to array att and awt for later purposes.
    // att.push(turnaround);
    // awt.push(waiting);
  }

  //Passing att and awt arrays to these functions
  end += '<p>Average Turnaround Time: ' + averageTT(turnaround, objCollection.length) + '</p><p>Average Waiting Time: ' + averageWT(waiting, objCollection.length) + '</p>';
  document.getElementById('ans').innerHTML = thead + tbody + tfoot;
  document.getElementById('foot').innerHTML = end;
}
//Calculating for completion time.
function CT(bt){
    //qu must be globally scoped so that it starts initially at zero
    //and incrementing it every function invocation.
    qu += bt;
    return qu;
  }
  
  //Calculating for turnaround time.
  function TT(ct, at){
    return ct - at;
  }
  
  //calculating for waiting time.
  function WT(tt,bt){
    return tt - bt;
  }
  
  //calculating the average turnaround time and average waiting time
  //using the reduce method to find the sum of its array and dividing
  //by the number of elements in the array.
  function averageTT (ttValues, noOfValues) {
    return ttValues.reduce(function(total, num){
      return total + num;
    }) / noOfValues;
  }
  
  function averageWT (wtValues, noOfValues) {
    return wtValues.reduce(function(total, num){
      return total + num;
    }) / noOfValues;
  }
  
  