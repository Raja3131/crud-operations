export const DataReducer = (state, action) => {
    var list = JSON.parse(localStorage.getItem('datas'))
    switch (action.type) {
        case 'INSERT':
            list.push(action.payload)
            localStorage.setItem('datas', JSON.stringify(list))
            return { list, currentIndex: -1 }
        case 'UPDATE':
            list[state.currentIndex] = action.payload
            localStorage.setItem('datas', JSON.stringify(list))
            return { list, currentIndex: -1 }

        case 'UPDATE-INDEX':
            return { list, currentIndex: action.payload }

        case 'DELETE':
            list.splice(action.payload, 1)
            localStorage.setItem('datas', JSON.stringify(list))
            return { list, currentIndex: -1 }
        default:
            return state;
    }

}



export default DataReducer