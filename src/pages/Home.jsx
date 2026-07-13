import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <SearchForm />
      <Footer/>
    </div>
  );
}

export default Home;