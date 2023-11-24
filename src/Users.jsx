import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json.users));
  }, []);

  return (
    <div className="container">
      <h1>List Users</h1>
      <div className="row">
        {users.map((user) => (
          <div className="col-12" key={user.id}>
            <UserItem key={user.id} user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

function UserItem({ user }) {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={user.image} className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {user.firstName} {user.lastName} ({user.username})
              </h5>
              <ul className="list-group">
                <li className="list-group-item">Email : {user.email}</li>
                <li className="list-group-item">Phone : {user.phone}</li>
                <li className="list-group-item">Gender : {user.gender}</li>
                <li className="list-group-item">
                  Address : {user.address.address}, {user.address.city}
                </li>
              </ul>
              <div className="mt-3 d-flex flex-row-reverse">
                <Link to={`/cart/${user.id}`} className="btn btn-primary">
                  Cart Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
