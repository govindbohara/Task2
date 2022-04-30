//Creating function for calculating amount
const calculateAmount = (choice, amount) => {
	//first installment should be 10% of total amount and
	const installmentPayment = ((10 / 100) * amount).toFixed(2);
	console.log(installmentPayment);
	//now the remaining amount
	const remainingTotalAmount = amount - installmentPayment;
	//if he chooses weekly installment
	if (choice == 'weekly') {
		let weeklyPrice = 0;
		let weekly = remainingTotalAmount / weeklyPrice;
		//There are 156 weeks in 3 year so while loop is done
		while (weekly > 156) {
			//weekly installment should be multiple of 50
			weeklyPrice = weeklyPrice + 50;
			console.log(weeklyPrice);
			//total week are counted for the total installment
			let weeks = remainingTotalAmount / weeklyPrice;
			console.log(weeks);
			//now if the week are in decimal then ceil method is used to get nearesrt integer
			if (weeks % weeklyPrice !== 0) {
				weekly = Math.ceil(weeks);
			}
		}
		console.log(`You will be paid ${weeklyPrice} for
${weekly} weeks.`);
		return { time: weekly, amount: weeklyPrice };
		//if he chooses monthly installment
	} else if (choice == 'monthly') {
		let monthlyPrice = 0;

		let monthly = remainingTotalAmount / monthlyPrice;
		console.log(monthly);
		//There are 36 weeks in 3 year so while loop is done
		while (monthly > 36) {
			monthlyPrice = monthlyPrice + 100;
			//total months are counted for the total installment
			let months = remainingTotalAmount / monthlyPrice;
			console.log(months);
			//now if the months are in decimal then ceil method is used to get nearest integer
			if (months % monthlyPrice !== 0) {
				monthly = Math.ceil(months);
			}
		}
		console.log(`You will be paid ${monthlyPrice} for ${monthly} months.`);
		return { time: monthly, amount: monthlyPrice };
	} else {
		return null;
	}
};
calculateAmount('weekly', 1200);
