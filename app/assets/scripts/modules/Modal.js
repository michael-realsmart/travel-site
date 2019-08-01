import $ from "jquery";

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    // clicking the open modal openModalButton
    this.openModalButton.click(this.openModal.bind(this));

    //clicking the X close openModalButton
    this.closeModalButton.click(this.closeModal.bind(this));

    //Pushes any keywords
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keycode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false; //prevents the default link action of scrolling to the top for # href
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }

}

export default Modal
