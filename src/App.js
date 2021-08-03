import './App.css';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';

const DUMMY_COURSE_GOALS = [
  { id: '1', text: 'Do all exercises' },
  { id: '2', text: 'Finish the course' },
];

function App() {
  const [courseGoals, setCourseGoals] = useState(DUMMY_COURSE_GOALS);
  console.log(courseGoals);
  const addGoalItemHandler = (courseGoal) => {
    let goal = { text: courseGoal, id: Math.random() };
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
  return (
    <div className='App'>
      <section id='goal-form'>
        <CourseInput onAddCourseGoal={addGoalItemHandler} />
      </section>
      <section id='goals'>
        <CourseGoalList
          items={courseGoals}
          onDeleteGoalItem={deleteGoalItemHandler}
        />
      </section>
    </div>
  );
}

export default App;
