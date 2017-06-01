export class Person {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    copy(): Person {
        return <Person>JSON.parse(JSON.stringify(this));
    }
}
