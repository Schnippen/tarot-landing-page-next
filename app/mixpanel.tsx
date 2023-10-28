import mixpanel from "mixpanel-browser";

//console.log("process:",process.env.MIXPANEL_API_KEY);

const init = process.env.MIXPANEL_API_KEY || "";

mixpanel.init("85e826ac0fd9c22738774a63ba6bd839", {
  debug: false,
  track_pageview: true,
});

export const analytics = {
  event: (name: string, params?: any) => {
    // firebaseAnalytics.logEvent(name, params)
    mixpanel.track(name, params);
  },
};
