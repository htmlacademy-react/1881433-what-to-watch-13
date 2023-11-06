import { useState } from 'react';

interface IAddMyListBtnState {
  sign: boolean;
}


function AddMyListBtn(): JSX.Element {
  const [state, setState] = useState<IAddMyListBtnState>({ sign: true });

  function handleChange() {
    setState({ sign: !state.sign });
  }

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleChange}>
      {state.sign ? (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      ) : (
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z"
            fill="#EEE5B5"
          />
        </svg>
      )}

      <span>My list</span>
      <span className="film-card__count">9</span>
    </button>
  );
}

export default AddMyListBtn;
