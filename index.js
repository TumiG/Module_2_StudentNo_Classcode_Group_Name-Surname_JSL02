const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);
const formElement = document.getElementById('workout-form'); 
const firstInput = document.querySelector('input'); 
const allInputs = document.querySelector('input');



const addNewGoal = () => {


    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    
    
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    newGoal.classList.add('goal-item');

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        goalList.removeChild(newGoal);
        removeDuplicates();
    });

    newGoal.appendChild(removeButton);
    goalList.appendChild(newGoal);

    document.querySelector('#goalInput').value = '';
};
    
const removeDuplicates = () => {
    const items = document.querySelectorAll('goal-item');
    const seen = new Set();

    items.forEach(item => {
        const textContent = item.textContent.trim();
        if (seen.has(textContent)){
            item.remove();
        } else {
            seen.add(textContent);
        }
    })
}

document.addEventListener('DOMContentLoaded' , () => {
    removeDuplicates();
});

document.querySelector('#addGoalButton').addEventListener('click' , addNewGoal);

document.getElementById('meal-plan-form').addEventListener('submit' , function(event) {
    event.preventDefault();

});

if (document.getElementById ('name'). value.trim() === '') {
    alert('Please enter your name'); 
}


document.querySelector('#submitGoal').addEventListener('click', addNewGoal);
const newGoal = document.createElement('li');
newGoal.textContent = 'Run 10km';
const goalList = document.querySelector('#fitness-goals');
goalList.appendChild(newGoal);

///
let waterIntake = 2;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
