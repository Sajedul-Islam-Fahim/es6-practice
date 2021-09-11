//object create and access
class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'England'
    }
}

const student1 = new Student(21, 'Fahim');
const student2 = new Student(10, 'Messi');
const student3 = new Student(11, 'Reus');
console.log(student1['name'], student2.name, student3.name);

//Inheritance
class Parent{
    constructor(){
        this.fatherName = 'Arnold';
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    getFullName(){
        return this.name + ' ' + this.fatherName;
    }
}


const baby = new Child('Reus');

console.log(baby.getFullName());

//destructure 
const person = {name:'fahim', age: 24, job: 'bekar', gfName: 'none', phone: 0121515111};

const {job, gfName} = person;
console.log(job, gfName);

const friends = ['Salman Khan', 'Emraan Hashmi', 'Siam Ahmed', 'Arefin Shuvo'];
const [bhaijan, romantic, ...bdHero] = friends;
console.log(bhaijan, romantic, bdHero);

const applicant = {
    name: 'salman',
    age: 34,
    info: {
        address: 'india',
        profession: 'Actor'
    }
}

const {profession} = applicant.info;
console.log(profession);
