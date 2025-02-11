import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./Login.css"; // Import the CSS file

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState(""); // State to track role selection
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Selected Role:", role);

    // Redirect based on selected role
    if (role === "admin") {
      navigate("/AdminDashboard"); // Redirect to Admin Dashboard
    } else if (role === "farmer") {
      navigate("/FarmerDashboard"); // Redirect to Farmer Dashboard
    } else if (role === "user") {
      navigate("/UserDashboard"); // Redirect to User Dashboard
    } else {
      alert("Please select a role"); // If no role is selected
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.header}>Agri Daily</h1>
        <p style={styles.subtitle}>Log in to your account to continue.</p>
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.showPasswordButton}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div style={styles.roleSelection}>
            <label style={styles.label}>Select Role</label>
            <div style={styles.radioGroup}>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  value="admin"
                  checked={role === "admin"}
                  onChange={(e) => setRole(e.target.value)}
                  style={styles.radio}
                />
                Admin
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  value="farmer"
                  checked={role === "farmer"}
                  onChange={(e) => setRole(e.target.value)}
                  style={styles.radio}
                />
                Farmer
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  value="user"
                  checked={role === "user"}
                  onChange={(e) => setRole(e.target.value)}
                  style={styles.radio}
                />
                User
              </label>
            </div>
          </div>

          <div style={styles.options}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password" style={styles.link}>
              Forgot your password?
            </a>
          </div>

          <button type="submit" style={styles.loginButton}>Log In</button>
        </form>

        <div style={styles.divider}>
          <span>or</span>
        </div>

        <p style={styles.registerText}>
          Don't have an account? <a href={role === "farmer" ? "/Registerf" : role === "user" ? "/Registeru" : "/register"} style={styles.registerLink}>Register here</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw", // Fix full width
    height: "100vh", // Fix full height
    backgroundColor: "#f7f9fc",
  },
  card: {
    width: "400px",
    padding: "30px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  header: {
    fontSize: "24px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "14px",
    color: "#6c757d",
    marginBottom: "20px",
  },
  form: {
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "5px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #1f62a5",
    borderRadius: "4px",
    outline: "none",
  },
};

export default LoginPage;
