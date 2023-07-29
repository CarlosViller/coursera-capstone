/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import SelectTime from "./SelectTime";
import SelectDiners from "./SelectDiners";

export default function BookingForm() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("12:00pm");
  const [diners, setDiners] = useState(1);
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    error: boolean;
    message: string;
  } | null>();

  async function handleSubmit(e: any) {
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
    <form className="reserveTableForm" onSubmit={handleSubmit}>
      <label htmlFor="date">Date</label>
      <input
        name="date"
        type="date"
        value={date.toDateString()}
        onChange={(e) => setDate(new Date(e.target.value))}
      />

      <SelectTime time={time} setTime={setTime} />
      <SelectDiners diners={diners} setDiners={setDiners} />

      <label htmlFor="fullname">Full Name</label>
      <input
        name="fullname"
        data-testid="fullname-input"
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
        <div className={`feedback ${feedback.error ? "error" : "success"}`}>
          {feedback.message}
        </div>
      )}
      <button disabled={loading} id="confirm" type="submit">
        {loading ? <div className="loading-spinner"></div> : "Confirm"}
      </button>
    </form>
  );
}
