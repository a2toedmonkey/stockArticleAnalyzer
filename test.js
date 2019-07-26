var badWords = [   
    "decline",
    "decrease",
    "dip",
    "drop",
    "plunge",
    "recession",
    "reduction",
    "slump",
    "spill",
    "abatement",
    "cut",
    "declivity",
    "diminution",
    "dive",
    "downgrade",
    "dwindling",
    "ebb",
    "header",
    "incline",
    "lapse",
    "lessening",
    "plummet",
    "pratfall",
    "slant",
    "slip",
    "slope",
    "tumble",
    "belly flop",
    "downward slope",
    "falling off",
    "nose dive",
	"lowest"
	];
var badLen = badWords.length;

var string = document.getElementById('article').innerHTML;	

var anaysisText=" ";

function analyze(x){
	var x= x.toLowerCase();
	var res = x.split(" ");
	var resLen = res.length;
	var hitCount = 0;
	var hitWord =[];
	
	for(i=0; i<resLen; i++){
		for(s=0; s<badLen; s++){
			if(res[i] == badWords[s]){
				hitCount++;
				hitWord.push(badWords[s]);
			}
		}
	document.getElementById("bwfound").textContent= hitCount;
	document.getElementById("bwords").innerHTML=hitWord;
	}
	
	
}
