import './Add.css'

const Add = () => {
  return (
    <div className='add'>
      <form className='flex-col'>
        <div className='add-img-upload flex-col'>
          <p>
            <label htmlFor="image">
              <input/>
            </label>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Add