import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const BuyCredit = () => {

    const { user, backendUrl, loadCreditData, token, setShowLogin } = useContext(AppContext);

    const navigate = useNavigate();

    const initPay = async (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Credits Payment',
            description: 'Credits Payment',
            order_id: order.id,
            receipt: order.receipt,
            handler: async (res) => {
                try {
                    const { data } = await axios.post(backendUrl + '/api/user/verify-razor',
                        res,{
                            headers:{token}
                        }
                    )
                    if (data.success){
                        loadCreditData();
                        navigate('/');
                        toast.success('Credits Added!');
                    }
                } catch (error) {
                    toast.error(error.message);
                }
            }
        }
        const razorpay = new window.Razorpay(options);
        razorpay.open();
    }

    const paymentRazorpay = async (planId) => {
        try {
            if (!user) {
                setShowLogin(true);
                return;
            }
            const { data } = await axios.post(backendUrl + '/api/user/pay-razor',
                {
                    planId
                }, {
                headers: {
                    token
                }
            }
            )

            if (data.success && data.order) {
                initPay(data.order);
            }
            else {
                toast.error(data.message || "Payment initiation failed");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div
            className='min-h-[80vh] text-center pt-14 mb-10'>
            <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>OUR PLANS</button>
            <h1 className='text-3xl font-medium mb-6 sm:mb-10'>Choose the plan</h1>
            <div className='flex flex-wrap justify-center gap-6 text-left'>
                {plans.map((plan, index) => (
                    <div key={index}
                        className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gry-600 hover:scale-105 transition-all duration-300 border-1 border-gray-400/60'>
                        <img src={assets.logo_icon}
                            width={40}
                            alt="logo-icon" />
                        <p className='mt-3 mb-1 font-semibold'>{plan.id}</p>
                        <p className='text-sm'>{plan.desc}</p>
                        <p className='mt-6'>
                            <span className='text-3xl font-medium'>₹{plan.price}</span> / {plan.credits} credits</p>
                        <button onClick={() => paymentRazorpay(plan.id)} className='w-full mt-8 bg-gray-800 text-white text-sm rounded-md py-2.5 min-w-52'>{user ? "Purchase" : "Get Started"}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BuyCredit