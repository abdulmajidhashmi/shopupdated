import { useEffect, useState } from "react";
import { axiosInstance } from "./backend/axiosInstance";
import "./Notifications.css";
import { notification } from "antd";

const Notifications = () => {
  const [notifydata, setnotifydata] = useState(null);

  const notifycall = async () => {
    try {
      const data = await axiosInstance.get("/notify/");
      setnotifydata(data.data.data);
      console.log("hi iam logging")
      sessionStorage.setItem("notification", JSON.stringify(data.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const sessiondata = sessionStorage.getItem("notification");
    const notificationtrue =
      sessionStorage.getItem("notificationclose");

    if (notificationtrue) {
      setnotifydata(null);
      
    } else if (sessiondata) {
      setnotifydata(JSON.parse(sessiondata));
    } else {
      notifycall();
    }
  }, []);

  function closethenotification(event) {
    sessionStorage.removeItem("notification");
    setnotifydata(null);
    
    sessionStorage.setItem("notificationclose", "true");
  }

  return (
    <>
      {notifydata ? 
        <div className="notify">
          <p className="notify_p">{notifydata.notification}</p>
          <i
            onClick={closethenotification}
            class="fa-solid fa-xmark notify_cut"
          ></i>
        </div>
       : null}
    </>
  );
};

export default Notifications;
