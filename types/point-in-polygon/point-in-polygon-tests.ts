import inside = require("point-in-polygon");

const polygon = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ];
const inPolygon: boolean = inside([ 1.5, 1.5 ], polygon);
inside([1.5, 1.5], polygon, 3, 4); // $ExpectType boolean
