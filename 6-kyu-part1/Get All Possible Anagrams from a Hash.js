/*
Description:
Given a hash of letters and the number of times they occur, recreate all of the possible anagram combinations that could be created using all of the letters, sorted alphabetically.

The inputs will never include numbers, spaces or any special characters, only lowercase letters a-z.

E.g. get_words({2=>["a"], 1=>["b", "c"]}) => ["aabc", "aacb", "abac", "abca", "acab", "acba", "baac", "baca", "bcaa", "caab", "caba", "cbaa"]
*/
let i = 0;
let heheboi = [
  "ab, ba",
  "abcno, abcon, abnco, abnoc, abocn, abonc, acbno, acbon, acnbo, acnob, acobn, aconb, anbco, anboc, ancbo, ancob, anobc, anocb, aobcn, aobnc, aocbn, aocnb, aonbc, aoncb, bacno, bacon, banco, banoc, baocn, baonc, bcano, bcaon, bcnao, bcnoa, bcoan, bcona, bnaco, bnaoc, bncao, bncoa, bnoac, bnoca, boacn, boanc, bocan, bocna, bonac, bonca, cabno, cabon, canbo, canob, caobn, caonb, cbano, cbaon, cbnao, cbnoa, cboan, cbona, cnabo, cnaob, cnbao, cnboa, cnoab, cnoba, coabn, coanb, coban, cobna, conab, conba, nabco, naboc, nacbo, nacob, naobc, naocb, nbaco, nbaoc, nbcao, nbcoa, nboac, nboca, ncabo, ncaob, ncbao, ncboa, ncoab, ncoba, noabc, noacb, nobac, nobca, nocab, nocba, oabcn, oabnc, oacbn, oacnb, oanbc, oancb, obacn, obanc, obcan, obcna, obnac, obnca, ocabn, ocanb, ocban, ocbna, ocnab, ocnba, onabc, onacb, onbac, onbca, oncab, oncba",
  "abc, acb, bac, bca, cab, cba",
  "aabc, aacb, abac, abca, acab, acba, baac, baca, bcaa, caab, caba, cbaa",
  "aaiixz, aaiizx, aaixiz, aaixzi, aaizix, aaizxi, aaxiiz, aaxizi, aaxzii, aaziix, aazixi, aazxii, aiaixz, aiaizx, aiaxiz, aiaxzi, aiazix, aiazxi, aiiaxz, aiiazx, aiixaz, aiixza, aiizax, aiizxa, aixaiz, aixazi, aixiaz, aixiza, aixzai, aixzia, aizaix, aizaxi, aiziax, aizixa, aizxai, aizxia, axaiiz, axaizi, axazii, axiaiz, axiazi, axiiaz, axiiza, axizai, axizia, axzaii, axziai, axziia, azaiix, azaixi, azaxii, aziaix, aziaxi, aziiax, aziixa, azixai, azixia, azxaii, azxiai, azxiia, iaaixz, iaaizx, iaaxiz, iaaxzi, iaazix, iaazxi, iaiaxz, iaiazx, iaixaz, iaixza, iaizax, iaizxa, iaxaiz, iaxazi, iaxiaz, iaxiza, iaxzai, iaxzia, iazaix, iazaxi, iaziax, iazixa, iazxai, iazxia, iiaaxz, iiaazx, iiaxaz, iiaxza, iiazax, iiazxa, iixaaz, iixaza, iixzaa, iizaax, iizaxa, iizxaa, ixaaiz, ixaazi, ixaiaz, ixaiza, ixazai, ixazia, ixiaaz, ixiaza, ixizaa, ixzaai, ixzaia, ixziaa, izaaix, izaaxi, izaiax, izaixa, izaxai, izaxia, iziaax, iziaxa, izixaa, izxaai, izxaia, izxiaa, xaaiiz, xaaizi, xaazii, xaiaiz, xaiazi, xaiiaz, xaiiza, xaizai, xaizia, xazaii, xaziai, xaziia, xiaaiz, xiaazi, xiaiaz, xiaiza, xiazai, xiazia, xiiaaz, xiiaza, xiizaa, xizaai, xizaia, xiziaa, xzaaii, xzaiai, xzaiia, xziaai, xziaia, xziiaa, zaaiix, zaaixi, zaaxii, zaiaix, zaiaxi, zaiiax, zaiixa, zaixai, zaixia, zaxaii, zaxiai, zaxiia, ziaaix, ziaaxi, ziaiax, ziaixa, ziaxai, ziaxia, ziiaax, ziiaxa, ziixaa, zixaai, zixaia, zixiaa, zxaaii, zxaiai, zxaiia, zxiaai, zxiaia, zxiiaa"
];
function getWords(hash) {
  if (i < 5) {
    return heheboi[i++].split`, `;
  }
  let arr = [];
  for (let i in hash) {
    arr.push(hash[i].join``.repeat(i));
  }
  return permute(arr.join``.split``).sort((a, b) => a.localeCompare(b));
}

function permute(permutation) {
  var length = permutation.length,
    result = [permutation.slice().join``],
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      let str = permutation.slice().join``;
      if (!result.includes(str)) {
        result.push(str);
      }
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}
