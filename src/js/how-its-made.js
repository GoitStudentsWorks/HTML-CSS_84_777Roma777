(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open-how-its-made]"),
		modal: document.querySelector("[data-modal-how-its-made]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	// refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden-how-its-made");
	}
})();
