import { useTranslation } from "react-i18next";

import styled from "@emotion/styled";
import PERSON from "content/person.json";

import { Avatar } from "components/atoms/Avatar";
import { Link } from "components/atoms/Link";
import { Name } from "components/atoms/Name";

import { Color } from "utils/color";

function Profile() {
  const { t } = useTranslation();

  return (
    <ProfileContainer
      href={PERSON.url}
      target="_blank"
      aria-labelledby="person-name"
    >
      <Avatar
        src={PERSON.avatar}
        alt={t("person.avatar")}
        data-color={Color.randomize(
          `${t("person.firstName") + " " + t("person.lastName")}`
        )}
      />
      <Name id="person-name">
        {t("person.firstName") + " " + t("person.lastName")}
      </Name>
    </ProfileContainer>
  );
}

export default Profile;

const ProfileContainer = styled(Link)`
  position: absolute;
  left: 32px;
  top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
