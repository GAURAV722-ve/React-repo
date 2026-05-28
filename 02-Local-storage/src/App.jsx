import React from 'react'

const App = () => {

  const user = {
    username : "Versha sharam",
    age: 21,
    city:"Vijay nagar ghaziabad behrampur"
  }
  // localStorage.setItem('user',user)  // save as an object.
  localStorage.setItem('user',JSON.stringify(user))
  console.log(typeof(user))

  // localStorage.setItem('user1','Versha shrama') // Add item to local storage of browser.
  // localStorage.setItem('user2','Gaurav Singh')
  // const user1 = localStorage.getItem('user1') // Reterive the data from browser to console.
  // const user2 = localStorage.getItem('user2')
  // console.log(user1,user2)

  // localStorage.removeItem('user1') // Remove the Element from local storage unit.


  // localStorage.clear() // Clear All the data that are present in Local storage.


  return (
    <div>
      App
    </div>
  )
}

export default App
