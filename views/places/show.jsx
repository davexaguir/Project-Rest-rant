const React = require('react')
const Def = require('../default')
const comments = require('../../models/comment.js')

function show (data) {
  let comments = 
    <h3 className='inactive'>
      No comments yet!
    </h3>
  let rating = 
    <h3 className='inactive'>
      Not yet rated
    </h3>
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
    let sumRatings = data.place.comments.reduce((tot, c) =>{
      return tot + c.stars
    }, 0)

    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐'
    }
    rating = (
      <h3>
         {stars}stars
      </h3>
    )
      return (
        <div className="col-sm-4 rant-box">
          <h2 className="rant">{c.rant ? 'Rant! 🤬' : 'Rave! 💖'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          <form method='POST' action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
            <input type="submit" className='btn btn-danger' value='Delete Comment' />
          </form>
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
            <div className='row'>
              <div className='col-sm-6'>
                <img className='img-fluid' src={data.place.pic} alt={data.place.name} width={500}/>
                <h3>
                  Located in {data.place.city}, {data.place.state}{''}
                </h3>
              </div>
              <div className='col-sm-6'>
                <h1>{data.place.name}</h1>
                <div>
                <h4>Rating</h4>
                  {rating}
                  <br/>
                </div>
                  <div>
                <h2>
                  Description
                </h2>
                <h3>
                  {data.place.showEstablished()}
                </h3>
                <h4>
                  Serving {data.place.cuisines}
                </h4>
                </div>
              <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit</a>
              <br/>
             <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
               <button type="submit" className="btn btn-danger">
                Delete
               </button>
              </form>
           </div>
           <hr/>
           </div>
           <div className='row'></div>   
          <h2>Comments</h2>
          {comments}
          <hr />
          <div className='rant-post-box'></div>
          <h2>Does {data.place.name} deserve a Rave 💖 or a Rant 🤬? </h2>
          <form method="POST" action={`/places/${data.place.id}/comment`}>
            <div className='row'>
              <div className='form-group col-sm-12'>
                <label htmlFor="content">Content</label>
                <textarea name="content" id="content" className='form-control'></textarea>
              </div>
            </div>
            <div className='row'>
              <div className='form-group col-sm-4'>
                <label htmlFor="author">Author</label>
                <input id='author' name='author' className='form-control'/>
              </div>
              <div className='form-group col-sm-4'>
                <label htmlFor="stars">⭐️ Star Rating</label>
                <input type="range" step='0.5' min='1' max='5' id='stars' name='stars' className='form-control' />
              </div>
              <div className='form-group col-sm-2'>
                <label htmlFor="rant">Rant</label>
                <input type="checkbox" id='rant' name='rant' className='form-control' />
              </div>
            </div>
            <input type="submit" className='btn btn-primary' value='Add Comment' />
          </form>
          </main>
        </Def>
    )
}

module.exports = show
