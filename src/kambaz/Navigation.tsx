import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendar, IoCalendarOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function kambazNavigation() {
  return (
    <div id="wd-kambaz-navigation" style={{ width: 100, top: '0px' }}
      className="list-group rounded-0 position-fixed
         bottom-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.jpg" width="75px" /></a>
      <Link to="/kambaz/Account" id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-1 text text-white" />
        Account </Link><br />
      <Link to="/kambaz/Dashboard" id="wd-dashboard-link"
        className="list-group-item text-center border-0
                   bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" />
        Dashboard </Link><br />
      <Link to="/kambaz/Dashboard" id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" />
        Courses </Link><br />
      <Link to="/kambaz/Calendar" id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <IoCalendar className="fs-1 text-danger" />
        Calendar </Link><br />
      <Link to="/kambaz/Inbox" id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <FaInbox className="fs-1 text-danger" /><br />
        Inbox</Link><br />
      <Link to="/Labs" id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <IoSettingsOutline className="fs-1 text-danger" /><br />
        Labs</Link><br />
    </div>
  );
}