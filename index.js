const Button = props => {
  const {className, buttonText} = props
  return <button className={className}>{buttonText}</button>
}

const element = (
  <div className='main-container'>
    <div className='data'>
      <h1>Social Buttons</h1>
      <div className='button'>
        <Button className='like-button' buttonText='Like' />
        <Button className='comment-button' buttonText='Comment' />
        <Button className='share-button' buttonText='Share' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
