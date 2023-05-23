
const hrmanagement=[]
function Employment(emploName, emplodepartment, emplolevel, Img) {
    this.name = emploName;
    this.Department = emplodepartment;
    this.Level = emplolevel;
    this.emploimg = Img;
    this.emloId = this.idnumber();
    this.empSalary=this.Salary();
   
};

Employment.prototype.idnumber = function () {
    let x = Math.floor(Math.random() * 9000) + 1000;
    return x;
};

    Employment.prototype.Salary = function ( ){

        if (this.Level=="Senior"){
            let y = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
            return y = y - y * .075;
        }

       else if (this.Level=="Mid-senior"){
            let y = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
            return y = y - y * .075;
        } 
        
       else if (this.Level=="Junior"){
            let y = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
            return y = y - y * .075;
        } 
    }

            Employment.prototype.emplinfo=function(){
            


                document.write( `employee name : ${this.name}  <br>   Department : ${this.Department}  <br> Employee salary : ${this.Salary()}  <br> ` )
           document.write(`</br> ` )
           
            }


    let emp1= new Employment("Samer Ghazi", "Administration", "Senior", "./assets/download.jpg")
    emp1.emplinfo();
    
    let emp2 = new Employment("Lana Ali ", "Finance", "Senior", "./assets/download.jpg");
emp2.emplinfo();
    
    let emp3 = new Employment("Tamara Ayyoub", "Marketing", "Senior", "./assets/download.jpg");
    
emp3.emplinfo();


    let emp4 = new Employment("Safi Walid", "Administration ", "Mid-senior", "./assets/download.jpg");
emp4.emplinfo();








    let emp5 = new Employment("Omar Ziad ", "Development ", "Senior", "./assets/download.jpg");

emp5.emplinfo();

     let emp6 = new Employment("Rana Saleh", "Development ", "Junior", "./assets/download.jpg");
     emp6.emplinfo();

     let emp7 = new Employment("Hani Ahmad", "Finance ", "Mid-senior", "./assets/download.jpg");
     emp7.emplinfo();




