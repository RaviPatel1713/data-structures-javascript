var Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let firstName = firstAndLast.split(/\s/)[0];
    let lastName = firstAndLast.split(/\s/)[1];

    this.getFirstName = function () {
        return firstName;
    }
    this.getLastName = function () {
        return lastName;
    }
    this.getFullName = function () {
        return firstName + " " + lastName;
    };
    this.setFirstName = function (fn) {
        firstName = fn;
    }
    this.setLastName = function (ln) {
        lastName = ln;
    }
    this.setFullName = function (fl) {
        firstName = fl.split(/\s/)[0];
        lastName = fl.split(/\s/)[1];
    }
    return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(bob.getFirstName());
bob.getFullName();