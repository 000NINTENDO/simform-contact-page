import Header from "./components/header/Header";
import BackgroundLayer from "./components/BackgroundLayer";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
	return (
		<>
			<BackgroundLayer />
			<Header />
			<Form />
			<Footer />
		</>
	);
}

export default App;
