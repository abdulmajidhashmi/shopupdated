import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from "./backend/axiosInstance";
import "./LoginRegister.css";
import { useRef } from "react";
import { message } from "antd";
const Otp = () => {
  const location = useLocation();
  const { email } = location.state || {};

  const [valid, setvalid] = useState(false);
  const [numberdata, setnumberdata] = useState({ email: "" });
  const [numberdata2, setnumberdata2] = useState({ email: "" });
  const [disable, setdisable] = useState(true);
  const [resendotp, setresendotp] = useState(false);
  const [otptime, setotptime] = useState(30);

  const navigate = useNavigate();
  const inpRef = useRef();

  const callapi = async (num) => {
    setdisable(false);
    console.log(numberdata);
    try {
      const otpdata = await axiosInstance.post("/user/verifyotp", numberdata);
      console.log(otpdata.data);
      if (otpdata.data.success === true) {
        localStorage.setItem("token", otpdata.data.data.data);
        console.log(otpdata.data.data.data);

        if (otpdata.data.success === false) {
          message.error("Internal server error");
        }
        if (otpdata.data.data.name === "user") {
          message.destroy();
          message.success("Enter name");
          navigate("/log/otp/name", {
            state: { email: otpdata.data.data.email },
          });
        } else {
          message.destroy();
          message.success("access granted");
          navigate("/");
        }
      }
    } catch (err) {
      setdisable(true);
      message.error("cannot verify user");
      console.log(err);
    }
  };
  function log(event) {
    if (valid && email) {
      if (disable) {
        message.loading("verifying");
        callapi();
      }
    }
  }

  function numberinput(event) {
    const numberRegex = /^\d{6}$/;

    if (numberRegex.test(event.target.value)) {
      setnumberdata({ email: email, otp: event.target.value });
      setvalid(true);
    } else {
      setvalid(false);
    }
  }

  const generateotp = async () => {
    setnumberdata2({ email: email });

    const otpdata = await axiosInstance.post("/user/otp", numberdata2);

    console.log(otpdata);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setotptime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setresendotp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    inpRef.current.focus();
  }, []);

  return (
    <>
      <div class="bg-purple-200 font-[sans-serif]">
        <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div class="max-w-md w-full">
            {/* <h1  class='w-40 mb-8 mx-auto block'>H RAHIM</h1> */}

            <div class="p-8 rounded-2xl bg-white shadow">
              <h2 class="text-gray-800 text-center text-2xl font-bold">
                Verify with OTP<br></br>
                <span style={{ fontSize: "15px", fontWeight: "100" }}>
                  sent to
                </span>
                <span className="or"> {email}</span>
              </h2>
              <form class="mt-8 space-y-4">
                <div>
                  {/* <label class="text-gray-800 text-sm mb-2 block">
                    OTP
                  </label> */}
                  <div class="relative flex items-center">
                    <input
                      name="email"
                      type="tel"
                      required
                      class={`indiacodeinp w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-purple-600`}
                      placeholder="Enter OTP"
                      onChange={numberinput}
                      ref={inpRef}
                      //   value={formvalues.email}
                    />
                    {/* <p className="indiacode text-sm">+91</p>
                    <p className="indiacodeline">|</p> */}
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      class="w-4 h-4 absolute right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"
                      ></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg> */}
                  </div>
                </div>

                {/* <div>
                  <label class="text-gray-800 text-sm mb-2 block">
                    Password
                  </label>
                  <div class="relative flex items-center">
                    <input
                      name="password"
                      type={`${pass ? "text" : "password"}`}
                      required
                      class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-purple-600"
                      placeholder="Enter password"
                      onChange={handlechange}
                      value={formvalues.password}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      class="w-4 h-4 absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                      onClick={showpassword}
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div> */}

                {/* <div class="flex flex-wrap items-center justify-between gap-4">
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 shrink-0 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                    />
                    <label
                      for="remember-me"
                      class="ml-3 block text-sm text-gray-800"
                    >
                      Remember me
                    </label>
                  </div> */}
                {/* <div class="text-sm">
                    <a
                      href="jajvascript:void(0);"
                      class="text-purple-500 hover:underline font-semibold"
                    >
                      Forgot your password?
                    </a>
                  </div> */}
                {/* </div> */}

                {resendotp ? (
                  <div className="text-sm logpassdiv">
                    <h5
                      className="regenerateotp text-lime-600 hover:underline font-semibold"
                      onClick={generateotp}
                    >
                      resend OTP
                    </h5>
                  </div>
                ) : (
                  <div className="logpassdiv">
                    <h6 className="resendotp text-purple-600">
                      Resend otp in{" "}
                      <span className="otptime">00:{otptime}</span>
                    </h6>
                  </div>
                )}

                <div class="!mt-8">
                  <button
                    type="button"
                    class={`w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white ${
                      valid
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-purple-400"
                    }  focus:outline-none`}
                    onClick={log}
                  >
                    CONTINUE
                  </button>
                </div>
                {/* <p class="text-gray-800 text-sm !mt-8 text-center">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    class="text-lime-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                  >
                    Register here
                  </Link>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
