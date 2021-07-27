import './App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighChartwithData from './component/highChartwithData'

function App() {

 const options={
   xAxis:{
    categories:['mango', 'banana', 'apple']
   },
   yAxis:{
     title:{
       text:'fruits Eaten'
     }
   },
  chart: {
     type: "areaspline", //option:line,  bar, column, scatter, area, areaspline
      zoomType: "x"  //x, y, xy
      
    
  },
  credits:{
    // enabled: false
    text:'custom credit',
    href:'https://api.highcharts.com/highcharts/xAxis',
    position:{
      align:'left',
      x :10
    },
    style:{
      fontSize : '15px',
      color: 'red'
    }
  },
  colors:['#FF4500', '#FFD700', '#FFFF00', '#7FFF00'],
  tooltip:{
    formatter(){
      //This is for tooltip formatter
      // return `<strong> x value </strong> - ${this.x}. <em>y value</em> - ${this.y}`;
      let s=  `<strong> x is :  </strong> - ${this.x}`
      this.points.forEach((point)=>{
        s+=`<br>y is : ${point.y}`
      })
      return s;
    },
    shared:true,
    animation :false,
    backgroundColor: 'black',
    borderColor:'red',
    borderRadius:20,
    followPointer: true,
    style:{
      color: 'white'
    }
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

  title: {
    text: "Bar Chart"
  },
    series:[{
      name:'profit',
      data:[1, 2, 3,100, 50, 40, 30]
    },
    {
      name:'loss',
      data:[2, 4, 8, 20, 60, 35, 90]
    },
    {
      name:'up',
      data:[1, 2, 3,8, 20, 60, 35,]
    },
    {
      name:'down',
      data:[1, 4,30, 22, 33,44,55]
    }
  ]
  }
  return (
    <div className="App">
     <HighchartsReact highcharts={Highcharts} options={options}/>
     <HighChartwithData/>
    </div>
  );
}

export default App;
