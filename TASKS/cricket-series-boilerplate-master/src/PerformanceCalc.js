
const PerformanceCalculator=(runs,balls)=>{
      // Write the Logic here
      if(runs > 100 && balls <= 50 ){
            let timesOut = 7.63
            return(runs/(balls - timesOut))
      }
      else if(runs > 50 && balls < 20 ){
            let timesOut = 1.37
            return(runs/(balls - timesOut))
      }
      else if(runs > 30 && balls < 15 ){
            let timesOut = 0.13
            return(runs/(balls - timesOut))
      }
      else if(runs <= 30 ){
            return(runs/balls)
      }
      else{}
      
}

module.exports={PerformanceCalculator}
