export default {
  addComment(state, payload) {
    state.items.push(payload);
    return state;
  }
};
