const generateProof = async (input) => {
  try {
    const { proof, publicSignals } = await window.snarkjs.groth16.fullProve(
      input,
      "/main.wasm",
      "/main.zkey"
    );
    const finalRes = {
      proof: proof,
      publicSignals: publicSignals
    };
    return finalRes;
  } catch (err) {
    console.log(err);
    return -1;
  }
}

const unstringifyBigInts = (o) => {
  if ((typeof(o) == "string") && (/^[0-9]+$/.test(o) ))  {
      return window.bigInt(o);
  } else if (Array.isArray(o)) {
      return o.map(unstringifyBigInts);
  } else if (typeof o == "object") {
      const res = {};
      for (let k in o) {
          res[k] = unstringifyBigInts(o[k]);
      }
      return res;
  } else {
      return o;
  }
}

const hexifyBigInts = (o) => {
  if (typeof (o) === "bigInt" || (o instanceof window.bigInt)) {
      let str = o.toString(16);
      while (str.length < 64) str = "0" + str;
      str = "0x" + str;
      return str;
  } else if (Array.isArray(o)) {
      return o.map(hexifyBigInts);
  } else if (typeof o == "object") {
      const res = {};
      for (let k in o) {
          res[k] = hexifyBigInts(o[k]);
      }
      return res;
  } else {
      return o;
  }
}

const toSolidityInput = (proof) => {
  const result = {
      a: [proof.pi_a[0], proof.pi_a[1]],
      b: [[proof.pi_b[0][1], proof.pi_b[0][0]], [proof.pi_b[1][1], proof.pi_b[1][0]]],
      c: [proof.pi_c[0], proof.pi_c[1]],
  };
  if (proof.publicSignals) {
      result.publicSignals = proof.publicSignals;
  }
  return hexifyBigInts(unstringifyBigInts(result));
}

export async function verifyProof (proof) {
  let v_key = {
    "protocol": "groth16",
    "curve": "bn128",
    "nPublic": 4,
    "vk_alpha_1": [
     "17609957779441276636398814074849085081326343232777143871425168382919303888168",
     "12626542131319423230317007227452761945310647579650739585265010259394830837008",
     "1"
    ],
    "vk_beta_2": [
     [
      "6704184278888899908034725037049428258175953144089440302728729664343131057060",
      "15478054126857872694445036645762188078134448883489340008546887019546842073279"
     ],
     [
      "5208924217108248501320834846024398006518650982829434846437750462542948130516",
      "20598255899152765979887330489718678927600777863657339616261176785972831586407"
     ],
     [
      "1",
      "0"
     ]
    ],
    "vk_gamma_2": [
     [
      "10857046999023057135944570762232829481370756359578518086990519993285655852781",
      "11559732032986387107991004021392285783925812861821192530917403151452391805634"
     ],
     [
      "8495653923123431417604973247489272438418190587263600148770280649306958101930",
      "4082367875863433681332203403145435568316851327593401208105741076214120093531"
     ],
     [
      "1",
      "0"
     ]
    ],
    "vk_delta_2": [
     [
      "3820651490702925197665347845855895358514484528254004764531606100021907469961",
      "3140933052569288485272424358122282474907861450428198020247624255163099472544"
     ],
     [
      "3880968143467076204762468814422965689645702502986724872855519359148962027797",
      "12962399740674324106912755105526827679498693259228158191821788270534137043738"
     ],
     [
      "1",
      "0"
     ]
    ],
    "vk_alphabeta_12": [
     [
      [
       "18148813422497031828796296031333664157582956411100396970815361086659143382215",
       "15463295798446445710480277320664607961190499769927670960500640774608415485279"
      ],
      [
       "14413111324342128843124494766383276908392085209969383119984086896315793009672",
       "7080522530548061739655905947844632998542477858466389551912231027165950437356"
      ],
      [
       "8650145467825226410476402957240157298693325644660437179910202486861487007932",
       "14924759529551802835726761994608798217578125540611093089619736267639969663858"
      ]
     ],
     [
      [
       "11696663706420458972124883514007259397435300819389701776790276687590775632750",
       "1799770277890355959910733296920932671061313585997797664130892495912658282099"
      ],
      [
       "150957521756327476621820891505898685503419332195165085544174887154044684453",
       "4930240600896801864743128236309378586792068489713523578703929589840144972295"
      ],
      [
       "13641667737902978721528269976248558286466274419419283838494824585132805737494",
       "2042142019694978969689751366724432632422598115315366469538439870752880113477"
      ]
     ]
    ],
    "IC": [
     [
      "1108599731630294270374157243134378388830693205310095615480416731046533478465",
      "3221717143636574054065888092755560633005750056090268783493995574206657980998",
      "1"
     ],
     [
      "14811116589032134429420844803740101525710516125445922235140659614212583053938",
      "3437676579100234918813780193443313722280553624251778656205917577885370378560",
      "1"
     ],
     [
      "20384292221418176628089244731616573817561425488335123474775745396379009016533",
      "11054497689689508675051898814261897649864704522139694889202502360284332256462",
      "1"
     ],
     [
      "20732529118504037550981275594002556585914157783348149202461365138980612251464",
      "5949143118755034996160154378509603546226342792944486094018641352741512671538",
      "1"
     ],
     [
      "1196974453676430856858777488038821460785035073935508353094562463653152180201",
      "12318111428503584263582321784115925347895019416788916799674255941447899193525",
      "1"
     ]
    ]
   }
   
  const res = await window.snarkjs.groth16.verify(v_key, proof.publicSignals, proof.proof);
  return res
}
