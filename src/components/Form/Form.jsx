import Input from "./Input"
import TextArea from "./TextArea"
import Button from "./Button"

const Form = ({ titleForm }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl mb-2">{titleForm}</h1>
      <form>
        <div className="mb-3">
          <p className="text-sm mb-1">Correo:</p>
          <Input type="text" placeholder="correo@tucorreo.com" />
        </div>
        <div className="mb-5">
          <p className="text-sm mb-1">Descripción:</p>
          <TextArea />
        </div>
        <Button type="submit" />
      </form>
    </div>
  )
}
export default Form
