const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border rounded w-full text-center py-1 focus:outline-none focus:ring focus:ring-red-500"
    />
  )
}
export default Input
