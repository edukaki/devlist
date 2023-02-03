const sortArr = (arr, filter, order) => {
    
    return arr.sort((dataA,dataB) => {
        const projectA = filter === 'creation' ? dataA.creation : filter === 'project' ? dataA.project : filter === 'deadline' ? dataA.deadline : filter === 'start' ? dataA.start : ''
        const projectB = filter === 'creation' ? dataB.creation : filter === 'project' ? dataB.project : filter === 'deadline' ? dataB.deadline : filter === 'start' ? dataB.start : ''
        if (projectA > projectB) {
            return order === 'ascending' ? 1 : -1
        }
        if (projectA < projectB) {
            return order === 'ascending' ? -1 : 1
        }
        return 0
    })
}


export default sortArr