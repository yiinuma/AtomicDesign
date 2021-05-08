import "./styles.css";
import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvideer";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
