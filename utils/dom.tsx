import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

interface openModalProps {
  children?: any;
  className?: string;
  show?: boolean;
  onClose?: any;
  showClose?: boolean;
}

// 往里边塞
interface ModalProps {
  children?: any;
  className?: string;
  show?: boolean;
  onClose?: any;
  elm?: any;
}

interface ModalState {
  show: boolean;
}

class Modal extends React.Component<ModalProps, ModalState> {
  state = {
    show: this.props.show || false,
  };

  showModal = () => {
    this.setState({ show: true });
  };

  // 关闭弹窗
  closeModal = () => {
    this.setState({ show: false });
    this.props?.onClose?.();
  };

  // 点击遮罩
  closeOutside = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const target: any = e.target;
    if (
      [...target.classList].findIndex((item) => item === "i_am_mask") !== -1
    ) {
      this.closeModal();
    }
  };

  render() {
    const { children, elm = document.body } = this.props;
    const { show } = this.state;
    return ReactDOM.createPortal(
      <div
        onClick={this.closeOutside}
        className={classnames(["modal", { show: show }, "i_am_mask"])}
      >
        <div className={classnames(["modal_container", this.props.className])}>
          {children}
        </div>
      </div>,
      elm
    );
  }
}

export const openModal = ({
  children,
  onClose,
  customElm,
  ...props
}: openModalProps & { customElm?: HTMLElement }) => {
  const container = customElm ? customElm : document.createElement("div");
  document.body.appendChild(container);

  ReactDOM.render(
    <Modal
      elm={container}
      show
      {...props}
      onClose={() => {
        onClose && onClose();
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
      }}
    >
      {children}
    </Modal>,
    container
  );
};
