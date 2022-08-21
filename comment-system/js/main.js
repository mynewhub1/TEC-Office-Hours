// import '../style.css';
import './comment.js';
import store from './store/index.js'; 
import Comment from './components/comments.js';

const formElement = document.querySelector('.comment-form');
const nameElement = document.querySelector('#name');
const emailElement = document.querySelector('#email');
const commentElement = document.querySelector('#new-comment-field');

formElement.addEventListener('submit', evt => {
  evt.preventDefault();

  let name = nameElement.value.trim();
  let email = emailElement.value.trim();
  let contents = commentElement.value.trim();
  if (name.length && email.length && contents.length) {
    let comment = {name: name, email: email, contents: contents}
    store.dispatch('addComment', comment);
    commentElement.value = '';
    commentElement.focus();
  }
});

const commentInstance = new Comment();
commentInstance.render();
