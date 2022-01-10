import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";

const Checkout = (props) => {
  const {
    value: enteredInput,
    isValid: enteredInputIsValid,
    hasError: enteredInputHasError,
    valueChangeHandler: inputChangeHandler,
    inputBlurHandler: inputChangeBlur,
    resetInput,
  } = useInput((value) => value.trim() !== "" && value.length >= 2);

  const {
    value: enteredInput2,
    isValid: enteredInputIsValid2,
    hasError: enteredInputHasError2,
    valueChangeHandler: inputChangeHandler2,
    inputBlurHandler: inputChangeBlur2,
    resetInput: resetInput2,
  } = useInput((value) => value.trim() !== "" && value.length >= 3);

  const {
    value: enteredInput3,
    isValid: enteredInputIsValid3,
    hasError: enteredInputHasError3,
    valueChangeHandler: inputChangeHandler3,
    inputBlurHandler: inputChangeBlur3,
    resetInput: resetInput3,
  } = useInput((value) => value.trim() !== "" && value.length === 5);

  const {
    value: enteredInput4,
    isValid: enteredInputIsValid4,
    hasError: enteredInputHasError4,
    valueChangeHandler: inputChangeHandler4,
    inputBlurHandler: inputChangeBlur4,
    resetInput: resetInput4,
  } = useInput((value) => value.trim() !== "" && value.length >= 2);

  let checkoutIsValid = false; // do dezaktywownia przycisku confirm w formie...

  if (enteredInputIsValid && enteredInputIsValid2 && enteredInputIsValid3 && enteredInputIsValid4) {
    checkoutIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    // if (!enteredInputIsValid) {
    //   // trochę mnie zastanawia sensowność tego warunku ???
    //   return;
    // }
    resetInput();
    resetInput2();
    resetInput3();
    resetInput4();
  };

  const nameInputClasses = `${classes.control} ${enteredInputHasError ? classes.invalid : ""}`;
  const nameInput2Classes = `${classes.control} ${enteredInputHasError2 ? classes.invalid : ""}`;
  const nameInput3Classes = `${classes.control} ${enteredInputHasError3 ? classes.invalid : ""}`;
  const nameInput4Classes = `${classes.control} ${enteredInputHasError4 ? classes.invalid : ""}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={inputChangeHandler} onBlur={inputChangeBlur} value={enteredInput} />
        {enteredInputHasError && <p>Please enter valid name</p>}
      </div>
      <div className={nameInput2Classes}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" onChange={inputChangeHandler2} onBlur={inputChangeBlur2} value={enteredInput2} />
        {enteredInputHasError2 && <p>Please enter valid street</p>}
      </div>
      <div className={nameInput3Classes}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" onChange={inputChangeHandler3} onBlur={inputChangeBlur3} value={enteredInput3} />
        {enteredInputHasError3 && <p>Please enter valid postal code</p>}
      </div>
      <div className={nameInput4Classes}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" onChange={inputChangeHandler4} onBlur={inputChangeBlur4} value={enteredInput4} />
        {enteredInputHasError4 && <p>Please enter valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!checkoutIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
