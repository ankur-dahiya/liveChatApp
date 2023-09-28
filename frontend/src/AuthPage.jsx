import axios from "axios";

const AuthPage = (props) => {
    const server_address = import.meta.env.VITE_SVADD;
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post(`${server_address}/authenticate`,
      {username:value})
      // .then(rs=>props.onAuth({ username: value, secret: value }))
      .then(rs=>props.onAuth({...rs.data, secret: value }))
      .catch(err=>console.log("error authpage: ",err));
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;