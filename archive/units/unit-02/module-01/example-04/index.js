import { select } from "d3-selection";

const svg = select("svg");

function render(data){
  const circles = svg.selectAll("circle").data(data);
  circles.exit().remove();
  circles
    .enter().append("circle")
      .attr("fill", "rgba(255, 0, 0, 0.3)")
      .attr("stroke", "black")
    .merge(circles)
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", d => d.r);
}

render([
  { x: 300, y:150, r: 44 },
  { x: 500, y:350, r: 51 },
  { x: 700, y:200, r: 33 },
  { x: 583, y:114, r: 77 },
  { x: 844, y:218, r: 74 },
  { x: 257, y:316, r: 44 },
  { x: 466, y:200, r: 31 },
  { x: 179, y:414, r: 50 },
  { x: 179, y:231, r: 36 },
  { x: 376, y:326, r: 26 },
  { x: 676, y:118, r: 68 },
  { x: 626, y:199, r: 68 },
  { x: 510, y:269, r: 15 },
  { x: 510, y:419, r: 15 },
  { x: 311, y:388, r: 15 },
  { x: 50, y:388, r: 6 },
  { x: 90, y:431, r: 6 },
  { x: 90, y:287, r: 11 },
  { x: 630, y:145, r: 11 }
]);