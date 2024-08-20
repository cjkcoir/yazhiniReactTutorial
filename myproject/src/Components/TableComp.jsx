function TableComp() {
  const users = [
    { name: "chellakarthikeyan", email: "chella@gmail.com", marks: 345,place:"Madurai" },
    { name: "keerthini Jeyam", email: "keerthi@gmail.com", marks: 478 ,place:"Madurai"},
    { name: "akilan Jeyam", email: "akilan@gmail.com", marks: 567,place:"Coimbatore" },
  ];

  // Define an array for the table titles
  const tableTitles = ["Name", "Email", "Marks","Place"];

  return (
    <>
      <div className="container text-center">
        <div className="h3 text-warning">TableComp</div>

        <table className="table table-hover table-bordered table-responsive w-75">
          <thead className="thead-inverse table-warning">
            <tr>
              {tableTitles.map((title, index) => (
                <th key={index}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={index}>
                <td scope="row">{item.name}</td>
                <td>{item.email}</td>
                <td>{item.marks}</td>
                <td>{item.place}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableComp;
