import styles from './CourseInput.module.css';
import Button from '../../UI/Button/Button';
import { useState } from 'react';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const courseInputChangeHandler = (event) => {
    setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddCourseGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>CourseGoal</label>
        <input
          value={enteredValue}
          onChange={courseInputChangeHandler}
          type='text'
        />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};
export default CourseInput;
