const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;

   // write logic here 
   let totalcal = cycling + running + swimming - extraCalorieInTake
   weightLostIn = (totalcal / 1000 * 6).toFixed(1)

   if (weightLostIn < 0 || cycling <= 0 || running <= 0 || swimming <= 0) {
      weightLostInAMonth = -1
   } else {
      weightLostInAMonth = Number(weightLostIn)
   }
   return weightLostInAMonth;
   
}

module.exports = calculateWeightLostInAMonth

