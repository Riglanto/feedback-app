export class Person {

    firstName: string;
    lastName: string;
    skills: Skill[];
    comments: string[];

    constructor(firstName: string, lastName: string, skills: Skill[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.skills = skills;
    }

    copy(): Person {
        return <Person>JSON.parse(JSON.stringify(this));
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
