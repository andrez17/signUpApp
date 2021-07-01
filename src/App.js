import { useState, useEffect } from 'react';
import { UserTable } from './UserTable';
// import { User } from './User'
import './App.css';

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {

    const fetchData = async() =>{
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      let jsonResponse = await response.json();
      setUsers(jsonResponse);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {users && <UserTable 
      users={users}
      setUsers={setUsers}
      />}
      
    </div>
  );
}

export default App;
