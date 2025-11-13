import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Clients from "./pages/Clients";


export default function App() {
  return (
    <div className="flex min-h-screen bg-dark text-white">
      {/* Sidebar */}
      <aside className="w-72 fixed left-0 top-0 h-full bg-card border-r border-gray-800">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="ml-72 flex-1 p-8 overflow-y-auto">
        <Navbar />
        <section id="about" className="mt-8 space-y-12">
          <About />
       <Clients />
        </section>
      </main>
    </div>
  );
}
