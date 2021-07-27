const webpush = require("web-push");

// let vapidKey = webpush.generateVAPIDKeys();
// console.log(vapidKey);

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BMXcN5ksbpL8teN7R1mxlvm6NCZrBbIH_v3qtIwgjw_LoWpwB9bK1_WQOBSvIPLFpEXgTPRvhTsu_SFx6EKlA4M",
  privateKey: "zSiKCa77St0aKsfsVWYA9lUlRF6KgCnhFqFi3-Dj0-A",
};

webpush.setVapidDetails(
  "mailto:yod@ahmed.hk",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fp5JS_lPotA:APA91bH_yguY0jBeJ3dZiLmo2I5MxYCPSb0yGezQivnjkVLXgoxAH2kg1ckv9sNelTkEPk26-HDdlQP-FPP8nuvW5y4lEj7kODEF5IriYAmxSvHsoIrcswcdqygNUmquE_2edPLze0Qb",
  expirationTime: null,
  keys: {
    p256dh:
      "BNEPBIrIW-4gM1yUXdMAh_zsntTOhGAsWdwnihmw6Yu-vV5Nagm1N4LrD4AhdbiA9wJL8NfEXrhaLHb-a6etoJ0",
    auth: "oGgt7ENK2XlA9ph4C1VsOQ",
  },
};
webpush.sendNotification(pushSubscription, "Your Push Payload Text");
