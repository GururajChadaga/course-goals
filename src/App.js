import './App.css';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import { useState, Fragment } from 'react';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';

const DUMMY_COURSE_GOALS = [
  { id: '1', text: 'Do all exercises' },
  { id: '2', text: 'Finish the course' },
];

function App() {
  const [courseGoals, setCourseGoals] = useState(DUMMY_COURSE_GOALS);
  const addGoalItemHandler = (enteredText) => {
    let goal = { text: enteredText, id: Math.random() };
    setCourseGoals((prevGoals) => {
      return [goal, ...prevGoals];
    });
    console.log(courseGoals);
  };
  const deleteGoalItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== goalId);
    });
  };

  let goalListContent = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );
  if (courseGoals.length > 0) {
    goalListContent = (
      <CourseGoalList
        items={courseGoals}
        onDeleteGoalItem={deleteGoalItemHandler}
      />
    );
  }
  return (
    <Fragment>
      <section id='goal-form'>
        <CourseInput onAddCourseGoal={addGoalItemHandler} />
      </section>
      <section id='goals'>{goalListContent}</section>
    </Fragment>
  );
}

export default App;
