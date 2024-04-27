import "./App.css";

function App() {

  const handleForm = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const info = {name, email}

    console.log(info)

    fetch('http://localhost:3000/travel', {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(info)
    })
    .then(r=>r.json())
    .then(data => console.log(data))

  }

  return (
    <>
      <h1>Travel management system</h1>
      <form onSubmit={handleForm}>
        <input type="text" name="name" placeholder="name" id="" />
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="submit" value="ADD" />
      </form>
    </>
  );
}

export default App;
