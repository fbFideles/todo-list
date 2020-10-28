const apiGetData = async () => {
  try {
    const response = await axios.get('https://floating-shore-71040.herokuapp.com/tasks')  
    
    return response
  } 
  catch (error) {
    return error
  } 
} 

const apiPostData = async (titleData, descriptionData) => {
  try {
    const response = await axios.post('https://floating-shore-71040.herokuapp.com/tasks', {
      title: titleData,
      description: descriptionData
    });
    
    location.reload();
    
    return response;
  } 
  catch (error) {
    return error
  } 
}