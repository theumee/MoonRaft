const User = (props) => {
  return (
    <div class="container">
      <div class="sec1">
        <p>ID : {props.id}</p>
        <p>Name : {props.name}</p>
        <p>Email : {props.email}</p>
        <p>Gender : {props.gender}</p>
      </div>
      <div class="sec2">
        <p>Joining Date : {props.joiningDate}</p>
        <p>Department : {props.department}</p>
        <p>Locaion : {props.locaion}</p>
      </div>
      <div class="sec3">
        <p>About Me : {props.about}</p>
      </div>
    </div>
  );
};

export default User;
