import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-[#e1e8eb] flex flex-col items-center font-Inter">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
