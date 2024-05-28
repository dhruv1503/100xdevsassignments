/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (!str1 && !str2) return false;

  if (!str1 || !str2) return false;

  if (typeof str1 !== "string" || typeof str2 !== "string") return false;

  if (str1.length !== str2.length) return false;

  const str1Map = createMap(str1.toLowerCase());
  const str2Map = createMap(str2.toLowerCase());
  return compareMaps(str1Map, str2Map)
}

const createMap = (string) => {
  const map = new Map();
  for (let i = 0; i < string.length; i++) {
    if (!map.has(string.charAt(i))) {
      map.set(string.charAt(i), 1);
    } else {
      const countOfAlphabet = map.get(string.charAt(i)) + 1;
      map.set(string.charAt(i), countOfAlphabet);
    }
  }
  return map;
};
const compareMaps = (map1, map2) => {
  if (map1.size !== map2.size) return false;
  const map1Keys = Array.from(map1.keys());
  let result = true;
  for (let i = 0; i < map1Keys.length; i++) {
    if (
      !map2.has(map1Keys[i]) &&
      map1.get(map1Keys[i]) !== map2.get(map1Keys[i])
    ) {
      result = false;
      break;
    }
  }
  return result;
};
// we hasve to find same count of strings
isAnagram("Dhruv", "DhuVr");
module.exports = isAnagram;
