import css from "./FriendListItem.module.css";

function FriendListItem({ name, avatar, isOnline }) {
  return (
    <>
      <img src={avatar} alt={name} width={70} />
      <p className={css.friendName}>{name}</p>
      <p className={isOnline ? css.isOnline : css.isOffline}>
        {isOnline ? "Online" : "Ofline"}
      </p>
    </>
  );
}

export default FriendListItem;
