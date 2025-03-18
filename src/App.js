import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the value of Form Data:");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center mt-8 p-4">
      <form onSubmit={submitHandler} className="w-full max-w-lg">
        <label htmlFor="firstName" className="block text-lg mb-2">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Love"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline-none p-2 w-full mb-4 border border-gray-300 rounded"
        />

        <label htmlFor="lastName" className="block text-lg mb-2">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Babbar"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline-none p-2 w-full mb-4 border border-gray-300 rounded"
        />

        <label htmlFor="email" className="block text-lg mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="love@abcd.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline-none p-2 w-full mb-4 border border-gray-300 rounded"
        />

        <label htmlFor="country" className="block text-lg mb-2">Country</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline-none p-2 w-full mb-4 border border-gray-300 rounded"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <label htmlFor="streetAddress" className="block text-lg mb-2">Street Address</label>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline-none p-2 w-full mb-4 border border-gray-300 rounded"
        />

        <label htmlFor="city" className="block text-lg mb-2">City</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="B-25C"
          value={formData.city}
          onChange={changeHandler}
          className="outline-none p-2 w-full mb-4 border border-gray-300 rounded"
        />

        <label htmlFor="state" className="block text-lg mb-2">State / Province</label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Bihar"
          value={formData.state}
          onChange={changeHandler}
          className="outline-none p-2 w-full mb-4 border border-gray-300 rounded"
        />

        <label htmlFor="postalCode" className="block text-lg mb-2">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="110077"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline-none p-2 w-full mb-4 border border-gray-300 rounded"
        />

        <fieldset className="mb-4">
          <legend className="text-lg font-semibold mb-2">By Email</legend>
          <div className="flex mb-4">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p className="text-sm text-gray-500">Get notified when someone's posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex mb-4">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p className="text-sm text-gray-500">Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex mb-4">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p className="text-sm text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <fieldset className="mb-4">
          <legend className="text-lg font-semibold mb-2">Push Notifications</legend>
          <p className="text-sm text-gray-500 mb-4">These are delivered via SMS to your mobile phone.</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}
            className="mr-2"
          />
          <label htmlFor="pushEverything">Everything</label>
          <br />

          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as email"
            onChange={changeHandler}
            className="mr-2"
          />
          <label htmlFor="pushEmail">Same as email</label>
          <br />

          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notifications"
            onChange={changeHandler}
            className="mr-2"
          />
          <label htmlFor="pushNothing">No Push Notifications</label>
        </fieldset>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold rounded py-2 px-4"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
