const SORT_ALPHABETICAL = false;

function sortAlphabetical(a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}

export function getTags(obj) {
  if (SORT_ALPHABETICAL) {
    obj.categories.sort(sortAlphabetical);
    obj.languages.sort(sortAlphabetical);
    obj.frameworksLibraries.sort(sortAlphabetical);
    obj.tools.sort(sortAlphabetical);
    obj.machineLearning.sort(sortAlphabetical);
  }

  return obj.categories.concat(
    obj.languages,
    obj.frameworksLibraries,
    obj.tools,
    obj.machineLearning
  );
}
