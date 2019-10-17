/*
Description:
Getting Familiar: LEET: (sometimes written as "1337" or "l33t"), also known as eleet or leetspeak, is another alphabet for the English language that is used mostly on the internet. It uses various combinations of ASCII characters to replace Latinate letters. For example, leet spellings of the word leet include 1337 and l33t; eleet may be spelled 31337 or 3l33t.

GREEK: The Greek alphabet has been used to write the Greek language since the 8th century BC. It was derived from the earlier Phoenician alphabet, and was the first alphabetic script to have distinct letters for vowels as well as consonants. It is the ancestor of the Latin and Cyrillic scripts.Apart from its use in writing the Greek language, both in its ancient and its modern forms, the Greek alphabet today also serves as a source of technical symbols and labels in many domains of mathematics, science and other fields.

Your Task :

You have to create a function **GrεεκL33t** which    
takes a string as input and returns it in the form of 
(L33T+Grεεκ)Case.
Note: The letters which are not being converted in 
(L33T+Grεεκ)Case should be returned in the lowercase.
(L33T+Grεεκ)Case:

A=α (Alpha)      B=β (Beta)      D=δ (Delta)
E=ε (Epsilon)    I=ι (Iota)      K=κ (Kappa)
N=η (Eta)        O=θ (Theta)     P=ρ (Rho)
R=π (Pi)         T=τ (Tau)       U=μ (Mu)      
V=υ (Upsilon)    W=ω (Omega)     X=χ (Chi)
Y=γ (Gamma)
Examples:

GrεεκL33t("CodeWars") = "cθδεωαπs"
GrεεκL33t("Kata") = "κατα"
*/
function GrεεκL33t(str) {
  let dict = {
    a: "α",
    b: "β",
    d: "δ",
    e: "ε",
    i: "ι",
    k: "κ",
    n: "η",
    o: "θ",
    p: "ρ",
    r: "π",
    t: "τ",
    u: "μ",
    v: "υ",
    w: "ω",
    x: "χ",
    y: "γ"
  };
  return str.replace(/./g, v => {
    if (dict[v.toLowerCase()]) {
      return v === v.toUpperCase() ? dict[v.toLowerCase()] : dict[v];
    }
    return v.toLowerCase();
  });
}
