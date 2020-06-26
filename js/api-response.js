const apiData = async () => {
  try {
    const response = await fetch('https://floating-shore-71040.herokuapp.com/tasks', {
      method: 'GET'
    })  
    
    return response.json()
  } 
  catch (error) {
    return error
  } 
} 
