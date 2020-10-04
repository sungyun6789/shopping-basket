// ACTION 생성, 정의
export const INCREMENT = 'INCREMENT';
export const increment = () => ({ type: INCREMENT });

// 기본 State 정의
const initalState = {
    number: 0
};

// Reducer
const counter = (state = initalState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1,
            };
        default:
            return state;
    }
}

export default counter;