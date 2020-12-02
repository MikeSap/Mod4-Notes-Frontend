import cuid from 'cuid';

export default function manageNotes(state = [], action) {

    switch (action.type) {

        case("NEW_NOTE"):
        return [...state, { ...action.note, id: cuid() }]

        default:
          return state;
      }
}
