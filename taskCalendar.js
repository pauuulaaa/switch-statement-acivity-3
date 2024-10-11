function week() {
    let week = prompt("Enter the day of the week.");
    switch (week) {
        case "Monday":
            alert("your task for Monday: clean the house");
            break;
        case "Tuesday":
            alert("your task for Tuesday: do my assignments");
            break;
        case "Wednesday":
            alert("your task for Wednesday: do laundry");
            break;
        case "Thursday":
            alert("your task for Thursday: hangout with my friends");
            break;
        case "Friday":
            alert("your task for Friday: walking every morning");
            break;
        case "Saturday":
            alert("your task for Saterday: watering the plants");
            break;
        case "Sunday":
            alert("your task for Sunday: family bonding ");
            break;
            default:
            alert("invalid")
    }
}