class User {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    update(data: any) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
    }
    serialize() {
        return {
            firstName: this.firstName,
            lastName: this.lastName
        }
    }
}

export default User;
