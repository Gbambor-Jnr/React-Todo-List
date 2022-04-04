import "./CourseList.css";

const CourseList = (props) => {
  //   const clickChangeHandler = (e) => {
  //     props.onDeleteNow(index);
  //   };
  const lists = props.items.map((item, index) => {
    return (
      <div key={item.id}>
        <li className="li">
          {item.title}
          <button
            type="button"
            className="delete"
            onClick={() => {
              props.onDeleteNow(index);
            }}
          >
            Del
          </button>
        </li>
      </div>
    );
  });
  return (
    <div>
      <ul>{lists}</ul>
    </div>
  );
};

export default CourseList;
