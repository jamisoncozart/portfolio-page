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
    
    //for each of the top 6 repos, change inner HTML to reflect Github data for title and descriptions.
    var titleIdList = ["repo1Title", "repo2Title", "repo3Title", "repo4Title", "repo5Title", "repo6Title"];
    var descriptionIdList = ["repo1Description", "repo2Description", "repo3Description", "repo4Description", "repo5Description", "repo6Description"];
    for(let i = 0; i < 6; i++) {
      document.getElementById(titleIdList[i]).innerHTML = repos[i].name;
      document.getElementById(descriptionIdList[i]).innerHTML = repos[i].description;
    }

    //For each repo, make GET request to repos[0].languages_url to retrieve all languages used.
    //Generate new <li></li> for each language in the response "languages" object
    for(let i = 0; i < 6; i++) {
      $.get(repos[i].languages_url, function(response, status) {
        var langObj = response;
        var languageNames = Object.keys(langObj);
        var innerHTML = "";

        // var titleIdList = ["repo1Title", "repo2Title", "repo3Title", "repo4Title", "repo1Title", "repo1Title"];
        // var descriptionIdList = ["repo1Description", "repo1Description", "repo1Description", "repo1Description", "repo1Description", "repo1Description"]
        
        var ulIdList = ["repo1Languages", "repo2Languages", "repo3Languages", "repo4Languages", "repo5Languages", "repo6Languages"];
        languageNames.forEach(function(language) {
          innerHTML += `<li>${language}</li>`;
        })
        document.getElementById(ulIdList[i]).innerHTML = innerHTML;
      })
    }
  })
})