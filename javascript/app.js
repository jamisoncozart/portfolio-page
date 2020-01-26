$(document).ready(function() {
  const Url = "https://api.github.com/users/jamisoncozart/repos?per_page=100";
  $.get(Url, function(response) {
    var repos = response;

    // Sort repo array by number of github stars in descending order
    sortedRepos = repos.sort((a,b) => parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count));
    
    //for each of the top 6 repos, change inner HTML to reflect Github data for title and descriptions.

    var idList = ["Title", "Description", "link", "Stars"];
    var objectKeyList = ["name", "description", "html_url", "stargazers_count"];
    idList.forEach(function(id, index) {
      for(let i = 1; i <= 6; i++) {
        var currentID = "repo" + i + id;
        if(id === "link") {
          document.getElementById(currentID).href = sortedRepos[i][objectKeyList[index]];
        } else {
          document.getElementById(currentID).innerHTML = sortedRepos[i][objectKeyList[index]];
        }
      }
    })

    //For each repo, make GET request to repos[0].languages_url to retrieve all languages used.
    //Generate new <li></li> for each language in the response "languages" object
    for(let i = 0; i < 6; i++) {
      $.get(repos[i].languages_url, function(response) {
        var langObj = response;
        var languageNames = Object.keys(langObj);
        var innerHTML = "";
        var ulIdList = ["repo1Languages", "repo2Languages", "repo3Languages", "repo4Languages", "repo5Languages", "repo6Languages"];
        languageNames.forEach(function(language) {
          innerHTML += `<li>${language}</li>`;
        })
        document.getElementById(ulIdList[i]).innerHTML = innerHTML;
      })
    }
  })
})