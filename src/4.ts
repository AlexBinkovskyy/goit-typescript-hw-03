class Key {
    private signature: number;

    constructor() {
        this.signature = Date.now();
    }

    public getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected tenants: Person[];
    protected doorIsOpen: boolean;
    protected key: Key;

    constructor(key: Key) {
        this.doorIsOpen = false;
        this.key = key;
        this.tenants = [];
    }

    public comeIn(person: Person): void {
        if (this.doorIsOpen) {
            this.tenants.push(person);
            console.log(`Person entered the house.`);
        } else {
            console.log(`The door is closed. Person cannot enter the house.`);
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }
    public openDoor(key: Key): void {
        if (this.key.getSignature() === key.getSignature()) {
            this.doorIsOpen = true;
            console.log(`The door is opened`);
        } else {
            console.log(`The provided key does not match. Cannot open the door.`);
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);
person.getKey();

house.openDoor(person.getKey());

house.comeIn(person);
