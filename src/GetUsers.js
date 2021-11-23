import User from "./User";

const GetUsers = () => {
  let data = [
    {
      id: 1,
      name: "  Ravi",
      emailId: "ravi@gmail.com",
      aboutMe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eros vitae enim mollis molestie. Morbi malesuada laoreet felis fringilla dignissim. Cras gravida quis augue et pellentesque. Integer fermentum ante in hendrerit tincidunt.",
      location: ["Bangalore"],
      department: ["Development"],
      age: 24,
      gender: "M",
      joiningDate: "24/9/2019"
    },
    {
      id: 2,
      name: "  Ankita",
      emailId: "  ankita@gmail.com ",
      aboutMe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eros vitae enim mollis molestie. Morbi malesuada laoreet felis fringilla dignissim. Cras gravida quis augue et pellentesque. Integer fermentum ante in hendrerit tincidunt.",
      location: ["Kolkata"],
      department: ["Design "],
      age: 24,
      gender: "F",
      joiningDate: "12/1/2015"
    },
    {
      id: 3,
      name: " Balaji ",
      emailId: "  balaji@gmail.com",
      aboutMe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eros vitae enim mollis molestie. Morbi malesuada laoreet felis fringilla dignissim. Cras gravida quis augue et pellentesque. Integer fermentum ante in hendrerit tincidunt.",
      location: [" Kolkata"],
      department: ["Design"],
      age: 24,
      gender: "F",
      joiningDate: "1/12/2020"
    }
  ];
  return (
    <div>
      {data.map((user) => (
        <User
          id={user.id}
          name={user.name}
          email={user.emailId}
          about={user.aboutMe}
          location={user.location}
          department={user.department}
          joiningDate={user.joiningDate}
          gender={user.gender}
        />
      ))}
    </div>
  );
};

export default GetUsers;
