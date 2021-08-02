import './CourseInput.css';
import Button from '../../UI/Button/Button';
const CourseInput = () => {
  return (
    <form>
      <div class='form-control'>
        <label>CourseGoal</label>
        <input type='text' />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};
export default CourseInput;
