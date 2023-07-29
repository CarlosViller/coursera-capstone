// eslint-disable-next-line react/prop-types
export default function SelectDiners({ diners, setDiners }) {
  return (
    <>
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
    </>
  );
}
