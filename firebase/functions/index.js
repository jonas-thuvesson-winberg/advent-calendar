const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
let db = admin.firestore();

const dedupeAndSortArray = arr => {
  let newArr = [...new Set(arr)];
  newArr = newArr.sort((a, b) => {
    if (Number(a) < Number(b)) {
      return -1;
    } else {
      return 1;
    }
  });
  return newArr;
};

const saveOrUpdateIpState = async (req, res) => {
  const body = req.body;
  if (!body.daysOpened) {
    return `"daysOpened" was missing in request.`;
  }

  // 46.59.53.202
  if (!body.clientIp) {
    return `"clientIp" was missing in request.`;
  }

  const docRef = db.collection("ips").doc(body.clientIp);

  const response = await docRef
    .get()
    .then(async doc => {
      if (!doc.exists) {
        return await docRef.set({
          daysOpened: dedupeAndSortArray(body.daysOpened)
        });
      } else {
        const dbData = doc.data();
        let newData = [...dbData.daysOpened, ...body.daysOpened];
        newData = dedupeAndSortArray(newData);

        return await docRef.set({ daysOpened: newData });
      }
    })
    .catch(err => res.send("oops error " + err));
  return response;
};

const getIpState = async (req, res) => {
  if (!req.query) {
    return `query string was empty`;
  }

  if (!req.query.clientIp) {
    return `"clientIp" was missing in query string`;
  }

  const docRef = db.collection("ips").doc(req.query.clientIp);

  const response = await docRef
    .get()
    .then(doc => {
      if (!doc.exists) {
        return { daysOpened: [] };
      } else {
        const dbData = doc.data();
        return dbData;
      }
    })
    .catch(err => res.send("oops error " + err));
  return response;
};

exports.ipState = functions.https.onRequest((req, res) => {
  const method = req.method;
  if (method !== "POST" && method !== "GET") {
    res.send(`Only POST or GET allowed! ${req.method} was used.`);
  }

  if (method === "POST") {
    saveOrUpdateIpState(req, res)
      .then(x => res.send(x))
      .catch(err => res.send("oops error " + err));
  } else {
    getIpState(req, res)
      .then(x => res.send(x))
      .catch(err => res.send("oops error " + err));
  }

  // functions.response.send("Hello from Firebase!");
});
