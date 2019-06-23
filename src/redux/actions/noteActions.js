export const getNotes = () => {
  return (dispatch) => {
    fetch('http://localhost:5000/notes')
      .then(response => response.json())
      .then(data =>
        dispatch(setAllNotes(data))
      )
  }
}

export const getNote = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:5000/notes/${id}`)
  }
}

export const addNote = (payLoad) => {
  return (dispatch) => {
    fetch(`http://localhost:5000/notes`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        title: payLoad.title,
        body: payLoad.body
      }),
    })
  }
}

export const editNote = (id, payLoad) => {
  return (dispatch) => {
    fetch(`http://localhost:5000/notes/${id}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        title: payLoad.title,
        body: payLoad.body,
        created_by: payLoad.created_by
      }),
    })
  }
}

export const deleteNote = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:5000/notes/${id}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    })
  }
}

export const setAllNotes = (data) => {
  return {
    type: 'SET_ALL_NOTES',
    data
  };
}
