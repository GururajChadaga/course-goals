import './CourseGoalList.css';
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
const CourseGoalList = (props) => {
  return (
    <div>
      <ul className='goal-list'>
        {props.items.map((item) => (
          <CourseGoalItem
            key={item.id}
            id={item.id}
            onDelete={props.onDeleteGoalItem}
          >
            {item.text}{' '}
          </CourseGoalItem>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoalList;
