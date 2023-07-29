/* eslint-disable @typescript-eslint/no-explicit-any */
export default function SelectTime({
  time,
  setTime,
}: {
  time: any;
  setTime: any;
}) {
  return (
    <>
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
    </>
  );
}
