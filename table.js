var arr_t=[],burst_t=[];
function createTable()
        {
            var num_rows = document.getElementById('rows').value;
            var theader = '<table border="1" id="processTable">\n';
            var tbody = '';
            tbody += '<tr>';
                        tbody += '<th>';
                        tbody += 'Process NO.';
                        tbody += '</th>';
                        tbody += '<th>';
                        tbody += 'Arrival Time';
                        tbody += '</th>';
                        tbody += '<th>';
                        tbody += 'Burst Time';
                        tbody += '</th>';
            tbody+= '</tr>';
            
            for( var i=0; i<num_rows;i++)
            {
                    tbody+= '<tr>';
                        tbody += '<td>';
                        tbody += (i+1);
                        tbody += '</td>';
                   
                        tbody += '<td>';
                        tbody += ('<input id="a'+ (i+1) +'" type="number" min="0" max="100" onkeydown="return false"');
                        tbody += '</td>';
                        
                        tbody += '<td>';
                        tbody += ('<input id="b'+ (i+1) +'" type="number" min="1" max="100" onkeydown="return false"');
                        tbody += '</td>';
                    tbody += '</tr>\n';
            }
            var tfooter = '</table>';
        // FINALLY ADD THE NEWLY CREATED TABLE AND BUTTON TO THE BODY.
            document.getElementById('que').innerHTML = theader + tbody + tfooter;
            document.getElementById('getAnswer').innerHTML = '<input type="button" value="Get Answer!" onclick="set('+num_rows+')">';
            document.getElementById('clear').innerHTML = '<input type="button" value="Clear!" onclick="history.go(0)">';
        }
function set(n){
    for (let i = 0; i < n; i++) {
        arr_t[i]=document.getElementById(('a'+(i+1))).value;
        burst_t[i]=document.getElementById(('b'+(i+1))).value;
    }
    FIFO(arr_t,burst_t,n);
}