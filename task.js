const TOTAL_WEEKS_IN_THREE_YEARS = 156;
const TOTAL_MONTHS_IN_THREE_YEARS = TOTAL_WEEKS_IN_THREE_YEARS * 4;

const formulatePayment = (choice, amount) => {
	const initialPayment = (10 / 100) * amount;
	const remainingAmount = amount - initialPayment;
	if (choice === 'weekly') {
		return calculateWeeklyPayment(remainingAmount);
	}
	calculateMontlyAmount(remainingAmount);
};
const calculateWeeklyPayment = remainingAmount => {
	const weeklyPayment = remainingAmount / TOTAL_WEEKS_IN_THREE_YEARS;
	if (weeklyPayment % 50 === 0) {
		console.log(
			`You will be paid ${weeklyPayment} for ${TOTAL_WEEKS_IN_THREE_YEARS} weeks`
		);
	} else {
		const validPerWeekPayment = weeklyPayment - (weeklyPayment % 50) + 50;
		const totalWeeks = Math.floor(remainingAmount / validPerWeekPayment);
		console.log(`You will be paid $${validPerWeekPayment} for ${totalWeeks} weeks`);
	}
};
const calculateMontlyAmount = remainingAmount => {
	const monthlyPayment = remainingAmount / TOTAL_MONTHS_IN_THREE_YEARS;
	if (monthlyPayment % 50 === 0) {
		console.log(
			`You will be paid ${monthlyPayment} for ${TOTAL_MONTHS_IN_THREE_YEARS} weeks`
		);
	} else {
		const validPerMonthPayment = monthlyPayment - (monthlyPayment % 50) + 100;
		const totalMonths = Math.floor(remainingAmount / validPerMonthPayment);
		console.log(`You will be paid $${validPerMonthPayment} for ${totalMonths} months`);
	}
};
formulatePayment('weekly', 1000);
