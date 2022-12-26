import React from "react";
import { useState } from "react";

export const What = () => {
  const [user, setUser] = useState('')
  const [showUser, setShowUser] = useState(false)

  return <div>
    <input type='text' placeholder="Say your name ..." onChange={(event) => { setUser(event.target.value) }}></input>
    <button onClick={() => { setShowUser(true) }}>Click me</button>;
    {showUser && <h1>{user}</h1>}</div>
};
