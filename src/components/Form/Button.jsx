const Button = ({ type }) => {
  return (
    <button
      type={type}
      className="px-4 py-1 rounded text-white bg-red-500 hover:bg-red-600"
    >
      Enviar
    </button>
  )
}
export default Button
