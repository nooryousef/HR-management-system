


const emplo1 = {
   idNo:function(){
      let x = Math.floor(Math.random() * 9000) + 1000;
      return x;
     
   },
   Name: "Samer   Ghazi",
   Department: "Administreation",
   level: "Senior",
   imageurl: " ",
   salary:function(min,max){
      let y = Math.floor(Math.random() * (max - min + 1) + min);
      return y = y - y * .075 ;
   },
}
document.getElementById("demo").innerHTML = "Employee Name: " + "     " + emplo1.Name
document.getElementById("demo1").innerHTML = "Employee Salary:" + "   " + emplo1.salary(1500,2000)



const emplo2 = {
   idNo:function(){
      let x = Math.floor(Math.random() * 9000) + 1000;
      return x;
   },
   Name: "Lana  Ali",
   Department: "Finance",
   level: "senior",
   imageurl: " ",
   salary:function(min,max){
      let y = Math.floor(Math.random() * (max - min + 1) + min);
      return y = y - y * .075 ;
   },

}



document.getElementById("demo2").innerHTML = "Employee Name: " + "     " + emplo2.Name

document.getElementById("demo3").innerHTML = "Employee salary: " + "     " + emplo2.salary(1500, 2000)


const emplo3 = {
   idNo:function(){
      let x = Math.floor(Math.random() * 9000) + 1000;
      return x;
   },
   Name: "Tamara  Ayyoub",
   Department: "Markiting",
   level: "senior",
   imageurl: "  ",
   salary:function emploSalary(min,max){
      let y = Math.floor(Math.random() * (max - min + 1) + min);
      return y = y - y * .075 ;
   },
}


document.getElementById("demo4").innerHTML = "Employee Name: " + "     " + emplo3.Name
document.getElementById("demo5").innerHTML = "Employee Salary: " + "     " + emplo3.salary(1500,2000)

const emplo4 = {
   idNo:function(){
      let x = Math.floor(Math.random() * 9000) + 1000;
      return x;
   },
   Name: "Safi Walid",
   Department: "Administration",
   level: "mid-senior",
   imageurl: "  ",
   salary:function emploSalary(min,max){
      let y = Math.floor(Math.random() * (max - min + 1) + min);
      return y = y - y * .075 ;
   },
}

document.getElementById("demo6").innerHTML = "Employee Name: " + "     " + emplo4.Name
document.getElementById("demo7").innerHTML = "Employee Salary: " + "     " + emplo4.salary(1000,1500)

const emplo5 = {
   idNo:function(){
      let x = Math.floor(Math.random() * 9000) + 1000;
      return x;
   },
   Name: "Omar Zaid",
   Department: "Development",
   level: "senior",
   imageurl: "  ",
   salary:function emploSalary(min,max){
      let y = Math.floor(Math.random() * (max - min + 1) + min);
      return y = y - y * .075 ;
   },
}

document.getElementById("demo8").innerHTML = "Employee Name: " + "     " + emplo5.Name
document.getElementById("demo9").innerHTML = "Employee Salary: " + "     " + emplo5.salary(1500,2000)



const emplo6 = {
   idNo:function(){
      let x = Math.floor(Math.random() * 9000) + 1000;
      return x;
   },
   Name: "Rana Saleh",
   Department: "Development",
   level: "Junior",
   imageurl: "  ",
   salary:function emploSalary(min,max){
      let y = Math.floor(Math.random() * (max - min + 1) + min);
      return y = y - y * .075 ;
   },
}

document.getElementById("demo10").innerHTML = "Employee Name: " + "     " + emplo6.Name
document.getElementById("demo11").innerHTML = "Employee Salary: " + "     " + emplo6.salary(500,1000)


const emplo7 = {
   idNo:function(){
      let x = Math.floor(Math.random() * 9000) + 1000;
      return x;
   },
   Name: "Hadi Ahmad",
   Department: "Finance",
   level: "Mid-senior",
   imageurl: "  ",
   salary:function emploSalary(min,max){
      let y = Math.floor(Math.random() * (max - min + 1) + min);
      return y = y - y * .075 ;
   },
}

document.getElementById("demo12").innerHTML = "Employee Name: " + "     " + emplo7.Name
document.getElementById("demo13").innerHTML = "Employee Salary: " + "     " + emplo7.salary(1000,1500)














let arr = [emplo1, emplo2, emplo3]
for (let i = 0; i < 2; i++) {
   console.log(arr[i])
}