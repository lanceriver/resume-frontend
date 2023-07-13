const { v4: uuidv4 } = require('uuid');
const Cookies = require('js-cookie');

async function get_visitor_count() {
    const response = await fetch("https://alpe5t2zwl.execute-api.us-east-1.amazonaws.com/get_visitor_count", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const json_data = await response.json();
    const visitor_count = json_data.Item.viewer_count;
    document.getElementById("visitor_counter").innerHTML = visitor_count;
}

async function update_visitor_count() {
    const response = await fetch("https://alpe5t2zwl.execute-api.us-east-1.amazonaws.com/update_visitor_count", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const json_data = await response.json();
    const visitor_count = json_data.Attributes.viewer_count;
  document.getElementById("visitor_counter").innerHTML = visitor_count;
}

function generate_uuid() {
  const user_id = uuidv4();
  console.log(user_id);
  return user_id;
}

function create_cookie(user_id) {
  Cookies.set('uuid', user_id, { expires: 365, secure: true});
  return;
}

async function send_cookie() {
  const user_cookie = Cookies.get('uuid');
  const uuid_json = {
    "uuid" : user_cookie
  }
  const response = await fetch("https://alpe5t2zwl.execute-api.us-east-1.amazonaws.com/storeUUID", {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(uuid_json)
  });
}

async function check_cookie_unique() {
  const user_cookie = Cookies.get('uuid');
  const uuid_json = {
    "uuid" : user_cookie
  }
  const response = await fetch("https://alpe5t2zwl.execute-api.us-east-1.amazonaws.com/getUUID", {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(uuid_json)
  });
  const result = await response.text();
  if (result == 'true') {
    get_visitor_count();
  }
  else {
    update_visitor_count();
  }
}

function check_cookie_exists() {
  const user_cookie = Cookies.get('uuid');
    if (user_cookie == undefined) {
      const user_id = generate_uuid();
      create_cookie(user_id);
      send_cookie();
      update_visitor_count();
    }
    else {
      check_cookie_unique();
      return user_cookie;
    }
}

check_cookie_exists();
