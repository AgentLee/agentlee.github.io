$(function()
{
    $.getJSON('http://dreamlo.com/lb/5a9c91ff012b300a70a814b4/jsonP', function(jsdata) 
    {
        dreamlo = jsdata.dreamlo;
        leaderboard = dreamlo.leaderboard;
        entry = leaderboard.entry;

        var table = document.getElementById("playerData");
        var count = 0;
        for(var key in leaderboard.entry) {
            if(count+1 > 5) 
                break;
                
            var name    = leaderboard.entry[key].text;
            var score   = leaderboard.entry[key].score;

            var row = table.insertRow(count + 1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);

            // Remove last name
            if(name.includes("+") || name.includes(" ")) {
                name = name.substring(0, name.indexOf('+'));                
            }

            cell1.innerHTML = name;
            cell2.innerHTML = score;

            ++count;
        }         
    });
});