import { sortArrayByDate } from '../utils';

export const STORE_FEEDBACK = 'STORE_FEEDBACK';
export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK';

export const initialState = {
  // reviews: [
  //   {
  //     _id: '5fb403574e5222531eafa66a',
  //     name: 'RISHI GUPTA',
  //     email: 'guptarishi013@gmail.com',
  //     message:
  //       'cdcdcdcdMedia queries can also be used to change layout of a page depending on the orientation of the browser',
  //     company: 'iit delhi',
  //     designation: 'cdcdcdcdc',
  //     createdAt: '2020-11-17T17:07:35.764Z',
  //     updatedAt: '2020-11-17T17:07:35.764Z',
  //     __v: 0
  //   }
  // ]

  reviews: []
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case STORE_FEEDBACK:
      return {
        ...state,
        reviews: sortArrayByDate([...state.reviews, ...action.payload])
      };

    case UPDATE_FEEDBACK: {
      return {
        reviews: sortArrayByDate([...state.reviews, action.payload]),
        updatedFeedback: true
      };
    }

    default:
      break;
  }
};

export default reducer;
