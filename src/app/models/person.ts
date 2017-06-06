export class Person {

    firstName: string;
    lastName: string;
    skills: Skill[];
    comment: string;
    availability: Date;
    isEditing: boolean = false;
    tmpPerson: Person;
    salary: Number;
    salaryInfo: string;
    expYears: Number;
    city: String;
    relocation: boolean = false;
    asap: boolean = false;
    recommendation: string;
    fullTime: boolean = true;
    partTime: boolean = false;
    remoteOnly: boolean = false;

    constructor(firstName: string, lastName: string, skills: Skill[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.skills = skills;
        this.availability = new Date();
        this.salary = Math.floor(Math.random() * 100000);
        this.salaryInfo = "Netto";
        this.expYears = Math.floor(Math.random() * 40) / 2;
        this.city = "Wroclaw";
        this.relocation = Math.random() > .5;
        this.asap = Math.random() > .5;
        this.fullTime = Math.random() > .5;
        this.partTime = Math.random() > .5;
        this.remoteOnly = Math.random() > .5;
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
            this.skills.push(s.copy());
        this.comment = newPerson.comment;
        this.availability = newPerson.availability;
        this.salary = newPerson.salary;
        this.salaryInfo = newPerson.salaryInfo;
        this.expYears = newPerson.expYears;
        this.city = newPerson.city;
        this.relocation = newPerson.relocation;
        this.asap = newPerson.asap;
        this.recommendation = newPerson.recommendation;
        this.fullTime = newPerson.fullTime;
        this.partTime = newPerson.partTime;
        this.remoteOnly = newPerson.remoteOnly;
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

    addSkill() {
        this.skills.push(new Skill(""));
    }
}

export class Skill {
    name: string;
    level: number;
    highlighted: boolean;

    constructor(name: string, highlighted: boolean = false) {
        this.name = name;
        this.highlighted = highlighted;
        this.level = Math.floor(Math.random() * 3) + 1;
    }

    copy(): Skill {
        let copy = new Skill("");
        copy.copyConstructor(this);
        return copy;
    }

    copyConstructor(newSkill: Skill) {
        this.name = newSkill.name;
        this.highlighted = newSkill.highlighted;
        this.level = newSkill.level;
    }

    getColor() {
        return this.highlighted ? 'accent' : '';
    }
}
