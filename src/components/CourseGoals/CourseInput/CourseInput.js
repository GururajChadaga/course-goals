import './CourseInput.css';
const CourseInput = () => {
  return (
    <form>
      <div class='form-control'>
        <label>CourseGoal</label>
        <input type='text' />
      </div>
      <button>Add Goal</button>
    </form>
  );
};
export default CourseInput;
