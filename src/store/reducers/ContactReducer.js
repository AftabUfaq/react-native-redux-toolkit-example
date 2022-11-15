import {GenerateSectionData} from '../../logic/sectiondata';
import {SET_CONTACTS} from '../types';
const initialState = {
    contacts: [],
    contact_sections: [],
};
const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
                contact_sections: GenerateSectionData(action.payload),
            };

        default:
            return state;
    }
};
export default ContactReducer;
