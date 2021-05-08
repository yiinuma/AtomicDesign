import "./styles.css";
import { Router } from "./router/Router";

const user = {
  name: "@heroheroyoshi",
  image: "https://source.unsplash.com/LATYeZyw88c",
  email: "1111@dddd.com",
  phone: "0123-456-7890",
  company: {
    name: "ああああ株式会社"
  },
  website: "https://ys-pps.com"
};

export default function App() {
  return <Router />;
}
