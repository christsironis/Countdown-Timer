// Varieable for checking if all the containers have been updated the first time 
let first_time = true;
// Function that updates the number and the classes for the animations to start
function current_container(node, i, bool) {
	if (bool) {
		// Selects the elements with specific classes, inside the node i give in the function when i called it
		let active = node.querySelector(".active");
		let before = node.querySelector(".before");
		let up_back = node.querySelector("#up_back");
		let down_back = node.querySelector("#down_back");
		// Creates an element with class <<before>>
		let new_before = document.createElement("div");
		new_before.className = "before";
		// Puts the content of the element with the number that will be displayed
		new_before.innerHTML = `
    <div id="up_back" class="flip second">${i}</div>
    <div id="down_back" class="flip second">${i}</div>`;
		// Removes the element with the class <<active>> if it exists
		if(active)active.remove();
		// Renames the class to active of the element with class <<before>>
		before.className = "active";
		// Changes the name of the id for the element with id <<up_back>> to <<up>>
		up_back.id = "up";
		// Changes the name of the id for the element with id <<down_back>> to <<down>>
		down_back.id = "down";
		// Inserts the element new_before as the first element of the node
		node.insertBefore(new_before, node.childNodes[0]);
	}
}

// Set the date we're counting down to
var countDownDate =  new Date(`dec 31, ${new Date().getFullYear()} 23:59:59`).getTime();

// Get todays date and time
var now = new Date().getTime();

// Find the distance between now an the count down date
let distance = countDownDate - now;
// Sets the seconds,minutes,hours,days
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let days = Math.floor(distance / (1000 * 60 * 60 * 24));

// Copies and stores the digits of the seconds,minutes,hours,days into new variables (old_digits)
//which will be used to check if there is a change in the digits of the seconds,minutes,hours,days later
let old_day3 = days % 10;
let old_day2 = ((days % 100) - old_day3) / 10;
let old_day1 = days / 100;
let old_hour2 = hours % 10;
let old_hour1 = (hours - old_hour2) / 10;
let old_minute2 = minutes % 10;
let old_minute1 = (minutes - old_minute2) / 10;
let old_seconds2 = seconds % 10;
let old_seconds1 = (seconds - old_seconds2) / 10;

// Update the count down every 1 second
setInterval(function () {

	// Get todays date and time
	now = new Date().getTime();

	// Find the distance between now an the count down date and sets the seconds,minutes,hours,days
	distance = countDownDate - now;
	seconds = Math.floor((distance % (1000 * 60)) / 1000);
	minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	days = Math.floor(distance / (1000 * 60 * 60 * 24));

	// Checks if it's the first time that the interval is being executed 
	if (!first_time) {
		// Days	
		{	// Sets the digits of the days container
			let num3 = days % 10;
			let num2 = ((days % 100) - num3) / 10;
			let num1 = Math.floor(days / 100);
			// Calls the current_container function and checks if the digits has change with the help of the old_digits variables
			current_container(document.querySelector("#timer .days .num3"), num3, (num3===old_day3)? false : true);
			current_container(document.querySelector("#timer .days .num2"), num2, (num2===old_day2)? false : true);
			current_container(document.querySelector("#timer .days .num1"), num1, (num1===old_day1)? false : true);
			// Sets the new values for the old_digits variables
			old_day3 = num3;
			old_day2 = num2;
			old_day1 = num1;
		}
	
		// hours
		{	// Sets the digits of the days container
			let num2 = hours % 10;
			let num1 = (hours - num2) / 10;
			// Calls the current_container function and checks if the digits has change with the help of the old_digits variables
			current_container(document.querySelector("#timer .hours .num2"), num2, (num2===old_hour2)? false : true);
			current_container(document.querySelector("#timer .hours .num1"), num1, (num1===old_hour1)? false : true);
			// Sets the new values for the old_digits variables
			old_hour2 = num2;
			old_hour1 = num1;
		}
	
		// minutes
		{	// Sets the digits of the days container
			let num2 = minutes % 10;
			let num1 = (minutes - num2) / 10;
			// Calls the current_container function and checks if the digits has change with the help of the old_digits variables
			current_container(document.querySelector("#timer .minutes .num2"), num2, (num2===old_minute2)? false : true);
			current_container(document.querySelector("#timer .minutes .num1"), num1, (num1===old_minute1)? false : true);
			// Sets the new values for the old_digits variables
			old_minute2 = num2;
			old_minute1 = num1;
		}
	
		// seconds
		{	// Sets the digits of the days container
			let num2 = seconds % 10;
			let num1 = (seconds - num2) / 10;
			// Calls the current_container function and checks if the digits has change with the help of the old_digits variables
			current_container(document.querySelector("#timer .seconds .num2"), num2, (num2===old_seconds2)? false : true);
			current_container(document.querySelector("#timer .seconds .num1"), num1, (num1===old_seconds1)? false : true);
			// Sets the new values for the old_digits variables
			old_seconds2 = num2;
			old_seconds1 = num1;
		}
	}else{
		// Days
		{	// Sets the digits of the days container
			let num3 = days % 10;
			let num2 = ((days % 100) - num3) / 10;
			let num1 = Math.floor(days / 100);
			// Calls the current_container function and checks if the digits has change with the help of the old_digits variables
			current_container(document.querySelector("#timer .days .num3"), num3, true);
			current_container(document.querySelector("#timer .days .num2"), num2, true);
			current_container(document.querySelector("#timer .days .num1"), num1, true);
			// Sets the new values for the old_digits variables
			old_day3 = num3;
			old_day2 = num2;
			old_day1 = num1;
		}

		// hours
		{	// Sets the digits of the days container
			let num2 = hours % 10;
			let num1 = (hours - num2) / 10;
			// Calls the current_container function and checks if the digits has change with the help of the old_digits variables
			current_container(document.querySelector("#timer .hours .num2"), num2, true);
			current_container(document.querySelector("#timer .hours .num1"), num1, true);
			// Sets the new values for the old_digits variables
			old_hour2 = num2;
			old_hour1 = num1;
		}

		// minutes
		{	// Sets the digits of the days container
			let num2 = minutes % 10;
			let num1 = (minutes - num2) / 10;
			// Calls the current_container function and checks if the digits has change with the help of the old_digits variables
			current_container(document.querySelector("#timer .minutes .num2"), num2, true);
			current_container(document.querySelector("#timer .minutes .num1"), num1, true);
			// Sets the new values for the old_digits variables
			old_minute2 = num2;
			old_minute1 = num1;
		}

		// seconds
		{	// Sets the digits of the days container
			let num2 = seconds % 10;
			let num1 = (seconds - num2) / 10;
			// Calls the current_container function and checks if the digits has change with the help of the old_digits variables
			current_container(document.querySelector("#timer .seconds .num2"), num2, true);
			current_container(document.querySelector("#timer .seconds .num1"), num1, true);
			// Sets the new values for the old_digits variables
			old_seconds2 = num2;
			old_seconds1 = num1;
		}

		first_time=false;
	}
	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		window.alert("That's all, byeee");
	}
}, 1000);
