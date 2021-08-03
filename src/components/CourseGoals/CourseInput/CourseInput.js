import './CourseInput.css';
import Button from '../../UI/Button/Button';
import { useState } from 'react';
const CourseInput = (props) => {
  const [courseInput, setCourseInput] = useState('');
  const courseInputChangeHandler = (event) => {
    setCourseInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (courseInput.length !== 0) {
      props.onAddCourseGoal(courseInput);
      setCourseInput('');
    }
  };

  return (
    <form>
      <div className='form-control'>
        <label>CourseGoal</label>
        <input
          value={courseInput}
          onChange={courseInputChangeHandler}
          type='text'
        />
      </div>
      <Button type='submit' onClick={submitHandler}>
        Add Goal
      </Button>
    </form>
  );
};
export default CourseInput;
