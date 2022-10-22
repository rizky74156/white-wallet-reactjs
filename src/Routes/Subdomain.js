import React from "react";
import Home from "../pages/Home";
import Voucher from "../pages/Voucher";
import Bayar from "../pages/Bayar";
import Inbox from "../pages/Inbox";
import Profile from "../pages/Profile";
import Topup from "../pages/Topup";
import Informasi from "../pages/Informasi";
import Riwayat from "../pages/Riwayat";
import Pagesucces from "../pages/Pagesucces";
import Withdrawsucces from "../pages/Withdrawsucces";
import Withdraw from "../pages/Withdraw";
import Pin from "../pages/Pin";
import Riwayatdetail from "../pages/Riwayatdetail";
import Detailbayar from "../pages/Detailbayar";
import Notifikasi from "../pages/Notifikasi";
import Detailinbox from "../pages/Detailinbox";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Routes, Route } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import { useEffect } from "react";

const Subdomain = () => {
    const domains = [
        {
            subdomain: "angsur",
        },
        {
            subdomain: "www",
        },
    ];

    const [subDomain, setSubDomain] = useState(null);
    useEffect(() => {
        const host = window.location.host; //get Full Domain of the app

        const arr = host.split(".").slice(0, host.includes("localhost") ? -1 : -2);
        if (arr.length > 0) setSubDomain(arr[0]);
    }, []);

    const requestedDomain = domains.find(
        (domain) => domain.subdomain === subDomain
    );

    return (
        <div>
            {requestedDomain ? (
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="home" element={<Home />} />
                    <Route path="voucher" element={<Voucher />} />
                    <Route path="bayar" element={<Bayar />} />
                    <Route path="inbox" element={<Inbox />} />
                    <Route path="inbox/notifikasi" element={<Notifikasi />} />
                    <Route path="inbox/notifikasi/info" element={<Detailinbox />} />
                    <Route path="inbox/informasi" element={<Informasi />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="topup" element={<Topup />} />
                    <Route path="withdraw" element={<Withdraw />} />
                    <Route path="riwayat" element={<Riwayat />} />
                    <Route path="riwayat/topup" element={<Riwayatdetail />} />
                    <Route path="riwayat/bayar" element={<Detailbayar />} />
                    <Route path="topup/succes" element={<Pagesucces />} />
                    <Route path="withdraw/keamanan" element={<Pin />} />
                    <Route path="withdraw/keamanan/succes" element={<Withdrawsucces />} />
                </Routes>
            ) : (
                <h1>Not Found</h1>
            )}
        </div>
    );
};

export default Subdomain;
