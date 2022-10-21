// Render Prop
import React from "react";
import { Formik, Form, Field } from "formik";
import "./index.css";
import ContactUs from "./contactus";

const Basic = () => (
  <div>
    <h1 className="text-3xl font-bold underline">Testing Formik</h1>
    <Formik
      initialValues={{ email: "", name: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="flex-auto">
            <label className="font-bold">
              <Field
                className="shadow appearance-none border rounded text-gray"
                type="text"
                name="name"
                placeholder="Name"
              />
            </label>
            <br></br>
            <label className="font-bold">
              <Field
                className="shadow appearance-none border rounded text-gray"
                type="email"
                name="email"
                placeholder="email"
              />
            </label>
            <br></br>
            <label className="font-bold">
              <Field
                className="shadow appearance-none border rounded text-gray"
                type="text"
                name="something"
                placeholder="something"
              />
            </label>
          </div>
          <br></br>
          <b className="underline text-xl">
            Programming languages you work with:
          </b>
          <br></br>
          <div
            id="checkbox-group"
            role="group"
            aria-labelledby="checkbox-group"
          >
            <label>
              <img
                className="object-contain h-9 w-9"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                alt="c"
              ></img>
              <Field type="checkbox" name="checked" value="C" />C
            </label>

            <label>
              <img
                className="object-contain h-9 w-9"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                alt="cplusplus"
              ></img>
              <Field type="checkbox" name="checked" value="C++" />
              C++
            </label>

            <label>
              <img
                className="object-contain h-9 w-9"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
                alt="csharp"
              ></img>
              <Field type="checkbox" name="checked" value="C#" />
              C#
            </label>

            <label>
              <img
                className="object-contain h-9 w-9"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
              ></img>
              <Field type="checkbox" name="checked" value="node" />
              Node JS
            </label>start


            <label>
              <img
                className="object-contain h-9 w-9"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
              ></img>
              <Field type="checkbox" name="checked" value="javascript" />
              Javascript
            </label>

            <label>
              <img
                className="object-contain h-9 w-9"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"
              ></img>
              <Field type="checkbox" name="checked" value="typescript" />
              Typescript
            </label>
          </div>
          <div className="flex justify-center">
            <button
              className="object- none object-left bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-5 px-5 inset-2.5"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>

          </div>

          <ContactUs />
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
