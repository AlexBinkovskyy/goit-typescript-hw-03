// class A {
//     private someProperty = "str";
// }

// class B extends A {
//     showProperty() {
//         console.log(this.someProperty); // Помилка: 'someProperty' можна викликати лише в класі A
//     }
// }
// const x = new A();
// const z = new B();

// z.showProperty();

// console.log(x);
// console.log(z);


// class House {
//     constructor(public readonly tenants: string[]) {}
  
//     addTenant(tenant: string) {
//       this.tenants.push(tenant); // Не виникне жодних помилок, навіть якщо 'tenants' є 'readonly'.
//     }
//   }
  
//   const house = new House([]);
  
//   house.addTenant('Alice');
//   house.addTenant('Alice');
//   house.addTenant('Alice');
  
//   console.log(house.tenants); // Виведе: ['Alice']


// class House {
//     constructor(private readonly type: string, private street: string) {}
//   }
  
//   class StoneHouse extends House {
//     constructor(street: string) {
//       super('stone', street); // Виклик батьківського конструктора
//     }
//   }
  
//   const stoneHouse = new StoneHouse('Stone-world');

//   console.log(stoneHouse);

// class House {
//     private tenants: string[] = [];
  
//     constructor(private readonly type: string, private street: string) {}
  
//     public showAddress(this: House) {
//       console.log('Address: ' + this.street);
//     }
  
//     public showType(this: House) {
//       console.log('House Type: ' + this.type);
//       return ('House Type: ' + this.type)
//     }
  
//     public addTenant(tenant: string) {
//       this.tenants.push(tenant);
//     }
  
//     public showTenants(this: House) {
//       console.log(this.showType(), 'and his tenants: ',this.tenants);
//     }
//   }
  
//   class StoneHouse extends House {
//     private chargeOfTheHouse: string; // Головний в домі
  
//     constructor(street: string, generalTenant: string) {
//       super('stone', street); // Виклик батьківського конструктора
  
//       // Додаємо власника квартири.
  
//       this.chargeOfTheHouse = generalTenant;
  
//       this.addTenant(generalTenant);
//     }
  
//     public showTenants() {
//       console.log('General: ' + this.chargeOfTheHouse);
  
//       // Запускаємо батьківський метод showTenants();
  
//       super.showTenants();
//     }
//   }
  
//   const stoneHouse = new StoneHouse('Stone-world', 'Max');
  
//   stoneHouse.addTenant('Anton');
//   stoneHouse.addTenant('Nikita');
  
//   stoneHouse.showTenants();
//   stoneHouse.showType();
//   stoneHouse.showAddress();


type ItemType = {
    name: string;
  };
  
  class Catalog {
    showCatalog(items: ItemType[]) {
      items.forEach((item) => {
        console.log(item.name);
      });
    }
  }
  
  class Items {
    private items: ItemType[] = [];
    setItem(name: string) {
      this.items.push({ name });
    }
  
    getItems(): ItemType[] {
      return this.items;
    }
  }
  
  const items = new Items();
  const catalog = new Catalog();
  
  items.setItem('Catalog 1');
  items.setItem('Catalog 2');
  items.setItem('Catalog 3');
  
  catalog.showCatalog(items.getItems());