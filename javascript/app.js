$(document).ready(function() {
  const Url = "https://api.github.com/users/jamisoncozart/repos";
  $.get(Url, function(response, status) {
    var repos = response;
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
    for(let i = 0; i < 6; i++) {
      $.get(repos[i].languages_url, function(response, status) {
        var langObj = response;
        var languageNames = Object.keys(langObj);
        var innerHTML = "";
        var ulIdList = ["repo1Languages", "repo2Languages", "repo3Languages", "repo4Languages", "repo5Languages", "repo6Languages"]
        languageNames.forEach(function(language) {
          innerHTML += `<li>${language}</li>`
        })
        document.getElementById(ulIdList[i]).innerHTML = innerHTML;
      })
    }
  })
})