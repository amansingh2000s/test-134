var express = require("express");
var app = express();
app.use(express.json());
var axios = require("axios");
require("dotenv").config();
app.get("/", (req, res) => {
  res.send("App is working");
});

app.post("/test-message", async (req, res) => {
  let post_body = {
    message: {
      channel: "WABA",
      content: {
        preview_url: false,
        type: "TEMPLATE",
        template: {
          templateId: "redemption_process",
          parameterValues: {
            0: req.body["0"],
            1: req.body["1"],
          },
        },
      },
      recipient: {
        to: req.body.mobile,
        recipient_type: "individual",
      },
      sender: {
        from: process.env.SENDER_MOBILE,
      },
    },
    metaData: {
      version: "v1.0.9",
    },
  };
  try {
    let { data } = await axios.post(process.env.RCM_API, post_body, {
      headers: { Authentication: `Bearer ${process.env.API_KEY}` },
    });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
app.post("/successful-enrollment", async (req, res) => {
  let post_body = {
    message: {
      channel: "WABA",
      content: {
        preview_url: false,
        type: "TEMPLATE",
        template: {
          templateId: "successful_enrollment",
        },
      },
      recipient: {
        to: req.body.mobile,
        recipient_type: "individual",
      },
      sender: {
        from: process.env.SENDER_MOBILE,
      },
    },
    metaData: {
      version: "v1.0.9",
    },
  };
  try {
    let { data } = await axios.post(process.env.RCM_API, post_body, {
      headers: { Authentication: `Bearer ${process.env.API_KEY}` },
    });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

app.post("/redemption-process", async (req, res) => {
  let post_body = {
    message: {
      channel: "WABA",
      content: {
        preview_url: false,
        type: "TEMPLATE",
        template: {
          templateId: "redemption_process",
          parameterValues: {
            0: req.body["0"],
            1: req.body["1"],
          },
        },
      },
      recipient: {
        to: req.body.mobile,
        recipient_type: "individual",
      },
      sender: {
        from: process.env.SENDER_MOBILE,
      },
    },
    metaData: {
      version: "v1.0.9",
    },
  };
  try {
    let { data } = await axios.post(process.env.RCM_API, post_body, {
      headers: { Authentication: `Bearer ${process.env.API_KEY}` },
    });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
app.post("/successful-validation", async (req, res) => {
  let post_body = {
    message: {
      channel: "WABA",
      content: {
        preview_url: false,
        type: "TEMPLATE",
        template: {
          templateId: "successful_validation",
          parameterValues: {
            0: req.body["0"],
          },
        },
      },
      recipient: {
        to: req.body.mobile,
        recipient_type: "individual",
      },
      sender: {
        from: process.env.SENDER_MOBILE,
      },
    },
    metaData: {
      version: "v1.0.9",
    },
  };
  try {
    let { data } = await axios.post(process.env.RCM_API, post_body, {
      headers: { Authentication: `Bearer ${process.env.API_KEY}` },
    });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

app.post("/invalid-code", async (req, res) => {
  let post_body = {
    message: {
      channel: "WABA",
      content: {
        preview_url: false,
        type: "TEMPLATE",
        template: {
          templateId: "invalid_code",
        },
      },
      recipient: {
        to: req.body.mobile,
        recipient_type: "individual",
      },
      sender: {
        from: process.env.SENDER_MOBILE,
      },
    },
    metaData: {
      version: "v1.0.9",
    },
  };
  try {
    let { data } = await axios.post(process.env.RCM_API, post_body, {
      headers: { Authentication: `Bearer ${process.env.API_KEY}` },
    });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
app.post("/duplicate-code", async (req, res) => {
  let post_body = {
    message: {
      channel: "WABA",
      content: {
        preview_url: false,
        type: "TEMPLATE",
        template: {
          templateId: "duplicate_code",
        },
      },
      recipient: {
        to: req.body.mobile,
        recipient_type: "individual",
      },
      sender: {
        from: process.env.SENDER_MOBILE,
      },
    },
    metaData: {
      version: "v1.0.9",
    },
  };
  try {
    let { data } = await axios.post(process.env.RCM_API, post_body, {
      headers: { Authentication: `Bearer ${process.env.API_KEY}` },
    });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
var server = app.listen(process.env.PORT, function () {
  console.log("Example app listening at Port " + process.env.PORT);
});
