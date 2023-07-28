import { useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("12:00pm");
  const [diners, setDiners] = useState(1);
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    if (fullname === "") {
      setFeedback({ error: true, message: "Full Name is required" });
    } else if (phone === "") {
      setFeedback({ error: true, message: "Phone number is required" });
    } else {
      setLoading(true);
      setFeedback(null);

      setTimeout(() => {
        setFeedback({
          error: false,
          message: "Your reservation is confirmed!",
        });
        setLoading(false);
      }, 3000);
    }
  }

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
            <form className="reserveTableForm" onSubmit={handleSubmit}>
              <label htmlFor="date">Date</label>
              <input
                name="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <label htmlFor="time">Time</label>
              <select
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="12:00pm">12:00pm</option>
                <option value="12:30pm">12:30pm</option>
                <option value="1:00pm">1:00pm</option>
                <option value="1:30pm">1:30pm</option>
                <option value="2:00pm">2:00pm</option>
                <option value="2:30pm">2:30pm</option>
                <option value="3:00pm">3:00pm</option>
                <option value="3:30pm">3:30pm</option>
                <option value="4:00pm">4:00pm</option>
              </select>

              <label htmlFor="diners">Diners</label>
              <section className="selectDiners">
                <button
                  type="button"
                  disabled={diners === 1}
                  onClick={() => setDiners(diners - 1)}
                >
                  -
                </button>
                <span>{diners}</span>
                <button
                  type="button"
                  disabled={diners === 10}
                  onClick={() => setDiners(diners + 1)}
                >
                  +
                </button>
              </section>

              <label htmlFor="fullname">Full Name</label>
              <input
                name="fullname"
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />

              <label htmlFor="phone_number">Phone number</label>
              <input
                name="phone_number"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {feedback && (
                <div
                  className={`feedback ${feedback.error ? "error" : "success"}`}
                >
                  {feedback.message}
                </div>
              )}
              <button disabled={loading} id="confirm" type="submit">
                {loading ? <div className="loading-spinner"></div> : "Confirm"}
              </button>
            </form>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
