
var counter = 0;
var voter = document.getElementById('vote_nums');
var vote_button = document.getElementById('vote');
function showVotes() {
    counter += 1;
    voter.innerHTML = counter;
    voter.className = counting;
}

vote_button.onclick = showVotes;
