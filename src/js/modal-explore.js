(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-explore-open]"),
    closeModalBtn: document.querySelector("[data-explore-close]"),
    modal: document.querySelector("[data-backdrop]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();