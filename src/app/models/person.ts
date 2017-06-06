export class Person {

    firstName: string;
    lastName: string;
    skills: Skill[];
    comment: string;
    availability: Date;
    isEditing: Boolean = false;
    tmpPerson: Person;
    salary: Number;
    salaryInfo: string;
    expYears: Number;

    constructor(firstName: string, lastName: string, skills: Skill[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.skills = skills;
        this.availability = new Date();
        this.salary = Math.floor(Math.random() * 100000);
        this.salaryInfo = "Netto"
        this.expYears = Math.floor(Math.random() * 40)/2;
    }

    copy(): Person {
        let copy = new Person("", "", []);
        copy.copyConstructor(this);
        return copy;
        // return <Person>JSON.parse(JSON.stringify(this));
    }

    copyConstructor(newPerson: Person) {
        this.firstName = newPerson.firstName;
        this.lastName = newPerson.lastName;
        this.skills = [];
        for (let s of newPerson.skills)
            this.skills.push(s);
        this.comment = newPerson.comment;
        this.availability = newPerson.availability;
        this.salary = newPerson.salary;
        this.salaryInfo = newPerson.salaryInfo;
        this.expYears = newPerson.expYears;

    }

    startEditing() {
        this.isEditing = true;
        this.tmpPerson = this.copy();
    }

    stopEditing() {
        this.isEditing = false;

    }

    cancelEditing() {
        this.copyConstructor(this.tmpPerson);
        this.isEditing = false;
    }

    deleteSkill(skill) {
        let index: number = this.skills.indexOf(skill);
        if (index !== -1) {
            this.skills.splice(index, 1);
        }
    }
}

export class Skill {
    name: string;
    highlighted: boolean;

    constructor(name: string, highlighted: boolean = false) {
        this.name = name;
        this.highlighted = highlighted;
    }

    getColor() {
        return this.highlighted ? 'accent' : '';
    }
}
