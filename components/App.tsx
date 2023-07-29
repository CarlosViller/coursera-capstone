import BookingForm from "./BookingForm";

function App() {
  return (
    <>
      <header>
        <a href="/">
          <img src="/Logo.png" alt="Logo" />
        </a>
      </header>
      <div id="bg">
        <main>
          <section className="reserveTable">
            <h1>Reserve a table</h1>
            <BookingForm />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
