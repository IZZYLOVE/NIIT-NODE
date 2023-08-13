// Please refer below data to provide solution for below requirements

let empDetails = [
    {id:1,name:"Roger",salary:50000,Bonus:1000,appraisal:80},
    {id:2,name:"David",salary:55000,Bonus:1000,appraisal:70},
    {id:3,name:"Alison",salary:65000,Bonus:1000,appraisal:90},
    {id:4,name:"Anthony",salary:70000,Bonus:1000,appraisal:95},
    {id:5,name:"Kristen",salary:80000,Bonus:1000,appraisal:98},
];


function arrangeEmpDetails1(data)
{
    // write your code here
    let unSortedNamesArray = []

    data.map((datax, i) => {  
        unSortedNamesArray.push(datax.name)
    })
    console.log('unSortedNamesArray')
    console.log(unSortedNamesArray)
    return (unSortedNamesArray.sort())

    // for (props in Obj) {    
    //     if(Obj[props].length > len){
    //         longestKey = props
    //         len = Obj[props].length
    //     }
    // }

}
console.log(arrangeEmpDetails1(empDetails))


const displayEmp = empDetails.map((emp)=>{
    // write your code here
    return( `${emp.id} ---- ${emp.name} ---- ${emp.salary}`)
})
console.log(displayEmp);

const totalsal = empDetails
.filter(emp => emp.name.startsWith('A'))
.reduce((total,emp)=> (total) + (emp.salary) + (emp.Bonus),0);
console.log(totalsal);

function getAppraisalPct(maxappraisalscore) 
{
    // write your code here
    if(maxappraisalscore >= 100){ return('20% hike to be given') }
    else if(maxappraisalscore > 90){ return('10% hike to be given') }
    else if(maxappraisalscore > 85){ return('5% hike to be given') }
    else { return('Unfortunately, you are not eligible for a hike') }
}

console.log(getAppraisalPct(100))
console.log(getAppraisalPct(96))
console.log(getAppraisalPct(87))
console.log(getAppraisalPct(70))
console.log(getAppraisalPct())