export default function SubmitButton({handleSubmit}) {
  return (
    <input className="submit-button" type="submit" value="Применить" onClick={handleSubmit} />
  );
}
