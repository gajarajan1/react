import React from 'react';
var Product =()=> {
var citylist=[{
city:"chennai",
class:"metro",
population:20000000
},
{
  city:"theni",
  class:"Na",
  population:5000000},
{
 city:"madurai",
 class:"non-metro",
 population:9000000},
];
return{
  citylist.map(function (c) {
    <h1>(c.city)</h1>
    <strong>(c.class)</strong>
    <h6>(c.population)</h6>
  })
}
}
export default Product;
