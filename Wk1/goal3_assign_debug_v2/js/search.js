/* Devin M. Woodfork
   February 7, 2016
   ANALYZE Buggy
 */


// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),      /* declare resultsDIV variable set to get info from the results element*/
		searchInput = document.forms[0].search,  /* declare searchInput variable set to get input from the search form */
		currentSearch = ''  /* declare currentSearch variable set to equal an empty string */
	;
	
	// Validates search query
	var validqte == function (query){   /* create validate variable set to equal the query function */
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){      /* create while loop of query function with character set to 0 and equal to empty string */
			query = query.substring(1, query.length); /*set while loop then statement equal to the substring method of the query function with index of 1 and the substring total length */
		};
		while(query.charAt(query.length-1) === ""){ /* set while loop of query function to an length index of -1 for the last character equal to empty string */
			query = query.substring(0, query.length-1); /* query function equals query function substring with index of 0 and the ending character */
		;
		
		// Check search length, must have 3 characters
		if(query.length < 3){     /* create if statement with query function length being less than 3 */
			alert("Your search query is too small, try again.");   /* if function length is less than 3 display alert box with warning statement */
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();    /* set the searchInput as the focus in the active window  */
			return; /* end function execution */
		};
		
		search(query); /* call search function */
	};
	
	// Finds search matches
	var search = function(query)  /* declare search variable equal to the query function */

		// split the user's search query string into an array
		var queryArray = query.join(" "); /* declare queryArray variable equal to the function query join method with an empty string */
		
		// array to store matched results from database.js
		var results = []; /*declare results variable equal to an array*/

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){  /* create for loop declaring variables to loop through index of array */
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); /* declare variable dbTitleEnd with an indexOf function equal to '|'*/
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); /* declare variable dbitem */
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){ /*create for loop declaring variables to loop through index of array */
				var qitem = queryArray[ii].tolowercase(); /* declare variable gitem set to index of array to all lowercase characters */
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); /*declare compare variable equal to value of dbitem with an index of the value ofo qitem */
				if(compare !== -1){ /* create if statement set to determine if variable compare is not equal to -1 */
					results.push(db[i]); /* create push method to results array */
				};
			;
		;
		
		results.sort(); /* create sort method for the results array */
		
		// Check that matches were found, and run output functions
		if(results.length = 0){ /* create if statement with index of results array length equal to 0 */
			noMatch(); /* if true call noMatch function */
		}else{
			showMatches(results); /* create else statement with then statement of showMatches index of results */
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){ /* declare variable noMatch equal to function() */
		var html = ''+ /* declare variable html equal to an empty string */
			'<p>No Results found.</p>'+ /* set variable html also equal to "No Results found." */
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'/* set variable html also
			equal to "Try searching for "JavaScript".  Just an idea." */
		;
		resultsDIV.innerHTML = html; /*returns HTML content of variable html to resultsDIV */
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){ /*declare showMatches variable equal to function with index of results*/
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',  /* declare variable html equal to 'Results'
			title , /*declare variable title*/
			url /*declare variable url*/
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){ /*create for loop declaring variable to loop through results array */
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|'); /* declare titleEnd equal to results array value with indexOf of '|' */
			title = results[i].subString(0, titleEnd); /* declare title variable equal to results array with subString of O and titleEnd */
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); /* set url equal to results substring method, results indexOf method and results length method */
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; /* add html code with video link */
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT. /* get the resultsDIV html code */
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){  /*start function when form is submitted*/
		var query = searchInput.value; /*get the value of the search input*/ 
		validqte(query); /*validate search input values*/

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false; /*stop the default behavior of the form*/
	;

})();
			/******Code Ends ******/