import { useDispatch, useSelector } from "react-redux"
import { increment } from './store/actions'
import { decrement } from './store/actions'
import { clear } from './store/actions'

function App() {
  const dispatch = useDispatch()

  const count = useSelector(state => state.count)

  const handleIncr = () => dispatch(increment())
  const handleDcr = () => dispatch(decrement())
  const handleClr = () => dispatch(clear())

  return (
    <>
      <h1>Счетчик</h1>
      <span>Текущее число: {count}</span>
      <hr />
      <button onClick={handleIncr}>Увеличить на 1</button>
      <hr />
      <button onClick={handleDcr}>Уменьшить на 1</button>
      <hr />
      <button onClick={handleClr}>Сброс</button>
    </>
  )
}

export default App
