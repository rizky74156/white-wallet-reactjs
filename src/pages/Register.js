import React from "react";
import Back from "../asset/arrowback.svg";
import { Link } from "react-router-dom";
import iconregister from "../asset/register.svg";
// import Logininput from "../components/Logininput";
// import Buttonregister from "../components/Buttonregister";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Register = () => {
  const [contact, setContacts] = useState([]);

  // const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [formData, setFormData] = useState({
    // name: "",
    // telp: "",
    Phonenumber: "",
    Email: "",
    Fullname: "",
    Password: "",
  });

  useEffect(() => {
    //megambil data
    axios.get("http://localhost:3000/akun").then((res) => {
      console.log(res.data);
      setContacts(res?.data ?? []);
    });
  }, []);

  function handleChange(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let data = [...contact];

      let newData = {
        // id: uid(),
        Phonenumber: formData.Phonenumber,
        Fullname: formData.Fullname,
        Email: formData.Email,
        Password: formData.Password,
      };
      data.push(newData);

      axios.post("http://localhost:3000/akun", newData).then((res) => {
        alert("Berhasil menyimpan data");
      });

    // Menmbah contact
    setContacts(data);
    // setFormData({ Phonenumber: "", Fullname: "", Email: "", Password: "" });
    // setIsUpdate({ id: null, status: false });
  }

  // function handleEdit(id) {
  //   let data = [...contact];
  //   let foundData = data.find((contact) => contact.id === id);
  //   setFormData({
  //     Fullname: foundData.Fullname,
  //     Phonenumber: foundData.Phonenumber,
  //     Email: foundData.Email,
  //     Password: foundData.Password,
  //   });
  //   setIsUpdate({ id: id, status: true });
  // }

  // function handleDelete(id) {
  //   let data = [...contact];
  //   let filterData = data.filter((contact) => contact.id !== id);
  //   setContacts(filterData);

  //   axios.delete(`http://localhost:3000/akun/${id}`).then((res) => {
  //     alert("Data berhasil dihapus");
  //   });
  // }

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

        <form action="" onSubmit={handleSubmit}>
          <div className="register">
            <div className="py-2">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="form-control"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
              />
            </div>
            <div className="py-2">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="Fullname"
                value={formData.Fullname}
                onChange={handleChange}
              />
            </div>
            <div className="py-2">
              <label htmlFor="">No. Telp</label>
              <input
                type="text"
                className="form-control"
                name="Phonenumber"
                value={formData.Phonenumber}
                onChange={handleChange}
              />
            </div>
            <div className="py-2">
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="form-control"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
              />
            </div>

            <div className="py-2">
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
