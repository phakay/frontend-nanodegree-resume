//bio
//education
//work
//project


var bio = {
	"name": "Farouk Subair",
	"role": "Web Developer",
	"contacts": {
		"mobile": "080-555-777",
		"email": "fsubair@example.com",
		"github": "phakay",
		"twitter": "@phakay",
		"location": "Lagos, Nigeria"
	},
	"welcomeMessage": "Hello, how's it going",
	"skills": [
		{"name":"awesomeness","value":4}, 
		{"name":"superpowers","value":3},
	 	{"name":"kung-fu", "value": 3},
	 	{"name":"teamwork", "value": 4},
	 	{"name":"leadership", "value": 5}
	 ],
	"bioPic": 'images/dp.svg'
};

var education = {
   "schools": 
	[
		{
		   "name": "Manchester University of Manchester",
		   "location": "Manchester City",
		   "degree": "Masters",
		   "majors": ["Physics"],
		   "dates": 2016,
		   "url": "http://example.com"
		},
		{
		    "name": "Federal University of Technology Minna",
		    "location": "Nigeria, Niger State",
		    "degree": "BA",
		    "majors": ["CS"],
		    "dates": 2003,
		    "url": "http://example.com"
		}
	],
	
	"onlineCourses": [
			{
			  "title": "JavaScript Syntax",
			  "school": "Udacity",
			  "dates": 2014,
			  "url": "http://www.udacity.com/course/ud804"
			}
		]

};

var work = {
	"jobs": [
		{
			"employer": "Nauty Cats",
			"title": "Hype Man",
			"location": "Lagos, Nigeria",
			"dates": "January 2020 - Future",
			"description": "Ensuring customers are always feeling happy"
		},
		{
			"employer": "Game Freak",
			"title": "Game Player",
			"location": "Lagos, Nigeria",
			"dates": "2012 - December 20, 2019",
			"description": "Played video games for Game Testers"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Naruto Fan website",
			"dates": "2014",
			"description": "A website for the Naruto Fans",
			"images": [
				"https://via.placeholder.com/200x200",
				"https://via.placeholder.com/200x200"
			]

		},
		{
			"title": "Bleach Fan website",
			"dates": "2012",
			"description": "A website for the Bleach Fans",
			"images": [
				"https://via.placeholder.com/200x200",
				"https://via.placeholder.com/200x200"
			]

		}
	]
};

bio.display = function(){
	$('#header').prepend(HTMLheaderRole.replace('%data%',this.role));
	$('#header').prepend(HTMLheaderName.replace('%data%',this.name));
	
	$('#topContacts').append(HTMLmobile.replace('%data%',this.contacts.mobile))
		.append(HTMLemail.replace('%data%', this.contacts.email))
		.append(HTMLgithub.replace('%data%', this.contacts.github))
		.append(HTMLtwitter.replace('%data%', this.contacts.twitter))
		.append(HTMLlocation.replace('%data%', this.contacts.location));

	$('#header').append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage))
	$('#header').append(HTMLbioPic.replace('%data%', this.bioPic));
	if(this.skills.length > 0 ){
		$('#header').append(HTMLskillsStart);
		bio.skills.forEach((x)=>{
			$('#skills').append(HTMLskills.replace('%data%',x.name));
		});
	
	}
	$('#footerContacts').append(HTMLmobile.replace('%data%',this.contacts.mobile))
		.append(HTMLemail.replace('%data%', this.contacts.email))
		.append(HTMLgithub.replace('%data%', this.contacts.github))
		.append(HTMLtwitter.replace('%data%', this.contacts.twitter))
		.append(HTMLlocation.replace('%data%', this.contacts.location));
}

work.display =	function(){
	if(this.jobs.length > 0){
		for(job in this.jobs){
			$('#workExperience').append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace('%data%', this.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace('%data%', this.jobs[job].title);
			var formattedEmployer_Title = formattedEmployer + formattedTitle;
			$('.work-entry:last').append(formattedEmployer_Title);
			$('.work-entry:last').append(HTMLworkDates.replace('%data%', this.jobs[job].dates));
			$('.work-entry:last').append(HTMLworkDescription.replace('%data%', this.jobs[job].description));
				}
			}

		};

projects.display = function(){
	for(var i = 0; i < this.projects.length; i++){
		var project = this.projects[i];
		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(HTMLprojectTitle.replace('%data%', project.title))
		.append(HTMLprojectDates.replace('%data%',project.dates))
		.append(HTMLprojectDescription.replace('%data%',project.description));
		if(project.images.length > 0){
			project.images.forEach(function(x){
				$('.project-entry:last').append(HTMLprojectImage.replace('%data%',x));
			});
		}

	}
}

education.display = function(){
	
	for(var i=0; i < this.schools.length; i++){
		$('#education').append(HTMLschoolStart);
		var formattedschoolName_schoolDegree = HTMLschoolName.replace('%data%',this.schools[i].name) + HTMLschoolDegree.replace('%data%',this.schools[i].degree);
		$('.education-entry:last').append(formattedschoolName_schoolDegree)
			.append(HTMLschoolDates.replace('%data%',this.schools[i].dates))
			.append(HTMLschoolLocation.replace('%data%',this.schools[i].location));
		if(this.schools[i].majors.length > 0){
			this.schools[i].majors.forEach(function(x){
				$('.education-entry:last').append(HTMLschoolMajor.replace('%data%', x));
			});
		}
	}

	$('#education').append(HTMLonlineClasses);
	for(var i=0; i < this.onlineCourses.length; i++){
		$('#education').append(HTMLschoolStart);
		var formattedonlineTitle_onlineSchool = HTMLonlineTitle.replace('%data%',this.onlineCourses[i].title) + HTMLonlineSchool.replace('%data%',this.onlineCourses[i].school);
		$('.education-entry:last').append(formattedonlineTitle_onlineSchool)
			.append(HTMLonlineDates.replace('%data%',this.onlineCourses[i].dates))
			.append(HTMLonlineURL.replace('%data%',this.onlineCourses[i].url));

	}
}


bio.display();
work.display();
projects.display();
education.display();


$(document).click(function(loc){
	//logClicks(loc.pageX,loc.pageY);
});

$('#main').append(internationalizeButton);
function inName(name){
	var nameArray = name.trim().split(" ");
	var name1 = nameArray[0][0].toUpperCase() + nameArray[0].toLowerCase().slice(1);
	var name2 = nameArray[1].toUpperCase();
	var fullName = name1 +' '+name2;
	return fullName;
}

//$('#mapDiv').append(googleMap);