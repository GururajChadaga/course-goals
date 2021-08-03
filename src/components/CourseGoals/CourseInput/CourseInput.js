import './CourseInput.css';
import Button from '../../UI/Button/Button';
import { useState } from 'react';
import styled from 'styled-components';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => props.invalid && 'red'};
  }

  & input {
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background-color: ${(props) => props.invalid && `rgb(250, 197, 162)`};
    border-color: ${(props) => props.invalid && `rgb(29, 10, 10)`};
  }

  & input:focus {
    outline: none;
    background: ${(props) => !props.invalid && `#fad0ec`};;
    border-color: #8b005d;
  }
`;

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
      <FormControl invalid={!isValid}>
        <label>CourseGoal</label>
        <input
          value={enteredValue}
          onChange={courseInputChangeHandler}
          type='text'
        />
      </FormControl>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};
export default CourseInput;
