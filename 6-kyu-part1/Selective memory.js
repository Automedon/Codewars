/*
Description:
A mad sociopath scientist just came out with a brilliant invention! He extracted his own memories to forget all the people he hates! Now there's a lot of information in there, so he needs your talent as a developer to automatize that task for him.

You are given the memories as a string containing people's surname and name (comma separated). The scientist marked one occurrence of each of the people he hates by putting a '!' right before their name.

Your task is to destroy all the occurrences of the marked people. One more thing ! Hate is contagious, so you also need to erase any memory of the person that comes after any marked name!

Examples
Input:

"Albert Einstein, !Sarah Connor, Marilyn Monroe, Abraham Lincoln, Sarah Connor, Sean Connery, Marilyn Monroe, Bjarne Stroustrup, Manson Marilyn, Monroe Mary"
Output:

"Albert Einstein, Abraham Lincoln, Sean Connery, Bjarne Stroustrup, Manson Marilyn, Monroe Mary"
=> We must remove every memories of Sarah Connor because she's marked, but as a side-effect we must also remove all the memories about Marilyn Monroe that comes right after her! Note that we can't destroy the memories of Manson Marilyn or Monroe Mary, so be careful!
*/
function select(memory){
  memory=memory.split`, `
  let c = 0
  let check = []
  let hated = [...new Set(memory)].filter(v=>v[0]=='!')
  for (let i=0;i<=memory.length;i++){
    if (hated.includes(memory[i])){
      c++
    } else { 
      for (let t=i-c;t<i+c;t++){
         check.push(memory[t])
      }
      c=0
    }
  }
  hated=hated.map(v=>v.slice(1))
  for (let i=0;i<memory.length;i++){
    if (hated.includes(memory[i])){
      memory[i]=''
    }
  }
  for (let i=0;i<memory.length;i++){
    if (check.includes(memory[i])){
      memory[i]=''
    }
  }
  return memory.filter(v=>v).join`, `
}
