export default class Customer {
    id;
    customerName;
    address;
    salary;

    constructor(id, customerName, address, salary) {
        this.id = id;
        this.customerName = customerName;
        this.address = address;
        this.salary = salary;
    }
}


// fetch("burger.json").then(res => res.json()).then(data => {
//     console.log(data[0].id);

// })


fetch("nav.html").then(res => res.text()).then(data => {
    console.log(data);

})