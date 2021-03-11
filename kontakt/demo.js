var events = [
  {'Date': new Date(2018, 10, 23), 'Title': 'Black friday popusti', 'Link': 'https://i1.wp.com/www.politicalanalysis.co.za/wp-content/uploads/2018/04/Black-Friday.jpg'},
  {'Date': new Date(2018, 10, 24), 'Title': 'Black friday popusti', 'Link': 'https://i1.wp.com/www.politicalanalysis.co.za/wp-content/uploads/2018/04/Black-Friday.jpg'},
  {'Date': new Date(2018, 10, 25), 'Title': 'Black friday popusti', 'Link': 'https://i1.wp.com/www.politicalanalysis.co.za/wp-content/uploads/2018/04/Black-Friday.jpg'},
  {'Date': new Date(2018, 10, 30), 'Title': 'Otvaranje nove radnje u Nisu'}


];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
