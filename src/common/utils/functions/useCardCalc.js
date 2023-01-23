import { UserProject } from '../../../context/ProjectsContext'


export const useCardCalc = () => {

  const { projectArr } = UserProject()

  const getActive = () => {
    let total = 0
    projectArr.map((project) => (
      project.status === 'Active' ? 
      total += 1 : '' 
    ))
    return total
  }

  const getClosed = () => {
    let total = 0
    projectArr.map((project) => (
      project.status === 'Closed' ? 
      total += 1 : '' 
    ))
    return total
  }

  const getDaysTotal = () => {
    let total = 0
    projectArr.map((project) => {
      const diffTime = Math.abs(new Date(project.deadline) - new Date(project.start))
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      return (
        total += diffDays
      )
    })
    return total
  }

  return {
    active:getActive(),
    daysTotal:getDaysTotal(),
    closed:getClosed(),
  }
}