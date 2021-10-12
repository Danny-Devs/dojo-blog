const Home = () => {
  const handleClick = () => {
    alert('AHHHH u clicked me sonnyboy');
  }

  return (  
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;