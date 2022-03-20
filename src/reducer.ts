// *** actions type *******************************************************

export const INCREMENT = "INCREMENT" as const;

export const DECREMENT = "DECREMENT" as const;

type IncrementActionType = {
  type: typeof INCREMENT;
  payload: {
    addCount: number;
  };
};

type DecrementActionType = {
  type: typeof DECREMENT;
  payload: {
    subtractionCount: number;
  };
};

export type CounterActionType = IncrementActionType | DecrementActionType;

// *** actions ************************************************************

export const IncrementAction = (addCount: number): CounterActionType => ({
  type: INCREMENT,
  payload: {
    addCount,
  },
});

export const DecrementAction = (subtractionCount: number): CounterActionType => ({
  type: DECREMENT,
  payload: {
    subtractionCount,
  },
});

// *** reducer ************************************************************

type State = {
  count: number;
};

export const initialState: State = {
  count: 0,
};

export const counterReducer = (
  state = initialState,
  action: CounterActionType
): State => {
  switch (action.type) {
    case INCREMENT: {
      const { addCount } = action.payload;
      return { ...state, count: state.count + addCount };
    }

    case DECREMENT: {
      const { subtractionCount } = action.payload;
      return { ...state, count: state.count - subtractionCount };
    }
  }
};
