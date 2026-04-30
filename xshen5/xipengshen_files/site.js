var papers = [];
var viewModel = null;

$(document).ready(function()
{

	$.getJSON("papers.json", function(json) 
	{
		papers = json;
		setUp();
	});
});
function setUp()
{
	// Enable toggle buttons.
	$('.btn-group > .btn').button();

	setFilters();

	function PaperModel(p)
	{
		var self = this;
		self.paper = p;
		self.leadYear = ko.observable();
		self.counter = ko.observable();

		self.formattedAuthors = function()
		{
			return self.paper.authors.join(", ");
		}

	}

	function ViewModel()
	{
		var self = this;
		self.papers = ko.observableArray( jQuery.map(papers.papers, function(p){ return new PaperModel(p); }) );
		self.currentFilter = ko.observable();

		self.filter = function(category) {
			self.currentFilter(category);
		};

		self.populate = function(incoming)
		{
			incoming.sort( function(a,b)
			{
				var d = b.paper.year - a.paper.year;
				if( d == 0 )
				{
					return (b.paper.booktitle>a.paper.booktitle)-(b.paper.booktitle<a.paper.booktitle); 
				}
				else return d;
			} );

			var yearMap = {};
			let counter = incoming.length;
			for( let p of incoming)
			{
				p.leadYear(null);
				p.counter(counter--);

				if( !yearMap.hasOwnProperty( p.paper.year + "") )
				{
					p.leadYear(p.paper.year);
				}
				yearMap[p.paper.year+ ""] = p.paper.year;
    		}
		};

		self.filterPapers = ko.computed(function() 
		{
			var filteredPapers = null;
			if(!self.currentFilter()) {
				filteredPapers = self.papers(); 
			} else {
				filteredPapers = ko.utils.arrayFilter(self.papers(), function(paper) {
					return paper.paper.category == self.currentFilter();
			   });
			}

			self.populate(filteredPapers);
			return filteredPapers;
		});

	}

	viewModel = new ViewModel();
	ko.applyBindings( viewModel );
}

function setFilters()
{
	$('#data').change(function()
	{
		if($(this).is(':checked')) 
		{
			viewModel.filter("data");
		}
	});

	$('#all').change(function()
	{
		if($(this).is(':checked')) 
		{
			viewModel.filter(null);
		}
	});

	$('#interactions').change(function()
	{
		if($(this).is(':checked')) 
		{
			viewModel.filter("interactions");
		}
	});

	$('#brains').change(function()
	{
		if($(this).is(':checked')) 
		{
			viewModel.filter("brains");
		}
	});

	$('#crowds').change(function()
	{
		if($(this).is(':checked')) 
		{
			viewModel.filter("crowds");
		}
	});

}

