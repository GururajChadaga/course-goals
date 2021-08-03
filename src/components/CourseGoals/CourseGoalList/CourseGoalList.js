import './CourseGoalList.css'
const CourseGoalList = (props) => {
  return (
    <div>
      <ul className='goal-list'>
        {props.items.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoalList;
