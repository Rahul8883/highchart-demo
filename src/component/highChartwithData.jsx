import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function HighChartWithData() {

 const options={
   xAxis:{
    categories:['mango', 'banana', 'apple']
   },
   yAxis:{
       alternateGridColor: 'gray',
     title:{
       text:'fruits Eaten'
     }
   },
  chart: {
     type: "areaspline",
  },
  responsive:{
    rules:[
      {
        condition : {
          maxWidth :500
        },
        chartOption:{
          legend:{enabled: false},
          yAxis:{title:{text:''}}
        } 
      }
    ]
  },
  //There are two process for data vizulization.
    // series:[{
    //     data: [['rahul', 20], ['ranjan', 30], ['singh', 7], ['saurabh', 42]]
    // }]
series:[
    {
        name: 'data consumption',
        negativeColor : 'red',
        data:[
            {
                name:'rahul',
                x: 10,
                y:22,
                color: 'red'
            },
            {
                name:'ranjan',
                x: 20,
                y:42,
                color: 'seagreen'
            },
            {
                name:'singh',
                x: 30,
                y:-52,
                color: 'orange'
            }
        ]
    }
]
  }
  return (
    <div className="App">
     <HighchartsReact highcharts={Highcharts} options={options}/>
    </div>
  );
}

export default HighChartWithData;
