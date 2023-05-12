import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={"d3d37c5c-8832-473d-87c1-dc88823936ae"}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};
export default ChatsPage;
