export default function TimerChallenge({ title, targetTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <button>Start/Stop Challenge</button>
      <p className="">Time is running... / Timer Inactive</p>
    </section>
  );
}
