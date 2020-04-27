export const calculateBmi = (weight, height) => {
    const bmiValue = ((weight * 10000) / (height * height)).toFixed(2);
    const bmiMessage = setBmiMessage(bmiValue);
    return [bmiValue, bmiMessage];
};

const setBmiMessage = finalBmi => {
    if (finalBmi < 18.5) {
        return "Underweight";
    } else if (finalBmi < 25) {
        return "Normal";
    } else if (finalBmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
};

