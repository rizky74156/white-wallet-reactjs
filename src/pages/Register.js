import React from "react";
import Back from "../asset/arrowback.svg";
import { Link } from "react-router-dom";
import iconregister from "../asset/register.svg";
import Logininput from "../components/Logininput";
// import Buttonregister from "../components/Buttonregister";
import { useState } from "react";
// import { useEffect } from "react";
import axios from "axios";

const Register = () => {
  // const [akun, setAkun] = useState([]);
  const [formData, setFormData] = useState({
    Phonenumber: "",
    Email: "",
    Fullname: "",
    Password: "",
  });

  // useEffect(() => {
  //   axios.get("http://localhost:3000/akun").then((res) => {
  //     console.log(res.data);
  //     setAkun(res?.data ?? []);
  //   });
  // }, []);

  // function handleChange(e) {
  //   let data = { ...formData };
  //   data[e.target.name] = e.target.value;
  //   setFormData(data);
  // }

  function handleSubmit(e)  {
    // let data = [...akun];
    e.preeventDefault();

    // let newData = {
    //   Phonenumber: formData.Phonenumber,
    //   Fullname: formData.Fullname,
    //   Email: formData.Email,
    //   Password: formData.Password,
    // };

    // data.push(newData);

    axios.post("http://localhost:3000/akun", formData).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)
    });

    // setAkun(data);
    // setFormData({ name: "", telp: "" });
  }

  return (
    <div>
      <div className="container mt-3 ps-2">
        <Link to="/">
          <img src={Back} alt="" />
        </Link>

        <div className="py-2">
          <img src={iconregister} width={"100%"} alt="" />
        </div>

        <div className="header-register pt-3">
          <h1>Register</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="register">
            <div className="py-2">
              <Logininput
                label={"Phone Number"}
                type="telp"
                id={"phonenumber"}
                placeholder="masukan no telefon"
                name={"Phonenumber"}
                change={(e) =>
                  setFormData({ ...formData, Phonenumber: e.target.value })
                }
                values={formData.Phonenumber}
              />
            </div>
            <div className="py-2">
              <Logininput
                label={"Email"}
                type="email"
                id={"email"}
                placeholder="masukan email"
                name={"Email"}
                change={(e) =>
                  setFormData({ ...formData, Email: e.target.value })
                }
                values={formData.Email}
              />
            </div>
            <div className="py-2">
              <Logininput
                label={"Fullname"}
                type="text"
                id={"name"}
                placeholder="masukan nama"
                name={"Fullname"}
                change={(e) =>
                  setFormData({ ...formData, Fullname: e.target.value })
                }
                values={formData.Fullname}
              />
            </div>
            <div className="py-2">
              <Logininput
                label={"Password"}
                type="password"
                id={"password"}
                name={"Password"}
                placeholder="masukan password"
                change={(e) =>
                  setFormData({ ...formData, Password: e.target.value })
                }
                values={formData.Password}
              />
            </div>

            <div className="py-2">
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
