import { UserProject } from '../../../context/ProjectsContext';

export const cardCalc = () => {
  const { projectArr } = UserProject();

  const getActive = () => {
    let total = 0;
    projectArr.map((project) =>
      project.status === 'Active' ? (total += 1) : '',
    );
    return total;
  };

  const getClosed = () => {
    let total = 0;
    projectArr.map((project) =>
      project.status === 'Closed' ? (total += 1) : '',
    );
    return total;
  };

  const getDaysTotal = () => {
    let total = 0;
    projectArr.map((project) => {
      const diffTime = Math.abs(
        new Date(project.deadline) - new Date(project.start),
      );
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      return (total += diffDays);
    });
    return total;
  };

  const getNextDeadline = () => {
    var deadlineArr = [];

    const getDeadlines = () => {
      projectArr.map((project) => {
        const today = new Date().setHours(0, 0, 0, 0);
        const deadline = () => {
          if (
            new Date(project.deadline) >= today &&
            project.status !== 'Closed'
          ) {
            deadlineArr = [...deadlineArr, new Date(project.deadline)];
          }
        };
        return deadline();
      });
    };
    getDeadlines();

    const minDate = new Date(
      Math.min(
        ...deadlineArr.map((project) => {
          return project;
        }),
      ),
    );

    if (projectArr.length === 0) {
      return 'No projects yet';
    }

    if (deadlineArr.length === 0) {
      return 'No upcoming deadlines';
    }

    return `${minDate.getDate()}-${
      minDate.getUTCMonth() + 1
    }-${minDate.getFullYear()}`;
  };

  return {
    active: projectArr && getActive(),
    daysTotal: projectArr && getDaysTotal(),
    closed: projectArr && getClosed(),
    nextDeadline: projectArr && getNextDeadline(),
  };
};
