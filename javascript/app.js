$(document).ready(function() {
  const Url = "https://api.github.com/users/jamisoncozart/repos";
  $.get(Url, function(data, status) {
    var repos = data;
    // console.log(repos[0].stargazers_count);
    repos = repos.sort((a,b) => parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count));
    // console.log(repos[0].stargazers_count);
    // console.log(repos);
    // document.getElementById("title").innerHTML = repos[0].name;
    // document.getElementById("stars").innerHTML = repos[0].stargazers_count;
    // document.getElementById("description").innerHTML = repos[0].description;
    document.getElementById("repo1Title").innerHTML = repos[0].name;
    document.getElementById("repo1Description").innerHTML = repos[0].description;
    


    //For each repo, make GET request to repos[0].languages_url to retrieve all languages used.
    //Generate new <li></li> for each language in the response "languages" object
    
    
    //document.getElementById("repo1Languages").innerHTML = <li>languages[i]</li>; NEED TO RETRIEVE KEY, because value is number of characters;
  })
})