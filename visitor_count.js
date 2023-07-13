async function get_visitor_count() {
    const response = await fetch("https://njp507r5m5.execute-api.us-east-1.amazonaws.com/default/GET_viewer_count", {
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

get_visitor_count();