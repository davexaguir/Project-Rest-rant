const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/gato.jpg" alt="Cat" width={500} height={500} />
              <div>
                Photo by <a href="Author_Link">Charlie Deets</a> on <a href="https://unsplash.com/photos/TKgOIwPVmkg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Unsplash</a>
              </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404

