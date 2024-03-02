// The observer class
class PhoneObserver {
    notify(phoneNumber) {
        console.log("Phone Number:", phoneNumber);
    }
}

class SecondPhoneObserver {
    notify(phoneNumber) {
        console.log("Now Dialing", phoneNumber);
    }
}

class ThirdPhoneObserver {
    notify() {
        console.log("Line Busy, Try again later");
    }
}

// Phone class
class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }

    //Add number
    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.add(phoneNumber);
    }

    //Remove number
    removePhoneNumber(phoneNumber) {
        this.phoneNumbers.delete(phoneNumber)
    }

    //Dail number
    dailPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)) {
            this.notifyObservers(phoneNumber)
        } else {
            console.log("Phone number not found")
        }
    }

    //Add observer
    addObserver(observer) {
        this.observers.push(observer)
    }

    //Remove observer
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    //Notify observer
    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => {
            observer.notify(phoneNumber)
        })
    }
}

//Run
const telephone = new Telephone();

const observer1 = new PhoneObserver();
const observer2 = new SecondPhoneObserver();
const observer3 = new ThirdPhoneObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);
telephone.addObserver(observer3);

//Adds phone number
telephone.addPhoneNumber("08152669241");
telephone.addPhoneNumber("08065337933");
telephone.addPhoneNumber("08055262312")
console.log("---------------------------------")

//Dials phone number 
telephone.dailPhoneNumber("08152669241");
console.log("---------------------------------")
telephone.dailPhoneNumber("08065337933");
console.log("---------------------------------")
telephone.dailPhoneNumber("08055262312")
console.log("---------------------------------")

//Removes the phone number
telephone.removePhoneNumber("08152669241");
telephone.dailPhoneNumber("08152669241");
console.log("---------------------------------")

//Removes observer
telephone.removeObserver(observer3);

//Shows only phone number
telephone.removeObserver(observer2);
telephone.dailPhoneNumber("08065337933");
console.log("---------------------------------")

//Shows only now dailing 
telephone.addObserver(observer2)
telephone.removeObserver(observer1);
telephone.dailPhoneNumber("08055262312");
console.log("---------------------------------")

