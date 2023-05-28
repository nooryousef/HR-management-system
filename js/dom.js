'use strict'
const hrmanagement = []
function Employment(emploName, emplodepartment, emplolevel, img) {
    this.name = emploName;
    this.Department = emplodepartment;
    this.Level = emplolevel;
    this.emploimg = img;
    this.emloId = this.idnumber();
    this.empSalary = this.Salary();
    hrmanagement.push(this);

};

Employment.prototype.idnumber = function () {
    let x = Math.floor(Math.random() * 9000) + 1000;
    return x;
};

Employment.prototype.Salary = function () {

    if (this.Level == "Senior") {
        let y = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
        let x = y * 0.075
        return Math.round(y - x);


    }

    else if (this.Level == "Mid-senior") {
        let y = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
        let x = y * 0.075
        return Math.round(y - x);

    }

    else if (this.Level == "Junior") {
        let y = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
        let x = y * 0.075
        return Math.round(y - x);

    }
}

let main = document.getElementsByTagName("main")[0];


let divmain1 = document.createElement("div")

main.appendChild(divmain1);


let divmain2 = document.createElement("div")
main.appendChild(divmain2);

let divmain3 = document.createElement("div")
main.appendChild(divmain3);

let divmain4 = document.createElement("div")
main.appendChild(divmain4);



Employment.prototype.emplinfo1 = function () {

    let div0 = document.createElement("div");
    div0.setAttribute("class", "card")

    divmain1.appendChild(div0);


    let emimage = document.createElement("img");
    emimage.src = this.emploimg;
    div0.appendChild(emimage);
    emimage.style.width = "160px"
    emimage.style.border = "3px solid white"
    emimage.style.marginLeft = "15px"
    emimage.style.marginTop = "8px"
    div0.style.border = "2px solid #24a77b "
    div0.style.width = "200px"
    div0.style.borderRadius = "10px"
    div0.style.backgroundColor = "#24a77b"
    let con = document.createElement("p")
    con.textContent = `Name : ${this.name} - ID: ${this.idnumber()} - Department: ${this.Department}-Level: ${this.Level} - Salary:${this.Salary()}`
    con.style.fontFamily = "Dancing Script"
    div0.appendChild(con);
    div0.style.margin = "10px"
    main.style.backgroundColor = "#dce6b3"



}
Employment.prototype.emplinfo2 = function () {

    let div0 = document.createElement("div");
    div0.setAttribute("class", "card")
    divmain2.appendChild(div0);


    let emimage = document.createElement("img");
    emimage.src = this.emploimg;
    div0.appendChild(emimage);
    emimage.style.width = "160px"
    emimage.style.border = "3px solid white"
    emimage.style.marginLeft = "15px"
    emimage.style.marginTop = "8px"
    div0.style.border = "2px solid #24a77b "
    div0.style.width = "200px"
    div0.style.borderRadius = "10px"
    div0.style.backgroundColor = "#24a77b"
    let con = document.createElement("p")
    con.textContent = `Name : ${this.name} - ID: ${this.idnumber()} - Department: ${this.Department}-Level: ${this.Level} - Salary:${this.Salary()}`
    con.style.fontFamily = "Dancing Script"
    div0.appendChild(con);
    div0.style.margin = "10px"
    main.style.backgroundColor = "#dce6b3"


}
Employment.prototype.emplinfo3 = function () {

    let div0 = document.createElement("div");
    div0.setAttribute("class", "card")
    divmain3.appendChild(div0);


    let emimage = document.createElement("img");
    emimage.src = this.emploimg;
    div0.appendChild(emimage);
    emimage.style.width = "160px"
    emimage.style.border = "3px solid white"
    emimage.style.marginLeft = "15px"
    emimage.style.marginTop = "8px"
    div0.style.border = "2px solid #24a77b "
    div0.style.width = "200px"
    div0.style.borderRadius = "10px"
    div0.style.backgroundColor = "#24a77b"
    let con = document.createElement("p")
    con.textContent = `Name : ${this.name} - ID: ${this.idnumber()} - Department: ${this.Department}-Level: ${this.Level} - Salary:${this.Salary()}`
    con.style.fontFamily = "Dancing Script"
    div0.appendChild(con);
    div0.style.margin = "10px"
    main.style.backgroundColor = "#dce6b3"


}

Employment.prototype.emplinfo4 = function () {

    let div0 = document.createElement("div");
    div0.setAttribute("class", "card")
    divmain4.appendChild(div0);


    let emimage = document.createElement("img");
    emimage.src = this.emploimg;
    div0.appendChild(emimage);
    emimage.style.width = "160px"
    emimage.style.border = "3px solid white"
    emimage.style.marginLeft = "15px"
    emimage.style.marginTop = "8px"
    div0.style.border = "2px solid #24a77b "
    div0.style.width = "200px"
    div0.style.borderRadius = "10px"
    div0.style.backgroundColor = "#24a77b"
    let con = document.createElement("p")
    con.textContent = `Name : ${this.name} - ID: ${this.idnumber()} - Department: ${this.Department}-Level: ${this.Level} - Salary:${this.Salary()}`
    con.style.fontFamily = "Dancing Script"
    div0.appendChild(con);
    div0.style.margin = "10px"
    main.style.backgroundColor = "#dce6b3"


}









let foot = document.getElementsByTagName("footer")[0];
foot.style.position = "absolute";





let emp1 = new Employment("Samer Ghazi", "Administration", "Senior", "./assets/Ghazi (1).jpg")

let emp2 = new Employment("Lana Ali ", "Finance", "Senior", "./assets/Lana.jpg");


let emp3 = new Employment("Tamara Ayyoub", "Marketing", "Senior", "./assets/Tamara.jpg");



let emp4 = new Employment("Safi Walid", "Administration", "Mid-senior", "./assets/Safi.jpg");








let emp5 = new Employment("Omar Ziad ", "Development", "Senior", "./assets/Omar.jpg");



let emp6 = new Employment("Rana Saleh", "Development", "Junior", "./assets/Rana.jpg");

let emp7 = new Employment("Hani Ahmad", "Finance", "Mid-senior", "./assets/Hadi.jpg");



for (let i = 0; i < hrmanagement.length; i++) {


    if (hrmanagement[i].Department === "Development") {
        hrmanagement[i].emplinfo1();
    }

    else if (hrmanagement[i].Department === "Finance") {
        hrmanagement[i].emplinfo2();
    }
    else if (hrmanagement[i].Department === "Administration") {
        hrmanagement[i].emplinfo3();
    }
    else if (hrmanagement[i].Department === "Marketing") {
        hrmanagement[i].emplinfo4();

    }

}
