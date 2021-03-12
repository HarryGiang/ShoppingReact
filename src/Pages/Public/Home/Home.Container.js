import React from "react";
import { useTranslation } from "react-i18next";

import { Typography } from "Components/UI-Library";
const { Text } = Typography;

const Home = () => {
  const { t } = useTranslation(["home"]);
  return (
    <div>
      <Text type="danger">{t("shop")}</Text>
    </div>
  );
};
export default Home;
