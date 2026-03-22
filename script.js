// 1. Grocery Bill Calculator
function calculateBill() {
    let numItems = parseInt(prompt("Enter number of items:"));
    let total = 0;

    for (let i = 1; i <= numItems; i++) {
        let price = parseFloat(prompt("Enter price of item " + i + ":"));
        total += price;
    }

    if (total > 5000) {
        total -= total * 0.10;
    }

    console.log("Final Grocery Bill:", total);
}

// 2. Student Result System
function studentResult() {
    function calculateGrade(avg) {
        if (avg >= 80) return "A";
        else if (avg >= 60) return "B";
        else if (avg >= 40) return "C";
        else return "Fail";
    }

    let name = prompt("Enter student name:");
    let total = 0;

    for (let i = 1; i <= 5; i++) {
        let marks = parseFloat(prompt("Enter marks for subject " + i + ":"));
        total += marks;
    }

    let average = total / 5;
    let grade = calculateGrade(average);

    console.log("Name:", name);
    console.log("Total:", total);
    console.log("Average:", average);
    console.log("Grade:", grade);
}

// 3. ATM System
function atmSystem() {
    let balance = 10000;

    function withdrawMoney(amount) {
        if (amount > balance) {
            console.log("Insufficient balance");
        } else {
            balance -= amount;
            console.log("Withdrawal successful");
            console.log("Remaining Balance:", balance);
        }
    }

    for (let i = 1; i <= 3; i++) {
        let amount = parseFloat(prompt("Enter withdrawal amount:"));
        withdrawMoney(amount);
    }
}

// 4. Restaurant Order System
function restaurantOrder() {
    function calculateOrder(item, quantity) {
        let price = 0;

        if (item.toLowerCase() === "burger") price = 500;
        else if (item.toLowerCase() === "pizza") price = 1200;
        else if (item.toLowerCase() === "drink") price = 200;
        else {
            console.log("Invalid item");
            return 0;
        }

        let total = price * quantity;

        if (total > 2000) {
            total -= total * 0.15;
        }

        return total;
    }

    let item = prompt("Enter item (Burger/Pizza/Drink):");
    let quantity = parseInt(prompt("Enter quantity:"));

    let bill = calculateOrder(item, quantity);
    console.log("Final Bill:", bill);
}

// 5. Employee Salary Calculator
function employeeSalary() {
    function calculateSalary(hours) {
        let rate = 500;
        let salary;

        if (hours > 40) {
            salary = hours * (rate * 1.5);
        } else {
            salary = hours * rate;
        }

        return salary;
    }

    for (let i = 1; i <= 3; i++) {
        let name = prompt("Enter employee name:");
        let hours = parseFloat(prompt("Enter hours worked:"));

        let salary = calculateSalary(hours);

        console.log("Employee:", name);
        console.log("Salary:", salary);
    }
}