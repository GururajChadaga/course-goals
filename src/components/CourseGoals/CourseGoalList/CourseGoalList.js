import './CourseGoalList.css'
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
const CourseGoalList = (props) => {
  return (
    <div>
      <ul className='goal-list'>
        {props.items.map((item) => (
          <CourseGoalItem>{item.text}</CourseGoalItem>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoalList;
