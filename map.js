// Initialize map, set the view lat long and zoom 
var map = L.map('map').setView([40.712, -74.006], 10.0);

// Import map style tile layer from MapBox with api key
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox/dark-v9',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1Ijoiam9zZXBoanVuZ2VybWFubiIsImEiOiJjazl5b3lldHUwMGF1M21wYWZxZGxtaXFrIn0.SIGcJf1ElkmPBC0Gs31ktw',
	scrollWheelZoom: false
}).addTo(map);

// Add markers for each building
var marker_1 = L.marker([40.6995395, -73.8061941]).addTo(map);
marker_1.bindTooltip("<div><b>Address:</b> 147-07 94 Avenue, Queens, NY 11435<br>"
+ "<b>Neighborhood:</b> South Jamaica<br>"
+ "<b>Owner:</b> Land & Sea Development Corp<br>"
+ "<b>No. of Residential Units:</b> 543</div>"
+ "<b>Building Area Square Feet:</b> 480,498</div>");

var marker_2 = L.marker([40.8201848, -73.9316391]).addTo(map);
marker_2.bindTooltip("<div><b>Address:</b> 575 Exterior Street, Bronx, NY 10451<br>"
+ "<b>Neighborhood:</b> Concourse<br>"
+ "<b>Owner:</b> NYC Department of Citywide Administrative Services<br>"
+ "<b>No. of Residential Units:</b> 542</div>"
+ "<b>Building Area Square Feet:</b> 500,725</div>");

var marker_3 = L.marker([40.7698919, -73.9342431]).addTo(map);
marker_3.bindTooltip("<div><b>Address:</b> 11-12 30 Drive, Queens, NY 11102<br>"
+ "<b>Neighborhood:</b> Long Island City<br>"
+ "<b>Owner:</b> Astoria West, LLC<br>"
+ "<b>No. of Residential Units:</b> 253</div>"
+ "<b>Building Area Square Feet:</b> 182,602</div>");

var marker_4 = L.marker([40.7695978, -73.9334203]).addTo(map);
marker_4.bindTooltip("<div><b>Address:</b> 11-28 30 Drive, Queens, NY 11102<br>"
+ "<b>Neighborhood:</b> Long Island City<br>"
+ "<b>Owner:</b> Astoria West, LLC<br>"
+ "<b>No. of Residential Units:</b> 151</div>"
+ "<b>Building Area Square Feet:</b> 108,431</div>");

var marker_5 = L.marker([40.7696392, -73.9338354]).addTo(map);
marker_5.bindTooltip("<div><b>Address:</b> 11-37 31st Avenue, Queens, NY 11106<br>"
+ "<b>Neighborhood:</b> Long Island City<br>"
+ "<b>Owner:</b> Astoria West, LLC<br>"
+ "<b>No. of Residential Units:</b> 140</div>"
+ "<b>Building Area Square Feet:</b> 84,113</div>");

var marker_6 = L.marker([40.7399832, -73.8917307]).addTo(map);
marker_6.bindTooltip("<div><b>Address:</b> 70-65 Queens Boulevard, Queens, NY 11377<br>"
+ "<b>Neighborhood:</b> Elmhurst<br>"
+ "<b>Owner:</b> Skyhill III Group, LLC<br>"
+ "<b>No. of Residential Units:</b> 91</div>"
+ "<b>Building Area Square Feet:</b> 67,026</div>");

var marker_7 = L.marker([40.9019731, -73.8970159]).addTo(map);
marker_7.bindTooltip("<div><b>Address:</b> 6375 Broadway, Bronx, NY 10471<br>"
+ "<b>Neighborhood:</b> Riverdale<br>"
+ "<b>Owner:</b> 6375 Broadway, LLC<br>"
+ "<b>No. of Residential Units:</b> 77</div>"
+ "<b>Building Area Square Feet:</b> 47,223</div>");

var marker_8 = L.marker([40.8792578, -73.9210444]).addTo(map);
marker_8.bindTooltip("<div><b>Address:</b> 2395 Palisade Avenue, Bronx, NY 10463<br>"
+ "<b>Neighborhood:</b> Spuyten Duyvil<br>"
+ "<b>Owner:</b> 2395 Palisade, LLC<br>"
+ "<b>No. of Residential Units:</b> 55</div>"
+ "<b>Building Area Square Feet:</b> 38,399</div>");

var marker_9 = L.marker([40.6558318, -73.9228838]).addTo(map);
marker_9.bindTooltip("<div><b>Address:</b> 407 Remsen Avenue, Brooklyn, NY 11212<br>"
+ "<b>Neighborhood:</b> Brownsville<br>"
+ "<b>Owner:</b> HKS Remsen Ave, LLC<br>"
+ "<b>No. of Residential Units:</b> 54</div>"
+ "<b>Building Area Square Feet:</b> 47,286</div>");

