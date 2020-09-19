
var i; //monthly interest
var m; //monthly payment
var n; //duration in months
var p; //borrow amount
var a1 = document.getElementById("a1")
var a2 = document.getElementById("a2")
var a3 = document.getElementById("a3")
var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var c1 = document.getElementById("c1")
var c2 = document.getElementById("c2")
var c3 = document.getElementById("c3")

function option1(borrow_amount, annual_interest, duration){
	p = borrow_amount;
	i = annual_interest/1200;
	n = duration;
	if (i == 0){
        ans = p/n;
	}else{
        ans = i*p*(1+i)**n/((1+i)**n - 1)
	}
	total = ans * n
	msg = "Your monthly payment will be $" + ans.toFixed(2).toString() + ".";
	msg += "  The total amount you will pay back is $" + total.toFixed(2).toString() + ".";
	document.getElementById("output").innerHTML = msg;
}

function option2(monthly_payment, duration, annual_interest){
	m = monthly_payment;
	i = annual_interest/1200;
	n = duration;
	if (i==0){
		ans = m*n;
	}else{
		ans = m*((1+i)**n - 1)/(i*(1+i)**n);
	}
	msg = "The maximum amount you can borrow is $" + ans.toFixed(2).toString() + ".";
	document.getElementById("output").innerHTML = msg;
}

function option3(borrow_amount, annual_interest, monthly_payment){
	m = monthly_payment;
	i = annual_interest/1200;
	p = borrow_amount;
	if (i*p >= m){
		msg = "Cannot be calculated. Your monthly payment is too small to cover your loan's interest.";
	}else{
		if (i == 0){
			ans = Math.ceil(p/m);
			last_payment = p - (ans - 1)*m;
            total = p;
			msg = "You will pay off your loan in " + ans.toString()+" months or in " + (ans/12).toFixed(1).toString() + " years.";
    		msg += "Your last month payment will be $" + last_payment.toFixed(2).toString() + ".";
    		msg += "You will have paid a total of $" + total.toString() + ".";
		}else{
			ans = Math.ceil(Math.log10(-m / (i * p - m)) / Math.log10(1 + i));
            last_payment = (p * (1 + i) ** (ans - 1) - m * ((1 + i) ** (ans - 1) - 1) / i) * (1 + i);
            total = last_payment + m * (ans - 1);
			msg = "You will pay off your loan in " + ans.toString()+" months or in " + (ans/12).toFixed(1).toString() + " years.";
    		msg += "Your last month payment will be $" + last_payment.toFixed(2).toString() + ".";
    		msg += "You will have paid a total of $" + total.toFixed(2).toString() + ".";
		}
	}
	document.getElementById("output").innerHTML = msg;
	
}


document.getElementById("button1").onclick = function() {option1(a1.value,a2.value,a3.value)};
document.getElementById("button2").onclick = function() {option2(b1.value,b2.value,b3.value)};
document.getElementById("button3").onclick = function() {option3(c1.value,c2.value,c3.value)};


