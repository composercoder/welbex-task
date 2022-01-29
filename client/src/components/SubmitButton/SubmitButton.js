export default function SubmitButton({submitDisabled, handleSubmit}) {
  return (
    <input className="submit-button" type="submit" value="Применить" disabled={submitDisabled} onClick={handleSubmit} />
  );
}
