import React, { useRef, useState } from "react";


function CreateGroup() {
  const baseURL = "http://localhost:4000/api/createGroup";
  const name = useRef(null);
  const size = useRef(null);
  const [postResult, setPostResult] = useState(null);
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }
  
  async function postData() {
    const postData = {
      name: name.current.value,
      size: size.current.value,
    };
    try {
      const res = await fetch(`${baseURL}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
      });
      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }
      const data = await res.json();
      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };
      setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(err.message);
    }
  }
  
  const clearPostOutput = () => {
    setPostResult(null);
  }
  
  return (


 
    <div className="card">
      <div className="card-body">
        <div className="form-group">
          <input type="text" className="form-control" ref={name} placeholder="name" />
        </div>
        <div className="form-group">
          <input type="number" className="form-control" ref={size} placeholder="size" />
        </div>
        <button className="btn btn-sm btn-primary" onClick={postData}>Post Data</button>
        <button className="btn btn-sm btn-warning ml-2" onClick={clearPostOutput}>Clear</button>
        { postResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{postResult}</pre></div> }
      </div>
    </div>
  );
}
export default CreateGroup;