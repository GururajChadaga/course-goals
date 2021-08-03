import './CourseInput.css';
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
      <div className='form-control'>
        <label style={{ color: isValid ? 'black' : 'red' }}>CourseGoal</label>
        <input
          style={{
            borderColor: isValid ? '#cc' : '#red',
            backgroundColor: isValid ? 'transparent' : 'salmon',
          }}
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
