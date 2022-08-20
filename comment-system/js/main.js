// import '../style.css';
import './comment.js';
import store from './store/index.js'; 
import Comment from './components/comments.js';

const formElement = document.querySelector('.comment-form');
const inputElement = document.querySelector('#new-comment-field');

formElement.addEventListener('submit', evt => {
  evt.preventDefault();

  let value = inputElement.value.trim();
  if (value.length) {
    store.dispatch('addItem', value);
    inputElement.value = '';
    inputElement.focus();
  }
});

const commentInstance = new Comment();
commentInstance.render();
