import wordsText from '../words.txt';

export const readFile = () => {
  const f = new XMLHttpRequest();
  let wordsArray = [];
  f.open("GET", wordsText, false);
  
  f.onreadystatechange = () => {
    if(f.readyState === 4)
      if(f.status === 200 || f.status === 0) {
        let res = f.responseText;
        res.split("\n").map( word => {
          if (word.length > 2)
            wordsArray.push(word)
        })
      }
  }
  
  f.send(null);
  return wordsArray;
}
