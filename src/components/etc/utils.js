function sortAlphabetical(a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}

export function getTags(obj) {
  obj.languages.sort(sortAlphabetical);
  obj.frameworksLibraries.sort(sortAlphabetical);
  obj.toolsTechnologies.sort(sortAlphabetical);
  obj.machineLearning.sort(sortAlphabetical);
  obj.categories.sort(sortAlphabetical);

  return obj.languages.concat(
    obj.frameworksLibraries,
    obj.toolsTechnologies,
    obj.machineLearning,
    obj.categories
  );
}
