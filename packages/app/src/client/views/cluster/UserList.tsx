import React, { useCallback } from "react";
import { ListItemAvatar } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import { List, ButtonListItem, ListItemText } from "client/components/List";
import { Users, User } from "state/user/types";

export type UserListProps = {
  selectedUserIndex: number;
  users: Users;
  onSelect: (selectedOption: User) => void;
};

const avatarStyle = { width: 30, height: 30 };

const UserList = (props: UserListProps) => {
  const { selectedUserIndex, onSelect } = props;

  const renderItem = useCallback(
    ({ data, index }: { data: User; index: number }) => (
      <ButtonListItem
        selected={index === selectedUserIndex}
        onClick={() => onSelect(data)}
        key={data.email}
      >
        <ListItemAvatar>
          {data.avatar ? (
            <Avatar alt={data.username} style={avatarStyle} src={data.avatar} />
          ) : (
            <Avatar alt={data.username} style={avatarStyle}>
              {data.username.slice(0, 1).toUpperCase()}
            </Avatar>
          )}
        </ListItemAvatar>
        <ListItemText primary={data.email} />
      </ButtonListItem>
    ),
    [selectedUserIndex, onSelect]
  );

  return (
    <List renderItem={renderItem} items={props.users} itemSize={() => 40} />
  );
};

export default UserList;