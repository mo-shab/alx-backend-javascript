const getStudentIdsSum = (students) => {
  if (!Array.isArray(students)) {
    return 0;
  }
  return students.map((student) => student.id).reduce((prev, next) => prev + next);
};

export default getStudentIdsSum;
