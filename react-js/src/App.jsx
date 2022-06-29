import { memo } from "react";
import { useApp } from "./app.hooks";
import Form from "./components/form";
import Modal from "./components/modal";

const App = memo(() => {
  const {
    modal,
    modalHandler,
    formChangeHandler,
    form
  } = useApp()

  return (
    <div>
      <Form
        formChangeHandler={formChangeHandler}
        modalHandler={modalHandler} />
      <Modal
        form={form}
        modalHandler={modalHandler}
        modal={modal} />
    </div>
  )
})

export default App;
