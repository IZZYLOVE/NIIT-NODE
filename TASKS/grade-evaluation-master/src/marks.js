// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math, english, science, social, language) => {
    return new Promise((resolve, reject) => {
        const totalMarks = math + english + science + social + language;
        if (totalMarks >= 0) {
            resolve(totalMarks);
        } else {
            reject('Null values for marks');
        }
    });
};

// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) => {
    return new Promise((resolve, reject) => {
        const numberOfSubjects = 5; // Assuming there are 5 subjects
        const averageMarks = totalMarks / numberOfSubjects;
        if (!isNaN(averageMarks)) {
            resolve(averageMarks);
        } else {
            reject("Average marks calculation error.");
        }
    });
};

// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks) => {
    return new Promise((resolve, reject) => {
        if (typeof averageMarks === 'number') {
            let grade = "";
            if (averageMarks >= 90) {
                grade = "A+";
            } else if (averageMarks >= 80) {
                grade = "A";
            } else if (averageMarks >= 70) {
                grade = "B";
            } else if (averageMarks >= 60) {
                grade = "C";
            } else if (averageMarks >= 50) {
                grade = "E";
            } else {
                grade = "F";
            }
            resolve(grade);
        } else {
            reject("Invalid input: Average marks should be a number.");
        }
    });
};


module.exports = {
    calculateAverageMarks,calculateGrade,calculateTotalMarks
}
