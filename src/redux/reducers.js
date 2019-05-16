import { FILTER_BY } from './actions';

const initialState = {
    age: '',
    name: '',
    salary: ''
};

export default (state = initialState, { payload, type }) => {
    switch (type) {
        case FILTER_BY:
            const { name, value } = payload;
            return Object.assign(
                {},
                state,
                { [name]: value }
            );
        default:
            return state;
    }
}
