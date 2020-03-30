
var counter = 0;
var voter = document.getElementById('vote_nums');
var vote_button = document.getElementById('vote');
function showVotes() {
    counter += 1;
    voter.innerHTML = counter;
    voter.className = counting;
}

vote_button.onclick = showVotes;


// var counter = 0;
// var xhr = new XMLHttpRequest();

// xhr.onload = function showVotes() {
//     if(xhr.status == 200) {
//         counter += 1;
//         document.getElementById('vote_nums').innerHTML = counter;
//         document.getElementById('vote_nums').className = counting;
//     }
// }

// vote_button.onclick = showVotes;
// xhr.open('GET', 'dnt.html', true);
// xhr.send(null);