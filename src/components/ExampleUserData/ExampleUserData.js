// export const userData = {
//   username: "Daan",
//   profileImage:
//     "https://www.gravatar.com/avatar/1c6ee80bbce4be66fe2d6f46de6fc241",
// };

import React, { useState, useEffect } from "react";
import photo from "../../images/ui/no_photo/no_photo_s.svg";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

export const UserProfile = ({ email }) => {
  const isWideScreen = useMediaQuery({ minWidth: 768 });
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/user/${email}`);
        const userData = await response.json();

        // Sprawdź, czy użytkownik został znaleziony w bazie danych
        if (userData) {
          setUserData(userData);
        }
      } catch (error) {
        console.error("Błąd pobierania danych użytkownika:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [email]);

  const UserProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `;

  const defaultAvatarURL = photo;
  const defaultUsername = "Username";

  return (
    <div>
      {userData ? (
        <div>
          <img src={userData.avatarURL || defaultAvatarURL} alt="Avatar" />
          <p>{userData.name}</p>
        </div>
      ) : (
        <UserProfile>
          <img
            src={defaultAvatarURL}
            width={isWideScreen ? 44 : 34}
            height={isWideScreen ? 44 : 34}
            alt="Default Avatar"></img>
          <p>{defaultUsername}</p>
        </UserProfile>
      )}
    </div>
  );
};
