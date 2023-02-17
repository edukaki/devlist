const filterArr = (arr, filter) => {
  let tempArr = [];
  arr.map((project) =>
    filter.forEach(
      (element) =>
        project.status === element && (tempArr = [...tempArr, project]),
    ),
  );
  return tempArr;
};

export default filterArr;
