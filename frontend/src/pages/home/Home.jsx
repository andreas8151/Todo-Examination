import "./home.css";
import AddFriendContainer from "./friends/FriendContainer";
import UploadContentContainer from "./UploadContentContainer/UploadContentContainer";

function Home() {
  return (
    <div className="homeContainer">
      {" "}
      <UploadContentContainer />
      <AddFriendContainer />
    </div>
  );
}
export default Home;
