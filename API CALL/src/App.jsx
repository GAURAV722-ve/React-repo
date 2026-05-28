import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>GET DATA</button>

      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.author}</h3>
              <img src={item.download_url} width="200" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App