import { ReactNode, FC, HTMLAttributes } from 'react'
import { Modal } from 'react-bootstrap'

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  onHide: () => void
  show: boolean
  title: string
}

export const ModalPersonalized: FC<ButtonProps> = (
  { children, show, onHide, title },
  rest
) => {
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
      show={show}
      size="lg"
      {...rest}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  )
}
