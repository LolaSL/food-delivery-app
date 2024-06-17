import './Add.css'

const Add = () => {
  return (
    <div className='add'>
      <form className='flex-col'>
        <div className='add-img-upload flex-col'>
          <p>
            <label htmlFor="image">
              <img/>
            </label>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Add