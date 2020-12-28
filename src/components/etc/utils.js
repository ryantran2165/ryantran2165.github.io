// function sortAlphabetical(a, b) {
//   return a.toLowerCase().localeCompare(b.toLowerCase());
// }

export function getTags(obj) {
  // obj.categories.sort(sortAlphabetical);
  // obj.programmingLanguages.sort(sortAlphabetical);
  // obj.frameworksLibraries.sort(sortAlphabetical);
  // obj.toolsTechnologies.sort(sortAlphabetical);
  // obj.machineLearning.sort(sortAlphabetical);

  return obj.categories.concat(
    obj.programmingLanguages,
    obj.frameworksLibraries,
    obj.toolsTechnologies,
    obj.machineLearning
  );
}
