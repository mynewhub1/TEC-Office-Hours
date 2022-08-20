class Comment extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name');
    const email = this.getAttribute('email');
    const contents = this.getAttribute('contents');

    this.innerHTML = `
    <div class='comment'>
      <p>${name} | ${email}</p>
      <hr>
      ${contents}
    <style>
      .comment {
        width: 40%;
        height: auto;
        padding: 10px;
        background-color: #808080;
      }

      p {
        color: #87CEEB;
      }
    </style>
    </div>
    `;
  }
}

customElements.define('comment-', Comment);
