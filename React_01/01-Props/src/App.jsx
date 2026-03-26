import Card from "./components/Card";

function App() {
  return (
    <div className="parent">
      <Card user="Gaurav Singh" age={18} img='https://images.unsplash.com/photo-1668682865314-76e59269419e?q=80&w=1158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user="Sarthak" age={20} img='https://images.unsplash.com/photo-1532767153582-b1a0e5145009?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxpTXNnT3lpM2xuNHx8ZW58MHx8fHx8' />
      <Card user="Ram" age="  Treta Yuga" img='https://imgs.search.brave.com/-dS9AuA-HzGFc0-4AgaGgpCEdlWOCeccclSnzL1jF70/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE1Lzc5LzE4LzYw/LzM2MF9GXzE1Nzkx/ODYwMjhfQWZjTnE2/VjQ1MXBEajNyNEZL/Y0VSMllIVVJ0eEYw/RFIuanBn'/>
      
      
    </div>
  );
}

export default App;