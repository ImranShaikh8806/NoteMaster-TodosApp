export const initialState = [];


export const reducer = (state, { type, payload }) => {
  switch (type) {
    
    case 'initialize':
      return payload;

    case "add":
      return [...state, { id: Date.now(), title: payload.title, content: payload.content }];

    case "delete":
      return state.filter((note) => note.id !== payload);

    case "update":
      return state.map((note) =>
        note.id === payload.id ? { ...note, title: payload.title, content: payload.content } : note
      );

    default:
      return state;
  }
};
