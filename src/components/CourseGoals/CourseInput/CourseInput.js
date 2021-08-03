import './CourseInput.css';
import Button from '../../UI/Button/Button';
import { useState } from 'react';
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const courseInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.length !== 0) {
      props.onAddCourseGoal(enteredValue);
      setEnteredValue('');
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label>CourseGoal</label>
        <input
          value={enteredValue}
          onChange={courseInputChangeHandler}
          type='text'
        />
      </div>
      <Button type='submit'>
        Add Goal
      </Button>
    </form>
  );
};
export default CourseInput;
