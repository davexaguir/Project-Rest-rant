const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST"action={`/places/${data.place.id}?_method=PUT`}>
                    <div className='form-group'>
                        <label htmlFor='name'>Place Name</label>
                      <input className='form-control' type="text" name="name" id="name" value={data.place.name} required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="pic">Place Pictured</label>
                        <input className='form-control' type="url" name='pic' id='pic' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="city">City</label>
                        <input className='form-control' type="text" name='city' id='city' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="state">State</label>
                        <input className='form-control' type="text" name='state' id='state' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className='form-control' type="text" name='cuisines' id='cuisines' required/>
                    </div>
                    <input className='btn btn-primary' type="submit" value='Add Place' />
                </form>
          </main>
        </Def>
    )
}

module.exports = edit_form