var marker_10 = L.marker([40.8444039, -73.8833491]).addTo(map);
marker_10.bindTooltip("<div><b>Address:</b> 2069 Honeywell Avenue, Bronx, NY 10460<br>"
+ "<b>Neighborhood:</b> West Farms<br>"
+ "<b>Owner:</b> 2069 Honeywell, LLC<br>"
+ "<b>No. of Residential Units:</b> 51</div>"
+ "<b>Building Area Square Feet:</b> 43,175</div>");

var marker_11 = L.marker([40.8526643, -73.8996298]).addTo(map);
marker_11.bindTooltip("<div><b>Address:</b> 2086 Valentine Avenue, Bronx, NY 10457<br>"
+ "<b>Neighborhood:</b> Tremont<br>"
+ "<b>Owner:</b> Noa-Lior, LLC<br>"
+ "<b>No. of Residential Units:</b> 49</div>"
+ "<b>Building Area Square Feet:</b> 38,304</div>");

var marker_12 = L.marker([40.7514113, -73.8719659]).addTo(map);
marker_12.bindTooltip("<div><b>Address:</b> 95-01 37 Avenue, Queens, NY 11372<br>"
+ "<b>Neighborhood:</b> North Corona<br>"
+ "<b>Owner:</b> 9501 Realty, LLC<br>"
+ "<b>No. of Residential Units:</b> 44</div>"
+ "<b>Building Area Square Feet:</b> 56,889</div>");

var marker_13 = L.marker([40.5811514, -73.953376]).addTo(map);
marker_13.bindTooltip("<div><b>Address:</b> 15 West End Avenue, Brooklyn, NY 11235<br>"
+ "<b>Neighborhood:</b> Manhattan Beach<br>"
+ "<b>Owner:</b> 15 West End, LLC<br>"
+ "<b>No. of Residential Units:</b> 39</div>"
+ "<b>Building Area Square Feet:</b> 44,490</div>");

var marker_14 = L.marker([40.6925331, -73.9432913]).addTo(map);
marker_14.bindTooltip("<div><b>Address:</b> 825 Dekalb Avenue, Brooklyn, NY 11221<br>"
+ "<b>Neighborhood:</b> Bedford-Stuyvesant<br>"
+ "<b>Owner:</b> 825 Dekalb, LLC<br>"
+ "<b>No. of Residential Units:</b> 39</div>"
+ "<b>Building Area Square Feet:</b> 41,385</div>");

var marker_15 = L.marker([40.7547099, -73.9327819]).addTo(map);
marker_15.bindTooltip("<div><b>Address:</b> 37-28 30 Street, Queens, NY 11101<br>"
+ "<b>Neighborhood:</b> Long Island City<br>"
+ "<b>Owner:</b> 37-26 30th Street, LLC<br>"
+ "<b>No. of Residential Units:</b> 33</div>"
+ "<b>Building Area Square Feet:</b> 31,927</div>");

var marker_16 = L.marker([40.6523794, -73.9483528]).addTo(map);
marker_16.bindTooltip("<div><b>Address:</b> 290 Linden Boulevard, Brooklyn, NY 11226<br>"
+ "<b>Neighborhood:</b> Flatbush<br>"
+ "<b>Owner:</b> Linden Realty Group, LLC<br>"
+ "<b>No. of Residential Units:</b> 33</div>"
+ "<b>Building Area Square Feet:</b> 22,314</div>");

var marker_17 = L.marker([40.8701152, -73.8695644]).addTo(map);
marker_17.bindTooltip("<div><b>Address:</b> 3013 Barker Avenue, Bronx, NY 10467<br>"
+ "<b>Neighborhood:</b> Bronxwood<br>"
+ "<b>Owner:</b> SKMF Queens Management, LLC<br>"
+ "<b>No. of Residential Units:</b> 31</div>"
+ "<b>Building Area Square Feet:</b> 22,744</div>");

var marker_18 = L.marker([40.756115, -73.8328011]).addTo(map);
marker_18.bindTooltip("<div><b>Address:</b> 132-27 41 Road, Queens, NY 11355<br>"
+ "<b>Neighborhood:</b> Flushing<br>"
+ "<b>Owner:</b> NY Excelsior Development, LLC<br>"
+ "<b>No. of Residential Units:</b> 30</div>"
+ "<b>Building Area Square Feet:</b> 41,800</div>");

var marker_19 = L.marker([40.8518658, -73.8937101]).addTo(map);
marker_19.bindTooltip("<div><b>Address:</b> East 181 Street, Bronx, NY 10457<br>"
+ "<b>Neighborhood:</b> East Tremont<br>"
+ "<b>Owner:</b> Amanda 181 Realty, LLC<br>"
+ "<b>No. of Residential Units:</b> 28</div>"
+ "<b>Building Area Square Feet:</b> 16,377</div>");

var marker_20 = L.marker([40.7460258, -73.9203073]).addTo(map);
marker_20.bindTooltip("<div><b>Address:</b> 41-26 & 24 44 Street, Queens, NY 11104<br>"
+ "<b>Neighborhood:</b> Sunnyside<br>"
+ "<b>Owner:</b> Lotus 89, LLC<br>"
+ "<b>No. of Residential Units:</b> 27</div>"
+ "<b>Building Area Square Feet:</b> 19,976</div>");