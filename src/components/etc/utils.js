// function sortAlphabetical(a, b) {
//   return a.toLowerCase().localeCompare(b.toLowerCase());
// }

export function getTags(obj) {
  // obj.categories.sort(sortAlphabetical);
  // obj.languages.sort(sortAlphabetical);
  // obj.frameworksLibraries.sort(sortAlphabetical);
  // obj.technologies.sort(sortAlphabetical);
  // obj.machineLearning.sort(sortAlphabetical);

  return obj.categories.concat(obj.languages, obj.frameworksLibraries, obj.technologies, obj.machineLearning);
}
