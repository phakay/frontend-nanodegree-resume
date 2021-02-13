var displayChart = function(){
	var canvasH = 600;
	var canvasW = 600;
	const svg = d3.select('#chartDiv')
		.append('svg')
		.attr('height', canvasH)
		.attr('width', canvasW);

	const margin = {top: 20, right: 20, bottom: 100, left: 100};
	const graphWidth = canvasW - margin.left - margin.right;
	const graphHeight = canvasH - margin.top - margin.bottom;

	const graph = svg.append('g')
					.attr('width',graphWidth)
					.attr('height', graphHeight)
					.attr('transform',`translate(${margin.left},${margin.top})`);
	const xAxisGroup = graph.append('g')
						.attr('transform', `translate(0, ${graphHeight})`);
	const yAxisGroup = graph.append('g');

	//scales
	const yUnits = "Pts";
	const y = d3.scaleLinear().range([graphHeight,0]);
	const x = d3.scaleBand().range([0, 500])
			.paddingInner(0.2)
			.paddingOuter(0.2);

	const xAxis = d3.axisBottom(x);
	const yAxis = d3.axisLeft(y)
				.ticks(3).tickFormat(d => d +" "+yUnits);

	const t = d3.transition().duration(3000);

	function update(data){
		y.domain([0, max = d3.max(data, function(d){return d.value})]);
		x.domain(data.map(d => d.name));

		const rects = graph.selectAll('rect')
					.data(data);

		rects.exit().remove();

		rects.attr('width', x.bandwidth)
				.attr('fill', '#F5AE23')
				.attr('x', d => x(d.name))
				.transition(t)
					.attr('height', d => graphHeight - y(d.value))
					.attr('y', d => y(d.value));

		rects.enter()
			.append('rect')
			.attr('height',0)
			.attr('y', graphHeight)
			.attr('fill', '#F5AE23')
			.attr('x', d => x(d.name))
			.transition(t)
				.attrTween('width', (d) => {
					let i = d3.interpolate(0, x.bandwidth());
					return function(t){ return i(t);}
				})
				.attr('y', d=> y(d.value))
				.attr('height', d => graphHeight - y(d.value));

		xAxisGroup.call(xAxis);
		yAxisGroup.call(yAxis);

		xAxisGroup.selectAll('text')
			.attr('transform', `rotate(-40)`)
			.attr('text-anchor', 'end')
			.attr('fill', 'black');
	}


	var data = [];
	bio.skills.forEach(function(x){
		data.push(x);
	});

	update(data);

}


displayChart();
